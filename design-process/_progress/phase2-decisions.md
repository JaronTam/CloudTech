# Phase 2 决策与进展（working notes）

> Phase 2: Trigger Map | Agent: Saga | 最后更新: 2026-08-01
> 状态: 决策阶段 step-00a-00f 完成; 文档生成 step-01..07f 完成; step-07g 审核修复完成(15项问题全修), step-09 收尾完成(2026-08-02), Phase 2 COMPLETE

---

## 0. 流程进度

| Step | 内容 | 状态 |
|---|---|---|
| 00a 文档综合 | 分析 brief, 覆盖图+缺口 | 完成 |
| 00b 业务目标抽取 | 愿景+SMART目标 | 完成(O1/O2/O3 敲定, 见 project-memory §5) |
| 00c 目标群体 | persona | 完成(Q1/Q2 答, 形态 confirm: 1 Jaron+2 子目标) |
| 00d 驱动力 | 正/负 driving forces | 完成(力确认: 轴A核心/多云MVP; 角色机制 defer P3-4) |
| 00e 优先级 | frequency/intensity/fit | 完成 |
| 00f 缺口分析 | 强项/缺口/对齐/摘要 | 完成(brief回写) |
| 06 功能影响 | forces x features | 完成(step-06d) |
| 07 生成文档 | trigger-map.md + persona | 完成(step-07a/b/c/f + 07g 审核修复) |
| 08 mermaid | goals->platform->personas->forces | 完成(并入 07a hub) |
| 09 收尾 | 交付包+design log | 完成 |

> 注: step-01..07g + 08(mermaid 并入 07a)已完成, 见 00-design-log.md; step-09 收尾完成(2026-08-02)。

---

## 1. 核心洞察：三元组 vs 课程 = 两条轨

- 三元组(compute实例+VPC+存储) = IaaS 控制面最小完备集; 组织轴=资源类别/操作原语; 锚 Ops/SRE 控制面入门.
- 课程(托管服务抽象层级递进) = 模式复杂度+迁移叙事; 组织轴=架构模式; 锚 SA/构建面入门.
- 二者正交, "冲突"非 bug, 是两条角色入门轨共存.
- 测量对象也不同: 三元组=external 真实操作 bar(console/CLI); 课程=product 内部 progression(拖拽组装+图匹配, 离线). 产品度量用 a+b(A3+B1+B3)做代理(c已剔,见§8).

## 2. 角色分类（本质/属性轴, 确认）

| 云角色 | 职业 | 本质属性 |
|---|---|---|
| Dev 云开发 | 战士 | 速度/进攻/迭代 |
| Ops 云运维 | 圣骑士 | 守护/防御/可用性 |
| SA 解决方案架构师 | 法师/阵法师 | 知识/设计/组阵 = 引擎本性(共享组装机制, 非可玩职业) |

参考(不实装): 德鲁伊=Platform(韧性), 三头龙=DevSecOps(Dev/Sec/Ops).
来源: Bytebase《数据库 DevSecOps 的守护者们》(职业名+奇幻风) + 本质轴映射(适配云架构域; Bytebase 法师=DBA 不适用).

## 3. MVP 范围决策（确认 X）

- MVP = 2 可玩职业: 战士(Dev) + 圣骑士(Ops).
- 法师/阵法师 = 共享引擎(人人都组阵), 非第 3 职业.
- 2 课程序列:
  - 战士轨(D​ev/serverless/构建面): managed 抽象递进(静态站->serverless->事件驱动…); entry bar = serverless 端到端交付.
  - 圣骑士轨(Ops/IaaS/控制面): IaaS 控制面递进(单实例->容器infra->三层Web VPC+EC2…); entry bar = 三元组(实例+VPC+存储).
- 修订 Phase-1 敲定的 MVP 课程(单 L1-L3 线性 -> 2 职业轨).
- 三元组(用户 Core Signal) = 圣骑士轨 entry bar, 留 MVP.
- 选角机制 = 皮肤+切片(option i); 精确关卡设计 = Phase 3-4(Freya/Lovable).

## 4. O1/O2/O3 业务目标（已敲定 2026-07-30, 见 project-memory §5）

愿景(已校验): CloudTech = 单人游戏化云学习工具, 双重目的(构建中自学+打磨成工具); 把 BuilderCards 组合->模式->讨论验证 内核做单人数字化.

- O1 入门基础原语掌握（双轨）:
  - 战士轨 entry = serverless 端到端交付, 过 a+b(A3+B1+B3 在 serverless 模式集).
  - 圣骑士轨 entry = 三元组(IaaS控制面), 过 a+b(A3+B1+B3 在 IaaS 模式集).
  - 外部 mastery bar(真实操作) vs 内部代理(a+b)区分保留.
  - 边界: 不含集群编排/IaC/成本优化; 基线=通用云操作者(非 SRE/开发分叉).
  - 时间锚: 里程碑制(MVP 双轨跑通).
- O2 well-architected 模式掌握（共享机制, 待与 O1 协调）: a+b(A3+B1+B3)=两轨共享度量引擎; SA-assembly(阵法师引擎)=两职业共练技能. 范围 MVP 双轨.
- O3 打磨成可用学习工具（产品）: 双语 zh/en + ASCII 形式即内容 + 暗色终端 chrome + 桌面 web 优先 + 离线纯前端. Lovable 栈. 里程碑=MVP 交付.

## 5. 叙事钩子（emergent）

- 迁移叙事脊(退役 on-prem->cloud = 体修转法修 metamorphosis): 9 类 on-prem starter=体修旧兵器, 每阶段退役1类=转职1件; 垂直迁移轴=修仙境界轴(上=云/法修, 下=on-prem/体修). 已在 brief, 职业分类给命名. 每轨可各自味.
- DevSecOps 三头龙(Dev速度/Sec安全/Ops可靠) = 参考框架, 可作 v1.x 多轴校验或叙事参考.

## 6. Persona 形态（confirm 2026-07-30）

- 1 persona(Jaron) + 2 子目标(Ops控制面技能 / Dev构建面技能), 玩两轨. MVP 只建模 Jaron, 单用户.
- Jaron 目标含 ops(圣骑士轨), 不含认证(Cert-NO, §5 B). 圣骑士轨=纯 Ops 控制面掌握, 无 cert alignment.
- Q1/Q2 心理深度见 project-memory §10.

## 7. 待定 / 下一步

- [00b] DONE 敲定 O1/O2/O3(双轨版) + persona 形态 confirm (2026-07-30).
- [00c] DONE Q1/Q2 答, persona 心理深度补 (2026-07-30, 见 project-memory §10).
- [00d] driving forces(正/负): 种子见 project-memory §10(Q1 抽象化接受 + Q2 合理云框架判断).
- [Phase 3-4] 2 序列精确关卡设计 + 选角机制(切片/皮肤/分轨) + 拖拽x网格x响应式/ASCII形变/form=content 交互验证.
- [record] 把 MVP 双轨决策记入 project-memory 替换旧 curriculum 定稿.

---

## 8. 过关条件决策（敲定 A3+B1+B3）+ 备选方案库

> step-00b 敲定 2026-07-30。结构层; spec 留 Phase 3-4。供后期修改用。
> 调研依据: BuilderCards 规则(本次抓取核实)-胜利=最多 WA 点数, WA 卡 1/3 点, Mission 可选+4, game end=最后 WA 卡 purchase; 编程游戏化(4 站官网本次抓取+训练知识)-CodinGame/CheckiO/CodeCombat 通关=correctness, Screeps 开放无通关, 无一要求"理解"过关(c-as-gate genre-deviant); HRM/Zachtronics 优化 histogram=训练知识未核实。

### 当前敲定
过关 = A3 + B1 + B3, c 剔除, 路径 β。
- A3: a(句法牌面1:1局部组合)=floor(不合法挡提交,不算分); b(语义全局图匹配参考架构)=goal。
- B1: b 多参考匹配(匹配某合法参考之一即过,容许多解)。
- B3: b 的 constraints 打分 -> WA 分阈值(按 WA 支柱打分过阈值)。=BuilderCards WA 点胜利落地+CloudTech XP=WA 点。
- c(理解/权衡题)剔除; "通关⏩技术提升"耦合靠 a+b 内蕴+WA 分量化(β)。
- C1 优化(最少卡/成本)作可选 bonus(非 gate)。

### 备选方案库（全量, 后期可切换）

维度: a(句法) / b(语义) / c(理解,已剔) / WA分 / 优化 / 成本 / 韧性。

**A 组 - a+b 逻辑组合:**
- A1 a AND b(都算分,二值,最严)
- A2 a-then-b(分阶反馈,先句法后语义; 与 A3 兼容可叠加)
- A3 a=floor, b=goal(a 不算分只挡, b 通关目标) [选中]

**B 组 - b 变形:**
- B1 多参考匹配(匹配某合法参考之一; 容许多解,降挫败) [选中]
- B2 部分/子图匹配(核心 nodes+edges 命中即过; 渐进难度, 风险:不完整也过)
- B3 scored 约束=WA 分阈值(constraints 打分过阈值; =BuilderCards WA 点胜利) [选中]

**C 组 - 非-c 第3维(替 c 质量角色):**
- C1 优化指标(最少卡/最低成本/最少边; bonus 或软阈值) [选作 bonus]
- C2 成本维度(真实 AWS 估算成本, "成本合理?")
- C3 韧性维度(扛 1 AZ 故障, 容灾; Resilience 扩展+CloudTech L6)

**D 组 - 整体重构(跳出 a+b):**
- D1 阈值/分数制(多轴打分 正确性/完整性/WA支柱 过阈值, 非二值)
- D2 目标指标(Elevator Saga, 达目标指标如扛 N 请求/扛 1 AZ)

**c 处理:**
- (i) c 硬 gate(过关必需, 保通关=理解, 偏离 norm+摩擦)
- (ii) c 课后层(过关后反思: 参考架构+替代架构+权衡题, 对齐 CheckiO, 软)
- (iii) c 剔除 [选中]

**耦合路径(通关⏩技术提升):**
- (α) a+b 内蕴(纯二值; 风险:形状对但非真 WA)
- (β) 加量化质量维(WA 分/优化; B3 落地) [选中]

### 保留/弱点(后期 re-decide 看)
- A3: a floor 需组合规则有牙(逐牌 1:1 效果得真约束, 非随便连; 逐牌规则=内容期)。
- B1: 需策展多参考集(每目标多个合法 S); 不策展可能出现退化易匹配。
- B3(最要标): 必要性依赖 b 的 constraints 是否已编码 WA 支柱。
  - 若 S constraints 已含 WA 支柱(HA/cost-cap)作二值约束 -> b 已强制 WA 质量, B3 退化成粒度(部分分), 此时纯 a+b(α)可能够。
  - 若 S constraints 只结构(nodes+edges, 无 WA 支柱) -> b 不保 WA 质量, B3 补质量维, 高边际价值。
  - 取决于参考架构规格 schema(§8 #3)。
- spec 全 deferred: WA 支柱/权重/阈值/多参考集/组合规则逐牌 = Phase 3-4。

### 切换示例(后期若改)
- 想加理解层: 切 (ii) c 课后层(过关后展示参考+替代架构+权衡题)。
- 觉得 B3 太重: 若 schema 决定 b constraints 编码 WA 支柱, 退回 α(纯 a+b 二值), B3 弃。
- 想更游戏化: 加 C1 优化 bonus + histogram(HRM 风, 训练知识未核实)。
- 想分数制: 切 D1(多轴打分过阈值)替 B3。


---

## 9. step-00c Q1/Q2 捕获（2026-07-30）

> 历史过程（00c Q1/Q2 + 00d 力集迭代 v2->v3）；当前态见 project-memory §10 力集 v3 定稿。

详见 project-memory.md §10. 摘要:
- Q1: 游戏化=抽象机制(复杂云->游戏概念->易接受); 否定 builder/player 时序二分.
- Q2: 核心=什么是合理云框架(AWS 服务=半成品, 须合理搭配); 恐惧=soundness 判断缺失.
- 对齐: Q2 直接对齐过关条件 A3+B1+B3(校验引擎=何为合理的可操作答案).
- 00d 驱动力种子见 project-memory §10.
### 00d 修正（2026-07-30）
- N1 否决(复杂度相对, 非问题) -> 轴B 目的抽象记忆; P1(降畏惧)并入轴B.
- N2 = 游戏化定义: 游戏逻辑 ↔ 云计算逻辑 同步.
- N3/N4 重定 = 缺里程碑(双轨各自需进度里程碑, 非仅终局通关).
- 新机制种子: 通关游戏图谱->云框架图映射; S3/R2 目的抽象示例(egress=传送税).
- 详见 project-memory §10(v2草案) + §12. 待用户确认 -> 00e 优先级.
### 00d 确认（2026-07-30）
- 轴A(游戏化定义=逻辑同步)确认为核心; 轴A负向=游戏化质量风险(同步真假)。
- 多云 MVP scope = AWS+GCP+CF(扩原 AWS-only); CF 无 IaaS 三元组 -> 圣骑士轨对 CF 缺位, Phase 3-4 双轨按云能力画像重设计。
- 角色机制: 分类本质轴已定; 选角/逐组件角色设计 defer Phase 3-4, 不阻塞 00e。
- 力集 v2 确认 -> 进 00e 优先级。详见 project-memory §10/§12/§8#13。
### 00d 复查修订（2026-07-30）
- G1 改: 轴A负改用户侧(怕被游戏误导学错合理判断); 同步真假降为产品侧约束。
- G3 补: 角色负向(Dev 怕构建面偏狭忽视可靠性/成本; Ops 怕控制面偏狭过度防御/成本失控); 依据=角色定位致视角不同, 双轨治偏狭。
- G4 补: 自主掌控力(自由选路径/职业/顺序)+混合职业可能(Phase 3-4 scope)。
- G2 待讨论: 轴D 跨云类比理解 单列 vs 并入轴B。
- 力集 v3 见 project-memory §10; 设计种子 §12#7/#8/#9。
### G2 决（2026-07-30）
- 轴D 单列, 动机=云无关可迁移(选 a)。
- 核心设计挑战=如何把可迁移/相通的云概念游戏化(入 project-memory §12#10)。
- 力集 v3 定稿(轴D 单列); 进 00e 优先级。