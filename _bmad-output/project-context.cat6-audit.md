# cat6 审计登记册（Development Workflow Rules）

> 伴随文件：`project-context.md` § Development Workflow Rules
> 审计日期：2026-08-02 | 规则数：31 | 簇数：12 (A-L) | 表面冲突：4（已解决，非真冲突）
> 用途：持久化 31 条规则 -> 12 簇 -> 源轮次映射，使"逐条 provenance 可溯"在盘上成立（cat6 散文仅 2/12 簇带 inline 源标签，余者源见本册）
> 注（2026-08-03 step-03）：project-context 行号引用已转稳定锚（簇X/节名›规则名，防漂移）；源文档行号引用保留。

## 一、31 条 -> 12 簇合并表

| 簇 | 主题 | 合并的源规则（轮次标签） | 数 |
|---|---|---|---|
| A | Git 分支 + gh-pages 部署 | 原#1, 原#2, 1-5#12 | 3 |
| B | 两套工作流分离 + 术语 + enforcement | 1-5#10, party#24, party#30 | 3 |
| C | 批次声明工作流 | 原#4, 1-5#11, 58/21/30#21, party#25 | 4 |
| D | 状态权威源 + status 语义 | 原#3, 1-5#18 | 2 |
| E | CUR 方案 A + 决策不反复 | 原#5, 1-5#17, party#28 | 3 |
| F | 规格对账 | 1-5#13, 58/21/30#20 | 2 |
| G | scaffold 回写 | 1-5#14, 58/21/30#23, party#31 | 3 |
| H | 皮/骨 + Lovable render loop | 原#7, 原#8 | 2 |
| I | Edit 元经验 | 原#6, 1-5#15 | 2 |
| J | commit 规范 | 原#9, party#27 | 2 |
| K | CI 现状 + 自动同步 | 58/21/30#22, party#26 | 2 |
| L | 数据层 invariant + 体积监控 | 1-5#16, party#29, 1-5#19 | 3 |
| | | **合计** | **31** |

源轮次标签说明：
- `原#` = 早期原始轮次规则（9 条：#1-9）
- `1-5#` = rounds 1-5 派生规则（10 条：#10-19）
- `58/21/30#` = round 58/21/30 派生规则（4 条：#20-23）
- `party#` = party-mode 增补规则（8 条：#24-31）

## 二、4 处表面冲突（均非真冲突，已解决）

| # | 冲突点 | 表面冲突 | 解决 | 落盘位置 |
|---|---|---|---|---|
| 1 | 手动 fold vs CI 自动同步 | C(批次声明手动 fold) vs K(CI 自动同步 gh-pages) | phased：现阶段手动 fold；scaffold 后 CI 自动同步(merged-only)。非冲突，时序演进。K 已标 `(phased)` | cat6 簇K + blockquote ① |
| 2 | CUR 硬编码 vs 数据驱动 | E(CUR option A 硬编码) vs D(数据驱动重算避 stale) | 对象不同：CUR=当批声明语义、status/dev-target 不可派生(sprint-status 派生已否决)故硬编码；devhint=从 status 可派生故数据驱动 | cat6 簇D/簇E + blockquote ② |
| 3 | sprint 术语 vs 单人 | C 引 sprint-status vs party#25 单人非 sprint | 术语适配：sprint-status 概念保留(NewSD 血统)、粒度=单人开发会话/里程碑；truth source=合并记录(PR merged) | cat6 簇C + blockquote ③ |
| 4 | commit 改写历史 vs 规范化 | J(scaffold 转 conventional) vs Git 安全(不改写已发布历史) | 非改写：后续 commit 起规范化，不动 main/gh-pages 现有 commit 历史 | cat6 簇J + blockquote ④ |

## 三、provenance 复核记录（2026-08-02 亲验）

### 带源文档 inline 标签的簇（2/12）
| 簇 | cat6 位置 | 引用源 | 亲验结果 |
|---|---|---|---|
| A | cat6 簇A | `docs/swimlane-dev-history.md` 部署与维护机制(L99-110) + `docs/swimlane-design-rationale.md` §8 维护边界(L106-110) | 命中：orphan 隔离/worktree/git checkout/状态权威源; 注: NewSD 仓库可直推, CloudTech GH013 需 PR(2026-08-04 实测修正, 见 conflicts-audit C6) |
| H | cat6 簇H | `design-process/A-Product-Brief/01-product-brief.md` L97/126/236 + `design-process/_progress/project-memory.md` §8#10(L105) | 命中：render loop/渲染探针/spec<->render/拖拽×字符网格×响应式 |

### 隐式源（内容派生自源文档但散文未 inline 标注，9/12）
| 簇 | 派生源（推断，非 inline 标注） |
|---|---|
| C | dev-history L61（批次声明工作流落地） |
| D | design-rationale §8 L110（状态权威源非图本身） |
| E | dev-history L75（CUR A↔B↔A 反复）+ L85（sprint-status 派生否决，status≠dev-target） |
| I | 元经验（工具行为，非源文档） |
| J | git 实状（commit message 实测：`首次提交项目进度`/`gh-pages: 同步进度图...`） |
| K | git 实状（.github 仅 agents/，无 workflows/） |
| L | dev-history L33（体积 23.5KB->35KB +49%） |
| A 部署段 | dev-history L102-103（Pages 自动重建/Playwright 验证） |

### meta 簇（elicitation/party 派生，无源文档，未伪造 provenance，3/12）
- B 两套工作流分离 + 术语 + enforcement
- F 规格对账
- G scaffold 回写

### git 实状核验
- 分支：`main`(tracked, origin/main) / `gh-pages`(orphan, 仅 index.html) / `update-gh-pages-index` -- `git branch -a` 实测
- 提交信息：非 conventional，中文 `<scope>: <描述>`（实测 `gh-pages:`/`进度图:`）
- CI：`.github/` 仅 `agents/*.agent.md`，无 `workflows/`

## 四、计数口径说明

- **31 条** = 合并前输入规则数（9 原# + 10 1-5# + 4 58/21/30# + 8 party#）
- **12 簇** = 合并后主题簇（A-L）
- **14 条目** = cat6 散文 bold bullet 数（A、L 各拆 2 条）
- **69 条（project-context.md frontmatter `rule_count`）** = 全文档非 ADR 顶层 bold bullet 数（ADR 摘要 13 条除外，含 cat6 的 14）；step-03 去重删 1 条重复 smoke bullet 后由 70 修正为 69（2026-08-03 复核）
- 三者口径不同；不可用条目数(14)或原子子句数(~54)对 31。

## 五、step-03 终稿去重（2026-08-03 已处理）
- cat6 H 皮/骨：压缩为 render loop 工作流增量 + 交叉引用 Framework › Lovable边界=皮/骨分层（结构定义 canonical 留 Framework）
- cat6 F 规格对账：保留工作流增量（早对账/逐FR），加交叉引用 校验引擎 › 共用图数据结构 + TS › 类型即规格（单一规格源）
- cat6 G scaffold 回写：canonical 留 cat6，Framework › 配置 交叉引用之
- cat1-5 内部去重：smoke 策略合并入 Testing（D13/14）、Edit 元经验交叉引用 cat6 I（D22）、离线 smoke 交叉引用 Testing（D16）、两套工作流交叉引用 cat6 B（D20）
- ADR 摘要↔实现：by-design 登记册，未动
- 行号治理：本册 project-context 行号引用已转稳定锚；源文档行号引用保留
