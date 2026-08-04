---
project_name: CloudTech
user_name: Jaron
date: '2026-08-03'  # 规则快照日期(step-03 终稿); 非进度日期, 进度以 design-process/_progress/project-memory.md 为准
sections_completed: ['technology_stack', 'language_specific', 'framework_specific', 'testing', 'code_quality', 'workflow_rules', 'anti_patterns']
audit_cat6:
  date: '2026-08-02'
  rule_count: 31
  clusters: 12
  cluster_ids: [A, B, C, D, E, F, G, H, I, J, K, L]
  surface_conflicts_resolved: 4
  provenance_verified: '2026-08-02: dev-history/design-rationale/product-brief/project-memory + git branches'
  meta_rules_no_fabricated_provenance: ['规格对账(F)', 'scaffold 回写(G)', '两套工作流分离(B)']
status: complete
optimized_for_llm: true
rule_count: 69
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents would otherwise miss._

---

## Technology Stack & Versions

### 双层架构边界（MVP 硬约束）
- **校验引擎层**：纯前端 TS，离线，确定性。MVP 无后端，判定不经网络（ADR-1）
- **持久化层（MVP）**：纯本地（localStorage + IndexedDB 分层，ADR-6）。无云依赖
- **持久化层（v1.x+）**：Supabase（auth + sync + 多用户/反作弊），触发见升级路线
- 边界：校验判定绝不经网络；MVP 全离线可玩

### MVP 产品栈（Lovable 构建，Phase 3-4 起 scaffold）
- React + Vite + TypeScript + Tailwind CSS + shadcn/ui（**MVP 无 Supabase**，ADR-3）
- 版本：[缺 package.json]。规则：禁臆造版本号；未 scaffold 留 `[缺]`，scaffold 后回写
- 选型理由（vs 单文件 HTML）：complexity=complex + 拖拽/图匹配/XP/双语状态超单文件承受（ADR-2）
- Lovable 边界（ADR-4 修订，详见 Framework › Lovable边界=皮/骨分层）：Lovable=皮(UI壳/页面/渲染/形变手感/主题装饰)；骨=手写 TS(Lovable-agnostic)=校验引擎+ASCII字形系统+拖拽实现+形变逻辑(方向/mapping/narrative-timing)；禁在 Lovable 改骨
- provenance：wds-project-outline.yaml + project-memory §3 原 full-vision 栈含 Supabase，已回写区分 MVP/full-vision（2026-08-02）

### 当前产物（设计阶段，无 app 代码）
- `site/index.html`：单文件 HTML+CSS+JS（~50KB），inline `<style>`+`<script>`，无框架/CDN/Mermaid。= 进度展示图，非产品本体
- 设计文档：Markdown（design-process/ + docs/）；规则源 `docs/AWS BuilderCards Rules.pdf`

### 工具链
- BMAD v6.10.0：`_bmad/`(tracked) + `.github/agents/`(tracked) + `.agents/skills/`(gitignored，可重装)
- Git 分支：`main`(tracked) + `gh-pages`(orphan，仅 index.html，免 PR 直推) + `update-gh-pages-index`

### 校验引擎规则
- **规格语言多项式可校验（目标约束）**：参考架构规格限定为 label 集合包含 + edge 存在性 + constraints 打分，禁任意子图同构(NP-难)。**表达力待 Phase 3-4 验证**：能否表达"顺序(A 先于 B)"/"互斥(A/B 二选一)"？若需超多项式表达力，B1 退回 NP-难，重审规模封顶/启发式
- **MVP critical path**：参考架构图规格 schema(required nodes/edges/constraints/WA 权重/阈值/多参考集)须 Phase 3-4 先定，before 任何校验代码
- **共用图数据结构+规格语言，算法不同**：A3=局部 edge 遍历 O(E)；B1=多项式匹配；B3=constraints 打分过阈值。共引同一图数据结构+规格，禁双份 schema 维护（ADR-5）
- **校验非黑盒 + 异常降级 + 降级态 XP**：须输出判定 trace(命中参考架构/缺失 edge/未过阈值)；引擎异常 try/catch 降级 A3-only + 错误 trace + 显式提示"语义校验暂不可用" + 本局无 XP(A3=floor 不算分)；禁白屏
- **规模封顶**：栈/参考图 nodes<=32；B1 按 node label 启发式剪枝候选参考集
- **XP 定义待定**：XP=B3 命中参考架构 WA 分(多参考取最高/固定？Phase 3-4 spec 定)

### 数据与存储规则
- **本地存储分层（ADR-6）**：localStorage(profile/XP/解锁态,小同步) + IndexedDB(牌组历史/校验日志/画布态草稿,大异步) + schema_version 字段；封装 storage 抽象层
- **进度导出/导入**：提供 JSON 导出/导入 + 显式重置入口；**导入=信任边界**，须 Zod schema 校验 + 上限钳制(XP/解锁不超当前阶段上限)，防恶意 JSON 污染(本地+未来 sync 云端) exploit path
- **解锁纯函数 + 阈值表载体**：解锁=纯函数(XP -> 可用牌集)，禁独立可变解锁态；阈值表=JSON bundle 静态资源(固定 fixture 可单测)
- **数据模式复用 NewSD 血统**：牌池/栈状态可用元组数组 + IIFE 载入重算(已验证避 stale)

### 主题与资源规则
- **主题硬约束**：shadcn 默认 light 须覆盖为暗色终端 #0a0e1a + 等宽 + EVA 红(形式即内容)；走 Tailwind theme token(bg/fg/半径/阴影/对比)集中映射，非逐组件改
- **禁 CDN + self-host**：字体/图标/任何资源 self-host 本地 bundle；离线 smoke 定义见 Testing › 离线 smoke（入 CI 必过）

### ADR 摘要（MVP 决策）
- **ADR-1 校验引擎=纯前端**：否决后端/LLM 判定。离线确定性+公平 > 反作弊（自用非竞技）。后果：校验逻辑前端可见可改
- **ADR-2 栈=Lovable React 全家桶**：否决继续单文件 HTML。交互复杂度超单文件承受。后果：失零依赖纯度，校验层仍离线(ADR-1 兜底)
- **ADR-3 MVP 无 Supabase**：单用户+离线硬约束 -> 纯本地 profile/IndexedDB，Supabase 非必需。后果：profile 不跨设备 sync（单机可接受）
- **ADR-4 Lovable 边界=皮/骨分层**（修订）：皮(视觉/手感:颜色/字号/间距/动效/辉光/布局/文案/图标)->Lovable；骨(逻辑/规格:触发条件/属性字段/公式/交互流程/状态机/约束/功能增删)->BMAD spec+手写。拖拽实现/校验引擎/字形系统/形变逻辑=骨=手写(src/engine,src/glyph,src/drag)；渲染polish/形变手感/主题=皮=Lovable。禁在Lovable改骨(防原型-文档脱节)。后果：注入接口 Phase 3-4 scaffold 定
- **ADR-5 schema 源=TS type+Zod**：TS 编译期+Zod 运行时同源派生 JSON；三方共引。后果：引入 Zod 依赖
- **ADR-6 本地存储分层 + 导入校验**：localStorage(小)+IndexedDB(大)+schema_version；进度导入须 Zod 校验+上限钳制(信任边界)；阈值表=JSON bundle+纯函数消费。后果：封装 storage 抽象层

- **ADR-7 TS 严格性分层**：strict+noUncheckedIndexedAccess 仅引擎模块；Lovable 代码豁免。理由：引擎 IP 需严格，Lovable 不可控。后果：eslint override/独立 tsconfig
- **ADR-8 branded types 仅内部层**：brand 防图匹配 id 混淆但不 survive JSON -> 仅 TS 内部，边界 plain+brand/unbrand 转换。后果：写转换函数
- **ADR-9 seeded RNG + seed 持久化**：shuffle 用 seeded RNG，seed 存 profile 可复现；seed 不进校验逻辑。理由：校验确定性要求 shuffle 可复现。后果：profile 含 per-game seed

- **ADR-10 状态管理=不可变快照+外部 store**：对局态不可变快照；引擎纯函数消费 getSnapshot() 非订阅 React；store sync-friendly 为 v1.x+ 留路。后果：store 须暴露 getSnapshot()
- **ADR-11 拖拽字符 cell 坐标系**：落点映射 cell(row/col) 非像素。理由：form=content。后果：定 cell 坐标系+hit-testing；拖拽实现=手写(骨)
- **ADR-12 ASCII 字形=等宽双字体+self-host**（修订）：canvas=纯ASCII等宽(Cascadia Mono,ligatures:none,无CJK)；侧栏=CJK等宽(Sarasa Mono SC subset,ligatures:none)；canvas禁CJK(双宽破对齐)。理由：跨浏览器一致+离线+form=content(canvas纯ASCII)+brief侧栏化。后果：字体跨浏览器/EVA感/subset体积 Phase 3-4 Lovable render loop 验；EVA accent字体待决
- **ADR-13 形变+校验不可变栈快照**：栈=不可变值类型；形变与校验同快照；形变动效持有快照引用(非React state)，栈变更=新对象(引用变)，旧动效用旧快照完成或取消。理由：防 race+stale closure。后果：栈值类型化

### 后续升级路线（v1.x+ 触发条件，非 MVP）
- 多人竞技/反作弊/sync -> 引入 Supabase(auth+持久化+可选 Edge Function 校验，重审 ADR-1)；引入时须定迁移路径(本地 profile->云 sync) + sync 冲突解决策略(LWW/per-field merge)
- 参考架构集需热更新(免重新部署) -> 重审架构集移入 DB(破坏离线，须权衡)
- Lovable 生成代码触顶(ASCII 形变动效/复杂拖拽网格受限) -> 评估 eject Lovable 或引入额外库(如 framer-motion)，回写本文件
- 多云扩展超 MVP(AWS+GCP+CF) / 课程超 4 关 -> 栈不变，扩展 bundle 静态资源

## Critical Implementation Rules

_Per-category rules documented as each category is generated (step-02)._

### Language-Specific Rules

#### TypeScript（目标产品栈，Phase 3-4 scaffold 起）
- **tsconfig 严格性分层（ADR-7）**：[缺 tsconfig.json]--scaffold 须显式设 strict + noUncheckedIndexedAccess，**仅引擎模块**；Lovable 生成代码豁免(eslint override/独立 tsconfig)
- **类型即规格 + Zod 边界校验（ADR-5）**：TS type + Zod 同源；**单一 asset loader** 强制 Zod(参考架构集/牌池/阈值表禁直接 import JSON)，内部模块信任已校验 type 不重 Zod
- **branded types 仅内部层（ADR-8）**：NodeId/EdgeId/ArchId nominal typing 防图匹配 id 混淆；brand 仅 TS 内部，边界(asset load/序列化)用 plain type + brand/unbrand 转换
- **readonly tuple + 边界转换**：NODES/E 用 readonly 元组类型；Lovable mutable 数据 -> 引擎 readonly 入参(readonly(...) 转换)
- **纯函数 + 引擎纯净**：解锁/Layer/校验判定纯函数；副作用隔离 storage/IO 层；校验引擎禁 console.log(trace 走 return 对象，UI 层渲染)；引擎模块禁引含 time/random 库(fake timers 测)
- **禁 as + lint 强制**：禁 as 绕 Zod/DATA 校验；允许 Lovable 接缝 + DOM/IndexedDB 边界(注释 why)；lint 禁 as(除标注 boundary) + CI grep 审查
- **离线确定性 + seeded RNG（ADR-9）**：校验/解锁**逻辑**禁 Date.now()/Math.random()；shuffle 用 seeded RNG，seed 游戏开始生成 + 存 profile(per-game)可复现；seed 不进校验逻辑

#### 现有单文件 JS（site/index.html，进度图，vanilla）
- IIFE 载入重算：数据派生展示用 IIFE 遍历 NODES/E 重算，禁手写静态列表（避 stale）
- const 默认，let 仅可变状态（如 pan）-- 实测 66 const / 5 function
- 事件委托 + 冒泡：mouseover/mouseout（冒泡）+ 单监听 + closest()，非 mouseenter
- 状态分 class：.hl（秒级 hover）与 .cur（会话级常驻）独立，mouseout 只清 .hl
- grab-to-pan 改 scrollLeft/Top（非 transform）：原生滚动让 sticky 表头自动跟随
- 数据结构：NODES=[id,label,short,epic,layer,status] 6 元组；E=[from,to] 或 [from,to,"seq"]
- 非 ASCII + CRLF 元经验：见 cat6 › Edit 工具元经验（持续适用，含修法）
### Framework-Specific Rules

#### React + Vite + shadcn/ui（目标栈，Phase 3-4 scaffold 起）
- 配置：[缺]--scaffold 时 pin shadcn/Radix 版本（防漂移 break 暗色 token）；版本回写见 cat6 › scaffold 回写
- **Lovable 边界 = 皮/骨分层（ADR-4）**：
  - **皮（看起来/动起来怎么样）-> Lovable 快迭代**：颜色、字号、间距、easing、布局位置、文案措辞、图标字符
  - **骨（它到底是什么）-> BMAD 改规格(落 PRD/架构)+手写**：触发条件、属性字段、公式语法、交互流程、状态机、约束规则、功能增删
  - **禁在 Lovable 改骨**：Lovable 改原型不落规格 -> 原型变事实规格、文档停旧版 -> story 按旧规格写、原型白做（工作 B 第3步防的脱节）
- **皮/骨仲裁规则**：骨判定 = 编码可观测状态/行为 **OR 承载 form=content 叙事 OR 产品身份硬约束**；不确定默认骨（保守）。**快速皮判定清单**：纯装饰(色/字号/间距/easing)直判皮，其余走仲裁（防默认骨致 Lovable 沦为颜色工具）
- **按皮/骨落位**：骨(手写 src/engine,src/glyph,src/drag)=校验引擎/字形系统/形变映射/拖拽实现；皮(Lovable)=字形渲染装饰/形变动效手感/主题装饰值/布局
- **形变皮骨细化**：direction(跨地平线上升)=骨(**code constraint**: y 轴符号 lock/断言，动效层禁改方向参数)；mapping=骨；narrative-timing=骨；easing=皮
- **字形皮骨细化**：系统(哪个 char=哪个 service)=骨；对齐/布局(ch 单位)=骨(破坏则形变错位)；状态辉光=骨(独立 class)；装饰辉光/字体粗细=皮(正交属性，Lovable 只动装饰)
- **theme token 拆分**：token schema(变量集)=骨；核心 identity 色(#0a0e1a/EVA红)=骨(硬约束，Lovable 不可改)；装饰色/间距/字号值=皮
- **shadcn 暗色化（主题硬约束）**：shadcn 由 Lovable 带；默认 light 须覆盖，走 Tailwind theme token 集中映射(非逐组件改)；暗色视觉 checklist + 暗色视觉 smoke 截图比对
- **拖拽实现 = 手写（骨，非 Lovable）**：hit-testing、拖拽状态机 = 手写；落点映射 cell(row/col) 非像素（form=content，ADR-11）
- **拖拽 seam 强化**：单一落点源(手写 cell)，Lovable 仅 transform 渲染禁算落点；cell 计算须在动效前(同帧)，seam 接口同步返回当前 cell+preview offset；snap 反馈编码落点状态(valid/invalid)=骨，纯惯性=皮
- **手写模块隔离 + eject 路径**：src/engine、src/glyph、src/drag 独立目录，Lovable 生成区与手写区分离；骨模块 Lovable-agnostic(ADR-4) 可独立 eject；皮部分(Lovable 动效)eject 时重写=预期
- **纯 SPA 无 SSR**（ADR-2 后果）：浏览器 API 直用安全
- **状态管理分层（ADR-10）**：持久态=localStorage(ADR-6)；对局态=不可变快照+外部 store(Zustand类,待scaffold,sync-friendly)；校验引擎纯函数消费 getSnapshot() 非订阅 React
- **ASCII 字形渲染（ADR-12 修订）+ canvas 禁 CJK**：**等宽双字体**--canvas=Cascadia Mono(纯 ASCII 无 CJK) / 侧栏=Sarasa Mono SC subset，ligatures:none，ch 单位对齐，self-host 禁 CDN，禁 non-monospace 混入字形区；**canvas 禁 CJK**（双宽 CJK 破对齐 = 已知风险，brief；CJK 侧栏化避开画布）
- **字体候选/待决**：canvas 候选 Cascadia Mono(首选,无连字,EVA终端)/JetBrains Mono(连字须禁)/Source Code Pro；侧栏候选 Sarasa Mono SC(首选,终端感)/Source Han Mono；EVA accent 字体(徽章/百分比)待决--serif display 仿 NewSD Type 95 或等宽一致；Phase 3-4 Lovable render loop 验跨浏览器/EVA感fit/subset体积
- **形变+校验不可变栈快照（ADR-13）**：栈=不可变值类型；形变动效与校验消费同一快照；**形变动效持有快照引用(非 React state)，栈变更=新对象(引用变)，旧动效用旧快照完成或取消**（防 stale closure + race）
- **响应式**：桌面优先(O3)；移动端降级非 MVP 但禁崩
- 皮/骨 smoke 测试策略见 Testing › 骨/皮 smoke 策略

#### 现有产物无框架（site/index.html vanilla）
- 进度图用纯自绘 HTML/CSS/JS，禁引框架/CDN/Mermaid（继承 NewSD 血统，离线+确定性）
- 产品本体(React 栈)与进度图(vanilla)独立,不共享框架规则（见 cat6 › 两套工作流显式分离+术语+enforcement）
### Testing Rules

#### 目标产品栈（React+Vite+TS，Phase 3-4 scaffold 起）
- **测试框架**：[缺]--待 Lovable 栈确认（倾向 vitest 单测 + Playwright E2E）；单测须支持 fake timers+fixture+快；骨纯函数单测框架无关
- **测试范围哲学**：测骨 exhaustively(校验/解锁/形变/导入/规格) + 不测皮装饰(仅 smoke) + 不测 Lovable 生成代码(仅 E2E smoke) + 禁 tombstone/覆盖率测试(对齐 AGENTS.md：测有意义行为/不变量/边界) + 类型即部分测试(branded/noUncheckedIndexedAccess 编译期验，运行时行为仍须单测)
- **测试金字塔**：骨纯函数大量单测(快/确定) + seam 集成测(少量:拖拽cell<->Lovable动效) + E2E smoke 闭环(最少)；禁倒金字塔
- **测试可重现**：fake timers + seed 固定(非随机) + afterEach restore timers(防泄漏)；禁 Date.now/Math.random 泄入
- **fixture 从 bundle 派生**：阈值表/参考架构集 fixture 从 bundle JSON 派生(非手写) + CI 校验 fixture=bundle 同步；mock 从实际 type 派生(非手写) + 契约测；测试常量与规格阈值表同源
- **E2E 选择器锚**：data-testid(非文本/CSS) + waitFor 状态(非 timeout)；防 Lovable 改 DOM 脆
- **校验引擎测试**：property-based(fast-check) 5 不变量集(合法栈必过A3/匹配参考必过B1/过B1且constraints过阈值必得XP/降级态无XP/同栈+同seed幂等) + example-based 边界集(空栈/满栈32/超32拒/循环依赖/自环/重复边/缺required/多参考取最高/无匹配/B3阈值恰超低) + 规格表达力回归(顺序/互斥) + 规格 schema 校验(禁任意子图同构，推 Phase 3-4 spec 阶段)
- **导入校验测试**：Zod 边界(含恶意 JSON exploit 回归) + 边界集(空/缺字段/超上限/负XP/非数字/未知&未来schema_version/超大payload拒) + 一致性校验(XP-解锁一致用 Zod refine 层，禁分离事后函数防前端绕过)
- **形变测试**：race 集(变更中触发/未完成再变更/取消旧动效隔离/方向篡改拒) + stale closure(快照引用非state) + 须 deterministic 动效测试模式(同步动效/mock 时序，scaffold 定)
- **解锁测试**：纯函数(XP->可用牌集) + 阈值表 JSON fixture 固定 + 边界(阈值边界/降级态XP=0/seed复现)
- **canvas 完整性测试**：CJK 误入拒/non-monospace 混入拒
- **离线 smoke**：`vite build`+`file://`+console 无 error + 断网 mock fetch 全失败验降级(A3-only) + 部分失败降级；入 CI 必过
- **E2E smoke 闭环**：组牌->校验->XP->解锁下阶段 完整进阶闭环 + 含暗色视觉 checklist(防 shadcn 漏 light)
- **骨/皮 smoke 策略**：骨 smoke(规格行为)阻塞 CI；皮 smoke(视觉)阈值按区域(字形区严/装饰区松)+ignore regions+非阻塞 warn 进 PR 评论+累计 debt ticket；baseline 更新须 PR 标注+定期审 debt；皮改动 PR 须附 form=content 影响清单(防累积皮改破叙事)
- **MVP 测试最小集 vs v1.x+**：MVP 必须=校验不变量/边界集/导入校验/离线 smoke/解锁纯函数；推后=规格 schema 校验(Phase 3-4 spec)/形变 race 复杂时序/property-based 扩展

#### 现有产物（site/index.html，进度图，vanilla）
- 本地 Playwright 端到端验证（curCount 跨 hover 不变 / grab-to-pan / devhint / console 无 error）-- 继承 NewSD 验证模式
- 进度图无单测框架，纯 E2E 手动/脚本验
### Code Quality & Style Rules

#### 目标产品栈（React+Vite+TS，Phase 3-4 scaffold 起）
- Lint/Format：[缺]--scaffold 时定（倾向 ESLint + Prettier）；须 enforce：禁 as（除 boundary 注释，ADR-7/cat2）、禁 any、strict+noUncheckedIndexedAccess（引擎模块）、branded types
- 命名：[缺]--scaffold 定；倾向：文件 kebab-case（React 组件文件 PascalCase）、纯函数/变量 camelCase、类型/接口 PascalCase、branded type 后缀 Id
- 代码组织：手写模块隔离（src/engine, src/glyph, src/drag，ADR-4）；Lovable 生成区与手写区分离；骨模块零 Lovable 依赖

#### 现有单文件 JS（site/index.html，进度图，vanilla）
- 纯自绘三段（HTML+CSS+JS inline），无构建步骤，无 lint
- 命名：CSS class kebab-case（.card/.link/.cur/.hl），JS 变量 camelCase（pan/devhint），常量 UPPER_SNAKE（CUR Set）
- 数据结构命名：NODES/E 大写常量数组（NewSD 血统）

### Development Workflow Rules

#### 进度图工作流（site/index.html，gh-pages orphan，继承 NewSD 血统）
- **Git 三分支 + gh-pages orphan 隔离**：main(tracked,Require-PR 保护) + gh-pages(orphan,仅 index.html,免 PR 直推) + update-gh-pages-index(过渡索引)。gh-pages orphan 与 main 源码隔离,不受 main 分支保护可直推(更新 CUR/status 无需走 PR);main 有改动时用 git worktree 检出隔离 Edit,main clean 时可直 git checkout gh-pages（provenance: docs/swimlane-dev-history.md 部署与维护机制 + docs/swimlane-design-rationale.md §8）
- **部署 + 验证**：推 origin/gh-pages -> Pages 自动重建(1-2min)刷新 URL 验;本地 Playwright E2E(curCount 跨 hover 不变 / grab-to-pan / devhint / console 无 error)。gh-pages 仅 scoped 进度图,不夹产品代码
- **批次声明工作流(核心)**：开发前声明当批并行故事 -> 同步 memory + project-context -> story 合并后 fold 单次 gh-pages 推送(NODES status todo->done + 设 CUR);story 代码 PR 仍每 story 单独(进度图 fold ≠ story PR)。批次粒度=单人开发会话/里程碑(非团队 sprint,NewSD sprint 概念适配单人)。声明须过 checklist(声明故事集+memory 同步+project-context 同步+CUR 设置),CI 校验完整(scaffold 后建 CI 时)
- **状态权威源非图本身**：NODES status 跟随合并记录(PR merged)更新,图是展示层非真相源;合并 story 后改 NODES 第6项 todo->done 推 gh-pages,同周期,不夹带 story 代码 PR。严格 status 三态(done/todo/blocked):todo=入边全 done 立即可开发,blocked=有未完成硬前置或显式标阻塞;禁把 blocked 当 todo(devhint v1->v2 修正教训);数据驱动重算(IIFE 遍历 NODES/E)避手写第二处文本 stale
- **CUR 方案 A 定案 + 决策不反复**：CUR=当批并行故事 Set,option A 硬编码(Set([...])),裸 URL 恒定高亮;option B(URL hash)已废(裸 URL 无高亮);sprint-status 派生 CUR 否决(status≠dev-target 语义,backlog≠当次开发目标)。决策纪律:不反复(CUR A↔B↔A 反复为教训);ADR 修订=演进(标"修订"+保留决策记录,ADR-4/12/13 已标);反复=无记录废方案来回(禁)
- **Edit 工具元经验(非 ASCII + CRLF,持续适用)**：en-dash U+2013/em-dash U+2014 Read 显示 - 但 copy normalize 致码位变 old_string not found;CRLF 行尾 Read 归一换行符致多行锚失配。修法:Python io universal-newline 读归一 + newline 写还原;或 ASCII 锚(如 main;Epic)避开 dash 码位;或 Python 行切片提取 verbatim 字节。适用 site/index.html(中文+CRLF)及任何含非 ASCII 文件
- **体积监控**：site/index.html 体积递增监控(dev-history 表 B: 23.5KB->35KB +49%);scaffold 后监控 bundle 体积(防 Lovable 生成膨胀)

#### 产品工作流（BMAD story，main 分支，Phase 3-4 scaffold 起）
- **皮/骨分层(ADR-4)+ Lovable render loop**：Lovable 作渲染探针(spec<->render 循环,Phase 3-4 验:拖拽字符网格响应式 / ASCII 形变动效 / form=content 交互);Lovable 验视觉可行性,规格仍 BMAD 定。皮/骨定义见 Framework › Lovable边界=皮/骨分层（provenance: product-brief L97/126/236 + project-memory §8#10）
- **规格对账(单一规格源 + 早对账 + 逐 FR checklist)**：PRD(规格)=唯一真相源,原型(Lovable render)=验证探针非规格;早对账(规格改动即同步,非延后)防 cascade decouple(规格与原型脱节)。规格迭代后须逐 FR 对账原型(每条 FR 核原型一致),记录差异回写规格;防原型变事实规格而文档停旧版。单一规格源(禁双份 schema)见 校验引擎 › 共用图数据结构 + TS › 类型即规格+Zod 边界校验
- **scaffold 回写**：触发=scaffold 完成里程碑(Phase 3-4 Lovable scaffold React+Vite+TS 时),完成即回写非延后;回写内容=填 project-context.md 所有 [缺] 占位(package.json 版本/lint/测试框架/命名)+回写实际栈决策;责任人=人工(非 Lovable);遗留 [缺] 进 debt 审(标原因+预计回写时点)

#### 跨工作流（meta + CI + commit 纪律）
- **两套工作流显式分离 + 术语通用化 + enforcement**：进度图工作流(gh-pages orphan,批次声明,CUR/status) vs 产品工作流(BMAD story,main,Require-PR),独立不混。BMAD 内部术语(工作 A=story 实现 / 工作 B=规格对账迭代)须在 PR/commit 用通用 scope 标签表达(进度图 scope / 产品 scope),防内部术语泄漏致歧义。enforcement: PR 标 scope 标签 + CI/审查按 scope 路由(进度图 PR 不触发产品 CI,反之亦然),防两套工作流混入同一 PR
- **CI 现状 + 自动同步(phased)**：现状无 CI(.github 仅 agents/,无 workflows/);现阶段 gh-pages 同步=手动 fold 推送。scaffold 后建 CI: 自动同步 gh-pages(仅 merged story 触发,NODES status fold,merged-only 防未合并故事进进度图)+ 校验批次声明 checklist + 按 scope 路由；smoke'入CI必过/阻塞CI'表述=建CI后target态,现状无CI时手动跑(fold-push前验)
- **commit 规范**：现状 main/gh-pages commit 非 conventional(中文描述:"首次提交项目进度"/"gh-pages: 同步进度图...");scaffold 时转 conventional commits(type(scope): subject),后续 commit 起规范化(非改写历史)
- **数据层 invariant**：定后(bundle 化后)稳定;现 pre-spec 未定(Phase 3-4 spec 定后稳定);规格 schema(参考架构 nodes/edges/constraints/WA/阈值)定后不随意改,改须过对账

> **cat6 审计标注（2026-08-02，31 条 / 12 簇 A-L，4 表面冲突已解决）**：(1) 手动 fold(C) vs CI 自动同步(K) -> phased，现阶段手动、scaffold 后 CI merged-only，非冲突；(2) CUR 硬编码(E) vs 数据驱动(D) -> 对象不同，CUR=声明语义不可派生故硬编码、devhint=status 可派生故数据驱动；(3) sprint 术语(C) vs 单人粒度(party#25) -> sprint-status 概念保留、粒度=单人会话/里程碑、truth=合并记录；(4) commit 规范化(J) vs 不改写历史 -> 后续 commit 起规范化、不动 main/gh-pages 现有历史。provenance 已逐条 inline 标注并经 2026-08-02 复核（dev-history/design-rationale/product-brief/project-memory + git 实状）；meta 簇 B/F/G 无源文档，未伪造 provenance。

### Critical Don't-Miss Rules

> 多数 anti-pattern/edge/security 规则已就近落位各主题节（见末尾交叉引用）；本节只收无主题归属或跨节易漏的高危 don't。交叉引用用「节名 › 规则名」稳定锚，不用行号（行号随编辑漂移）。

- **禁 main -> gh-pages 历史合并操作**：gh-pages 为 orphan，merge/rebase/cherry-pick main 任一均破隔离、污染进度图分支历史（`git pull origin/gh-pages` 正常同步不禁）；gh-pages 仅 index.html，禁夹产品代码（cat6 簇A 已述 scoped 与 orphan 隔离，此处显式禁全类历史合并）
- **禁改 gitignored skill 源**：`.agents/.claude/.cline/skills` gitignored（TechStack › 工具链），含 skill 自带 `customize.toml`（标 'DO NOT EDIT'，重装覆盖）；直接改重装即丢。改 skill 优先 `_bmad/custom/{skill}.toml` override，且须验生效。[override 不足时退路待定]

**已就近落位的高危 don't（交叉引用，不重复正文）**：校验降级禁白屏(校验引擎 › 校验非黑盒+异常降级) | 导入 JSON exploit 信任边界(数据与存储 › 进度导出/导入) | CJK 误入 canvas/non-monospace(ADR-12 + Framework › ASCII字形渲染 + Testing › canvas完整性) | blocked 误当 todo(cat6 簇D) | 禁 as 绕 Zod(TS › 禁as+lint) | Date.now/Math.random 泄入校验(TS › 离线确定性 + Testing › 测试可重现) | tombstone/覆盖率测试(Testing › 测试范围哲学) | 倒金字塔(Testing › 测试金字塔) | 禁在 Lovable 改骨(Framework › 禁在Lovable改骨) | 规格与原型脱节 cascade(cat6 簇F)


---

## Usage Guidelines

**For AI Agents:**
- 实现前通读本文件；规则按主题就近落位，cat7 交叉引用索引为 don't 单点扫描入口
- 严格遵循所有规则；遇歧义取更严格选项
- [缺]/[待定] 占位=scaffold 前 unknown，禁臆造；scaffold 后按 cat6 › scaffold 回写回填
- 新模式涌现时回写本文件

**For Humans:**
- 保持 lean，聚焦 agent 需知的非显然细节
- 技术栈变更时更新
- 定期复审移除已变显然的规则
- 行号引用已弃用（易漂移），用「节名 › 规则名」稳定锚或「cat6 簇X」

Last Updated: 2026-08-03（规则快照日期; 进度以 project-memory.md 为准）

## Scaffold 回写 Debt 清单（[缺]/[待定] 占位，接 cat6 › scaffold 回写）

- package.json 精确版本（React/Vite/TS/Tailwind/shadcn）-- TechStack › MVP 产品栈
- tsconfig.json 严格性（strict+noUncheckedIndexedAccess 引擎模块）-- TS › tsconfig 严格性分层
- shadcn/Radix 版本 pin（防漂移 break 暗色 token）-- Framework › 配置
- 测试框架（倾向 vitest 单测 + Playwright E2E）-- Testing › 测试框架
- Lint/Format（ESLint+Prettier，禁 as/any）-- Code Quality › Lint/Format
- 命名规范（文件/函数/类型/branded）-- Code Quality › 命名
- [override 不足时退路待定] -- cat7 › 禁改 gitignored skill 源（customize.toml override 边界）

> 上述 [缺] 项 scaffold 完成即回写（cat6 › scaffold 回写：触发=里程碑、完成即回写非延后、责任人=人工、遗留进 debt 审）。
