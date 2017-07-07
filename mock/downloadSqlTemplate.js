module.exports = {
  api: '/sqlTemplate/downloadSqlTemplate',
  response: function (req, res) {
    res.json({state:1,msg:'成功',realname:'管理员'});
  }
}