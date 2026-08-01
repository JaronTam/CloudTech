# Project Brief: CloudTech

> 完整战略基础 (Complete Strategic Foundation)

**Created:** 2026-07-28
**Author:** Jaron
**Brief Type:** Complete
**Phase:** 1 - Product Brief
**Agent:** Saga (WDS Analyst)
**Methodology:** WDS v6

---

> ✅ **Phase 2 回写（step-00f, 2026-07-31）**：正文已对齐 Phase 2 决策--scope 多云（AWS+GCP+CF）/ 课程双轨（战士 serverless + 圣骑士 IaaS）/ 过关 A3+B1+B3（c 剔除）/ 退役双轨重排 / 受众=语言 anchor（非客户细分）。决策详情见 `design-process/_progress/project-memory.md` §5/§8/§14/§15 + `phase2-decisions.md`。Phase 3-4 待决项见 project-memory §8。

## Vision

CloudTech 是一个单人游戏化云学习工具（数字/web 形态），参照 AWS BuilderCards（deckbuilding 桌游）的机制内核：deploy 服务牌 -> 组合 -> 抢 Well-Architected 点。将其改造成单人闯关--分阶段解锁云资源配额，拖拽组装成"合格"的云架构栈，过双层校验得经验值进阶。

双重目的：(1) 在构建过程中自学云计算；(2) 打磨成可用的云计算学习工具。

学习内核源自 BuilderCards 规则页 6 原文："If you know AWS well, discuss with the other players if your architecture is valid. If you are learning AWS or are in doubt, if an architecture is valid, stick to the effects that are written on the cards."--专家讨论验证架构 + 牌面文本兜底。单人版砍掉"专家讨论"通道，由双层校验引擎（A3 句法 floor + B1 多参考语义匹配 + B3 WA 分阈值）补回"何为合理云架构"的可操作判断；开放 LLM Q&A + LLM 验证留 v2。

---

## Positioning Statement

CloudTech 是一个把云架构组装做成单人闯关的游戏化学习工具：学习者从牌面组合（句法）到参考架构（语义）两层掌握 well-architected 模式，ASCII concrete-poetry 画布让"形式即内容"贯穿始终。中文为产品语言而非受众划分（对比记忆机制的语言锚，见 ICP）。

**Breakdown:**

- **Target Customer:** Jaron 本人（产品所有者 + 设计伙伴 + 目标用户三位一体，首要且 MVP 唯一用户）。中文为产品语言（对比记忆机制锚），非客户细分。延伸（v1.x+）= 想用游戏化方式学云架构的用户。
- **Need/Opportunity:** BuilderCards 学习内核强但 = 2 人实体英文桌游、依赖在场专家。机会 = 把"组合 -> 模式 -> 讨论验证"内核数字化、单人化、双语化、ASCII 化。
- **Category:** 游戏化学习工具（gamified learning）。
- **Key Benefit:** 从句法（牌面 1:1 组合）到语义（多云参考架构）两层掌握 well-architected 模式，而非只考记忆。
- **Differentiator:** ASCII concrete-poetry 画布（形式即内容，形状 = 架构）+ BuilderCards 规则引擎 + 多云参考架构校验 + 对比记忆（EN 术语 + CN 概念锚）。

---

## Business Model

**Type:** 个人/非商业（personal, non-commercial）。

B2B 客户画像 N/A（stakes = personal-hobby）。无营收模型、无购买角色。Phase 1 跳过 B2B 商业客户步骤（对个人学习工具低价值）。

---

## Ideal Customer Profile (ICP)

**首要用户：Jaron** -- 产品所有者 + 设计伙伴 + 目标用户合一。个人/hobby 项目，高度协作，推荐式协作（recommend-with-rationale）。构建 CloudTech 的过程本身就是自学云计算的过程。Jaron 以双轨角色游玩（战士 = Dev 构建面 / 圣骑士 = Ops 控制面），自由顺序两轨通关；认证不进范围（Cert-NO，自我提升非考证）。详见 Phase 2 Trigger Map。

**Secondary Users (v1.x+):** 想用游戏化方式学云架构的用户。MVP 聚焦首要用户（单用户）。中文为产品语言。

---

## Success Criteria

**掌握度定义**（success 锚点）：能识别 + 组装 well-architected 模式，且说清为什么。

**过关条件**（阶段通过判定，Phase 2 重构；c 剔除）：

- **A3 句法 = floor**：栈通过牌面 1:1 组合效应校验（局部 required edge，确定性自动）；a 不算分只挡。
- **B1 语义 = 多参考匹配**：栈匹配某合法参考架构之一（确定性图匹配，自动）；容许多解，降挫败。
- **B3 WA 分阈值**：参考架构 constraints 打分过阈值（= BuilderCards Well-Architected 点胜利落地）。
- **C1 优化**（可选 bonus，非 gate）：最少卡/最低成本/最少边。
- **c 理解/权衡题**：剔除（不进过关 gate）；开放 LLM Q&A + LLM 验证 = v2。

**进阶货币**：经验值 XP（= BuilderCards 的 Well-Architected points，B3 落地）。过校验得 XP，达阈值进下一阶段。

**MVP 范围**：双轨 4 关（战士轨 W1 静态站 + W2 serverless；圣骑士轨 P1 三元组单实例 + P2 容器）跑通完整学习闭环。P1 三元组 = MVP 硬必需（砍则圣骑士轨无内容、双轨坍缩、O1 失效）。其余课程留 v1.x。

非商业指标，落点 = 个人掌握感 + 学习闭环可跑通。

> 过关条件备选库（A/B/C/D + α/β + c i/ii/iii）+ B3 必要性 re-decide 见 `phase2-decisions.md` §8；spec（WA 支柱/权重/阈值/多参考集/逐牌规则）= Phase 3-4。

---

## Competitive Landscape

| 替代物 | 形态 | 缺口 |
|---|---|---|
| AWS BuilderCards | 2 人实体英文桌游 | 依赖在场专家、英文、实体、非单人 |
| Flashcard/quiz 类工具 | 数字 | 只考记忆，不考组合与架构 |
| AWS 官方文档/案例 | 参考 | 非游戏化，无闯关反馈 |

### Our Unfair Advantage

无直接竞品同时做"BuilderCards 规则引擎 + 多云参考架构校验 + ASCII 形式即内容 + 对比记忆"。CloudTech 是唯一把"组合 -> 模式 -> 讨论验证"内核做单人数字化的。

---

## Constraints

- **无 credits/cloud-adoption 双币**：单一阶段配额（解锁服务集 + 规模上限 cap）。双币留 v1.x（若引入 AI 对手 β 或 Console 稀缺机制）。
- **MVP 无运行时 AI**：双层校验（A3 句法 + B1 语义，确定性图匹配）+ B3 WA 分阈值，纯前端 TS 离线。c 权衡题剔除；开放 LLM Q&A + LLM 验证 = v2。
- **AI 角色**：纯导师/验证器（α），无对手。动力 = 阶段推进 + 掌握感。
- **拖拽 x 字符网格画布 x 响应式**：三者张力，Phase 3-4 Lovable render loop 验证。
- **ASCII 形变动效 + form=content 交互**（自动收敛/用户摆位/混合）：概念采纳，渲染与交互 Phase 3-4 验。
- **AWS 案例 citation**：延后内容创作期补（可扩展入口，Phase 1 只敲定参考架构模式不敲定案例源）。
- **参考架构规格格式**（node/edge/constraint schema）：Phase 3-4 UX/spec 定；双轨两套模式集（IaaS 控制面 + serverless 构建面）。
- **LLM provider + key**：仅 v2 开放版需要，Phase 1 不决。

---

## Platform & Device Strategy

**Primary Platform:** Web（React+Vite）。

**Supported Devices:** 桌面优先（drag-drop + ASCII 画布依赖精确指针交互）；平板/移动端响应式为风险项（待 Phase 3-4 验）。

**Device Priority:** 桌面 > 平板 > 移动。

**Interaction Models:** 拖拽组装（drag-assemble）、点选连边、画布字符网格交互。

**Technical Requirements:**

- **Offline Functionality:** 是。确定性双层校验（A3+B1+B3）纯前端 TS 运行，零后端零 API 成本，离线可用（对齐 NewSD"纯自绘不引 CDN/离线"血统）。仅 v2 开放 LLM Q&A 需后端（Supabase Edge Function 代理）。
- **Native Features:** 无（纯 web）。

**Platform Rationale:** 拖拽组装 + ASCII 字符网格画布需要精确指针与稳定等宽渲染，桌面 web 最稳；移动端拖拽 + 双宽中文字符网格是已知风险。

**Future Platform Plans:** v2 若引入 LLM Q&A，加 Supabase 后端代理；移动端适配视 Phase 3-4 验证结果。

**Design Implications:** 等宽字体为美学与功能基石（ASCII 网格对齐）；暗色终端风（NewSD 血统）；双语描述侧栏化避开画布网格冲突。

**Development Implications:** Lovable 构建（React+Vite+TS+Tailwind+shadcn+Supabase）；Phase 3-4 Lovable 作渲染探针（spec<->render 循环）；Lovable 取代 Phase 5 构建；Phase 6/7 跳过（shadcn 由 Lovable 带）。

---

## Tone of Voice

**For UI Microcopy & System Messages**

终端风味但克制：保留 > / check / cross 符号锚定 ASCII 美学，正文用简洁中文，不堆 CLI 黑话。与画布 terminal chrome 一致。

### Tone Attributes

1. **终端精确**：微拷贝带 > 前缀与符号状态（check/cross），呼应画布美学。
2. **极简**：一句一义，不修饰，不社交润滑。
3. **技术直接**：用服务名与图边术语（compute->datastore），不绕弯。
4. **双语并行**：服务名英文固定，描述中文（可切 en）。

### Examples

**Error Messages:**

- GOOD: > cross 未合格：缺 compute->datastore 边
- BAD: "哎呀，你的架构好像还差一点点哦"（拟人化、含糊）

**Button Text:**

- GOOD: [ 校验栈 ] / [ 进阶 ]
- BAD: "马上检查我的作品！"（冗余、情绪化）

**Empty States:**

- GOOD: > 画布为空。从左侧拖入服务。
- BAD: "这里什么都没有呢，开始你的云之旅吧！"（填充话术）

**Success Messages:**

- GOOD: > check 架构合格。+12 XP
- BAD: "太棒了！你真是个云架构大师！"（夸大、无信息）

### Guidelines

**Do:** 符号锚定状态；服务名/术语原样；一句一义。
**Don't:** 拟人化；情绪化夸奖；含糊修饰；CLI 黑话堆砌。

---

## Additional Context

**三条功能轴**（用户原始输入）：

1. 每个 builder 在不同阶段有不同规模的云资源可用，拖拽组装成合格的云计算栈，实现经验。
2. 每个阶段有不同的升级任务，按 BuilderCards 规则 + AWS 案例实践游戏化。
3. ASCII 风格，参照 17 世纪图案诗/concrete poetry（George Herbert《Easter Wings》1633），形式即内容，等宽，读/观双重性。

**双轨课程阶梯**（Phase 2 first-pass 提案，Phase 3-4 从 entry bar 重设计）：

核心洞察：三元组（IaaS 控制面）与课程（serverless 构建面）是两条正交角色入门轨，非冲突。MVP = 双轨 4 关。

| 轨（角色本质轴） | 关 | 合格栈目标 | 核心服务 | entry bar | 范围 |
|---|---|---|---|---|---|
| 战士（Dev / serverless / 构建面） | W1 | 静态网站托管 | S3+CloudFront(+Route53) | serverless 端到端交付 | MVP |
| 战士 | W2 | Serverless Web 应用 | API Gateway+Lambda+DynamoDB(+S3+CloudFront) | 同上 | MVP |
| 圣骑士（Ops / IaaS / 控制面） | P1 | 三元组单实例 | EC2+VPC+EBS（新增 = Core Signal） | 三元组（IaaS 控制面） | MVP |
| 圣骑士 | P2 | 容器化服务 | ECS/Fargate+ELB+RDS | 同上 | MVP |

> provenance：W1/W2/P2 = 原 6 级线性阶梯切片；P1 三元组 = 从 Core Signal 构造（原 brief 无，拉 v1.x IaaS 进 MVP），MVP 硬必需。first-pass 提案，有构造缝（W1 vs 战士轨 entry、容器轨道归属、cap 双轨重定、退役双轨重排），Phase 3-4 从 entry bar 重设计。v1.x：战士轨向上（FaaS -> 事件 FaaS），圣骑士轨向上（容器 infra -> HA），精确重排 Phase 3-4。
> 角色本质轴：Dev=战士 / Ops=圣骑士 / SA=法师阵法师=共享引擎（非可玩职业）；参考（不实装）德鲁伊=Platform、三头龙=DevSecOps。选角 = 皮肤 + 切片，落地 Phase 3-4。

**迁移叙事脊**（字面牌面退役交互，进 MVP）：从 9 类 on-prem starter 起步，退役即转职（体修 -> 法修 metamorphosis）。原线性 1:1 退役映射（SAN->S3+CloudFront / Database Server->DynamoDB / Bare Metal Host->Fargate）已重排为双轨（P1 三元组牵动 Virtual Machine/Networking/SAN 归属）；每轨各自退役味，精确 per-track 映射 = Phase 3-4。9 类 on-prem starter（规则书正文 10 张 / 目录明细 11 张，源不一致待复核 PDF；Bare Metal Host 有 3 张副本）：Bare Metal Host / Code Repository / Document Store / Networking / Data Warehouse / SAN / Corporate Identity Provider / Virtual Machine / Database Server。

**多云 scope**（Phase 2，MVP = AWS+GCP+CF）：游戏抽象云无关概念（egress 成本/对象存储/CDN/serverless…），厂商差异作变体（如 S3/R2/GCS = 不同税收政策的金库领主）。参考架构集（B1 多参考）跨三云策展。张力：CF 无 IaaS 控制面三元组（纯 serverless/edge+R2），圣骑士轨（IaaS）对 CF 缺位 = 教学资产（非缺陷）；双轨课程按云能力画像重设计（AWS/GCP 双轨全；CF 偏战士轨/serverless），Phase 3-4。对比记忆：EN 规范术语固定 + CN 抽象概念锚，对比（EN<->CN）强化记忆。

**画布形式即内容系统**（整体风格）：

- 垂直迁移轴：上方 = 云（上升），下方 = on-prem（沉降），中间"迁移地平线"。位置 = 迁移态（整体风格钩子，常驻）。
- 退役即形变（metamorphosis）：on-prem 牌 ASCII 形变为对应云服务 ASCII，跨越地平线上升入云栈。旧形 -> 新形，物理 -> 虚拟。退役不是删除，是重构上架（= 云迁移本质）。
- 栈合格结晶：栈向参考架构校验通过时，ASCII 向该架构规范形状收敛（Easter Wings 类比：形变承载语义，散置 -> 有序 = 未成熟 -> 合格）。机制采纳，确切交互（自动收敛/用户摆位/混合）Phase 3-4 Lovable render loop 验。
- chrome：暗色终端风 HTML（#0a0e1a + 等宽 + EVA 红，NewSD 血统），功能优先非字面 ASCII；描述侧栏双语。

**双层校验引擎**（句法 + 语义共用同一图匹配引擎）：

- (a) 句法层 = 牌面 1:1 组合效应（局部 required edge）。
- (b) 语义层 = 参考架构规格 S（required nodes + edges + constraints，全局图模式匹配）。
- 过关条件 = A3（a=floor）+ B1（b 多参考匹配）+ B3（b constraints 打分 -> WA 分阈值）；c 权衡题剔除（见 Success Criteria）。参考架构集（B1 多参考）跨三云策展；spec（schema/WA 支柱/权重/阈值/多参考集/逐牌规则）= Phase 3-4。
- 跑在纯前端 TS，离线，公平（无 LLM 判定飘移）。

**强约束：游戏化不得过拟合**（§15，优先于设计原则）：每个 gamification 映射须过四项检测（映射单一性 / 修饰词预算 / 核心保留 / 可区分性）+ 定量预算（1 职能标签 + 1 价格/行为差异，禁三词以上魔幻头衔）；任一不过即废，不靠加装饰补救。正例：S3 = 金库领主（安全可靠，取物收传送税）；R2 = 自贸港主（免传送税，兼容金库口令）。详见 project-memory §15。

**参照物**：

- AWS BuilderCards 2nd Edition（规则 PDF: docs/AWS BuilderCards Rules.pdf；营销页存档: C:\tmp\buildercards.html）。
- NewSD swimlane（https://jarontam.github.io/NewSD/；设计文档: docs/swimlane-dev-history.md + docs/swimlane-design-rationale.md）-- UI/UX + 形式即内容 + 暗色终端血统先例。
- Bytebase《数据库 DevSecOps 的守护者们》（存档 C:\tmp\wechat-article.txt）-- 职业（战士/法师/德鲁伊/圣骑士）+ 奇幻风来源；映射走本质轴（适配云架构域，Bytebase 法师=DBA 不适用）。

---

## Business Context

- **Primary Goal:** 构建中自学云计算 + 打磨成可用学习工具。
- **Solution:** 单人游戏化云架构组装闯关，BuilderCards 规则引擎 + 多云参考架构校验 + ASCII 形式即内容画布。
- **Target Users:** Jaron 本人（首要且 MVP 唯一）；想用游戏化方式学云架构的用户（v1.x+ 延伸）。中文为产品语言。

*Full strategic analysis (business goals, personas, driving forces) is developed in Phase 2: Trigger Mapping (../B-Trigger-Map/).*

---

## Next Steps

- [~] **Phase 2: Trigger Mapping** - 进行中（00a-00e 完成，00f 缺口分析进行中）；full strategic analysis 已启用
- [ ] **Phase 3: UX Scenarios** - 场景大纲（Freya）
- [ ] **Phase 4: UX Design** - Lovable 渲染探针循环（spec<->render），重点验：拖拽 x 字符网格 x 响应式、ASCII 形变动效、form=content 交互（自动/用户/混合）
- [ ] **Phase 5: Build** - Lovable 取代
- [ ] **Phase 8: Product Evolution** - 待

---

_Generated by Whiteport Design Studio (WDS v6) - Saga (WDS Analyst)_
_Phase 2 回写 step-00f (2026-07-31)_
_Document language: Chinese_