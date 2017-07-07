module.exports = {
  api: '/user/logout',
  response: function (req, res) {
    res.json({"code":"0","msg":"退出操作成功"});
  }
}