'use strict';
// validate-mermaid.js - WDS mermaid 渲染验证 (补 step-08h 空验: 流程内只目测源码, 从不真渲染)
// 用法: node validate-mermaid.js <hub.md> <out.svg> [report.md]
// 抽 mermaid 块 -> mmdc 渲染 -> 解析 SVG (语法/flowchart/classDef颜色/节点) -> 报告 + exit code

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawnSync } = require('node:child_process');

const args = process.argv.slice(2);
if (args.length < 2) {
  process.stderr.write('Usage: node validate-mermaid.js <hub.md> <out.svg> [report.md]\n');
  process.exit(1);
}
const input = path.resolve(args[0]);
const svgOut = path.resolve(args[1]);
const reportPath = args[2] ? path.resolve(args[2]) : null;

if (!fs.existsSync(input)) { process.stderr.write(`Input not found: ${input}\n`); process.exit(1); }

const md = fs.readFileSync(input, 'utf8');
const m = md.match(/```mermaid\r?\n([\s\S]*?)```/);
if (!m) { process.stderr.write(`No mermaid code block in ${input}\n`); process.exit(1); }
const code = m[1];
const lines = code.split('\n');

// 期望颜色: 从 classDef 行提取所有 #hex
const expectedColors = new Set();
for (const line of lines) {
  if (line.trim().startsWith('classDef ')) {
    const hexes = line.match(/#[0-9a-fA-F]{3,6}/g);
    if (hexes) hexes.forEach(c => expectedColors.add(c.toLowerCase()));
  }
}

// 写临时 .mmd
const tmpMmd = path.join(os.tmpdir(), `wds-mermaid-${Date.now()}.mmd`);
fs.writeFileSync(tmpMmd, code);

// mmdc 渲染 (shell:true 让 Windows 找到 npx.cmd)
const res = spawnSync('npx', ['--no-install', '@mermaid-js/mermaid-cli', '-i', tmpMmd, '-o', svgOut], {
  shell: true, encoding: 'utf8', timeout: 120000,
});

let svg = '';
const svgExists = fs.existsSync(svgOut);
if (svgExists) svg = fs.readFileSync(svgOut, 'utf8');
try { fs.unlinkSync(tmpMmd); } catch {}

// 解析 SVG
const errMatches = svg.match(/(syntax error|parse error|error in (?:line|graph|diagram))/gi) || [];
const isFlowchart = /aria-roledescription="flowchart-v2"|class="flowchart"/.test(svg);
const viewBox = (svg.match(/viewBox="([\d.\s]+)"/) || [,''])[1];
const foreignObject = (svg.match(/<foreignObject/g) || []).length;
const rectCount = (svg.match(/<rect\b/g) || []).length;
const pathCount = (svg.match(/<path\b/g) || []).length;

const colorResults = [...expectedColors].sort().map(c => ({
  color: c,
  count: (svg.match(new RegExp(c, 'gi')) || []).length,
}));
const allColorsPresent = colorResults.every(c => c.count > 0);

const pass = res.status === 0 && svgExists && errMatches.length === 0 && isFlowchart && allColorsPresent && foreignObject > 0;

const rpt = [];
rpt.push('# Mermaid 渲染验证报告');
rpt.push('');
rpt.push(`- 输入: \`${input}\``);
rpt.push(`- SVG 输出: \`${svgOut}\``);
rpt.push(`- 生成时间: ${new Date().toISOString()}`);
rpt.push(`- 工具: @mermaid-js/mermaid-cli (mmdc)`);
rpt.push('');
rpt.push('## 渲染');
rpt.push(`- mermaid 块: ${code.length} chars / ${lines.length} lines`);
rpt.push(`- mmdc exit: ${res.status}`);
rpt.push(`- SVG: ${svgExists ? svg.length + ' bytes' : 'NOT GENERATED'}`);
if (res.stderr && res.stderr.trim()) rpt.push(`- stderr: ${res.stderr.trim().slice(0, 500)}`);
rpt.push('');
rpt.push('## 验证');
rpt.push('| 检查 | 结果 |');
rpt.push('|------|------|');
rpt.push(`| syntax/parse error | ${errMatches.length} 匹配 |`);
rpt.push(`| flowchart 结构 | ${isFlowchart ? 'OK (flowchart-v2)' : 'MISSING'} |`);
rpt.push(`| viewBox | ${viewBox || 'N/A'} |`);
rpt.push(`| foreignObject (HTML 节点) | ${foreignObject} |`);
rpt.push(`| rect | ${rectCount} |`);
rpt.push(`| path (连线) | ${pathCount} |`);
rpt.push('');
rpt.push('## classDef 颜色应用');
rpt.push('| 颜色 | 期望 | SVG 出现次数 |');
rpt.push('|------|------|--------------|');
for (const c of colorResults) rpt.push(`| ${c.color} | 1+ | ${c.count} |`);
rpt.push('');
rpt.push(`## 结论: ${pass ? '**PASS**' : '**FAIL**'}`);
rpt.push('');
rpt.push('_补 step-08h: 流程内 mermaid quality check 只目测源码, 从不真渲染; 本脚本用 mmdc 实渲染验证。_');
rpt.push('');

const out = rpt.join('\n');
if (reportPath) fs.writeFileSync(reportPath, out, 'utf8');
console.log(out);
process.exit(pass ? 0 : 1);
