module.exports = {
  api: '/user/login',
  response: function (req, res) {
    res.json({state:1,msg:'成功',realname:'管理员'});
  }
}