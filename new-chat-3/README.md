# 泰国古珠网站使用说明

这个文件夹是一套静态网站，适合古珠收藏展示、文化介绍、图录和小型品牌官网。

## 文件结构

- `index.html`：网站文字、栏目、轮播图和图库内容。
- `assets/styles.css`：网站颜色、排版、手机适配和布局样式。
- `assets/script.js`：轮播图切换逻辑。
- `assets/images/`：网站图片。

## 如何本地查看

直接双击 `index.html`，用浏览器打开即可。

如果你修改了文字或图片，刷新浏览器就能看到新版本。

## 如何修改网站文字

用记事本、VS Code 或任意代码编辑器打开 `index.html`。

常改位置：

- 首页大标题：搜索 `泰国古珠收藏、鉴赏与文化展示`
- 导航栏：搜索 `主导航`
- 藏品分类：搜索 `核心古珠类别`
- 图库说明：搜索 `古珠照片展示`
- 建站教程：搜索 `域名、服务器和内容修改教程`

修改 `<h1>`、`<h2>`、`<h3>`、`<p>` 标签里面的中文即可。不要删除尖括号标签本身。

示例：

```html
<h3>蚀花玛瑙珠</h3>
<p>这里改成你的藏品介绍。</p>
```

## 如何修改图片

图片都在 `assets/images/` 文件夹。

最简单方法：

1. 准备你的新照片。
2. 改成同样的文件名，例如 `hero-beads.png`。
3. 覆盖 `assets/images/hero-beads.png`。
4. 刷新浏览器。

当前图片用途：

- `hero-beads.png`：首页轮播第一张、图库艺术陈列图。
- `etched-agate.png`：轮播第二张、蚀花玛瑙图。
- `material-groups.png`：轮播第三张、材质分组图。
- `gallery-tray.png`：综合收藏盘。
- `carnelian-strand.png`：红玉髓桶珠。
- `banded-agate.png`：带纹玛瑙。
- `glass-trade-beads.png`：古琉璃贸易珠。
- `museum-display.png`：展陈组合。

如果想新增图库图片：

1. 把新图片放入 `assets/images/`。
2. 打开 `index.html`。
3. 搜索 `<div class="gallery">`。
4. 复制一整段 `<figure>...</figure>`。
5. 把 `src`、`alt`、标题和说明改成你的内容。

示例：

```html
<figure>
  <img src="assets/images/my-new-bead.png" alt="我的新古珠照片">
  <figcaption><strong>新入藏古珠</strong><span>这里写尺寸、材质、观察重点。</span></figcaption>
</figure>
```

## 如何修改网站颜色

打开 `assets/styles.css`，最上面有一组颜色变量：

```css
:root {
  --ink: #1d1814;
  --paper: #f7f0e5;
  --clay: #a54f2d;
  --amber: #d7963a;
  --indigo: #24384f;
}
```

例如把主色从陶土红改成深绿色：

```css
--clay: #2f6659;
```

## 如何部署到服务器和绑定域名

### 推荐方案：Cloudflare Pages

适合新手，免费，速度快，支持绑定自己的域名。

1. 注册 Cloudflare 账号。
2. 进入 `Workers & Pages`。
3. 选择 `Create application`。
4. 选择 `Pages`。
5. 如果你会用 GitHub，可以连接 GitHub 仓库；如果不会，选择直接上传文件。
6. 上传整个网站文件夹，确保包含 `index.html` 和 `assets` 文件夹。
7. 发布后 Cloudflare 会给你一个临时网址。
8. 在 Pages 项目里打开 `Custom domains`。
9. 添加你的域名，例如 `www.siambeads.com`。
10. 按页面提示到 DNS 里添加记录。

### 域名 DNS 怎么填

不同平台提示不同，按部署平台给的值填写。

常见记录：

- `CNAME`：把 `www` 指向平台给你的地址。
- `A`：把根域名指向平台给你的 IP。
- `TXT`：用于验证你拥有这个域名。

生效时间通常是几分钟到 24 小时。

### 如果买云服务器

如果你以后需要后台、会员、订单、在线支付，可以买云服务器。

基础流程：

1. 购买云服务器，例如阿里云、腾讯云、华为云、DigitalOcean。
2. 安装 Nginx。
3. 把本网站文件上传到服务器的网站目录。
4. 配置 Nginx 指向 `index.html`。
5. 在域名 DNS 里把域名指向服务器 IP。
6. 使用 Certbot 或云平台证书开启 HTTPS。

静态展示网站优先用 Cloudflare Pages、Vercel、Netlify，不建议一开始就买服务器。

## 上线前检查

- 所有图片都能显示。
- 手机打开不拥挤。
- 联系方式、版权信息、藏品说明改成真实内容。
- 如果用于销售，补充价格、尺寸、重量、瑕疵、售后和鉴定说明。
- 图片如果是 AI 示意图或非实物图，要明确标注，避免误导客户。
