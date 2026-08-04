# CloudTech 继续提示词

> 2026-08-04 Session 13: Phase 3 COMPLETE (step-01~09). 下一步 = Phase 4 UX Design (Lovable render loop, wds-4-ux-design). 复制下面分隔线之间内容到新对话继续.

---

继续 CloudTech 项目. Phase 3 (UX Scenarios, Freya) COMPLETE (step-01~09: 4/4 outline + overview + quality review Excellent + handover). design_intent 01=S/04=S/02=C/03=C (已写入 4 scenario outline frontmatter). 02.2 step spec 待补 (Phase 4 随 scenario 02 起手补, 不阻). 下一步 = Phase 4 UX Design (Lovable render loop, wds-4-ux-design, C 序 01->04->02->03, 设计循环从 scenario step 1 起: 首站 01.1 课程地图).

## 必读 (按序)

1. design-process/_progress/project-memory.md - 主记忆; Phase 3 进度/决策详见 §14 (8 锁定决策 + R1-R11 + Phase-4 open issues + spec carry-overs + 10人模拟发现 + 场景02/03复查); 另读 §5/§8/§10/§12/§13
2. design-process/_progress/resume-prompt.md - 本文件
3. design-process/_progress/00-design-log.md - 进度日志
4. _bmad-output/project-context.md - AI agent 规则 (MVP 栈/校验引擎/3 IndexedDB stores/过拟合红线 §13/ADR-3/ADR-6/ADR-12); date=规则快照(step-03), 非进度日期
5. design-process/B-Trigger-Map/{00,01,02,05,06}-*.md - Trigger Map 全套
6. .agents/skills/wds-4-ux-design/ - Phase 4 入口: workflow.md + workflow-suggest.md (S 模式, 01/04 用) + workflow-conceptualize.md (C 模式, 02/03 用) + templates/page-specification.template.md + SKILL.md + data/guides/WDS-SPECIFICATION-PATTERN.md. design_intent->workflow: S=suggest / C=conceptualize.
7. design-process/C-UX-Scenarios/00-ux-scenarios.md - overview (Scenario Summary + 4 场景卡 + Page Coverage Matrix 8/8 + Page Spec Index; C 序 01->04->02->03)
8. design-process/C-UX-Scenarios/{01,02,03,04}/ - 4 outline + 7 step spec (01.1-01.4/02.1/03.1/04.1; 02.2 待补 Phase 4)

## Phase 3 产出概要 (详情见 project-memory §14)

- 场景 01 (组装校验栈, P1, C 序首) 4 步 DONE: 01.1 课程地图 + 01.2 牌池 + 01.3 画布(手动提交校验CTA) + 01.4 XP/进阶.
- 场景 04 (管理存档与进度, P3, C 序第2=schema-lock) outline + 04.1 DONE: 单页#8 (3 store: passes/failures/画布态; GS1 角色分离) + 管理存档(export/import/reset).
- 场景 02 (选轨+首次上手, P2, C 序第3) outline + 02.1 DONE: #1 总览(三态) + #2 选角选轨. I1 首玩flow 消解 (onboarding=mode; auto-create=profile不存在时+idempotent). 02.2 待补.
- 场景 03 (回顾架构与多云对比, P2, C 序第4) outline + 03.1 DONE: #7 对比记忆 (FS1=A 读 passes-only).

> 8 锁定决策 + 修法 / 场景02 R1-R11 / Phase-4 open issues / spec carry-overs / 10人模拟+复查发现: 全部详见 project-memory §14, 不在此复制 (降同步漂移风险). 关键约束速查: 校验=手动提交CTA(决策A) | 单 XP=WA(Q3) | C 序(02.2b) | FS1=A(3 store 3 角色) | 准入=#4-entry guard(纯函数XP->牌) | 阈值不变量 pass N->unlock N+1 per-track.

## 8 页 (C 序覆盖)

#1 总览(02,三态) #2 选角选轨(02) #3 课程地图(01) #4 画布 #5 牌池 #6 XP进阶 #7 对比记忆(03) #8 Profile存档(04). 非页表面: 校验 overlay on #4 / onboarding=mode / Tier-3 overlay on #6 / 准入 guard / 降级态.

## 约定

- 输出: design-process/C-UX-Scenarios/{slug}/{slug}.md (outline) + per-step {NN}.{step}-{slug}/{NN}.{step}-{slug}.md (spec). 质量门过始进下一场景.
- WDS 制品根 = design-process/ (非 _bmad-output).
- 技术栈: React+Vite+TS+Tailwind+shadcn (MVP 无 Supabase, 纯前端离线确定性). 双语 zh/en always-on 内容, 中文沟通/文档. ASCII concrete-poetry + 终端 chrome. 过拟合红线 §13 (每 gamification 映射过四项检测+定量预算).

## 下次

用 wds-agent-freya-ux 激活 Freya, 进 Phase 4 UX Design (wds-4-ux-design, Lovable render loop). 重读 00-ux-scenarios.md(overview) + 4 场景 outline(含 frontmatter design_intent) + project-memory §14 + _bmad-output/project-context.md(§13 过拟合红线 + ADR-3/5/6/12) -> 按 C 序 01 起手, scenario 01 design_intent=S(逐页 Suggest). 首站 01.1 课程地图: 读 wds-4-ux-design page-specification template + Trigger Map(轴A/B/C/D) + 01.1 spec -> 讨论页 purpose -> 填 page spec + Sketches/ -> spec<->render probe (Lovable 皮/骨分层 ADR-4). 02.2(#2 选角选轨)随 scenario 02 起手补.