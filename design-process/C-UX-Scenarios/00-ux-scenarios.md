# UX Scenarios: CloudTech

> Scenario outlines connecting Trigger Map personas to concrete user journeys.
> C 序 (创建序 01 -> 04 -> 02 -> 03) 覆盖默认优先序 -- schema-lock via 04 第二供 02/03 消费.

**Created:** 2026-07-27 (overview regenerated 2026-08-04, step-06)
**Author:** Jaron with Freya (WDS Designer)
**Method:** Whiteport Design Studio (WDS v6)

---

## Scenario Summary

| ID | Scenario | Persona | Pages | Priority | C 序 | Status |
|----|----------|---------|-------|----------|------|--------|
| 01 | 组装并校验云架构栈 | Jaron (PRIMARY) | 4 | P1 | 1 (首) | Outlined (01.1-01.4) |
| 04 | 管理存档与进度 | Jaron (PRIMARY) | 1 | P3 | 2 (锁 schema) | Outlined (04.1) |
| 02 | 选轨并首次上手 | Jaron (PRIMARY) | 2 | P2 | 3 | Outlined (02.1; 02.2 待补) |
| 03 | 回顾架构与多云对比 | Jaron (PRIMARY) | 1 | P2 | 4 | Outlined (03.1) |

**Coverage:** 8/8 页分配至场景. 02.2 = scenario 02 第二步 page spec (非 outline), 不阻 overview/Phase 4, 可后补.

---

## Scenarios

### [01: Jaron 组装并校验云架构栈](01-jaron-builds-validates-stack/01-jaron-builds-validates-stack.md)
**Persona:** Jaron (PRIMARY) - 轴A正 合理框架判断
**Pages:** #3 课程地图, #5 牌池, #4 画布, #6 XP/进阶
**User Value:** 组装云架构栈 + 双层校验(A3+B1+B3)判断合理性, 得确定反馈(过/不过 + 错在哪).
**Business Value:** O1 推进 1/4 + 校验引擎实跑验证 + 解锁里程碑(pass N -> unlock N+1).
**Format:** Screen Flow (4 步)

### [04: Jaron 管理存档与进度](04-jaron-manages-saves-progress/04-jaron-manages-saves-progress.md)
**Persona:** Jaron (PRIMARY) - 轴C正 里程碑进度感 + G4 自主掌控
**Pages:** #8 Profile/存档
**User Value:** 掌控进度数据 -- 备份/迁移/重置不丢, 存档状态清晰(3 store: passes/failures/画布态).
**Business Value:** O3 可用工具形态 + schema 锁定(CS3, #8 拥 profile/XP/画布态 schema 供 02/03 消费) + 信任边界(import Zod+钳制, reset 护栏).
**Format:** Single Page

### [02: Jaron 选轨并首次上手](02-jaron-selects-track-onboards/02-jaron-selects-track-onboards.md)
**Persona:** Jaron (PRIMARY) - G4 自主掌控 + 轴C正 里程碑进度感
**Pages:** #1 总览, #2 选角选轨
**User Value:** 首次看清双轨(战士 Dev/圣骑 Ops) + 选轨直接开打第一关, 无 onboarding 阻塞(onboarding=mode, profile 首玩关 auto-create).
**Business Value:** O3 MVP 首次上手可用验证 + O1 flywheel 启动(选轨 -> 首玩关; profile schema CS3 已被 04 锁).
**Format:** Screen Flow (2 步; 02.2 待补)

### [03: Jaron 回顾架构与多云对比](03-jaron-reviews-architecture-compares-clouds/03-jaron-reviews-architecture-compares-clouds.md)
**Persona:** Jaron (PRIMARY) - 轴B正 目的抽象记忆 + 轴D正 跨云可迁移
**Pages:** #7 对比记忆
**User Value:** 回顾已通关架构的真实云架构图映射 + 多云变体对比(S3/R2/GCS), 巩固可迁移理解不怕 lock-in.
**Business Value:** O1 掌握巩固层(轴B Should + 轴D Could, 非 Must 引擎本身) + O3 secondary.
**Format:** Single Page (可跳过 Cl6, 非阻塞)

---

## Page Coverage Matrix

| Page | Scenario | Purpose in Flow |
|------|----------|-----------------|
| #1 总览 | 02 | 看清 CloudTech + 双轨结构 + 当前进度(三态 zero/progress/terminal), 选轨入口; hub, 所有态统一落 #1 |
| #2 选角选轨 | 02 | 选职业=选轨(paired, 无分离 skin+track), 确认进首玩关; profile auto-create(profile 不存在时, idempotent) |
| #3 课程地图 | 01 | 看双轨 4 关地图(W1/W2/P1/P2), 选未通关关卡进入; first-time(from 02.2 预选)/returning 两 entry state |
| #5 牌池 | 01 | 查已解锁牌池/配额(derived from XP unlock invariant), 规划要组装的架构 |
| #4 画布 | 01 | 拖牌到 ASCII 画布组装栈, 手动提交触发双层校验(A3+B1+B3), 结果 overlay; pass 写 passes store at #4 |
| #6 XP/进阶 | 01 | 过关得 XP(=WA 点) + 进阶 + 解锁下一批牌; 通关总结 = per-level Tier-3 overlay (CS6 XP 权威) |
| #7 对比记忆 | 03 | 回顾 passes(passes-only 纯读 FS1=A), 图谱 -> 真实云架构图映射 + 对比记忆(EN 术语/CN 概念锚) + 多云变体对比 |
| #8 Profile/存档 | 04 | 看存档状态(3 store: passes/failures/画布态, GS1 分离) + 管理(export/import/reset 护栏 G3+G2+G4) |

**Coverage:** 8/8 页.

**非页表面 (不入页清单, tracked):** 校验结果 = overlay on #4 | onboarding = mode(track-agnostic, 02-entry) | 通关总结 = Tier-3 overlay on #6 | 4 关卡(W1/W2/P1/P2) = template + variants(= #4 画布 instances) | 牌面 = template(component) | 准入 = #4-entry guard(source-agnostic) | 降级态 = #4 fault state.

---

## Page Spec Index

| Step | Path | Page |
|------|------|------|
| 01.1 | 01-jaron-builds-validates-stack/01.1-course-map/01.1-course-map.md | 课程地图 |
| 01.2 | 01-jaron-builds-validates-stack/01.2-card-pool/01.2-card-pool.md | 牌池 |
| 01.3 | 01-jaron-builds-validates-stack/01.3-canvas/01.3-canvas.md | 画布 |
| 01.4 | 01-jaron-builds-validates-stack/01.4-xp-progression/01.4-xp-progression.md | XP/进阶 |
| 02.1 | 02-jaron-selects-track-onboards/02.1-overview/02.1-overview.md | 总览 |
| 02.2 | 02-jaron-selects-track-onboards/02.2-character-track-select/ (待补) | 选角选轨 |
| 03.1 | 03-jaron-reviews-architecture-compares-clouds/03.1-comparison-memory/03.1-comparison-memory.md | 对比记忆 |
| 04.1 | 04-jaron-manages-saves-progress/04.1-profile-save/04.1-profile-save.md | Profile/存档 |

---

## Next Phase

These scenario outlines feed into **Phase 4: UX Design** where each page gets:
- Detailed page specifications (template: `./resources/wds-4-ux-design/templates/page-specification.template.md`)
- Wireframe sketches (each page folder `Sketches/`)
- Component definitions
- Interaction details

**Lovable render loop:** spec <-> render probe (Phase 3-4 起). 设计循环从 scenario step 1 起 (01.1 课程地图 / 02.1 总览). 02.2 可于 Phase 4 中随 scenario 02 起手补.

---

## What Belongs Here

Scenarios organize the product into meaningful user journeys. Each scenario groups related pages. Each page gets a full specification that a developer can build from.

**Folder structure per scenario:**
```
C-UX-Scenarios/
+-- 00-ux-scenarios.md          <- This file (overview + page index)
+-- 01-scenario-name/
|   +-- 1.1-page-name/
|   |   +-- 1.1-page-name.md    <- Page specification
|   |   +-- Sketches/           <- Wireframes and concepts
|   +-- ...
+-- Components/                 <- Shared component specs
+-- Features/
    +-- Storyboards/            <- Multi-step interaction flows
```

---

## For Agents

### Scenario Outline (Freya, wds-3-scenarios)
**Workflow:** `skill:wds-3-scenarios` (step-01..09)
**Agent trigger:** SC (Freya)

### Page Specifications (Freya, wds-4-ux-design)
**Workflow:** `skill:wds-4-ux-design`
**Agent trigger:** UX (Freya)
**Page template:** `./resources/wds-4-ux-design/templates/page-specification.template.md`
**Quality guide:** `./resources/agent-guides/freya/specification-quality.md`

**Before writing any page specification:**
1. Read `B-Trigger-Map/` - know the personas and their driving forces
2. Read the page specification template - use it as your scaffold, not memory
3. Discuss the page purpose with the user before filling in details
4. Each page folder needs a `Sketches/` subfolder for wireframes

**HARM:** Producing page specs from memory of what the template "roughly" contains.
**HELP:** Reading the actual template into context, discussing page purpose, then filling the template with specific content.

---

_Generated with Whiteport Design Studio (WDS v6) - Freya (WDS Designer)_
_Step-06 overview (2026-08-04). Document language: Chinese._
