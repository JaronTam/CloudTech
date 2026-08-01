# CloudTech - 项目记忆

**最后更新:** 2026-08-02 (Phase 2 Trigger Map COMPLETE, step-01..09f, 含 mermaid 实渲染补强; 下一步 Phase 3 UX Scenarios)
**状态:** Phase 2 (Trigger Map) - COMPLETE (step-01..09f, S mode, 2026-08-02; 含 mermaid 实渲染验证补强). 下一步 Phase 3 UX Scenarios (Freya).

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
Lovable 集成: Phase 0-4 出规格; Phase 3-4 渲染探针(spec<->render); 取代 Phase 5; Phase 6/7 跳过。栈 React+Vite+TS+Tailwind+shadcn+Supabase。

---

## 4. Phase 状态

| Phase | 状态 |
|---|---|
| 0 Setup | complete |
| 1 Product Brief (Saga) | complete |
| 2 Trigger Map (Saga) | complete - step-01..09f 完成(S mode, 2026-08-02; 含 mermaid 实渲染验证补强) |
| 3 Scenarios (Freya) | pending |
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
+-- design-process/
|   +-- _progress/
|   |   +-- 00-design-log.md             <- 进度(live tracker)
|   |   +-- wds-project-outline.yaml     <- 配置 source of truth (勿改)
|   |   +-- project-memory.md            <- 本文件
|   |   +-- phase2-decisions.md          <- [Phase2] 决策详细+过关条件备选库(§8)
|   |   +-- resume-prompt.md             <- 次日继续提示词
|   +-- A-Product-Brief/ 01-product-brief.md   [Phase1 产物]
|   +-- B-Trigger-Map/ 00-trigger-map.md        (Phase 2, Saga, complete)
|   +-- C-UX-Scenarios/ ... (Phase 3-4, Freya)
+-- _bmad/wds/config.yaml
+-- docs/ (AWS BuilderCards Rules.pdf, swimlane-*.md)
+-- C:\tmp\ (buildercards.html/.txt, newsd.html, wechat-article.html/.txt, site-*.html)
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
