# CloudTech - 项目记忆

**最后更新:** 2026-08-04 (Phase 3 step-09 handover 完成: design intent 收齐 01=S/04=S/02=C/03=C + 4 scenario outline frontmatter 写入; Phase 3 COMPLETE; 02.2 待补 Phase 4)
**状态:** Phase 3 (UX Scenarios) COMPLETE - step-01~09 done (4/4 outline + overview + quality review Excellent + handover; design_intent 01=S/04=S/02=C/03=C 已写入 4 scenario outline frontmatter). 02.2 step spec 待补(Phase 4 随 scenario 02 起手补, 不阻). 下一步 = Phase 4 UX Design (Lovable render loop, wds-4-ux-design, C 序 01->04->02->03, 设计循环从 scenario step 1 起: 首站 01.1 课程地图). Phase 2 (Trigger Map) COMPLETE.

---

## 1. 项目是什么

CloudTech = **个人用游戏化学习工具**(数字/web), 参照 **AWS BuilderCards** 桌游。

**双重目的:**
1. 在构建过程中自学云计算
2. 打磨成可用的云计算学习工具

**所有者:** Jaron | 个人/hobby | 高度协作 | 产品所有者+设计伙伴+目标用户三位一体

**形态:** 单人游戏化云学习工具。分阶段解锁云资源配额 -> 拖拽组装合格云架构栈 -> 双层校验 -> XP 进阶。ASCII concrete-poetry 画布(形式即内容), 双语 zh/en。

---

## 2. 参照对象(已核实, 非脑补)

**AWS BuilderCards (2nd Edition)** - deckbuilding tabletop card game
- 官方页: https://aws.amazon.com/cn/gametech/buildercards/ ; 营销页存档 C:\tmp\buildercards.html
- 规则 PDF(提取文本 C:\tmp\buildercards-rules.txt): 胜利=最多 Well-Architected 点数; WA 卡 1/3 点; Mission 可选 +4; game end=最后 WA 卡被 purchase; 平局=最多 Builder 卡。学习内核(p6)"discuss if your architecture is valid"（压缩自 p6 原文）。
- 牌池: 91 Builder cards(~36 服务) + 9 类 on-prem starter + Well-Architected 卡 + Mission 卡

**NewSD swimlane** (前作, UI/UX+美学血统): https://jarontam.github.io/NewSD/ (存档 C:\tmp\newsd.html); 文档 docs/swimlane-*.md; 继承形式即内容+暗色终端 chrome+离线确定性。

**Bytebase《数据库 DevSecOps 的守护者们》** (Phase 2 角色-职业隐喻来源): 存档 C:\tmp\wechat-article.txt; 职业(战士/法师/德鲁伊/圣骑士)+奇幻风来源; 映射走本质轴(适配云架构域, Bytebase 法师=DBA 不适用)。

---

## 3. 技术与流程配置

方法论 WDS v6 | project_type greenfield | complexity complex | tech React+Vite+shadcn/ui+Tailwind | design_system_mode none(shadcn 由 Lovable 带) | product_languages [zh,en] | comm/doc 语言 Chinese | brief_level complete | strategic_analysis full | root_folder design-process | stakes personal-hobby。
Lovable 集成: Phase 0-4 出规格; Phase 3-4 渲染探针(spec<->render); 取代 Phase 5; Phase 6/7 跳过。栈(full-vision) React+Vite+TS+Tailwind+shadcn+Supabase; **MVP 栈剔除 Supabase**(elicitation 2026-08-02 决策: 单用户+离线硬约束 -> Supabase 非必需, 推 v1.x+; profile/XP=纯本地 IndexedDB/localStorage; 详见 _bmad-output/project-context.md ADR-3)。

---

## 4. Phase 状态

| Phase | 状态 |
|---|---|
| 0 Setup | complete |
| 1 Product Brief (Saga) | complete |
| 2 Trigger Map (Saga) | complete - step-01..09f 完成(S mode, 2026-08-02; 含 mermaid 实渲染验证补强) |
| 3 Scenarios (Freya) | complete - step-01~09 (4/4 outline + overview + quality review Excellent + handover; design_intent 01=S/04=S/02=C/03=C; 02.2 step spec 待补 Phase 4, 2026-08-04) |
| 4 UX Design (Freya <-> Lovable) | pending |
| 5 Build | lovable (取代) |
| 6 Design System | skipped |
| 8 Product Evolution | pending |

---

## 5. Phase 2 决策（step-00b 敲定 2026-07-30）

> 完整论证 + 过关条件备选库见 phase2-decisions.md（核心洞察 / 角色分类 / MVP范围 / O1-O3 / 叙事钩子 / 过关条件备选库：全 A/B/C/D+α/β+c i/ii/iii）。本节为 consolidated 摘要；B 认证细节、MVP 课程命名、provenance 仅存于此。

- **核心洞察**: 三元组(IaaS 控制面) vs 课程(serverless/构建面) = 两条正交角色入门轨, 非 bug; 三元组=圣骑士轨 entry, serverless=战士轨 entry。
- **角色分类(本质轴)**: Dev=战士 / Ops=圣骑士 / SA=法师阵法师=共享引擎(非可玩职业); 参考(不实装) 德鲁伊=Platform, 三头龙=DevSecOps。
- **B 认证 = Cert-NO**: 不进课程目标/范围, 目的=自我提升; 圣骑士轨=纯 Ops 控制面掌握, 无 cert alignment; CCP/ACA 降为可选外部参考(非驱动); driving force=intrinsic(自我提升/掌握/守护/布阵); persona=Jaron-as-practitioner。
- **C persona = 1 Jaron + 2 子目标**(Dev/战士 + Ops/圣骑士), 自由顺序玩两轨, 两轨都通关; 职业 roster 可扩展(MVP 2, v1.x+); 解锁机制细节=Phase 3-4。
- **A 业务目标 + 过关条件**: O1=新手入门=双轨通关(MVP); 过关=A3+B1+B3, c 剔除(A3: a句法=floor, b语义图匹配=goal; B1: b多参考匹配容许多解; B3: b constraints 打分->WA 分阈值=BuilderCards WA 点胜利落地, XP=WA 点; C1 优化=可选 bonus; 耦合路径 β); O2 折进 O1; O3=产品(双语 zh/en+ASCII 形式即内容+暗色终端 chrome+桌面 web 优先+离线纯前端, Lovable 栈)。
- **MVP 范围 = 2 可玩职业**(战士+圣骑士), 法师=共享引擎。双轨课程(first-pass 提案, Phase 3-4 从 entry bar 重设计): 战士轨 MVP W1 静态站+W2 serverless(entry=serverless 端到端交付); 圣骑士轨 MVP P1 三元组单实例[EC2+VPC+EBS, 新增, =Core Signal]+P2 容器[L3](entry=三元组)。选角=皮肤+切片。
- **双轨课程表 provenance**: W1/W2/W3/P2/P3=brief 6 级表切片; P1=从 Core Signal 构造(brief 无, 拉 v1.x IaaS 进 MVP); first-pass 提案, 有构造缝, Phase 3-4 从 entry bar 重设计。
- **叙事钩子**: 迁移叙事脊(退役 on-prem->cloud=体修转法修 metamorphosis); 9 类 on-prem starter=体修旧兵器, 退役即转职; 垂直迁移轴=修仙境界轴。每轨各自味。

---

## 6. Phase 1 定稿决策

学习闭环: 阶段配额解锁(服务集+cap)->拖拽组装栈->双层校验->XP->进阶。无双币(单一阶段配额)。AI=纯导师/验证器(α, 无对手)。

双层校验(共用图匹配引擎, 纯前端 TS, 离线, 无运行时 AI): (a)句法=牌面1:1组合效应(局部 required edge); (b)语义=参考架构规格 S(required nodes+edges+constraints, 全局图模式匹配)。开放 LLM Q&A+LLM 验证=v2。

> Phase 1 的 (c)理解层 / 6 级线性课程 / 线性退役映射(SAN->S3+CF/DB->DDB/BareMetal->Fargate) 已被 Phase 2 重新定义: c 剔除->过关重构 A3+B1+B3(§5); 6级线性->双轨(§8#1); 线性退役->双轨重排(§8#4)。brief 正文已 step-00f 回写(2026-07-31); 备份 C:\tmp\01-product-brief.pre-00f.bak.md。

---

## 7. Deferred / 待补

1. 组合效应逐牌规则(1:1->draw/credits/adopt/retire, 无逐牌 combo)->MVP 自拟, 内容创作期。
2. v1.x on-prem 退役映射->并入 §8 #4(双轨重排)。
3. AWS 案例 citation->延后(P2 可扩展入口)。
4. 参考架构规格 schema(node/edge/constraint)->Phase 3-4, 双轨两套模式集(IaaS+serverless)。
5. LLM provider+key->仅 v2。

---

## 8. Phase 3-4 提醒（务必带到 Freya/Lovable）

> Phase 2 把大量课程/机制细节显式 defer 到 Phase 3-4。进 Phase 3-4 前必须读本节 + phase2-decisions.md §8(过关条件备选库)。

1. 双轨课程从 entry bar 重设计(非切片旧阶梯): 圣骑士轨从三元组向上(单实例->容器infra->HA); 战士轨从 serverless 向上(FaaS->事件FaaS)。
2. P1 三元组单实例精确栈: EC2 vs Fargate? 容器 Nginx? 三元组合格判据("HTTP 200 公网可达")如何映射进图匹配校验。
3. **过关条件 spec(敲定 A3+B1+B3 的实现)**: WA 支柱打分/权重/阈值; 多参考集策展; 组合规则逐牌; **B3 必要性判断**(b 的 constraints 是否已编码 WA 支柱->若已编码, B3 退化粒度, 纯 a+b α 可能够, 需 re-decide); C1 优化 bonus 落地。备选全量见 phase2-decisions §8。
4. 退役映射双轨重排: P1(EC2+VPC+EBS)牵动 Virtual Machine/Networking/SAN 归属; 原线性退役重排。
5. cap 双轨重定(复用线性阶梯不平滑)。
6. 容器(L3/P2)轨道归属: container-app(战士/Fargate serverless) vs container-infra(圣骑士/ECS on EC2) vs 共享。
7. W1 静态站 vs 战士轨 entry bar(serverless)错位: on-ramp 重定。
8. 两轨共享服务一致性: S3(VV1/W2), VPC(P1/P3) 跨轨图规格统一。
9. 选角机制落地: 皮肤+切片; 选角后进程(自由顺序, 已定; 解锁机制细节待)。
10. 渲染风险验证(Lovable render loop): 拖拽×字符网格×响应式 / ASCII 形变动效 / form=content 交互(自动收敛/用户摆位/混合)。
11. MVP scope: 双轨 MVP=4 关(W1+W2+P1+P2)。**P1 三元组 = MVP 硬必需**(step-00e 决, 非可选 on-ramp) - O1=双轨通关 by def, 砍 P1->圣骑士轨无内容->双轨坍缩->O1 失效; lean 靠排序(战士轨先)降风险, 不砍范围。〔原 open: lean 是否接受/P1 可选 on-ramp, 已决〕
12. 认证(CCP/ACA)=已定 Cert-NO(不进范围); 若后续 re-decide 见 §5 B。
13. **多云 MVP scope = AWS+GCP+CF**(用户定, 2026-07-30): CF 无 IaaS 三元组->圣骑士轨对 CF 缺位->双轨课程按云能力画像分轨; 详见 §12#5。B1 多参考集扩三云; B3 WA 支柱打分云无关(仍适用)。
14. **过拟合红线(强约束)**: 每个 gamification 映射须过 §13 四项检测 + 定量预算; 失败即废。详见 §13。
15. **云技术栈复查(用户提交 + Saga 复查, 2026-08-01, step-05)**: 全文见 design-process/_progress/tech-stack-review-2026-08-01.md。6 点须带 Phase 3-4(IaC 标 v1.x+/多云变体补全/真实操作 bar 区分/egress 成本拆分/W1 错位/P2 归属)。守序术语澄清: 圣骑士轨=秩序, 双轨通关=守序(§12#14), 勿挪到单轨。
16. **on-prem starter 张数复核（退役映射前置, step-07g 审核发现）**: 规则书正文称 10 张、目录明细 3 Bare Metal + 8 类各 1 = 11 张、标题写 10，源不一致；文档现统一标 9 类（类型数）。Phase 3 退役映射前须复核 PDF 确认精确张数（影响退役机制 1 类=1 转职基数）。详见 brief:194。

---

## 9. 文件地图

```
C:\Two\CloudTech\
+-- design-process/                      (WDS 制品根)
|   +-- _progress/
|   |   +-- 00-design-log.md             <- 进度(live tracker)
|   |   +-- wds-project-outline.yaml     <- 配置 source of truth (勿改)
|   |   +-- project-memory.md            <- 本文件
|   |   +-- resume-prompt.md             <- 新会话恢复提示词
|   |   +-- phase2-decisions.md          <- [Phase2] 决策详单+过关备选库(§8) [冻结]
|   |   +-- tech-stack-review-2026-08-01.md <- [Phase2 step-05] 技术栈复查 [冻结]
|   |   +-- mermaid-render-verify-2026-08-01.md <- [Phase2] mermaid 实渲染验证 [冻结]
|   |   +-- validate-mermaid.js          <- mermaid 验证脚本
|   |   +-- agent-experiences/           <- 设计讨论压缩洞察(日期文件)
|   +-- A-Product-Brief/                 [Phase1 产物]
|   |   +-- 00-product-brief.md          <- WDS 模板初版
|   |   +-- 01-product-brief.md          <- 定稿(完整战略基础)
|   +-- B-Trigger-Map/                   (Phase 2, Saga, complete)
|   |   +-- 00-trigger-map.md (+.svg)    <- hub
|   |   +-- 01-Business-Goals.md
|   |   +-- 02-Jaron-the-Dual-Track-Apprentice.md
|   |   +-- 05-Key-Insights.md
|   |   +-- 06-Feature-Impact.md
|   +-- C-UX-Scenarios/                  (Phase 3 COMPLETE, Freya)
|   |   +-- 00-ux-scenarios.md           <- overview(step-06)
|   |   +-- 01-jaron-builds-validates-stack/ (outline + 01.1-01.4 step spec)
|   |   +-- 02-jaron-selects-track-onboards/ (outline + 02.1; 02.2 待补 Phase4)
|   |   +-- 03-jaron-reviews-architecture-compares-clouds/ (outline + 03.1)
|   |   +-- 04-jaron-manages-saves-progress/ (outline + 04.1)
|   +-- D-Design-System/                 (Phase 6 skipped; 00-design-system.md 空 scaffold)
+-- _bmad-output/                        (BMAD 产物根)
|   +-- project-context.md               <- AI agent 规则(canonical, cat1-7+ADR)
|   +-- project-context.cat6-audit.md    <- cat6 审计登记册(历史快照)
|   +-- project-context.conflicts-audit.md <- 冲突登记册(历史快照)
|   +-- implementation-artifacts/        <- 空(scaffold 后填充)
|   +-- planning-artifacts/              <- 空
|   +-- test-artifacts/                  <- 空
+-- _bmad/                               (BMAD v6.10.0, tracked)
+-- .agents/ .claude/ .cline/ skills/    (gitignored, 可重装)
+-- .github/agents/                      (tracked, agent 定义; 无 workflows)
+-- docs/                                (AWS BuilderCards Rules.pdf, swimlane-*.md)
+-- site/index.html                      (进度图, gh-pages orphan)
+-- C:\tmp\                              (外部存档: buildercards/newsd/wechat 等, 临时区可能清理)
```

---

## 10. 驱动力与优先级定稿（G1改/G3补/G4补/G2决轴D单列, 2026-07-30）

用户复查后修订。共享轴 + 自主掌控 + 角色正/负向; 原 N1(复杂度)否决, N3/N4 并入轴C, 角色负向重补(G3)。

**轴A 合理框架判断力 (核心, 架构层云无关):**
- 正: 掌握何为合理云架构(半成品组件合理搭配产出整体, Q2).
- 负(用户侧, G1改): 怕游戏逻辑失真(与真实云逻辑不同步)被误导 -> 学到错误的「何为合理」判断(形式过关但实质不懂)。
- 机制: 游戏逻辑 ↔ 云计算逻辑 同步 = 游戏化定义(N2); 产品侧约束=同步真假/游戏化质量。

**轴B 目的抽象记忆 (组件层, 单云深度):**
- 正: 把每个组件/术语的研发目的抽象为深印象概念 -> 可接受+可记忆.
- 负: 怕记不住服务组合 / 学完即忘.
- 机制: 目的->概念抽象; 通关后产游戏图谱->云计算框架图映射(提升记忆性).

**轴C 里程碑进度感:**
- 正: 进度有里程碑可量(双轨各自).
- 负: 怕无里程碑 -> 迷失/不知是否在前进(原 N3 浅尝辄止/N4 拼不拢 = 无里程碑的症状).
- 落地: 双轨里程碑结构 = Phase 3-4 课程重设计(见 §8).

**轴D 跨云类比理解 (G2 决: 单列, 动机=云无关可迁移, 2026-07-30):**
- 候选正: 学到可迁移、云无关的云概念(同一概念跨 AWS/GCP/CF 实现差异+权衡).
- 候选负: 怕被单一厂商思维锁定 / 三云细节记混.
- 注: 与轴B共享抽象机制, 目标不同(轴B=记忆深度, 轴D=可迁移广度); 与轴A互补(轴A=架构层云无关, 轴D=组件层云无关)。
- 核心设计挑战: 如何把可迁移/相通的云概念游戏化(见 §12#10)。

**自主掌控 (G4 补):**
- 正: 自由选学习路径/职业/顺序, 自主掌控节奏.
- 负: 怕路径选错/走弯路(决策负担; 与轴C 迷失部分重叠).
- 注: 存在混合职业(hybrid class)可能 -> Phase 3-4 scope(扩 §8#9 角色机制)。

**角色正向:**
- Dev/战士: 速度/迭代, 快速搭出能跑的 serverless 栈.
- Ops/圣骑士: 守护/可用, 搭出扛得住的控制面栈.

**角色负向 (G3 补; 角色定位致云计算视角不同):**
- Dev/战士: 怕构建面视角偏狭 -> 追速度忽视可靠性/成本/运维(能跑但不稳不省).
- Ops/圣骑士: 怕控制面视角偏狭 -> 过度防御致成本失控 / 忽视敏捷构建.
- 设计链接: 双轨强制玩家见两面, 治单一视角偏狭。

力集定稿 -> 00e 优先级(frequency/intensity/fit).

**step-00e 优先级定稿(2026-07-31):**
- Top 5 drivers: 轴A正 + 轴A负 + 轴B正 + 轴B负 + 轴D正(第5, 胜 轴C正)。
- 排序(四维: freq/intensity/fit 纯契合度 + 价值层级 tie-breaker):
  | 力 | freq | intensity | fit | 价值层级 |
  |---|---|---|---|---|
  | 轴A正/负 | H | H | Highest | 核心价值/风险(最高) |
  | 轴B正/负 | H | H | H | 记忆手段层(中高) |
  | 轴D正/负 | M | M-H | M-H | 长期价值/风险(高) |
  | 轴C正/负 | M-H | M | H | 体验/动机层(中低) |
  | 角色正/负 | M | M | M-H | 认知涌现层(中) |
  | 自主掌控 | M-H | M-L | M-H | 元/方式层(低) |
  最终: 轴A > 轴B > 轴D > 轴C > 角色 > 自主掌控。
  三维主排序 + 两处 tie-breaker(三维持平时价值层级生效, 非全局 override):
  - 轴D vs 轴C: 三维接近(轴D intensity 高/轴C freq+fit 高) -> tie-break 长期价值/风险(轴D) > 体验/动机(轴C) -> 轴D > 轴C
  - 角色 vs 自主掌控: 三维接近(自主掌控 freq 高/角色 intensity 高) -> tie-break 认知涌现(角色) > 元/方式(自主掌控) -> 角色 > 自主掌控
  - 轴B vs 轴D: 三维差距大(H/H/H vs M/M-H/M-H)三维主导 -> 轴B > 轴D, 价值层级(轴D长期价值>轴B记忆手段)不 override
  fit=纯契合度(产品 address 能力), 不混价值权重; 成型度: 轴A(校验核心)Highest > 轴B(对比记忆)/轴C(里程碑)H > 轴D(抽象未解§12#10)/角色(选角defer)/自主掌控(混合职业defer) M-H。
- **轴A enrichment(step-00e refinement)**: 轴A「合理框架判断」并入「IaaS控制面 vs serverless构建面 的合理搭配判断」(何时自守控制面/何时交厂商/速度代价) - 源自 CF 缺位 + 圣骑士/战士 gamification 探索(见 §12#11/#12)。

**step-05 Prioritization 完成(2026-08-01, Workshop 4 用户确认):**
- 挑战1(轴D正>轴C正)确认: 轴D正 fit 被现实论证补强--(1)云厂商重大事故/产品与设想不一致的现实风险;(2)康威/逆康威定律下可迁移(变形金刚)技术栈更控成本。轴C正(里程碑进度感)属体验/动机层,现实驱动力不及轴D正属价值/风险层。排序不变。
- 挑战2(执行序先战士轨)确认: 顺序无关(§12#14)=守序达成认知(终态);先战士轨(00e feasibility)=MVP 执行序(过程),两者不同层面不矛盾。feasibility(战士轨 High:标准架构+全多云+brief切片) + 技术学习梯度(构建面认知先行再底层秩序)双论证。维持 00e feasibility-first。
- MoSCoW focus statement 定稿(step-05 Workshop 4 形式, 与上方核/守/承/扩/形同内容两表达):
  - Must: 轴A正(O1 双轨4关过 A3+B1+B3校验) + 轴A负(§13 过拟合红线,四项检测+定量预算)
  - Should: 轴B正(对比记忆 EN规范术语+CN概念锚) + 轴B负(通关后游戏图谱->云架构图映射)
  - Could: 轴D正(多云参考集+云无关抽象,S3/R2/GCS变体对比) + 轴D负(云无关抽象层+变体对比,若里程碑许可)
  - 形(容器,非力): O3(ASCII形式即内容+终端chrome+离线+双语+Lovable栈)
  - 执行序: 先战士轨跑通闭环、严守不失真 -> 扩双轨+多云 -> 双轨通关 MVP

---
## 11. 沟通偏好


术语对照表(硬编码/pin/lock/hardwire/freeze 等)见 AGENTS.md 全局偏好。"锁定"分义: 决策已定义义=口语化禁用(->敲定/确定); 工程义可用(pin/lock-in/unlock)。

---

## 12. Phase 2 涌现的设计原则与机制种子（2026-07-30, 待 Phase 3-4）

1. **游戏逻辑 ↔ 云计算逻辑 同步** = 游戏化定义/核心机制(N2)。游戏背后必有逻辑; 产品职责=保持两层逻辑同步, 使"懂游戏"="懂云合理"。
2. **组件研发目的 → 深印象概念抽象** = 记忆性机制(N1重定)。复杂度相对, 非问题; 真正杠杆是把每个组件/术语的设计意图抽象成可记概念。
   - 示例(对象存储): Amazon S3 = 金库领主(安全可靠, 取物收传送税=egress); Cloudflare R2 = 自由贸易港主(彻底豁免传送税, 且 S3 口令/API 兼容)。egress 成本=云逻辑, 传送税=游戏抽象, 两层同步。
3. **通关后 游戏图谱 → 云计算框架图 映射** = 记忆性增强机制(用户提议)。通关产出可对照的真实架构图, 加深印象。
4. **双轨里程碑** = N3/N4 重定; 战士轨/圣骑士轨各自需进度里程碑(非仅终局通关)。Phase 3-4 课程重设计落地(见 §8 #1/#5/#11)。
5. **多云 MVP scope = AWS+GCP+CF**(用户定, 2026-07-30)。原 AWS-only 假设(§5/outline)扩至三云。张力: CF 无 IaaS 控制面三元组(纯 serverless/edge+R2), 圣骑士轨(IaaS)对 CF 缺位 -> Phase 3-4 双轨课程须按云能力画像重设计(AWS/GCP 双轨全; CF 偏战士轨/serverless)。参考架构集(B1)跨三云策展。
6. **角色机制 defer Phase 3-4**(用户问, 2026-07-30): 角色分类本质轴(战士/圣骑士/法师)已定(§5); 组件-角色抽象原则已捕获(本节#2); 选角机制(skin+slicing/unlock)+逐组件角色设计 = Phase 3-4(§8 #9), 依赖课程关卡结构。不阻塞 00e(力优先级)。
7. **角色视角差异**(G3, 2026-07-30): 不同职业/角色定位导致云计算视角不同(Dev 偏构建/速度, Ops 偏守护/可用)。双轨设计强制玩家见两面, 治单一视角偏狭; 角色负向=各自视角盲点(Dev 忽视可靠性/成本; Ops 过度防御/成本失控)。
8. **自主掌控 + 混合职业**(G4, 2026-07-30): 自由选路径/职业/顺序为驱动力; 混合职业(hybrid class)为 Phase 3-4 可能 scope(扩 §8#9 角色机制/选角)。
9. **轴D 已决**(G2, 2026-07-30): 单列, 动机=学云无关可迁移概念(选 a)。详见 §10 轴D。
10. **核心设计挑战: 可迁移云概念的游戏化**(用户提, 2026-07-30): 轴D 的关键=如何把可迁移/相通的云概念(egress 成本/对象存储/CDN/serverless 等云无关概念)游戏化, 使游戏元素承载云无关本质(而非某厂商细节), 厂商差异作变体(如 S3/R2/GCS=不同税收政策的金库领主)。连接轴A(逻辑同步=同步云无关概念逻辑, 跨厂商成立)+轴B(目的抽象)。落地=Phase 3-4 抽象层设计。
11. **对比记忆 = 中英混用记忆机制**(step-00e 澄清, 2026-07-31): 云术语不直接翻译, EN 规范术语固定 + CN 抽象概念锚混用, 对比(EN<->CN)强化记忆。= 轴B 目的抽象记忆的承载机制(形式即内容视觉承载); 连轴D 跨云变体对比(S3/R2/GCS 同概念不同税收)。〔此前未记录的 WHY, 补〕
12. **圣骑士/战士 + CF gamification seed**(step-00e, 2026-07-31; 过 §13; Phase 3-4 落地): CF 缺位=教学资产, 非缺陷。
    - 圣骑士(控制面守护者)+CF 缺位(无 IaaS): games 控制面守护边界(IaaS 自守 vs serverless 厂商守), 治圣骑士 G3(过度防御)。
    - 战士(构建面速度者)+CF 主场(serverless): games 构建面速度代价(serverless 隐藏成本/可靠性, eg egress), 治战士 G3(忽视成本/可靠性)。
    - 双轨治偏狭: CF 不对称战场 - 战士 thrives 见其 G3, 圣骑士 absent 见其边界。
    - 回响轴A(IaaS vs serverless 控制面归属判断)+轴D(控制面抽象层级+egress 差异)。

13. **点亮科技树 = 里程碑/职业解锁可视化**(step-02, 用户定, 2026-07-31; 过 §13; Phase 3-4 落地): 每完成一个轨->点亮对应职业节点(战士轨通关->点亮战士; 圣骑士轨通关->点亮圣骑士; 双轨通关=双职业点亮)。= 轴C 里程碑进度感承载机制 + 角色系统解锁可视化。区别选角(=游玩选择, §8#9): 点亮=完成解锁(achievement)。映射过 §13: 科技树=progression 结构 / 点亮=achieve-unlock / 职业=class, 各一词一映射, 无奇幻装饰层, 头衔<=2词。连接 O1 timeline 表达(点亮科技树执行序)。〔候选入 brief 画布形式系统, Phase 3-4 定；+ §12#14 守序=双轨 milestone 认知升维〕

14. **[守序] 阵营 = 双轨通关认知升维**(step-03, 用户定, 2026-07-31; 过 §13; Phase 3-4 落地, MVP 轻量可行): 双轨通关(W1+W2+P1+P2) -> 解锁 alignment: lawful。映射: 战士轨(serverless/构建面)=混沌/自由(抽象底层, 不操练秩序); 圣骑士轨(IaaS/控制面 EC2+VPC+EBS)=秩序(定义边界, 秩序操练); 双轨=守序(认知升维: 既懂自由构建面又驾驭契约控制面, 理解并维持底层秩序)。顺序无关(战士->圣骑=中立->秩序; 圣骑->战士=秩序驯混沌; 两序皆达; 默认序战士先=00e feasibility)。= 治偏狭(§12#7)认知产出命名 + 双轨 milestone(§12#13 点亮职业 + 守序)。MVP 落地零风险: local Profile state(class: warrior/paladin, both true->alignment: lawful) + 显示(画布角/面板/通关总结, 守序标签+天平 glyph), 无关卡逻辑改。映射过 §13: 守序=单一概念(双轨认知), 各轨一词一映射, 无奇幻装饰, 头衔2字; icon 简化(守序标签+天平 glyph, 避'天平衡量者'头衔膨胀)。区别选角(§8#9): 守序=双轨达成成就, 非游玩选择。

## 13. 强约束：游戏化不得过拟合（用户定, 2026-07-30）

> 硬约束(红线), 优先级高于 §12 设计原则。Phase 3-4 每个 gamification 映射须过下四项检测 + 定量预算; 任一不过即废。

**约束**: 不得为云计算游戏化而过拟合--即用堆叠的奇幻/装饰层"包装"云概念, 致映射失真、核心稀释、不可迁移。游戏化 = 把云属性抽象成承载本质的游戏概念(§12#1 逻辑同步 + #2 目的抽象); 装饰为映射服务, 不取代映射。

**典型反例(用户, Amazon S3)**:

> 星界奥术图书馆的永恒青铜巨像守护者, 唯有献祭奥术水晶才能开启跨位面传送卷轴, 取出你寄存的真理卷轴。

**四项检测(任一失败即过拟合)**:

1. **映射单一性**: 每个修饰词/头衔词只承载一个核心映射, 且须能一句话说出"此词 = 此云属性"。反例失败: 混淆持久性 / API 调用 / 传出流量费, 不知映射哪个。
2. **修饰词预算**: 装饰层最小化; 不为映射服务的修饰词 = 噪声, 删。反例失败: 星界/奥术/青铜巨像/跨位面传送卷轴各自需额外解释, 听众装不下。
3. **核心保留**: 映射须保留服务核心可区分属性(S3 = 海量存储 + 传出流量费)。反例失败: 比喻变奇幻设定展览, 核心被稀释。
4. **可区分性**: 听完须知道服务干什么 + 与同族服务区别。反例失败: 自嗨型类比, 酷但无用、不知与兄弟服务区别。

**定量预算(用户定, 2026-07-30)**: 每个角色/服务映射只保留 **1 个最突出职能标签 + 1 个核心价格/行为差异**; 禁止三词以上的魔幻头衔。跨变体差异(如 API 兼容)另计, 不计入单角色预算。

**正例对照(§12#2, 过四项 + 预算)**: S3 = 金库领主(安全可靠, 取物收传送税); R2 = 自贸港主(免传送税, 兼容金库口令)。只保留 3 个核心映射(存储安全 / 传出流量费有无 / API 兼容), 每词承载一映射, 无多余奇幻层; 头衔 2 词(金库领主 / 自贸港主), 简洁度对齐战士 / 圣骑士。

**适用**: Phase 3-4 每个 gamification 映射(spec / 角色 / 机制)上线前过四项检测 + 定量预算; 过拟合 = 废弃重做, 不靠加修饰补救。


## 14. Phase 3 进度与开放问题（Session 8, 2026-08-03, Freya; step-02->04 补录）

> 补录: step-02~04 决策原于对话进行、2026-08-03 据 handoff 重建落盘 (经 Trigger Map/产品简报交叉验证). step-05~09 见下方各场景条目 + Session 12.

**进度:**
- step-01 load-context COMPLETE (上下文摘要呈交, fresh-start 确认).
- step-02 analyze-scope CONFIRMED: 4 归属问题已决 -> 11 候选视图收敛为 8 页 + 非页表面 (见下页清单).
- step-03 build-strategic-context COMPLETE: 4 strategic context chains (BG->persona->force->transaction), Decision Matrix 7 问/chain, 页分配, coverage 8/8.
- step-04 suggest-scenarios COMPLETE (USER APPROVED): 4 场景, C 序 (覆盖默认优先序).
- step-05~08 done: 4/4 场景 outline (01 全4步 + 04 outline+04.1 + 02 outline+02.1 + 03 outline+03.1; 02.2 step spec 待补 Phase 4) + step-06 overview + step-07 quality review(4 场景全 Excellent, 阈值全过无修法) + step-08 log. step-09 handover 进行中(暂停于 design intent 选择, 待用户选每场景 [K/C/S/D/L]; 选完写 frontmatter + Phase 4 说明 + 标 complete + [M]). 详见本节末 Session 12. 2 Phase-4 working assumption(通关总结 per-level+W2/P2轨末标记; XP固定/多参考等权)见 01.4 spec.

**页清单 (step-02 确认, 11->8):**
- 8 页: #1 总览 | #2 选角+选轨 | #3 课程地图 | #4 画布(核心) | #5 牌池 | #6 XP/进阶 | #7 对比记忆 | #8 Profile/存档
- 非页表面(不入页清单): 校验结果=overlay on #4 | onboarding=mode(track-agnostic,首玩关 profile skip) | 通关总结=Tier-3 overlay on #6 + #6 徽记 | 4 关卡(W1/W2/P1/P2)=template+variants(=#4 画布 instances) | 牌面=template(component) | 准入=#4-entry guard(source-agnostic) | 降级态=#4 fault state

**step-04 已批方案 (C 序 = 创建序, Q2=2b 锁定):**
- 01 Jaron 组装并校验云架构栈 [P1] 页 #3 #4 #5 #6  <- 首序
- 04 Jaron 管理存档与进度 [P3] 页 #8  <- 第2序: 锁 schema 供 02 消费
- 02 Jaron 选轨并首次上手 [P2] 页 #1 #2
- 03 Jaron 回顾架构与多云对比 [P2] 页 #7

**锁定决策 (8 关键 + 修法):**
1. Q1=1a: memory(#7) 纯读, 产 no save-data
2. Q3=3a: 单 XP=WA (降级态 halt accepted + visible report; 3b 拆 mastery/progression 延 Phase 4, hinge B1 表达力/降级频率)
3. Q2=2b: 单序 C = 创建序 01 core -> 04 save -> 02 entry -> 03 memory (schema-lock via save 第二; 覆盖 step-05 默认优先序)
4. FS1=A: memory 读 passes-only (牌组历史 仅成功态); 降级->校验日志(dev); 角色分离 memory=user passes / 校验日志=dev failures+降级
5. MAINTAIN P2: C1(entry) 留 P2 (设计依赖强制 core 先; Cl1 结构半须折入 01-core 早设计, mode 半入 02-entry)
6. 准入 = #4-entry guard: source-agnostic, derived from unlock invariant (required_cards ⊆ unlocked_cards, 纯函数 XP->牌), 非 #3-only; #1/#3 仅显示
7. 阈值不变量: pass N(min WA) -> unlock N+1 cards, 可单测(JSON fixture); per-track XP(战士XP/圣骑XP)
8. 决策A(step-05 01.3): 校验触发=手动提交 CTA(非自动即放即校验), 对齐轴A正判断练习(build then validate); 自动即放即校验=预empt判断, 否决

修法: 弃局 S3(认输+揭示参考架构, gating N 失败, peek-then-pass=自欺 MVP 受/v1.x) | reset 护栏 G4(danger-zone)+G2(type-confirm)+G3(export-first) | onboarding=mode(track-agnostic) | #11=Tier-3 overlay+#6 徽记 | #6 校验=overlay on #4 | 双语=always-on 内容(非 setting toggle)

**Spec carry-overs (入 step-05+ detail, 不阻 outlining):**
- 跨链契约 CS1: C1<->C2 路由(选轨->首玩关) | C2<->C3 reflect(pass->review) | C3<->C2 return(review->retry) | C2<->C4 save(auto/manual)
- schema 归属 CS3: #8(04) 拥 profile/XP schema; #5/#6(01) 经 invariant 消费
- 进度单一真源 CS6: #6(01 XP) 权威; #1/#8 派生
- GS1(新): 双角色 IA - role-separation 须 UI 明示 dual-role Jaron 导航(failures->校验日志 / passes->memory)
- GS3: reset/import per-store scope(牌组历史+校验日志)
- 残余簇: Cl1(onboarding 不对称,圣骑 P1 陡) | Cl2(W1->W2 B1/B3 预教) | Cl4(W1 校验薄) | Cl5(窄屏/CJK) | Cl6(#7 可跳过) | Cl11(per-level 画布态) | FS2(memory comparison 瞬态,accepted) | FS3(3a hinge 降级频率,延 B1) | NC1(peek 自欺 MVP 受) | NS3/NS4(per-level state/level identity) | CS4/CS5/CS7

**流程提醒:**
- wds-3-scenarios = step-file 架构, 严格按序; step-02/04 = user checkpoint (均已过).
- WDS 制品根 = design-process/; config.output_folder=_bmad-output 是 bmad 输出目录, 两者不同; step 文件内 {output_folder} 按 design-process/ 解析.
- 当前: Phase 3 step-01~08 done (4/4 outline + overview step-06 + quality review step-07 Excellent + log step-08); step-09 handover 暂停于 design intent 选择. 详见上方进度 + 本节末 Session 12.
**10 人模拟发现 (2026-08-03, 场景 01+04 outline 后):**
> 10 edge-case 用户走 01+04 流程. sunshine path 全成立无 mid-flow 死端; 缺口集中终端态+边缘态+Phase-4 细节.

已决(按推荐):
- B1+B2 全通关终端态: 01.1 全通关态 display(无未通关关)+01.4 Tier-3 escalated overlay on #6(第3层 terminal, O1 达成). 落 01.4 Phase-4 flagged.
- C1 弃局后 flow: on-page retry(揭示后重试, peek-then-pass 自欺 MVP 受 NC1). 落 01.3 spec.
- D1 校验日志 audience: user-visible 诊断详情(owner 可见, 非 dev-only; 与牌组历史 passes 分离). 解 FS1=A "dev" 歧义. 落 04.1 spec.
- F1 降级态 exit: halt 后 = retry submit / 离开回 #3(不进 01.4). 落 01.3 spec.
- H1 Cl5 carry-over: 落 01.3 spec carry-overs.

延 Phase 4 open issues (tracked, 不阻 outline):
- A1 初始解锁集(XP=0 各轨解锁牌) / A2 per-track unlock 独立性(战士 XP 是否解锁圣骑牌)
- C2 弃局 N 值(几次失败解锁弃局)
- E1 reset 粒度(full/per-track/per-store) [耦合 X1/X2 carry-over 矛盾: CS6 不写-XP vs reset/import 写-XP / GS3 scope(history+logs) vs 解锁纯函数 reset-改-XP; 同决] / E2 G3 export-first 失败处理 / E3 export 范围与机制(localStorage+IndexedDB 合并) / E4 import 原子性(部分坏 all-or-nothing) / E5 钳制反馈(silent/warn) / E6 schema_version 迁移
- G1 守序 lawful 触发条件(两轨 started vs passed) / G2 守序 partial states display
- I1 首玩 flow 依赖 scenario 02(C 序 known gap)
**场景 04 复查 (2026-08-03, 继 10 人模拟):**
- X3(D1 传导 outline Q1/Q8/carry-over)/X4(GS1 "双角色"->"passes/failures 数据角色") 已修(含 04.1 Page Purpose 残留 dev/双角色).
- X1(CS6 不写-XP vs reset/import 写-XP)/X2(GS3 scope vs 解锁纯函数 reset-改-XP) = 耦合 E1(reset 粒度), Phase 4 同决, 不自动改.
- 画布态缺口 [复查-C1] 决 = A: per-level 进行中草稿 = 第 3 个 IndexedDB store(画布态/草稿, auto-save CS1 C2↔C4, resume); #8 view/export/import/reset 纳入; 3 store 3 角色(passes/failures/drafts)不混. 改 ADR-6 + 04 outline/04.1 spec + CS3(拥画布态 schema) + GS3(scope+画布态) + FS1=A(3 角色) + CS1(画布 auto/manual 写画布态 store). X1/X2 仍随 E1.
- N1(画布态 import 信任边界, 复查新增): import 信任边界 2 类(Zod schema + 上限钳制) -> 3 类, +画布态 graph 校验(nodes≤32[project-context L53 规模封顶] / cards ⊆ unlocked[锁定决策6 准入 invariant, 纯函数派生] / valid edges[NODES/E from-to 引用现存 node]). 改 04 outline+04.1 carry-over(2 处) + 传导枚举位(Q1/Q8 outline + Page Purpose/On-Page 04.1, X3 先例; Q7 商业成功留 shorthand). graph 校验失败处理耦合 E4(import 原子性 all-or-nothing 含画布态) + A2(cards ⊆ unlocked 须选定 per-track unlocked 集), Phase 4 同决. 无冲突(E4 正交互补 / 解锁纯函数一致 / nodes<=32 既有).

**场景 02 outline + 复查 (2026-08-04, Session 9 续, Freya; Suggest mode):**
> 场景 02 选轨+首次上手 [P2, C 序第3] 页 #1 总览+#2 选角选轨. Suggest 模式 8 问 + 2 轮 10 人模拟 + 复查闭环. I1 首玩 flow 在此消解.

outline (02-jaron-selects-track-onboards/) + 首步 02.1 auto-processed (02.1-overview/). 决策:
- Q1=A: Q2 lead O3(primary 可用工具形态) + O1 启动(flywheel step 1 选轨->首玩关); distinct 于 01(掌握行为 O1)
- Q2=A: Q8 step2 选角=选轨 paired 单步(warrior=战士轨/paladin=圣骑轨); character-track skin-vs-slice 机制=Phase-4 open(feature #13 选角=皮肤+切片)
- I1 消解: onboarding=mode(track-agnostic, 无独立 gate); profile 首玩关 auto-create=profile 不存在时[R1], idempotent[R7]

10 人模拟 R1-R11 (2 轮, 修订后无回归):
- R1 auto-create 条件=profile 不存在时 | R2 pre-profile 选角态 ephemeral(无新 store) | R3 #2 两态(first-pick/returning-pick) | R4 #2 entry bar 难度明示(Cl1 display facet) | R5 Cl5 扩 02 + always-on 双语 apply | R6 #1 三态(zero/progress/terminal)
- R7 auto-create idempotent(atomic check-then-create 防 double) | R8 CS1 C1<->C2 routing 契约(02.2 传 track+entry level W1/P1 -> 01.1) | R9 #2 UI paired 明示+character 来回切 | R10 #2 无 forced default track | R11 A1 须含首关参考架构所需牌(W1 S3+CloudFront / P1 EC2+VPC+EBS)

复查 (2026-08-04) 发现+修:
- C1 跨场景冲突[已修 01]: 01 outline Q6+01.1 Entry 原"开应用落 #3/应用落地 #3"(C 序先建 01 时 01.1 当首步遗留) vs 02 确立"开应用落 #1 总览(hub, 所有态)". 修 01 outline Q6+CS1 + 01.1 Entry/Q6/Purpose/Q3 -> "#1->导航 #3"(returning)/"from 02.2 handoff"(first-time). 全 C-UX-Scenarios 扫旧 entry 短语=零残留.
- G1 跨场景缺口[已修 01.1]: 01.1 仅述 returning entry(选未通关关), 缺 first-time entry(从 02.2 track+level 预选). 修 01.1 Page Purpose+Entry 增两 entry state + 加 Spec Carry-overs section.
- T1 传导: R8 -> 01.1 entry-state 依赖(first-time 预选 vs returning 选). 02 outline CS1 注 + 01.1 Carry-overs(T1/CS1 R8/准入 guard/A1 R11) + 01 outline CS1 交叉引用.
- T2 传导: 04.1 onboarding=mode 精化(R1 profile 不存在时 + R7 idempotent, 详 02).
- T3 澄清: Cl1 双 facet - 结构 facet(课程结构 P1 陡 vs W1 缓)设计在 01-core(锁定决策5); display facet(entry bar 难度明示)在 02 R4, 依赖 01 结构设计(Phase-4 难度量化). 非冲突.
- index 同步: 00-ux-scenarios.md 02 Status->DONE(02.1) + C 序标签修正(02=第3/03=第4, 原 index 写反) + Page Index +02.1.
- minor: 01.1 C1 note 改述避旧词("应用落地 #3"->"非应用首落页", 消 grep 假阳性) + T1 记法统一("[T1 传导]").

Phase-4 open (02 新增, tracked, 不阻 outline):
- A1 内容(XP=0 各轨解锁牌, 含首关所需)[R11 传导]
- profile.class 双轨语义 + 第二轨/改选转换(warrior+paladin=both->lawful)[耦合 [守序]+A2]
- skin-vs-slice character 机制(feature #13 选角=皮肤+切片)[Q2=A 传导]
- entry bar 难度量化(关卡设计 dep)[R4 传导]
- terminal #2 行为(全通关后选角选轨 replay/locked)[耦合 01.4 全通关态]
- reset 后 onboarding re-trigger[耦合 E1 reset 粒度]
- auto-create 字段集 match CS3 schema(确认非新决)

**场景 03 outline + 10人模拟 (2026-08-04, Session 11, Freya; Suggest mode):**
> 场景 03 回顾架构与多云对比 [P2, C 序第4] 页 #7 对比记忆. Suggest 模式 8 问 + 3 处 review 展开 + 10 人模拟. FS1=A 读 passes-only.

outline (03-jaron-reviews-architecture-compares-clouds/) + 首步 03.1 auto-processed (03.1-comparison-memory/). 决策:
- Q2=O1 巩固层 (distinct 01 O1 ENGINE Must / 02-04 O3 plumbing): 驱动 forces 轴B 记忆+轴D 可迁移 = 学习 outcome 语义; feature priority(#6 Must)!=业务目标归属; Cl6 可跳过=巩固 aid 非 gate
- 3 处 review (展开后按推荐): (1) Q2 O1 巩固(vs O3) (2) 多云变体 MVP scope=两层全愿景, MVP floor=轴B(AWS passes+图谱映射+EN/CN), 轴D 层 Phase-4(GCP/CF 后扩激活) (3) 图谱->架构图映射: 结构半 outline 定(映射存在+对象=passed graph->matched reference), 视觉半 Phase-4

10 人模拟 S1-S6 (无回归):
- S1 zero-passes empty state(#7 从 #1 nav 可达 zero passes->empty state redirect #2/#3) | S2 passes store schema 依赖(须记 graph+matched ref+WA, carry CS3/#8) | S3 多云变体 absent-state(MVP AWS-only, Phase-4) | S4 terminal review(couples 01.4 全通关态, Phase-4) | S5 01.4 通关总结 vs #7 review 边界(per-pass 即时 vs cross-pass 巩固, distinct) | S6 pass-write 时点+#4->#7 路径(CS1 C2<->C3 #4->#7 direct 须 pass 已在 store)
- S6 修法[已传导 01.3]: pass 写入 passes store at #4(validation pass=immediate record: graph+matched ref+WA), decoupled from #6 XP award(#6 awards XP from WA via transition, 不读 passes store; passes store IndexedDB 写 at #4 供 #7/#8 读 / XP localStorage #6 写, 分属不冲突). #4 有 optional #7 review exit(CS1 C2<->C3)+sunshine #6 exit. 改 01.3 spec carry-overs(+pass-write-at-#4 note+#4->#7 exit) + 03 outline carry-over(+S6). CS3/#8 schema: passes store write at #4(verify with 04).
- 确认无问题: Cl6 skip #7 sunshine 闭环 / CS1 C3<->C2 retry 画布态 restore / FS1=A read consistency(#7/#8 共读 passes, #7 纯读) / FS2 transient(每次 view 重读无 stale vs #8 reset) / CS6(#7 不 touch XP) / #7 drafts-but-no-passes(FS1=A 读 passes-only, draft 不显示) / always-on 双语+Cl5 apply.

Phase-4 open (03 新增, tracked, 不阻 outline):
- 多云变体 MVP scope(轴D 层 GCP/CF 后扩激活, milestone-dep)[处2]
- 图谱->架构图映射 粒度/呈现/交互(视觉半)[处3]
- #7 内容派生(passes store->展示哪些: 通关架构列表/图谱重放/变体对比面板)
- terminal review state(couples 01.4 全通关态)[S4]
- 多云变体 absent-state 设计(MVP AWS-only)[S3]
- CN 概念锚 content(S12#2 design seeds, S3=金库领主 等)

复查 (2026-08-04, 本轮自查): S6 note 修正(#6 reads pass -> #6 awards XP from WA via transition, 不读 passes store; 01.3/03 outline/mem 3 文件已修) + S2 传导 04(passes store schema 字段 graph+matched ref+WA, 04 outline carry-overs 已加). 无冲突(8 锁定决策/CS1/CS6/FS1=A/Cl6/FS2 全过). 完整度: 03 outline 8 问全 + 03.1 boilerplate 全 + index + 3 进度文件. 10 人模拟 1 轮(02 做 2 轮; S6 fix additive 无回归风险, case 10 #4->#7 direct 修后 pass).

**Session 12 (2026-08-04, step-06~08, Freya):**
- step-06 overview: 00-ux-scenarios.md 重生成(Scenario Summary 表+4 场景卡[链接+User/Business Value]+Page Coverage Matrix 8/8+非页表面 tracked+Page Spec Index+Next Phase). 链接校验 4/4 解析 0 断链. 未改 scenario 文件.
- step-07 quality review: 4 场景全 Excellent(Complete 7/7·Quality 7/7·Mistakes 7/7[含 3.7 bloated]·Practices 4/4). 阈值全过无修法. 复核: Trigger 三元(折入 Q3)齐 / 4 路径线性零 if / 共享页一致 / 单 persona. tracked(非阻塞): 02.2 step spec 待补(Phase 4) / 03 business success 偏定性.
- step-08: design-log+本文件+resume-prompt 回写. Phase 3 step-01~08 done. step-09 handover 进行中(暂停于 design intent 选择, 见 header 状态) -> Phase 4 UX Design(Lovable render loop, 设计循环从 scenario step 1 起).
**Session 13 (2026-08-04, step-09 handover 完成 -> Phase 3 COMPLETE, Freya):**
- step-09 DONE: completion summary 呈交 + design intent 收齐(01=S, 04=S, 02=C, 03=C) + 4 scenario outline frontmatter 写入(YAML 块置顶: design_intent + design_status:not-started).
- Phase 3 COMPLETE (step-01~09). design-log/project-memory/resume-prompt 回写; Current 表登记 Phase 4 待启动.
- design intent->workflow 映射(wds-4-ux-design): S=workflow-suggest.md / C=workflow-conceptualize.md.
- 复查(本会话): 9/9 step 全过 + 12 产物 + frontmatter 4/4 + 跨场景契约(CS1/CS3/CS6/GS1/GS3/FS1=A)分布合理(04.x schema owner 持最多) + 共享页 #1 hub 一致 + 02.2 待补单点 tracked. 无阻塞.
- 下一步 Phase 4 UX Design: C 序 01 起手, 首站 01.1 课程地图(S 模式, page-specification.template + Trigger Map 轴A). 02.2(#2 选角选轨)随 scenario 02 起手补. Lovable render loop 皮/骨分层(ADR-4); 过拟合红线 §13 每 gamification 映射过四项检测.
