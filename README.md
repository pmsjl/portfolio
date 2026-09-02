# 徐俊杰 · 个人简历网站

徐俊杰的个人简历 / 作品集网站，面向 **AI 应用开发实习** 求职。

- **在线地址**：<https://pmsjl.github.io/portfolio/>
- **技术栈**：原生 HTML + CSS + JavaScript，零依赖、零构建，可直接部署到 GitHub Pages
- **语言**：中文

---

## 目录

1. [网站功能](#网站功能)
2. [目录结构](#目录结构)
3. [本地预览](#本地预览)
4. [部署到 GitHub Pages](#部署到-github-pages)
5. [更新内容与素材](#更新内容与素材)
6. [自定义说明](#自定义说明)
7. [设计说明](#设计说明)

---

## 网站功能

| 区块 | 内容 |
|---|---|
| 首屏 Hero | 头像、姓名、学校身份、求职状态（终端命令行 `❯ 求职中 · 目标岗位：AI 应用开发实习`）、操作按钮、三项数据指标（3 个独立项目 / 85.9 平均学分绩 / 2 个在线产品） |
| 关于我 | `profile.json` 代码窗装饰 + 能力自述 |
| 教育 | 哈工大（深圳）· 计算机与电子通信，含成绩、排名、政治面貌、在校时间 |
| 技能 | 后端 / AI 应用 / 工程工具 / 前端协作 四组，图标 + 文字 |
| 项目 | 3 个项目：旗舰项目全宽大图 + 两个副项目 16:9 小图，各带技术标签、描述、在线体验 / 源码链接 |
| 荣誉 | 竞赛与学校表彰卡片 |
| 联系我 | 邮箱（点击弹窗复制 / 发邮件）+ GitHub 入口 |

**页面特性**

- 🌗 浅色 / 深色双主题：胶囊开关切换，`localStorage` 记忆，刷新无闪白，遵循系统 `prefers-color-scheme`
- 📱 响应式：375 / 768 / 1024 / 1440px 均正常；移动端导航收起为汉堡菜单
- 🖼️ 素材缺失时自动回退到占位图（`onerror` 机制），页面不破版
- ♿ 无障碍：语义化标签、`aria-label`、键盘可操作、支持 `prefers-reduced-motion`

---

## 目录结构

```
portfolio-site/
├── index.html          # 页面结构与全部文案
├── css/
│   └── style.css       # 设计令牌 + 布局样式
├── js/
│   └── main.js         # 主题切换 / 汉堡菜单 / 灯箱 / 弹窗复制 / 滚动动画
└── assets/
    ├── avatar.webp         # 首屏头像（圆形裁剪）
    ├── hit-logo.webp       # 校徽（圆形裁切版）
    ├── resume.pdf          # 简历下载文件
    ├── projects/           # 项目截图
    │   ├── market.webp     #   ① 校园二手交易平台（旗舰，全宽大图）
    │   ├── verbal.webp     #   ② Verbal Memory 测试平台
    │   └── aircraft.webp   #   ③ 飞机大战游戏
    ├── certificates/       # 获奖证书（瀑布流画廊 + 点击放大）
    │   ├── tiaozhanbei.webp    #   挑战杯国家级三等奖
    │   ├── shuxuejingsai.webp  #   数学竞赛省级二等奖
    │   └── jiangxuejin.webp    #   学业三等奖学金
    └── icons/              # 技能图标（simple-icons，已注入品牌色）
```

---

## 本地预览

方式一：直接用浏览器打开 `index.html`（无需服务器，双击即可）。

方式二：启动本地静态服务器（推荐，更贴近线上环境）：

```bash
python -m http.server 8080
```

然后访问 <http://localhost:8080>。

---

## 部署到 GitHub Pages

目标：仓库 `pmsjl/portfolio` → 线上 `https://pmsjl.github.io/portfolio/`

1. **创建仓库**：在 GitHub 新建仓库 `portfolio`（注意：不是 `用户名.github.io`，子路径形式与本站一致）。

2. **推代码**：

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin git@github.com:pmsjl/portfolio.git
   git push -u origin main
   ```

3. **开启 Pages**：仓库 **Settings → Pages → Source 选 `Deploy from a branch`** → 分支 `main` / 目录 `/`（根目录）→ Save。

4. **验证**：等一两分钟，访问 <https://pmsjl.github.io/portfolio/>。

> 本站所有资源均使用**相对路径**（`assets/...`、`css/...`），子路径部署无需任何改动。
> 若使用自有域名，可在 Settings → Pages → Custom domain 中绑定。

---

## 更新内容与素材

### 文案更新

所有正文都在 `index.html` 里，按区块注释（`<!-- 关于我 -->`、`<!-- 项目 -->` 等）直接定位修改即可。证书标题（灯箱展示名）对应 `index.html` 里 `openCert('assets/certificates/xxx.webp','标题')` 的参数。

### 素材替换（同名覆盖即可，无需改代码）

| 素材 | 文件 | 建议 |
|---|---|---|
| 头像 | `assets/avatar.webp` | 竖版 / 正方形均可，圆形裁剪显示 |
| 校徽 | `assets/hit-logo.webp` | 当前为**圆形裁切版**（由 `assets/hit-logo.jpg` 生成）。换新校徽：将新图存为 `assets/hit-logo.jpg` 后重新做圆形裁切，或直接用任意工具裁成圆形后覆盖本文件 |
| 项目截图 ① | `assets/projects/market.webp` | 全宽大图，建议**宽幅**网页截图（2:1 上下） |
| 项目截图 ②③ | `assets/projects/verbal.webp`<br>`assets/projects/aircraft.webp` | 16:9 横向裁切显示，建议宽幅清晰截图 |
| 获奖证书 | `assets/certificates/*.webp` | 每张证书一张图；画廊顺序 = 文件名顺序见上表 |
| 简历 PDF | `assets/resume.pdf` | 替换为最新版即可 |

**图片格式建议**：统一转成 **WebP**（体积小、加载快）；若要转其它格式，`onerror` 占位机制不受影响，但记得把 `index.html` / `style.css` 里的同名引用同步改掉。

---

## 自定义说明

- **主题色**：`css/style.css` 顶部 `:root` 与 `[data-theme="dark"]` 设计令牌，改一处即全局生效。
- **导航链接**：`index.html` 的 `<nav class="nav-links">`。
- **页面标题 / SEO**：`index.html` 的 `<title>`、`<meta name="description">`、`<meta property="og:*">`。
- **联系方式**：邮箱 / 电话等集中在「联系我」区块与 `js/main.js` 的弹窗函数中。

---

## 设计说明

- 布局与视觉参考了两位工程师的个人作品集站点（Sarvesh Raam、Aryan Mishra）的**信息架构与排版思路**，本站所有文案、头像、截图、证书均为徐俊杰本人内容。
- 设计元素：终端提示符品牌（`~/pmsjl_` logo、`profile.json` 代码窗、终端命令行求职状态）、大圆角卡片、彩色渐变项目图、短粗标题下划线。
- 全站图片均压缩为 WebP，原图保留在各自目录。

---

© 2026 徐俊杰 · 哈尔滨工业大学（深圳）
