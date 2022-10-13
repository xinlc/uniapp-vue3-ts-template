export const uniCopy = (content: any) => {
  if (!content) console.log('内容为空');
  console.log(content);
  content = typeof content === 'string' ? content : content.toString(); // 复制内容，必须字符串，数字需要转换为字符串
  /**
   * 小程序端 和 app端的复制逻辑
   */

  uni.setClipboardData({
    data: content,
    success: function () {
      uni.showToast({
        title: '复制成功',
      });
    },
    fail: function () {
      uni.showToast({
        title: '复制失败',
      });
    },
  });
};
