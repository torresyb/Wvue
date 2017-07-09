module.exports = {
  api: 'http://lxapi.361web.net/guide/login',
  response: function (req, res) {
    res.json({state:0,msg:'认证失败',realname:''});
  }
}