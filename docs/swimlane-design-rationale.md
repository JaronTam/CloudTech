# NewSD 故事可视化(swimlane)设计 rationale 深档

> 互补 `docs/swimlane-dev-history.md`(记「做了什么 / 何时」6-commit 演进史);本文档记「为什么这么做 / 为什么不那么做」,按设计决策点深挖备选与取舍,供日后改动前回看。
> 产物:`gh-pages` 孤儿分支 `index.html`(纯 HTML+CSS+JS 自绘,991 行 / 35KB)
> 线上:https://jarontam.github.io/NewSD/
> 数据:40 story / 6 epic / 72 依赖边,纵向 6 泳道 × 横向 L0–L16 拓扑层

---

## 1. 数据层:为什么拓扑分层而非自动布局

核心价值命题:**同列 = 同 Layer = 可并行**。这一命题决定整个布局选型。

- **Layer = 最长前置路径深度**:`Layer(v) = max(Layer(u)+1 for u in preds(v))`,从 `epics.md` 各 Story 的 Given/前置子句依赖闭包算出,非显式给定。用最长路径(非最短/任意拓扑序)因其 = story 最早可启动层(所有前置链走完),同层互不依赖即可并行--排期可用的语义。
- **否决 mermaid subgraph 自动布局**:mermaid(dagre)优化边交叉数,不保证同层节点纵向对齐,同层节点可能错列,"同列可并行"无法一眼看出。自动布局优化美观,不优化并行可读性。
- **否决纯表格**:拓扑分层表(`index.html` L462-577)其实并存,但表格无跨 epic 依赖边可视化(1b.8->3.4/5.3、3.1->4.x/5.3 跨泳道耦合),边是泳道图独有价值。两者并存:表给精确层号,图给耦合全貌。

## 2. NODES / E 数组结构

```
NODES: [id, label, short, epic, layer, status]   // 6 元组
E:     [from, to] 或 [from, to, "seq"]            // type 可选
```

- **id 与 label 分离**:id=`"1a13"`(CUR/边引用键,无点号避转义),label=`"1a-13"`(显示,保留 epic 原命名连字符)。`CUR = new Set(["1a10"])` 引用 id,`renderCurProse` 用 label+short 派生散文。
- **status 三态 done/todo/blocked**:todo=入边全 done 立即可开发;blocked=有未完成硬前置 或 显式标阻塞(1a.14 待 CS 决策、3.4/5.3/3.5/5.4 依赖 1b.8)。两态(done/todo)会让"等什么"信息丢失--devhint 右列单独显 blocked 的阻塞项 pill,左列显 todo 可开发,依赖此区分。
- **E type 区分 hard/seq**:无 type=硬依赖(规格层 Given 前置,灰实线 `#6b7a99`);`"seq"`=执行序(非规格强制,黄虚线 `#ffd60a` dasharray 5 4)。1a-13->1a.9->1a.10 是执行序(i18n 抽 key 避返工,非规格上 1a.9 依赖 1a-13),画成硬依赖会误导"1a.9 必须等 1a-13"--实际是排期选择,视觉区分(实/虚+色)让两类依赖可辨。

## 3. 布局:CSS Grid 二维对齐 + SVG 覆盖画边

- **lane-grid Grid 模板**:`grid-template-columns: 118px repeat(17, 116px)`(1 标签列 + L0–L16 共 17 层列),`grid-template-rows: 46px repeat(6, 150px)`(1 表头 + 6 epic 行)。Grid 而非 flex/abs-pos:二维网格(层列 × epic 行)天然对齐,`gridColumn=l+2`(避标签列)、`gridRow=epicIdx+2` 一一映射,同层跨 epic 自动同列。
- **同格多卡堆叠**:`cellMap[epic_layer]` 收集同格 story,`appendChild` 纵向堆叠(cell `flex-direction:column`)。L5 跨 6 epic 各自 cell,每 cell 0-N 卡。
- **SVG 边覆盖 Grid**:`svg.links position:absolute top:0 left:0 z-index:1 overflow:visible`,`drawLinks`(L812)用 `getBoundingClientRect` 取卡片中心,画三次贝塞尔 `M x1 y1 C x1+dx y1, x2-dx y2, x2 y2`,`dx=max(36,|Δx|*0.45)` 控曲度。SVG path 而非 CSS line:跨格跨行曲线 + 72 条边 CSS 无法;`overflow:visible` 不裁剪。
- **sticky 表头/首列**:`.corner` / `.lanelabel` `position:sticky left:0` + `background:var(--panel) z-index:3`。sticky 而非 fixed:随 scroll-wrap 滚动自然固定,grab-to-pan 改 scrollLeft/Top 时 sticky 自动跟随,无需 JS 同步--这是 §4.3 选 scroll 而非 transform 的前提。

## 4. 交互层

### 4.1 hover 高亮(临时焦点)

mouseover 卡片 -> 直连边 `.link.hl`(绿粗 `#00ff9d` 2.8px)+ 非直连 `.link.dim`(opacity 0.1)+ 当前卡 `.card.hl`(白环)。

- **mouseover/mouseout + 事件委托而非 mouseenter**:mouseover 冒泡,wrap 单监听 + `closest(".card")` 定位;mouseenter 不冒泡需 40 卡各绑监听。
- **.hl 与 .cur 独立**:hover 不擦 CUR(见 4.2)。

### 4.2 CUR 恒定高亮(会话级常驻)

`.card.cur`:薄荷环 `box-shadow 0 0 0 3px var(--mint)` + `curPulse 1.8s` 脉冲 + `::after "开发中"` 徽章。

- **CUR 与 hover 分两个 class**:`.cur` 会话级(整批常驻),`.hl` 秒级(hover 临时)。`mouseout` 只 `clearHover()` 移除 `.hl/.dim`,不碰 `.cur`。Playwright 验证 `curCount` 跨 hover 不变。共用一个 class 则 hover 出去擦掉 CUR。
- **z-index 都=6** 但 `.cur` 有 animation,CUR 持续脉冲、hover 白环叠加其上。

### 4.3 grab-to-pan(空白拖拽平移)

`.scroll-wrap cursor:grab`,mousedown 空白(非 `.card`)切 `.panning`->`grabbing`,mousemove 改 `scrollLeft/Top`,mouseup 释放。

- **改 scrollLeft/Top 而非 transform translate**:scroll-wrap `overflow:auto` + sticky 表头/首列。改 scrollLeft/Top = 原生滚动,stuck 元素自动跟随;transform translate 改变包含块令 sticky 失效。这是选 scroll 的决定性理由,也是 §3 sticky 能工作的前提。
- **不触发判定**:`ev.target.closest(".card")` 排除卡片(cursor:pointer);`offsetX>clientWidth || offsetY>clientHeight` 排除滚动条;`ev.button!==0` 排除非左键。`pan!=null` 时 mouseover `return` 抑制 hover。
- **pan 监听绑 window 非 wrap**:mousemove/mouseup 绑 window,鼠标移出 wrap 仍能继续拖/释放。

## 5. CUR 方案 A↔B↔A 深档

| 阶段 | commit    | 方案                     | 动机 / 问题                                                      |
| ---- | --------- | ------------------------ | ---------------------------------------------------------------- |
| 引入 | `4c3a7b1` | A 硬编码 `Set([...])`    | 默认高亮,但换故事要改代码重推 gh-pages                           |
| 切换 | `d858cd8` | B 读 URL hash `#cur=...` | 零 push 不 stale,但裸 URL 无高亮,casual visitor 看不到"本次开发" |
| 回归 | `a822a75` | A 硬编码                 | 批次声明工作流:当批并行故事需默认高亮,B 与"声明即高亮"冲突       |

- **点3 sprint-status 派生 CUR(否决)**:实测 `sprint-status.yaml` 的 `development_status:` 块里 `1a-9-i18n: backlog`(dev 未启动即 backlog)。backlog ≠ "当次开发目标"--story dev 前是 backlog,done 后变 done,无"当批声明"语义。status 字段无法表达"当批要做的这一组",CUR 不可从中派生。
- **点4 hashchange 监听重渲染(未做)**:option B 下同文档 hash 导航(`#cur=` 链接)不重跑 `const CUR`(脚本仅载入时执行一次),需 reload。可行:加 `hashchange` listener 重渲染。未做:option B 已废(回 A),维护者书签 URL + reload 已足,casual visitor 看 devhint(always-on 数据驱动)已是主信号。若日后回 B 再加。

## 6. devhint 数据驱动

IIFE `renderDevHint`(L865)载入时遍历 NODES/E 重算,不手写静态列表。

- **IIFE 重算而非手写**:合并 story 后改 NODES status `todo->done` 单点,devhint 自动重算可开发集,无需同步维护第二处文本(手写必 stale)。代价:每次载入 O(N+E),40 节点可忽略。
- **可开发定义 v1->v2 修正**:v1 `!done[n[0]]` 把 blocked 当可开发(blocked 3.4/5.3 入边含未 done 的 1b8,语义上不应进可开发列)-> v2 `n[5]==="todo" && incoming.every(d=>done[d])`(L886)严格 status 过滤 + 入边全 done 双条件。
- **blocked 列显阻塞项**:无可开发 epic 不留空,显该 epic 最前非 done 故事 + 阻塞项 pill(`.dh-wait` + "等"标签),`wait = incoming 中 !done 的 from label`。空白=信息丢失,"等什么"是排期关键。
- **incoming 反向邻接表**:`E.forEach(e=>incoming[e[1]].push(e[0]))`(L869)O(E) 建表,可开发判定每节点 O(入度)。

## 7. 视觉层

### 7.1 EVA 百分比卡 `position:absolute`

`.percent-card position:absolute top:0 right:0`。若入流会撑高 `.site-hd` header,左侧 `.site-titles` 因 card 高度(56px font + 28px padding)出现大面积留白。绝对定位让 card 占右上角,左侧同高度由 `#progbar` 进度条填充。`.site-hd/.legend/.progbar padding-right:300px` 避让 card。

- `.pct-lbl display:none`:原"已合并"文字删除(只剩数字),靠 `title` 属性给 tooltip。

### 7.2 进度条按拓扑层分段(形式即内容)

`#progbar` 内 `.dh-bar` 按 layer 分组(`.dh-bar-grp`),组内 `.dh-bar-cell` 无缝、组间 gap。色=状态(.done 绿 / .todo 灰 / .blocked 橙)。

- **按层分段而非按 epic / 平铺**:形状即推进度--层段绿带=该层完成度,左->右=L0->L16 时间推进。看绿带分布即知推进到哪层、哪些层是瓶颈(L13 1b 三机制、L15-16 收尾)。形式即内容。

### 7.3 中文数字 `numToCn` + 描边

`"百分之"+numToCn(pct)`,如"百分之三十八"。

- **中文化**:EVA 风本地化(Type 95 衬线体 + `feTurbulence` 颗粒 overlay + blur/contrast)。
- **`numToCn`(L912)**:0->零,>=100->一百,十位 `t>0?(t==1?"":CN[t])+"十":""` + 个位 `u>0?CN[u]:""`。十位 1 省略 CN[1]:10="十",12="十二",38="三十八"。
- **`paint-order:stroke fill` + `-webkit-text-stroke:2px #ff0f0f`**:描边画在填色下,避免覆盖填色本体。`text-shadow 0 2px 6px rgba(0,0,0,0.85)` 黑色投影增强暗背景可读性。

### 7.4 配色系统

`:root` 6 epic 各一色:1a cyan `#00d4ff` / 1b purple `#bd00ff` / 2 orange `#ff9500` / 3 pink `#ff006e` / 4 yellow `#ffd60a` / 5 mint `#06ffa5`。card `border=--ec`(epic 色),cell 背景 `rgba(ec,0.035)` 微染。done=`#006d5b` 绿底 + 绿边 `#00ff9d`,blocked=橙虚线 `#ff6b00 dashed`。`--ec` 通过 `cell.style.setProperty("--ec",ep.color)` 注入,card 继承。

## 8. 维护边界

- **纯自绘不引 Mermaid/CDN**:离线可用(file:// 预览)、零网络依赖、版本可控;Mermaid 自动布局不对齐层(违背 §1 核心价值)。代价:72 边手写 E 数组,但数据源 epics.md 派生一次性写定,后续仅 status 更新。
- **gh-pages 孤儿分支**:与 main 源码隔离,只含 index.html,不受 main Require-PR 保护可直推(更新 CUR/status 无需走 PR)。代价:本地无副本,改需 `git worktree add` 检出或 `git checkout gh-pages`(main clean 时)。
- **状态权威源非图本身**:NODES status 跟随 sprint-status/合并记录更新,图是展示层非真相源。合并 story(PR merged)后改 NODES 第 6 项 `todo->done` 推 gh-pages,同 sprint-status 周期,不夹带 story 代码 PR。
- **Edit 非 ASCII+CRLF 元经验**:index.html 含中文 + CRLF,Edit 工具 `old_string` copy normalize 致 en-dash U+2013 / EM DASH U+2014 失配。修法:Python `io` universal-newline 读归一 `\n` + `newline="\r\n"` 写还原,或用 ASCII 锚(如 `main;Epic`)避开 dash 码位。
