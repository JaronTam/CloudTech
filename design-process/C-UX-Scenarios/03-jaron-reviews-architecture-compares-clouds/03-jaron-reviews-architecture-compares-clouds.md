---
design_intent: C
design_status: not-started
---

# 03: Jaron 回顾架构与多云对比

**Project:** CloudTech
**Created:** 2026-08-04
**Method:** Whiteport Design Studio (WDS)
**Agent:** Freya (WDS Designer)
**Priority:** P2
**C 序:** 第4（创建序 01->04->02->03）
**Pages:** #7 对比记忆

---

## Transaction (Q1)

回顾并巩固已通关的云架构掌握 + 理解多云变体差异。Jaron 通关若干关后（牌组历史有 passes），在 #7 对比记忆回顾自己组装过的合格架构（passes-only 纯读，FS1=A），看游戏图谱->真实云架构图映射（轴B负「记不住」的解），并对比多云厂商变体（S3/R2/GCS 等，轴D）。= review-and-compare 最短闭环：从「刚通关想复习/想看清真实映射」到「巩固可迁移云概念理解」。

> Cl6 = #7 可跳过（非阻塞，sunshine path 可不经 #7）。FS2 = memory comparison 瞬态（#7 读不持久化新态，与 Q1=1a「memory 纯读 no save-data」一致）。

---

## Business Goal (Q2)

**Goal:** O1 双轨合理架构掌握（**巩固层**）
**Objective:** 回顾 passes + 多云对比 = 巩固 01 引擎产出的掌握（轴B Should + 轴D Could 层，非 Must 引擎本身）

> O1（巩固层）distinct 于 01（O1 THE ENGINE，轴A Must 练习产出掌握）与 02/04（O3 工具形态 plumbing）。判定：驱动 forces（轴B 记忆 + 轴D 可迁移）= 学习 outcome 语义非工具 plumbing；#7 坏了仍能练能通关但记不住/lock-in 恐惧 unaddressed -> 掌握衰减 -> O1。feature priority（#6 Must Have）≠ 业务目标归属（MoSCoW 排设计焦点序非 O1/O3）。Cl6 可跳过 = 巩固 aid 非 gate（Should/Could 层 on Must 引擎，非 O1-critical）。O3 secondary（对比记忆=可用学习工具 feature #6）。

---

## User & Situation (Q3)

**Persona:** Jaron（PRIMARY，双轨学徒，三位一体=产品所有者+设计伙伴+目标用户）
**Situation:** 通关若干关后（有 passes，非首玩），晚间桌面自学时段；想复习巩固刚学的架构 / 想看清游戏图谱对应真实云架构图 / 想对比多云变体理解可迁移概念。已过 onboarding，有进度有 passes。

---

## Driving Forces (Q4)

**Hope:** 回顾已通关架构，看清游戏图谱->真实云架构图映射 + 多云变体差异（S3/R2/GCS），巩固可迁移理解不怕 lock-in。

**Worry:** 通关后忘掉/记混（轴B负 + 轴D负 三云记混），或游戏图谱与真实架构脱节看不出映射，或被某厂商细节 lock-in 思维。

> CONSTRAINT: One sentence per component. Phrases, not paragraphs.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Desktop
**Entry:** 从 #1 总览导航进 #7，或通关后从 #4 画布 pass->review 进 #7（CS1 C2↔C3 pass->review->#7）。单用户本地工具。#7 可跳过（Cl6），非强制。

> exit: 回 #1 总览 / 回 #4 画布 retry（CS1 C3↔C2 return）/ 全局导航。

---

## Best Outcome (Q7)

**User Success:**
看清自己通关架构的真实云架构图映射 + 多云变体对比，巩固可迁移云概念理解，不怕 lock-in/记混。

**Business Success:**
O1 掌握巩固（轴B 语义承载 + 轴D 多云可迁移落地，Should/Could 层）；O3 工具形态 secondary（对比记忆=可用学习工具 feature #6）；轴B负（图谱->架构图映射）+ 轴D负（lock-in 恐惧）addressed。

---

## Shortest Path (Q8)

线性 sunshine path，零分支：

1. **#7 对比记忆** - 回顾已通关架构（passes-only 纯读 FS1=A，牌组历史仅成功态），看游戏图谱->云架构图映射（passed graph->matched reference 真实图）+ 对比记忆（EN 术语 + CN 概念锚，轴B Must）+ 多云变体对比（S3/R2/GCS，轴D Could 后扩），巩固可迁移理解 ✓

> 单页场景（同 04 结构）。exit: 回 #1 总览 / 回 #4 画布 retry（CS1 C3↔C2）/ 全局导航。

---

## Trigger Map Connections

**Persona:** Jaron（PRIMARY）

**Driving Forces Addressed:**
- ✅ **Want:** 轴B正 目的抽象记忆（对比记忆 EN 术语 + CN 概念锚）+ 轴D正 跨云可迁移（多云参考集 + 云无关抽象 + S3/R2/GCS 变体）
- ❌ **Fear:** 轴B负 记不住（通关后图谱->架构图映射）+ 轴D负 厂商 lock-in/三云记混（变体对比 + 轴A 互补）

**Business Goal:** O1 合理架构掌握（巩固层）

---

## Spec Carry-overs (入 detail，tracked)

- **FS1=A:** #7 读 passes-only（牌组历史 仅成功态，纯读 no save-data [Q1=1a]）；校验日志=诊断详情 failures+降级（D1 owner-visible，**非 #7 范畴**）；画布态=工作草稿（**非 #7 范畴**）。3 store 3 角色，#7 只读 passes store。
- **Cl6:** #7 可跳过（非阻塞，sunshine path 可不经 #7）。
- **FS2:** memory comparison 瞬态（accepted，#7 读不持久化新态 -> 每次 view 重读 passes，无 stale cache，与 #8 reset 不冲突）。
- **CS1:** C2↔C3 pass->review(->#7) / C3↔C2 return(review->retry 或继续)。retry 时画布态 restore（画布态 store per-level Cl11/复查-C1=A，01.3 处理）。
- **轴B负 图谱->架构图映射（结构半，outline 定）:** 游戏图谱（#4 画布 ASCII graph，nodes+edges）-> 真实云架构图（该 pass matched 的参考架构 canonical 图；B1 多参考容许多解 -> 显示用户实际 pass 的那条参考）。
- **轴B负 映射（视觉半，Phase-4）:** 粒度（node-by-node vs whole-graph）/ 呈现（side-by-side / overlay / interactive toggle）/ 多参考命中显示哪条 / ASCII graph->真实图过渡（与 feature #11 栈结晶耦合？）。
- **轴D 多云 scope（Phase-4）:** MVP floor = 轴B 层（AWS passes + 图谱映射 + EN/CN 对比记忆，Must）；轴D 层（S3/R2/GCS 变体对比，Could）GCP/CF 内容后扩时激活，milestone-dependent。CF 缺位=教学资产（圣骑轨不对称战场）。
- **#7 两条对比轴（勿混）:** 语言对比（EN 术语 vs CN 概念锚，轴B正 Must）/ 云对比（AWS vs GCP vs CF 同概念变体，轴D Could 后扩）。
- **always-on 双语（全局，apply #7）:** 对比记忆 EN 术语 + CN 概念锚（轴B正 核心），非 setting toggle，zh+en 并列。
- **Cl5:** 窄屏/CJK apply #7（ADR-12，同 01.3/02）。
- **[S1 模拟] zero-passes empty state:** #7 从 #1 nav 可达 even with zero passes（首玩未通关）-> 需 empty state（无 passes 时引导 -> #2 选轨/#3 课程地图开打）。结构性：empty state 存在 + redirect to play。呈现 Phase-4。
- **[S2 模拟] passes store schema 依赖:** 图谱->架构图映射 + review 须 passes store 记录（assembled graph + matched reference ID + WA score）。carry-over to CS3/#8 schema（passes store 须含 graph + matched reference + WA，供 #7 读）。verify with 04（#8 拥 schema）。
- **[S5 模拟] 01.4 通关总结 vs #7 review 边界:** 01.4 通关总结 = per-pass 即时总结（on #6 overlay）；#7 review = cross-pass 巩固回顾（多 pass + 对比）。distinct，无 overlap。
- **[S6 模拟] pass-write 时点 + #4->#7 依赖:** CS1 C2↔C3 #4->#7 direct 须 pass 已在 passes store。修法：pass 写入 at #4（validation pass = immediate record: graph + matched reference + WA），decoupled from #6 XP award（#6 awards XP from WA score via transition, 不读 passes store；passes store 写 at #4 仅供 #7/#8 读。CS6 authority）。01.3 spec 已加 pass-write-at-#4 note + #4->#7 optional exit（cross-scenario fix）。CS3/#8 schema: passes store write at #4（verify with 04）。

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 03.1 | `03.1-comparison-memory/` | 回顾 passes + 图谱->架构图映射 + 对比记忆(语言轴) + 多云变体对比(云轴) | 回 #1 总览 / #4 retry / 全局导航 ✓ |

**First step** (03.1) includes full entry context (Q3 + Q4 + Q5 + Q6).
**On-step interactions** (that don't leave the step) are documented as storyboard items within each page spec.

---

_Generated with Whiteport Design Studio (WDS v6) - Freya (WDS Designer)_
_step-05 outline (Suggest mode, 2026-08-04)_
_Document language: Chinese_


