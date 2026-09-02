# 徐俊杰 · 个人简历网站

哈尔滨工业大学（深圳）· AI 应用开发实习 · 个人作品集网站

## 本地预览

直接双击 `index.html`，或启动任意静态服务器：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

## 部署（GitHub Pages）

1. 新建仓库 `pmsjl/portfolio`
2. 推送本目录全部文件到 `main` 分支
3. 仓库 Settings → Pages → Source 选 `Deploy from a branch` → 分支 `main` / 根目录 `/`
4. 访问 `https://pmsjl.github.io/portfolio/`

> 全部资源使用相对路径（`assets/...`），子路径部署无需改动。

## 素材替换（无需改代码）

| 素材 | 位置 | 说明 |
|---|---|---|
| 头像照片 | `assets/avatar.webp` | 圆形裁剪显示；竖版/正方形均可 |
| 校徽 | `assets/hit-logo.webp` | 显示在深蓝圆形徽章内 |
| 项目截图 ×3 | `assets/projects/market.webp`<br>`assets/projects/verbal.webp`<br>`assets/projects/aircraft.webp` | 任意比例均可（cover 自适应 + 底部遮罩标题） |
| 获奖证书 | `assets/certificates/*.webp` | 荣誉区瀑布流画廊，点击放大灯箱；文件名对应标题见 `index.html` |
| 简历 PDF | `assets/resume.pdf` | 已放置最新版，可随时替换 |

> 图片已统一转为 WebP（原图保留在对应目录）。换新图时直接覆盖同名 `.webp` 即可。

## 技术说明

- 原生 HTML + CSS + JS，零构建零依赖
- 浅/深主题：`data-theme` 属性 + `localStorage` 持久化，首帧防闪（`<head>` 内联脚本）
- 响应式：375 / 768 / 1024 / 1440px，移动端汉堡菜单
- 无障碍：`aria-label`、`prefers-reduced-motion`、键盘可操作
- 设计参考：Sarvesh Raam 站（主体布局/渐变锚点/代码窗）+ Aryan Mishra 站（标题下划线/幽灵主题按钮/GitHub 栏/量化指标）
