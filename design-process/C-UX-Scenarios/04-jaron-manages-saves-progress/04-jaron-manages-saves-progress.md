---
design_intent: S
design_status: not-started
---

# 04: Jaron 管理存档与进度

**Project:** CloudTech
**Created:** 2026-08-03
**Method:** Whiteport Design Studio (WDS)
**Agent:** Freya (WDS Designer)
**Priority:** P3 (C 序第2, 锁 schema 供 02 消费)
**Pages:** #8 Profile/存档

---

## Transaction (Q1)

管理并掌控个人存档与进度数据。Jaron 在 #8 Profile/存档 查看存档状态（profile class/alignment、双轨 per-track XP、解锁态、牌组历史 passes、画布态草稿(per-level)、校验日志 failures+降级（诊断详情 owner 可见 D1）），并执行存档管理：导出 JSON 备份/迁移（MVP 纯本地无 sync，export/import 是迁移替代）、导入（Zod 校验 + 上限钳制 + 画布态 graph 校验，防污染）、重置（护栏 G3 export-first + G2 type-confirm + G4 danger-zone）。= 对自己进度数据的掌控权（备份/迁移/重来而不丢）。

---

## Business Goal (Q2)

**Goal:** O3 可用工具形态（Priority #2，driven BY O1）
**Objective:** MVP 可跑通交付 - 存档管理是单人离线可用工具的必要组成；MVP 纯本地 -> export/import 替代云 sync。

> 架构 rationale（非业务目标）：C 序第2 = 锁 profile/XP schema（CS3：#8 拥 schema，供 02/03 消费）。

---

## User & Situation (Q3)

**Persona:** Jaron（PRIMARY，双轨学徒，三位一体=产品所有者+设计伙伴+目标用户）
**Situation:** 晚间桌面自学，玩了一阵想备份进度 / 换设备迁移 / 或想重置重来。MVP 纯本地无云 sync，进度只在本机，要自己管。想看清存档状态 + 安全备份/迁移/重置。

---

## Driving Forces (Q4)

**Hope:** 掌控自己的进度数据--备份/迁移/重来都不丢，存档状态一目了然（双轨 XP/解锁/牌组历史 vs 校验日志分离清晰，GS1 passes/failures 数据角色分离明示）。

**Worry:** 误操作丢进度（reset 误触），或导入坏/恶意 JSON 污染存档，或passes/failures 混看不清（数据角色混淆）。

> CONSTRAINT: One sentence per component. Phrases, not paragraphs.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Desktop
**Entry:** 从应用全局导航 / 总览(#1) 进 #8 Profile/存档。单用户本地工具，到达 = 点 profile/存档入口。

---

## Best Outcome (Q7)

**User Success:**
成功备份/迁移/重置，进度状态清晰（双轨分离 GS1），无丢失/污染；reset 前 export 护栏防误删。

**Business Success:**
O3 可用工具形态（存档管理完备，离线可迁移）；schema 锁定（CS3，#8 拥 profile/XP/画布态 schema 供 02/03 消费）；信任边界到位（导入 Zod+钳制，reset 护栏）。

---

## Shortest Path (Q8)

线性 sunshine path，零分支：

1. **#8 Profile/存档** - 看存档状态（profile class/alignment + 双轨 per-track XP + 解锁态 + 牌组历史 passes + 画布态草稿(per-level) + 校验日志 failures/降级（诊断详情 owner 可见 D1），GS1 passes/failures 分离）+ 管理存档（export JSON 备份/迁移 / import Zod 校验+钳制+画布态 graph 校验 / reset 护栏 G3+G2+G4）✓

> Exit: 完成管理 -> 回 #1 总览 / 全局导航。

---

## Trigger Map Connections

**Persona:** Jaron（PRIMARY）

**Driving Forces Addressed:**
- ✅ **Want:** 轴C正 里程碑进度感（看清双轨 XP/解锁/科技树/守序）+ G4 自主掌控力（备份/迁移/重置掌控自己数据）
- ❌ **Fear:** 轴C负 进度失控（误删/污染/混淆，进度数据不可靠）+ G4负 掌控缺失

**Business Goal:** O3 可用工具形态

---

## Spec Carry-overs (入 detail，tracked)

- **CS3:** #8 拥 profile/XP/画布态 schema（定义数据模型）；#5/#6 经 invariant 消费
- **CS6:** #6 XP 权威；#1/#8 派生（#8 显示派生 XP，不写）
- **GS1:** passes/failures 数据角色 IA - role-separation UI 明示 dual-role Jaron 导航（failures->校验日志 / passes->memory/牌组历史）
- **GS3:** reset/import per-store scope（牌组历史 + 校验日志 + 画布态）
- **FS1=A:** 角色分离 memory=user passes（牌组历史）/ 校验日志=诊断详情 failures+降级（owner 可见 D1，非 dev-only；画布态=工作草稿（user 可变, auto-save CS1）；#8 须分离显示三 store）
- **[S2 传导, 03 场景] passes store schema 字段:** 牌组历史 passes store 须含（assembled graph + matched reference ID + WA score），供 #7 对比记忆 read（图谱->架构图映射 + review）。CS3 #8 拥 schema 须定义此字段集。
- **ADR-6 数据存储:** localStorage(profile/XP/解锁态) + IndexedDB(牌组历史/校验日志) + schema_version；storage 抽象层
- **导入信任边界:** Zod schema 校验 + 上限钳制（XP/解锁不超当前阶段上限，防恶意 JSON）+ 画布态 graph 校验（nodes≤32 / cards ⊆ unlocked / valid edges）
- **reset 护栏:** G3 export-first + G2 type-confirm + G4 danger-zone
- **守序 alignment:** profile state(class: warrior/paladin, both->alignment: lawful) + 显示（守序标签+天平 glyph）
- **onboarding=mode:** profile 创建于首玩关（首玩关 profile skip = auto-create）
- **解锁纯函数:** XP->牌（reset 改 XP 派生解锁，非直接改解锁态）
- **画布态（复查-C1=A 决策）:** per-level 进行中草稿 = 第 3 个 IndexedDB store（auto-save CS1 C2↔C4, resume）；#8 view/export/import/reset 纳入。3 store 3 角色（passes/failures/drafts）不混。

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 04.1 | 04.1-profile-save/ | 看存档状态 + 管理存档(export/import/reset) | 完成管理 -> 回 #1 总览/全局导航 ✓ |

**First step** (04.1) includes full entry context (Q3 + Q4 + Q5 + Q6).
**On-step interactions** (that don't leave the step) are documented as storyboard items within each page spec.

---

_Generated with Whiteport Design Studio (WDS v6) - Freya (WDS Designer)_
_step-05 outline (Suggest mode, 2026-08-03)_
_Document language: Chinese_
