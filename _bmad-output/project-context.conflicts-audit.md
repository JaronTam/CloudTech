# 全文档冲突登记册（project-context.md）

> 伴随：project-context.md | 登记日期：2026-08-03
> 范围：cat1-7 全文档表面冲突（cat6 内部 4 + 跨节 3 = 7），均已解决/标注，无真冲突。

## 一、cat6 内部冲突（4，源自 cat6 审计，详见 cat6-audit.md §二）

| # | 冲突 | 解决 |
|---|---|---|
| 1 | 手动 fold(C) vs CI 自动同步(K) | phased：现阶段手动、scaffold 后 CI merged-only |
| 2 | CUR 硬编码(E) vs 数据驱动(D) | 对象不同：CUR=声明语义不可派生故硬编码、devhint=status 可派生故数据驱动 |
| 3 | sprint 术语(C) vs 单人(party#25) | 术语适配：sprint-status 概念保留、粒度=单人会话/里程碑 |
| 4 | commit 规范化(J) vs 不改写历史 | 非改写：后续 commit 起规范化、不动现有历史 |

## 二、跨节冲突（3，step-03 前审计发现并修复）

| # | 冲突 | 证据 | 解决 | 落盘位置 |
|---|---|---|---|---|
| C4 | 拖拽归属（真冲突） | MVP产品栈 › Lovable边界「Lovable=拖拽」vs ADR-4修订/Framework「拖拽实现=骨=手写」 | MVP产品栈 › Lovable边界 对齐 ADR-4修订：拖拽=骨=手写 | TechStack › MVP产品栈 › Lovable边界 |
| C5 | 形变归属过简 | MVP产品栈 › Lovable边界「形变动效=手写」vs Framework「形变：逻辑=骨、手感=皮」 | MVP产品栈 › Lovable边界 拆分：形变逻辑=骨、形变手感=皮 | 同上 |
| C1 | CI 假设（表面） | smoke「入CI必过」(主题/Testing/Framework) vs cat6 K「现状无CI」 | phased 标注：smoke 入CI必过=建CI后target态、现状手动跑 | cat6 › CI现状+自动同步 |

## 三、状态
- 全文档无真冲突；7 处表面冲突（4 cat6内部 + 3 跨节）均已解决并标注。
- step-03 终稿（2026-08-03）后 project-context.md QA PASS（编码/结构/符号/交叉引用锚解析全绿）。
- C4/C5 同根：MVP产品栈 › Lovable边界 one-liner stale，未随 ADR-4修订更新；step-03 修复。
