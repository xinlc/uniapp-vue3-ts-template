/**
 * 图片静态服务器，方便本地开发，图片还为上传到 oss 情况
 */
const path = require('path');
const express = require('express');
// const serveStatic = require('serve-static');
const app = express();

// app.use(serveStatic('public/ftp', { index: ['default.html', 'default.htm'] }));
app.use('/static/images', express.static(path.resolve(__dirname, '../static-dev/images')));

app.listen(3088);
