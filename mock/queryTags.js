module.exports = {
  api: '/sqlTemplate/getTags',
  	response: function (req, res) {
    	res.json({
		    "code": "0",
		    "msg": "success",
		    "data": [
		        {
		            "label": "注册未投资",
		            "value": "1"
		        },
		        {
		            "label": "累计充值金额",
		            "value": "2"
		        },
		        {
		            "label": "活期赎回",
		            "value": "3"
		        },
		        {
		            "label": "充值未投资",
		            "value": "4"
		        },
		        {
		            "label": "定期回款到账",
		            "value": "5"
		        },
		        {
		            "label": "赎回到账",
		            "value": "6"
		        },
		        {
		            "label": "定期回款到账(即时)",
		            "value": "7"
		        },
		        {
		            "label": "投资成功(非首投)",
		            "value": "8"
		        }
		    ]
		});
  	}
}