module.exports = {
  api: '/sqlTemplate/setEnableSqltemplate',
  response: function (req, res) {
    res.json({"code":1,"msg":"操作成功！"});
  }
}