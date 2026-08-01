# Feature Impact Analysis: CloudTech

> Phase 2 Trigger Map | Step 06d
> 生成日期: 2026-08-01
> Agent: Saga (WDS Analyst)
> 方法论: WDS v6

## 评分

**Primary Persona (⭐):** Jaron - 双轨学徒（战士轨/Dev 构建面 + 圣骑士轨/Ops 控制面）

**评分:** High = 5 分 | Medium = 3 分 | Low = 1 分

**最高分:** 5（单 persona）
**Must Have 阈值:** Primary High（5 分）

> 单 persona 项目（Jaron + 2 子目标）。无 secondary/tertiary persona。双子目标（战士/圣骑士）作为评估理由视角，不单独计分。评估依据=step-04/05 定稿 6 轴力集（wants/fears）+ 四维评级 + MoSCoW focus。
> **层级声明（step-07g 审核 S1）:** MoSCoW 力优先级(step-05)为顶层支配; FI Must=承载力 Must/Should 力轴+显式依赖; 轴D部分受 Could 支配(MVP AWS 先行, GCP/CF 后扩)。
> **约束折叠（step-07g 审核 S2）:** 离线/双语/chrome 非独立能力，已折叠（#1 含离线; #5 含 chrome; #6 含双语），不单列计分。feature 数 20->17。

---

## 优先级 Features

| Rank | Feature | 关联力轴 | Score | Decision |
| ---- | ------- | ------- | ----- | -------- |
| 1 | 双层校验引擎（A3 句法 floor + B1 多参考语义 + B3 WA 分阈值） | 轴A正+负 (Must, Highest) | 5 | Must Have |
| 2 | 多云参考架构集（B1 多参考 + B3 constraints，跨三云策展） | 轴A正(依赖) + 轴D正(Could,后扩) | 5 | Must Have |
| 3 | 双轨课程阶梯（战士 W1+W2 / 圣骑士 P1+P2，MVP 4 关） | 轴A正 + 角色（治偏狭）+ O1 | 5 | Must Have |
| 4 | 拖拽组装云架构栈（drag-assemble + 点选连边 + 字符网格） | 轴A正（组合->模式判断载体） | 5 | Must Have |
| 5 | ASCII concrete-poetry 画布（形式即内容，等宽字符网格） | 轴B正（形式即内容视觉承载, H/H/H） | 5 | Must Have |
| 6 | 云无关抽象 + 厂商变体对比（对比记忆 EN+CN 锚） | 轴B正(Should) + 轴D正/负(Could,后扩) | 5 | Must Have |
| 7 | 分阶段解锁云资源配额 | 轴C正 + 自主掌控 | 3 | Consider |
| 8 | 经验值 XP 进阶（= WA 点） | 轴C正 + 间接轴A正 | 3 | Consider |
| 9 | 多云服务牌池（AWS+GCP+CF + 9 类 on-prem starter） | 轴D正 + 间接轴A | 3 | Consider |
| 10 | 迁移叙事脊 + 退役转职（on-prem 形变为云服务） | 轴B正 + 轴C正 | 3 | Consider |
| 11 | 栈合格结晶/形变（过校验 ASCII 收敛） | 轴A正（视觉反馈层） | 3 | Consider |
| 12 | 垂直迁移轴 + 迁移地平线（画布空间系统） | 轴B/轴C | 3 | Consider |
| 13 | 角色系统 + 选角（战士/圣骑士 + 法师引擎；皮肤+切片） | 角色力 + 自主掌控 | 3 | Consider |
| 16 | 点亮科技树（里程碑/职业解锁可视化） | 轴C正 | 3 | Consider |
| 17 | [守序] 阵营（双轨通关认知升维） | 角色力 + 轴C正 | 3 | Consider |
| 19 | C1 优化 bonus（最少卡/成本/边，可选非 gate） | 轴A正延伸 | 1 | Defer |
| 20 | v2 开放 LLM Q&A + LLM 验证 | deferred to v2 | 1 | Defer |

---

## Decisions

**Must Have MVP（Primary High = 5，6 个）:**

- 双层校验引擎（5）- A3+B1+B3=何为合理云架构的可操作答案；轴A正+负同时解决
- 多云参考架构集（5）- 校验引擎 b 层内容载体（B1 多参考+B3 constraints）；无此校验无对象
- 双轨课程阶梯（5）- O1 双轨通关核心内容；两轨 entry bar 判断练习+双轨治偏狭
- 拖拽组装云架构栈（5）- "组合->模式->验证"内核交互载体；无此产品不成立
- ASCII concrete-poetry 画布（5）- O3 核心差异化+轴B正形式即内容视觉承载
- 云无关抽象+厂商变体对比（5）- 对比记忆核心机制；轴B正 want+轴D负 fear 同解

**Consider for MVP（Medium = 3，9 个）:**

- 分阶段解锁云资源配额（3）- 进阶骨架，服务轴C正里程碑+自主掌控
- 经验值 XP 进阶（3）- 进阶货币，轴C正进度量化+WA 分耦合轴A正
- 多云服务牌池（3）- 组装素材+轴D正多云变体；间接轴A
- 迁移叙事脊+退役转职（3）- 形式即内容承载迁移概念+轴C正进度
- 栈合格结晶/形变（3）- 轴A正校验通过视觉反馈层
- 垂直迁移轴+迁移地平线（3）- 画布空间隐喻系统
- 角色系统+选角（3）- 角色力治偏狭+自主掌控选角
- 点亮科技树（3）- 轴C正里程碑解锁可视化
- [守序] 阵营（3）- 角色力认知升维+轴C正双轨 milestone

**Defer（Low = 1，2 个）:**

- C1 优化 bonus（1）- 可选非 gate，轴A正延伸
- v2 开放 LLM Q&A+验证（1）- deferred to v2，MVP 不实装

---

## Feature Details & Rationale

### Must Have（6）

**1. 双层校验引擎（Score: 5）**
- 直接=轴A正（合理框架判断=A3+B1+B3 可操作答案）+ 轴A负（§15 红线防误导学错）
- A3 句法 floor（牌面 1:1 组合效应，局部 required edge，确定性自动）+ B1 多参考语义匹配（图模式匹配合法参考之一，容许多解）+ B3 WA 分阈值（constraints 打分=BuilderCards WA 点胜利落地）
- Highest 级力轴（freq H / intensity H / fit Highest）。核心 want + 核心 fear 同时解决
- 战士轨：校验 serverless 模式集；圣骑士轨：校验 IaaS 模式集。两轨共用同一引擎
- 无此则 O1（双轨通关）失效、BuilderCards"讨论验证架构"内核丢失、单人版无法补回"何为合理"
- 约束（S2折叠）：离线纯前端 TS（确定性公平）+ 零后端零 API 成本

**2. 多云参考架构集（Score: 5）**
- 校验引擎 b 层（B1 多参考 + B3 constraints）的内容载体
- MVP AWS 单云先行策展合法参考架构; GCP/CF 后扩(轴D Could)（nodes + edges + constraints + WA 支柱）
- 无此则校验引擎无对象（#1 依赖此）
- 兼服务轴D正（多云参考集=跨云可迁移的素材）
- spec（schema/WA 支柱/权重/阈值/多参考集/逐牌规则）= Phase 3-4

**3. 双轨课程阶梯（Score: 5）**
- O1（双轨通关=MVP PRIMARY 目标）核心内容
- 战士轨 W1 静态站 + W2 serverless（entry=serverless 端到端交付）；圣骑士轨 P1 三元组单实例 + P2 容器（entry=三元组 IaaS 控制面）
- 两轨各有 entry bar 合理框架判断练习（轴A正）+ 双轨治偏狭（角色力：战士怕构建面偏狭忽视可靠性/成本，圣骑士怕控制面偏狭过度防御）
- P1 三元组=MVP 硬必需（砍则圣骑士轨无内容、双轨坍缩、O1 失效）
- first-pass 提案，Phase 3-4 从 entry bar 重设计

**4. 拖拽组装云架构栈（Score: 5）**
- "组合 -> 模式 -> 验证" BuilderCards 内核的数字化交互载体
- 拖拽服务牌组装栈 + 点选连边 + 画布字符网格交互
- 直接承载轴A正（组装栈练习"什么是合理云架构"判断）
- 无此产品不成立（核心交互模型）

**5. ASCII concrete-poetry 画布（Score: 5）**
- O3 核心差异化（形式即内容，等宽字符网格，形状=架构，参照 Herbert Easter Wings 1633）
- 轴B正（目的抽象记忆的视觉承载机制，Should 级 H/H/H）
- 形式即内容=对比记忆（轴B）+ 多云变体对比（轴D）的视觉承载
- MoSCoW focus "形=O3"（ASCII 形式即内容+终端 chrome+离线+双语+Lovable 栈）
- 约束（S2折叠）：暗色终端 chrome（#0a0e1a+等宽+EVA 红）+ 双语描述侧栏

**6. 云无关抽象 + 厂商变体对比（Score: 5）**
- 对比记忆机制核心：抽象云无关概念（egress/对象存储/CDN/serverless），厂商差异作变体（S3/R2/GCS）
- 直接解决轴B正（want=目的抽象记忆，EN 术语固定 + CN 概念锚）+ 轴D负（fear=怕厂商 lock-in/三云记混，变体对比解恐惧）
- 正例（过 §15）：S3=金库领主（安全可靠，取物收传送税）；R2=自贸港主（免传送税，兼容金库口令）
- 约束（S2折叠）：双语 zh/en（对比记忆语言锚 EN+CN+UI 切换）

### Consider for MVP（9）

**7. 分阶段解锁云资源配额（3）** - 进阶骨架。每阶段解锁不同规模/类别云资源。服务轴C正（里程碑进度感 M-H/M/H）+ 自主掌控（自由选路径）。非 driving force 核心直接解决，但提供渐进难度判断练习场景（间接轴A正）。

**8. 经验值 XP 进阶（3）** - 进阶货币（= BuilderCards WA 点，B3 落地）。过校验得 XP 达阈值进阶。服务轴C正（进度量化）+ 轴A正耦合路径 β（WA 分量化=通关⏩技术提升）。

**9. 多云服务牌池（3）** - AWS+GCP+CF 服务牌 + 9 类 on-prem starter。组装素材（间接轴A正）+ 轴D正（多云变体对比素材）。on-prem starter 服务迁移叙事脊。无牌池拖拽组装无对象，但 driving force 直接关联分散多轴。

**10. 迁移叙事脊 + 退役转职（3）** - on-prem 牌 ASCII 形变为云服务（体修->法修 metamorphosis）。形式即内容承载迁移概念（轴B正）+ 退役=进度里程碑（轴C正）。brief 明确进 MVP。精确 per-track 映射=Phase 3-4。

**11. 栈合格结晶/形变（3）** - 栈过校验时 ASCII 向参考架构规范形状收敛（散置->有序=未成熟->合格）。轴A正校验通过的视觉反馈层。机制采纳，确切交互（自动收敛/用户摆位/混合）Phase 3-4 Lovable render loop 验。

**12. 垂直迁移轴 + 迁移地平线（3）** - 画布空间系统（上方=云上升，下方=on-prem 沉降，中间迁移地平线，位置=迁移态）。整体风格钩子常驻。间接服务轴B/轴C（空间隐喻承载迁移+进度）。

**13. 角色系统 + 选角（3）** - 战士（Dev 速度/迭代）+ 圣骑士（Ops 守护/可用性）可玩；法师/阵法师=共享组装引擎（非可玩）。选角=皮肤+切片。服务角色力（双轨治偏狭 M/M/M-H）+ 自主掌控（选角 M-H/M-L/M-H）。落地 Phase 3-4。

**16. 点亮科技树（3）** - 每完成一轨点亮对应职业节点（里程碑/职业解锁可视化，§14#13）。服务轴C正（里程碑进度感）。区别选角（点亮=完成解锁 achievement vs 选角=游玩选择）。MVP 轻量可行。

**17. [守序] 阵营（3）** - 双轨通关解锁 lawful alignment（认知升维：既懂自由构建面又驾驭契约控制面，§14#14）。服务角色力（治偏狭认知产出命名）+ 轴C正（双轨 milestone）。MVP 落地零风险（local Profile state + 守序标签+天平 glyph）。

### Defer（2）

**19. C1 优化 bonus（1）** - 最少卡/最低成本/最少边。可选非 gate。轴A正延伸（优化=更合理判断）但非核心 driving force 直接解决。后期可切 D1 分数制或加 histogram。

**20. v2 开放 LLM Q&A + LLM 验证（1）** - deferred to v2。需 Supabase Edge Function 后端代理。MVP 不实装（确定性校验优先）。服务轴A正（更灵活判断）但 v2 路线图。

---

## Strategic Implications

1. **轴A 正/负 = 产品脊梁**：6 个 Must Have 中 4 个直接服务轴A正/负（校验引擎、参考架构集、双轨课程、拖拽组装）。MoSCoW Must（轴A正+负）在 feature 级别验证一致。MVP 首先跑通轴A闭环：拖拽组装 -> 双层校验（A3+B1+B3）-> 双轨课程两轨各 2 关。

2. **轴B 正 = 形式即内容双载体**：ASCII 画布（视觉承载）+ 对比记忆（概念承载）共同服务轴B正（Should H/H/H）。两者互赖：画布是对比记忆的视觉层，对比记忆是画布的语义层。Phase 4 需验证 ASCII 形式如何承载 EN/CN 对比。

3. **Consider 层=游戏化+进阶+叙事**：9 个 MEDIUM 分两类--(a) 进阶系统（分阶段解锁/XP/点亮科技树/守序阵营，轴C+角色）；(b) 叙事/视觉+素材（迁移叙事脊/栈结晶/垂直迁移轴/牌池/角色系统，轴B/轴C/O3）。约束类（离线/双语/终端 chrome）已折叠为宿主 feature 属性（#1/#5/#6），不单列。MVP 优先级：先跑通轴A闭环，再补进阶系统骨架，最后叙事/视觉打磨。

4. **Defer 层清晰**：C1 bonus（可选优化）+ v2 LLM（路线图）。MVP 不投入。后期 re-decide 看 B3 必要性（取决于参考架构 schema 是否编码 WA 支柱）。

5. **Phase 3-4 集中待决项**：参考架构 spec（schema/WA 支柱/权重/阈值/多参考集/逐牌规则）、双轨课程 entry bar 重设计、栈结晶确切交互（Lovable render loop）、选角/逐组件角色设计、退役 per-track 映射、CF 缺位双轨课程按云能力画像重设计。

---

## Questions for Designer (Phase 3-4 Freya/Lovable)

1. **拖拽 x 字符网格 x 响应式**：ASCII 等宽字符网格 + 拖拽组装在桌面 web 的精确指针交互如何实现？移动端双宽中文字符网格是已知风险，Phase 4 Lovable render loop 优先验此。

2. **ASCII 形变动效**：退役转职（on-prem->cloud 形变）+ 栈结晶（散置->有序收敛）的形变动效如何在等宽字符网格中实现？自动收敛 vs 用户摆位 vs 混合，哪个 UX 更优？

3. **form=content 交互模式**：画布形式即内容系统（垂直迁移轴+迁移地平线+位置=迁移态）如何与拖拽组装共存？空间隐喻是否干扰组装操作？

4. **双语侧栏 vs 画布冲突**：双语描述侧栏如何避开 ASCII 字符网格对齐？侧栏位置/切换交互？

5. **CF 缺位双轨课程**：CF 无 IaaS 控制面三元组（纯 serverless/edge+R2），圣骑士轨对 CF 缺位=教学资产。双轨课程按云能力画像重设计（AWS/GCP 双轨全；CF 偏战士轨），具体关卡设计？

6. **校验反馈 UX**：A3 句法 floor（a 不算分只挡）+ B1 多参考匹配 + B3 WA 分阈值的校验反馈如何分层呈现？失败时提示粒度（逐牌 1:1 效果 vs 全局图匹配）？

---

## Related Documents

- **[00-trigger-map.md](00-trigger-map.md)** - Visual overview and navigation
- **[01-Business-Goals.md](01-Business-Goals.md)** - Objectives and metrics
- **[02-Jaron-the-Dual-Track-Apprentice.md](02-Jaron-the-Dual-Track-Apprentice.md)** - Primary persona
- **[05-Key-Insights.md](05-Key-Insights.md)** - Strategic implications

---

_Back to [Trigger Map](00-trigger-map.md)_

_Generated with Whiteport Design Studio (WDS v6) - Saga (WDS Analyst)_
_Phase 2 Trigger Map step-06d (2026-08-01)_
_Document language: Chinese_
_Strategic input for Phase 3: UX Scenarios, Phase 4: UX Design (Lovable render loop), Phase 6/PRD_
