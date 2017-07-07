module.exports = {
  api: '/user/login',
  response: function (req, res) {
    res.json({state:0,msg:'认证失败',realname:''});
  }
}