module.exports = {
  api: '/sqlTemplate/deleteSqltemplate',
  response: function (req, res) {
    res.json({"code":1,"msg":"删除操作成功！"});
  }
}