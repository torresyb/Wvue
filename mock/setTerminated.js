module.exports = {
  api: '/commonRules/setTerminated',
  response: function (req, res) {
    res.json({state:1,msg:'成功'});
  }
}