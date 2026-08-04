---
design_intent: C
design_status: not-started
---

# 02: Jaron 选轨并首次上手

**Project:** CloudTech
**Created:** 2026-08-03
**Method:** Whiteport Design Studio (WDS)
**Agent:** Freya (WDS Designer)
**Priority:** P2
**C 序:** 第3（创建序 01->04->02->03）
**Pages:** #1 总览, #2 选角选轨

---

## Transaction (Q1)

首次进入 CloudTech 并上手第一关。Jaron 首次开应用，零进度无 profile，在总览看清"这是什么/双轨怎么玩/我从哪开始"，选定职业(战士/圣骑)与轨道，落地首玩关开始组装校验。= onboarding-to-first-play 最短闭环：从"零进度新人"到"选好轨、profile 建好、进第一关"。

**I1 首玩 flow 在此消解** - onboarding=mode（track-agnostic，无独立 onboarding gate；profile 首玩关 auto-create，条件=profile 不存在时[R1]，idempotent[R7]）。

---

## Business Goal (Q2)

**Primary:** O3 可用工具形态（Priority #2，driven BY O1）- 首次上手可用 = MVP 可跑通入口验证（无 onboarding 阻塞）。
**启动:** O1 flywheel step 1（选轨->首玩关=解锁配额，THE ENGINE 入口；profile schema CS3 已被 04 锁、#2 消费写 class）。

> O3 driven BY O1，但首次上手可用性本身属 O3 工具形态。本场景 distinct 价值=可用入口（tool-form），与 01（掌握行为 O1）区分。

---

## User & Situation (Q3)

**Persona:** Jaron（PRIMARY，双轨学徒，三位一体=产品所有者+设计伙伴+目标用户）
**Situation:** 首次打开 CloudTech，零进度、无 profile；晚间桌面，想试试这自学云工具；还没选过职业/轨道，不清楚双轨怎么玩、从哪开始。

---

## Driving Forces (Q4)

**Hope:** 快速看清双轨怎么玩+选个合适轨直接开打第一关，不被 onboarding 啰嗦卡住。

**Worry:** onboarding 卡住或不知从何下手，或选错轨起点（圣骑 P1 三元组陡 Cl1），零进度不知自己到哪。

> CONSTRAINT: One sentence per component. Phrases, not paragraphs.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Desktop
**Entry:** 桌面浏览器打开本地 CloudTech（纯前端离线，无后端）；单用户工具，到达=开应用落 #1 总览（首玩=空进度首屏，hub），不经搜索引擎/外链。所有态统一落 #1（首玩 zero / 回归 progress / 终端 terminal）。

---

## Best Outcome (Q7)

**User Success:**
看清双轨结构+自己零进度，选定职业与轨道，profile 自动建好，进首玩关拿初始牌(A1)开打，无 onboarding 阻塞。

**Business Success:**
O3 MVP 首次上手可用验证（首玩 flow 无阻塞 + profile auto-create 成功 + 进首玩关拿到 A1）+ O1 flywheel 启动（选轨->首玩关；profile schema CS3 已被 04 锁、#2 消费写 class）。

---

## Shortest Path (Q8)

线性 sunshine path，零分支：

1. **#1 总览** - 首次看清 CloudTech 是什么、双轨(战士 Dev/圣骑 Ops)结构、当前进度(首玩=空)，见"选轨/开始"入口
2. **#2 选角选轨** - 选职业(战士/圣骑)=选轨(W1 serverless 入口 / P1 三元组 IaaS 入口)，确认进入首玩关（profile 待首玩关 auto-create, onboarding=mode）✓

> Exit: 进入首玩关 #3 课程地图 (01.1)，profile auto-create（profile 不存在时[R1], idempotent[R7]）+ 初始解锁集 A1（XP=0 starter，含首关参考架构所需牌[R11]，具体牌集 Phase-4 定）。
> CS1 C1<->C2 routing 契约[R8]：02.2 传 track+entry level(W1/P1) -> 01.1 落对应关+auto-create。

---

## Trigger Map Connections

**Persona:** Jaron（PRIMARY）

**Driving Forces Addressed:**
- ✅ **Want:** G4 自主掌控（自由选职业/轨道/顺序）+ 轴C正 里程碑进度感（零进度->起步，双轨里程碑结构可见）
- ❌ **Fear:** onboarding 摩擦 / 选错起点（Cl1 圣骑 P1 三元组陡）/ 零进度迷茫（轴C负 无里程碑->迷失）

**Business Goal:** O3 可用工具形态（+ O1 flywheel 启动）

---

## Spec Carry-overs (入 detail，tracked)

- **CS1（本场景 own）:** C1<->C2 入口路由（onboarding->首玩关）= 02.2 exit route to #3 (01.1)。routing 契约[R8]：02.2 传 track+entry level(W1/P1) -> 01.1 落对应关+auto-create。**[T1 传导]** 01.1 须处理 first-time（从 02.2 预选 track+level）vs returning（选未通关关）两 entry state。
- **onboarding=mode（修法 + 04.1 carry）:** track-agnostic，无独立 onboarding gate，无 forced default track[R10]；profile 首玩关 auto-create，条件=profile 不存在时[R1]，idempotent（atomic check-then-create，防双 profile）[R7]。I1 消解。
- **CS3:** #8(04) 拥 profile schema（已锁）；#2(本场景) 消费-选角写 profile class(warrior/paladin)+track。
- **CS6:** #6 XP 权威；#1(本场景) 派生显示进度（首玩=零/空，不写）。#1 三态[R6]：zero（首玩 CTA）/ progress（双轨进度+nav，读 #6 派生）/ terminal（全通关+守序，Phase-4 flagged 01.4）。
- **I1:** 首玩 flow = 零 profile -> #1 -> #2 -> 首玩关 auto-create profile（profile 不存在时[R1]）+ A1 初始集。
- **A1（Phase-4 open）:** 初始解锁集（XP=0 各轨解锁牌）；首玩关 playable 依赖 A1 含首关参考架构所需牌（W1 S3+CloudFront / P1 EC2+VPC+EBS）[R11]；具体牌集 Phase-4 定，不阻 outline。
- **G4 自主掌控:** 自由选职业/轨道/顺序 = driving force（选角=皮肤+切片，feature #13 Consider）。
- **双轨 entry bars:** 战士轨 entry=serverless（W1 静态站 on-ramp / W2 serverless）；圣骑士轨 entry=三元组 IaaS（P1 EC2+VPC+EBS）。#2 须明示 entry bar 难度区分[R4]（display facet），无 forced default[R10]。
- **Cl1（lands 02 display facet + 01 structure facet）[T3]:** onboarding 不对称（圣骑 P1 三元组陡 vs 战士 W1 缓）。**结构 facet**（课程结构 P1 陡 vs W1 缓）设计在 01-core（锁定决策 5「Cl1 结构半须折入 01-core」）；**display facet**（entry bar 难度明示）在 02 R4，依赖 01 结构设计（Phase-4 难度量化）。
- **Cl5（扩 02）[R5]:** 窄屏/CJK apply #1/#2（同 01.3 canvas，ADR-12）。
- **always-on 双语（全局，apply #1/#2）[R5]:** 非 setting toggle，zh+en 并列，首玩无语言检测；布局（侧栏/并列）Phase-4 定。
- **[守序] alignment:** 双轨通关才解锁 lawful（认知升维）；首玩=单轨未守序（profile alignment 字段已锁，首玩=neutral）。
- **pre-profile 选角态[R2]:** ephemeral - 未建 profile=无持久态，重开重选，不引入新 store（画布态 store 是 per-level 非选角）。
- **#2 两态[R3]:** first-pick（no profile，待首玩关 auto-create）/ returning-pick（profile 存在，不 auto-create）。
- **#2 UI paired selection[R9]:** 明示"选职业=选轨"（无分离 skin+track 选项）+ first-pick 内 character 来回切（on-page radio/toggle）。
- **character-track 耦合（Q2=A）:** paired（warrior=战士轨 / paladin=圣骑轨）；skin-vs-slice 机制=Phase-4 open（feature #13 选角=皮肤+切片 待设计，耦合 profile.class 双轨语义 + A2 per-track unlock 独立性）。

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 02.1 | `02.1-overview/` | 首次看清 CloudTech+双轨结构+零进度，见选轨入口 | 点选轨入口 -> #2 (02.2) |
| 02.2 | `02.2-character-track-select/` | 选职业+轨道(paired)，确认进首玩关 | 进首玩关 #3 (01.1), profile auto-create（profile 不存在时, idempotent）✓ |

**First step** (02.1) includes full entry context (Q3 + Q4 + Q5 + Q6).
**On-step interactions** (that don't leave the step) are documented as storyboard items within each page spec.

---

_Generated with Whiteport Design Studio (WDS v6) - Freya (WDS Designer)_
_step-05 outline (Suggest mode, 2026-08-03)_
_Document language: Chinese_
