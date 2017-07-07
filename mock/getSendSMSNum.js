module.exports = {
  api: '/commonRules/getSendNum',
  response: function (req, res) {
    res.json(
    	{
		    "hasResult": 1,
		    "sendlist": [
		        {
		            "smsTime": "2017-05-03 14:39:02",
		            "smsNum": "0",
		            "rightsTime": "2017-05-03 14:39:01",
		            "rightsNum": "1"
		        },
		        {
		            "smsTime": "2017-05-04 14:39:03",
		            "smsNum": "0",
		            "rightsTime": "2017-05-04 14:39:03",
		            "rightsNum": "1"
		        },
		        {
		            "smsTime": "2017-05-05 14:36:28",
		            "smsNum": "0",
		            "rightsTime": "2017-05-05 14:36:28",
		            "rightsNum": "1"
		        },
		        {
		            "smsTime": "2017-05-05 14:36:28",
		            "smsNum": "0",
		            "rightsTime": "2017-05-05 14:37:07",
		            "rightsNum": "1"
		        },
		        {
		            "smsTime": "2017-05-05 14:36:28",
		            "smsNum": "0",
		            "rightsTime": "2017-05-05 14:39:07",
		            "rightsNum": "1"
		        }
		    ],
		    "currentPageNum": 1,
		    "totalNum": 5,
		    "pageSize": 5,
		    "frequency": "日循环"
		}
    );
  }
}