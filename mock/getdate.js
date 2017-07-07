module.exports = {
  api: '/user/getSysDate',
  response: function (req, res) {
    res.json({sysDate: "2017-05-05, 17:44:22"});
  }
}