module.exports = {
  api: '/commonRules/setCommit',
  response: function (req, res) {
    res.json({state:1,msg:'成功'});
  }
}