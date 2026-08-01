# Design Log

**Project:** CloudTech
**Started:** 2026-07-27
**Method:** Whiteport Design Studio (WDS)

---

## Backlog

> Business-value items. Add links to detail files if needed.

- [x] Complete product brief - Phase 1
- [x] Define trigger map - Phase 2 (complete: step-01..09f, 2026-08-02)
- [ ] Create user scenarios - Phase 3

---

## Current

| Task | Started | Agent |
|------|---------|-------|
| Phase 0: Project Setup | 2026-07-27 | facilitator - DONE |
| Phase 1: Project Brief | 2026-07-28 | Saga - DONE |
| Phase 2: Trigger Map | 2026-07-29 | Saga - DONE (2026-08-02, step-01..09f) |

**Rules:** Mark what you start. Complete it when done (move to Log). One task at a time per agent.

---

## Design Loop Status

> Per page design progress. Updated by agents at every design transition.

| Scenario | Step | Page | Status | Updated |

**Status values:** `discussed` -> `wireframed` -> `specified` -> `explored` -> `building` -> `built` -> `approved` | `removed`

---

## Log

### 2026-07-27 - Project initialized (Phase 0)
- Type: greenfield; Complexity: complex; Tech stack: React+Vite

### 2026-07-28 - Session 1 wrap-up
- Phase 0 complete; Lovable 集成模型确定; 双语写入 config
- Next: Phase 1 (Project Brief, Saga)

### 2026-07-28 - Phase 1 Product Brief complete
- 形态敲定: 单人游戏化云学习工具; 学习闭环+双层校验+6级课程+迁移叙事脊+ASCII美学+双语
- 产物: design-process/A-Product-Brief/01-product-brief.md

### 2026-07-29/30 - Phase 2 step-00b 业务目标敲定 (Session 3)
- 核心洞察: 三元组(IaaS/Ops) vs 课程(managed/SA) = 两条轨共存(非冲突)
- 角色分类(本质轴): Dev=战士 / Ops=圣骑士 / SA=法师阵法师=共享引擎; 参考 德鲁伊/三头龙
- B 认证=Cert-NO(自我提升, 非考证)
- C persona=1 Jaron + 2 子目标, 自由顺序玩两轨, 职业可扩展
- A: O1=新手入门=双轨通关; 过关=A3+B1+B3(a句法floor + b多参考匹配 + WA分阈值), c剔除; O2折进; O3产品
- MVP=2 职业(战士+圣骑士); 双轨课程提案(Phase 3-4 重设计); P1 三元组单实例新增(拉 v1.x IaaS 进 MVP)
- 过关条件备选库入 phase2-decisions §8; Phase 3-4 提醒入 project-memory §8
- 调研: BuilderCards 规则(胜利=最多WA点, 本次抓取核实) + 4 编程游戏官网(CodinGame/CheckiO/CodeCombat/Screeps, 本次抓取)
- 产物: project-memory.md(更新) + phase2-decisions.md(§8 备选库)
- Next: step-00c persona(Q1 情境/Q2 挫败恐惧 待答) -> 00d 驱动力

### 2026-07-30 - Phase 2 step-00c 完成 (Session 3 cont)
- Q1 答: 游戏化=抽象机制(复杂云->游戏概念->易接受); 否定 builder/player 时序二分.
- Q2 答: 核心=什么是合理云框架(AWS 服务=半成品, 须合理搭配); 恐惧=soundness 判断缺失; 对齐过关条件 A3+B1+B3.
- persona 形态 confirm: 1 Jaron + 2 子目标(Dev/战士 + Ops/圣骑士); 认证 Cert-NO.
- 00d 驱动力种子入 project-memory §10.
- Next: step-00d driving forces(正/负, 分 Dev/Ops 两组) -> 00e 优先级

### 2026-07-30 - Phase 2 step-00d 驱动力确认 (Session 3 cont)
- 轴A(游戏化定义=游戏逻辑↔云逻辑同步)确认为核心; 负向=游戏化质量风险(同步真假).
- 轴B 目的抽象记忆; 轴C 里程碑进度感; N1(复杂度)否决, N3/N4 并入 C.
- 多云 MVP scope = AWS+GCP+CF(扩 AWS-only); CF 无 IaaS 三元组 -> 圣骑士轨对 CF 缺位(Phase 3-4 重设计).
- 角色机制 defer Phase 3-4(分类本质轴已定; 选角/逐组件设计待 P3-4).
- 设计种子(§12): 逻辑同步/目的抽象(S3=金库领主,R2=自贸港主)/通关图谱映射/双轨里程碑/多云/角色机制defer.
- Next: step-00e 优先级(frequency/intensity/fit 评分)

### 2026-07-30 - Phase 2 step-00d 复查修订 (Session 3 cont)
- G1 改: 轴A负改用户侧(怕被误导学错合理判断)。
- G3 补: 角色负向(Dev 构建面偏狭/Ops 控制面偏狭); 双轨治偏狭。
- G4 补: 自主掌控力 + 混合职业可能(Phase 3-4)。
- G2 待讨论: 轴D 跨云类比理解 单列 vs 并入轴B。
- 力集 v3(project-memory §10)。Next: G2 决 -> 00e 优先级
- G2 决: 轴D 单列(动机=云无关可迁移); 核心设计挑战=可迁移云概念的游戏化(§12#10)。力集 v3 定稿。Next: 00e 优先级评分

### 2026-07-30 - 强约束 §13 加入: 游戏化不得过拟合
- 用户提强约束 + S3 过拟合反例(星界奥术青铜巨像守护者...)。
- §13 四项检测(映射单一性/修饰词预算/核心保留/可区分性)作红线, 优先于 §12 原则。
- 正例对照 §12#2(金库领主); Phase 3-4 每个 gamification 映射须过检测。
- 产物: project-memory §13 + §8#14 指针; resume-prompt must-read 增 §13。
- Next: 00e 优先级(不变)。

### 2026-07-30 - §13 补: 定量预算 + 正例映射校正
- 用户补完: 正例 S3/R2 只保留 3 核心映射(存储安全/传出流量费有无/API 兼容), 无多余奇幻层, 对齐战士/圣骑士简洁度。
- 新增定量预算: 每角色/服务映射只保留 1 职能标签 + 1 价格/行为差异; 禁三词以上魔幻头衔(详见 project-memory §13)。
- §13 正例 S3=金库领主(安全可靠,取物收传送税)/R2=自贸港主(免传送税,兼容金库口令)过四项检测+预算; 跨变体差异(API兼容)另计。
- wants↔fears 对称配对; 角色(G3)=内在二元 pattern(非 standalone fear)。完整 5+5(轴C/自主掌控)在 §10。
- §13: 无新 gamification 映射引入(引用的 S3/R2 §12#2 / 点亮 §12#13 / 守序 §12#14 均已过 §13)。
- 产物: 02-Jaron-the-Dual-Track-Apprentice.md(forces 节填充, 150 行)。
- Next: step-05 Prioritization。

### 2026-08-01 - Phase 2 step-05 Prioritization 完成 (Session 6, S mode)
- Workshop 4 用户确认; 退化排序(单 vision / O1>O3 O2折进 / 单 group Jaron)+ driver 排序挑战。
- 挑战1(轴D正>轴C正)确认: 轴D正 fit 被现实论证补强--(1)云厂商重大事故/产品与设想不一致;(2)康威/逆康威定律下可迁移(变形金刚)技术栈更控成本。轴C正属体验/动机层,轴D正属价值/风险层。排序不变。
- 挑战2(执行序先战士轨)确认: 顺序无关(§12#14)=守序达成认知(终态);先战士轨(00e feasibility)=MVP 执行序(过程),不同层面不矛盾。feasibility + 技术学习梯度双论证。维持 feasibility-first。
- MoSCoW focus statement 定稿: Must=轴A正+轴A负(§13红线); Should=轴B正+轴B负(对比记忆+图谱映射); Could=轴D正+轴D负(多云参考集+云无关抽象); 形=O3; 执行序=先战士轨跑通闭环->扩双轨+多云->双轨通关 MVP。
- 副产物: 用户提交云技术栈分类(战士/构建面+圣骑士/控制面)Saga 复查, 6 点偏差/超边界+守序术语漂移, 存 tech-stack-review-2026-08-01.md 作 Phase 3-4 课程重设计输入(project-memory §8#15)。
- 产物: project-memory(header/§4/§8#15/§10 step-05 确认+MoSCoW) + tech-stack-review-2026-08-01.md + 本条。
- Next: step-06a Feature Impact Workshop。

### 2026-08-01 - 轴C评级补全 + 评级表四维化 (a 闭合, Session 6 cont)
- step-05 复查遗留 a: 轴C正/负精确评级未记录。补全并四维化全部 6 组力评级。
- 四维: freq/intensity/fit(纯契合度) + 价值层级(三维持平时 tie-breaker, 非全局 override)。
- 评级: 轴A(H/H/Highest) > 轴B(H/H/H) > 轴D(M/M-H/M-H) > 轴C(M-H/M/H) > 角色(M/M/M-H) > 自主掌控(M-H/M-L/M-H)。
- 两处 tie-breaker: 轴D>轴C(长期价值/风险>体验/动机); 角色>自主掌控(认知涌现>元/方式)。轴B>轴D 三维主导, 价值层级不 override。
- fit 纯化修正: 轴C fit M-H->H(里程碑成型,原混价值权重低估); 轴A/B/D 不变。
- 复查发现: 三维下轴D≈轴C持平, "轴D>轴C"靠价值层级第4判据(step-05 挑战1 现实驱动力)维持。
- 产物: project-memory §10 排序行->完整四维评级表。a 闭合。

### 2026-08-01 - Phase 2 step-06d Feature Impact 完成 (S mode)
- 17 features 评分(High=5/Medium=3/Low=1): 6 Must/9 Consider/2 Defer。
- 6 Must: 双层校验引擎/多云参考架构集/双轨课程阶梯/拖拽组装/ASCII画布/云无关抽象+变体对比。
- 产物: B-Trigger-Map/06-Feature-Impact.md。
- Next: step-07 文档生成。

### 2026-08-01 - Phase 2 step-07a-c-f 文档生成完成 (S mode)
- 07a 00-trigger-map.md(hub: mermaid + Strategic Documents + MoSCoW Focus); 07b 01-Business-Goals.md 定稿; 07c 02-Jaron persona 定稿; 07f 05-Key-Insights.md。
- 产物: B-Trigger-Map/{00,01,02,05}-*.md + 06-Feature-Impact.md。
- Next: step-07g 质量检查/审核修复 + step-09 收尾(cross-ref互链/design-log回写)。

### 2026-08-01 - Phase 2 step-07g 审核修复完成 (S mode)
- 审核报告 15 项问题全部修复: H1-H7(硬错误) + S1-S3(结构矛盾) + M1-M5(次要)。
- H1: 各通关4关->双轨4关(W1+W2+P1+P2)全通关; H2: S3正例存物免费->安全可靠; H3: 9张->9类on-prem starter+源矛盾标注(正文10/明细11); H4: 91 AWS服务牌->91张Builder牌约36个AWS服务; H5: 待step-07f消除+hub加05链接; H6: 4进度文件状态同步; H7: W1移出entry标on-ramp。
- S1: MoSCoW顶层支配声明+轴D标Could后扩+First Deliverable AWS先行; S2: #14/#15/#18约束折叠到宿主feature(20->17); S3: 力集口径统一6轴:5共享+角色双视角展开7正+7负。
- M1: brief p6改逐字原文+02/pm加压缩标注; M2: mermaid 5节点<br/>-><br/><br/>; M3: top5子集->top5(3wants+2fears)+轴D负(第6配对推导); M4: 05 Must:->(MoSCoW)Design requirements; M5: 文件名->06-Feature-Impact.md+8引用同步。
- PDF验证: p6页码确认(discuss句在PAGE 6); on-prem源矛盾确认(正文10/明细11); 91 Builder cards+36服务确认。
- Next: step-09 收尾。

### 2026-08-02 - Phase 2 Trigger Map COMPLETE (step-09a-f 收尾, S mode)

**Agent:** Saga (Trigger Mapping)
**Persona:** 1 (Jaron - 双轨学徒, PRIMARY)
**Business Goals:** 2 (O1 双轨合理架构掌握=THE ENGINE + O3 可用学习工具形态; O2 折进 O1; TERTIARY N/A)

**Artifacts:**
- B-Trigger-Map/00-trigger-map.md - hub (mermaid + MoSCoW focus + transformation/flywheel)
- B-Trigger-Map/00-trigger-map.svg - mermaid 实渲染存档 (mmdc, 补 08h 空验)
- B-Trigger-Map/01-Business-Goals.md - vision + SMART objectives
- B-Trigger-Map/02-Jaron-the-Dual-Track-Apprentice.md - PRIMARY persona (6 forces: 3 wants+3 fears, 各 Promise/Answer)
- B-Trigger-Map/05-Key-Insights.md - strategic implications + design implications
- B-Trigger-Map/06-Feature-Impact.md - 17 features (Must6/Consider9/Defer2)
- _progress/validate-mermaid.js - mermaid 渲染验证脚本 (补 step-08h 空验)
- _progress/mermaid-render-verify-2026-08-01.md - 渲染验证报告 (PASS)

**step-09 收尾:**
- 09a Gate: 5 文档齐全 + mermaid 块存在
- 09b 交叉引用: 5 文档全连通矩阵 + hub L109 SVG 链接
- mermaid 实渲染补强: 发现 08h/07g 仅目测源码从不真渲染 (设计盲区); mmdc 11.16 实渲染 hub mermaid->SVG, 解析确认 0 syntax error / flowchart-v2 / 10 classDef 色全应用 / 9 foreignObject; 脚本化 (validate-mermaid.js) 纳入 09c 门禁; 复查修 3 问题 (前瞻文案/正则过宽/冗余) 重跑 PASS
- 09c 质量检查: 13 维 PASS
- 09d handover: Primary Focus/Must Address(3+)/Must Avoid(3-)/Feature top3/Design Implications 3/§13 红线 -> Phase 3 Freya

**Summary:** 单 persona Jaron 双轨学徒; 核心力轴A (游戏化定义=游戏逻辑↔云逻辑同步) 双层校验 A3+B1+B3; MoSCoW Must=轴A正+负 (§13 过拟合红线); 6 Must features 定设计优先级; mermaid 实渲染验证补流程盲区 (08h 空验->mmdc 实渲染).

**Next:** Phase 3 - UX Scenarios (Freya), 基于 6 Must features 先设计; §13 红线 + 双语 + ASCII + Lovable 栈约束.

### 2026-08-02 - design-log 重建 (事故恢复)

> 原 design-log 在 step-09e 修复空行时被清空(0 bytes): `-replace` 运算符替换串写成多段拼接致 InvalidOperation, `$t2` 赋空, 随后 `WriteAllText($f,$t2)` 将 `$null` 当空串写入。git 为空仓库(无 commit/stash/index)无法恢复。本文件从(a)会话开头完整读取(191 行, §13 补条目中间约 3766 chars truncated) + (b)project-memory §5/§10/§13 重建。§13 补条目中间段(定量预算/正例校正细则)为等价重建非逐字; step-00e/00f 决策存 project-memory §10 原 design-log 无单独条目。Backlog/Current 已反映 Phase 2 complete。
> 教训: PowerShell `-replace` 替换串须预计算为单变量(避免运算符解析多元素); `WriteAllText` 前须判空(`if ($t2)`)。

---

## About This Folder

- **This file** - Single source of truth for project progress
- **agent-experiences/** - Compressed insights from design discussions (dated files)
- **wds-project-outline.yaml** - Project configuration from Phase 0 setup (勿改)
- **project-memory.md** - Consolidated project memory + open questions (session handoff)
- **phase2-decisions.md** - Phase 2 决策详细 + 过关条件备选库
- **resume-prompt.md** - Prompt to resume in a fresh context