# Trigger Map Generation Log - Suggest Mode

**Project:** CloudTech
**Date:** 2026-07-31
**Mode:** Suggest (S)
**Agent:** Saga (Analyst)
**Step:** step-01 (Trigger Mapping Overview) -> Layer 1 + Layer 2 setup

> 路径来自 step-01-overview S/D 分支。框架内部 docs/method、src/data、docs/quick-start 路径在本项目不存在；改用已装 WDS 模块数据 (_bmad/wds/data/agent-guides/saga/trigger-mapping.md) + 技能 data/templates。WebSearch(Layer 3) 受沙箱限；改用项目既有调研存档 (C:\tmp: buildercards/newsd/wechat-article) + 已合成内容。

---

## Layer 1: WDS Form Learned

**结构（左->右）**：Business Goals(Vision+SMART, 3x3) -> Product/Solution(hub) -> Target Groups(prioritized personas) -> Driving Forces(positive ✅ + negative ❌) -> Prioritization(freq x intensity x fit, /15) -> Mermaid(flowchart LR: BG->PLATFORM->TG->DF)。

**质量基线（quality-checklist）**：
- 文件集：00-trigger-map(hub) / 01-Business-Goals / 02-04 personas / 05-Key-Insights / 06-Feature-Impact。
- persona 文档：13 节，6 驱动力（3 wants + 3 fears），每条带 Product Promise/Answer。
- business-goals 文档：3 层（PRIMARY ⭐ THE ENGINE / SECONDARY 🚀 / TERTIARY 🌟）+ flywheel + success metrics。
- mermaid：5 class(primaryGoal/businessGoal/platform/targetGroup/drivingForces)，✅/❌ emoji，每 persona 恰 3 driver。

**常见错误**：群体过多(>4)、persona 浅、只有正向力、把 solution 画进 map、目标空泛。

**CloudTech 模板适配要点（非商业单用户学习工具，模板默认社区/SaaS 语言）**：
1. "flywheel/champions/members/community" 模板语言 ≠ CloudTech(personal/hobby, 无社区/营收)。替换为学习闭环 + 双轨语言。
2. 3 层目标：CloudTech O1(双轨通关=THE ENGINE)/O2(折进 O1, 共享 WA 引擎)/O3(产品形态)。映射 O1=PRIMARY, O3=secondary(form), O2=shared-mechanism 注记。非经典 3 层 flywheel。
3. Target groups：1 persona(Jaron) + 2 子目标(战士 serverless + 圣骑士 IaaS)，非 3-4 群体。Primary persona=Jaron，双轨作 sub-profile。
4. 驱动力：7正+7负(轴A合理框架判断[core]/轴B目的抽象记忆/轴C里程碑/轴D跨云类比 + 自主掌控 + 角色正负)，top5=轴A正/负+轴B正/负+轴D正。persona 文档要 3 wants+3 fears=从优先级取 top。

---

## Layer 2: Project Context (Initial, from brief - 00f 回写版)

> brief_level=complete：content-language/platform-requirements/visual-direction 折进 brief，无独立文件。

**Business context**：单人游戏化云学习工具，双重目的(构建中自学+打磨成工具)，BuilderCards 内核(组合->模式->讨论验证)单人数字化，多云(AWS+GCP+CF)。

**User archetypes**：Jaron(primary, 三位一体, MVP 唯一用户)，2 子目标(战士=Dev/serverless + 圣骑士=Ops/IaaS)，自由顺序两轨通关，Cert-NO(自我提升非考证)。

**Constraints**：MVP 无运行时 AI(A3+B1+B3 确定性图匹配)；离线纯前端 TS；ASCII concrete-poetry + 暗色终端 chrome；双语(EN 术语固定+CN 概念锚=对比记忆)；Lovable 栈(React+Vite+TS+Tailwind+shadcn+Supabase)；§15 过拟合红线(四项检测+定量预算)。

**Strategic direction**：O1 双轨通关 MVP(4 关 W1+W2+P1+P2, P1 硬必需)；过关 A3(a句法floor)+B1(b多参考匹配)+B3(WA分阈值), c剔除；多云=可迁移云概念游戏化(厂商差异作变体 S3/R2/GCS)；双轨治视角偏狭；CF 无 IaaS 三元组=圣骑士轨缺位=教学资产(非缺陷)。

**Cumulative（随 step 生长）**：+ Business Goals(step-02) / Target Groups(step-03) / Driving Forces(step-04) / Prioritization(step-05) 生成时追加。

---

## 待决（带入相应 step）

- M2 feature-impact(step-06)：greenfield 无既有 features，决(MVP 课程关卡作 features / defer Phase 3-4 / 跳)。
- 模板适配(上 Layer 1 四点)在各 step 生成时落地，Layer 5 self-review 核对。
- §15 过拟合红线：每个 gamification 映射(角色/机制)入 persona/key-insights 前过四项检测+预算。

---

## Step 进度

- [x] step-01 overview (S mode, Layer 1+2) - 本文件
- [x] step-02 Business Goals (Layer 3-5, S 审) - DONE: 01-Business-Goals.md (2 obj O1 PRIMARY/O3 SECONDARY, O2 折进, TERTIARY N/A, T=点亮科技树执行序); §14#13 点亮科技树 seed(过§15)
- [x] step-03 Target Groups / persona - DONE: Flag A i(1 persona Jaron 双轨学徒, 豁免 2-4) + Flag B i(全适配: triangle->内在二元/flywheel->学习闭环/visual->ASCII glyph/drop N/A 社区章, doc~150-200行) + §14#14 [守序]阵营(过§15) + Background 删中文云学习者误标(对比记忆归 forces 轴B/D + O3). draft persona doc 02-Jaron-the-Dual-Track-Apprentice.md 已写(narrative+Flag B 适配结构, ~122行, forces DRAFT 待 step-04 补+定稿 step-07); tracker sync(design-log/resume-prompt/pm §4§10L4 -> step-03 done/step-04 next); §14#13 回指 §14#14
- [x] step-04 Driving Forces - DONE: 02-Jaron forces 填充(top3 wants 轴A正/B正/D正 + top3 fears 轴A负/B负/轴D负, 各带 Promise/Answer; 第3 fear=轴D负 三重论证 ranking/配对/MVP-active; wants↔fears 对称; 角色 G3=内在二元 pattern 非 standalone fear; 5+5全量轴C/自主掌控在 §12; §15 无新映射引入, 引用项 S3/R2§14#2/点亮§14#13/守序§14#14 均已过; doc 150行 LF-only; tracker sync design-log/pm§4/resume-prompt -> step-05 next)
- [ ] step-05 Prioritization
- [ ] step-06 Feature Impact (M2 决策)
- [ ] step-07 生成 hub/business-goals/persona/key-insights
- [ ] step-08 mermaid
- [ ] step-09 收尾(交付包+design log)