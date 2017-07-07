module.exports = {
  api: '/user/getUserInfo',
  response: function (req, res) {
    res.json({
	    "code": "0",
	    "msg": "success",
	    "data": [
	        {
	            "id": 2,
	            "name": "yangbin",
	            "sourceId": "2",
	            "roleId": "1"
	        }
	    ]
	});
  }
}