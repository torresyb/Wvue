module.exports = {
  api: '/sqlTemplate/querySqltemplate',
  	response: function (req, res) {
    	res.json([
	    	{"id":31,"name":"注册未投资","description":"<pre><ol><li>​注册天数：天数（n天前注册并至今未投资）</li><li>用户类型：自由注册，好友推荐，渠道推荐</li></ol></pre>","sqlStatement":"EXEC getAccountID_001_st ${注册天数=1},0,\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":"注册天数:1|||用户类型:1","isAvailable":0,"tag":"1","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":32,"name":"绑卡未充值","description":"<p></p><p></p><pre>绑卡天数：天数（n天前绑卡并至今未充值天数）<br/>单位：时间单位（0代表单位：天，目前默认为0）<br/>用户类型：用户类型</pre><p></p><p></p>","sqlStatement":"EXEC getAccountID_003_st ${绑卡天数=1},\n${单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":"count1:1|||count2:2|||usertype:1","isAvailable":1,"tag":"9","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":33,"name":"首投","description":"<pre>首投天数：注册n天后首投&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_007_st ${首投天数=1},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":null,"isAvailable":1,"tag":"10","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":34,"name":"非首投","description":"<pre>非首投天数：注册后n天进行这次投资&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_008_st ${非首投天数=7},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'\n","params":"非首投天数:7|||时间单位:2|||用户类型:1","isAvailable":0,"tag":["8"],"createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":35,"name":"活期赎回","description":"<pre>投资天数：天数（n天前投资）&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;最小赎回金额：最小赎回金额&#10;最大赎回金额：最大赎回金额&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_027_st ${投资天数=1},\n${时间单位=2},\n${最小赎回金额=100},\n${最大赎回金额=200},'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":null,"isAvailable":0,"tag":"3","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":36,"name":"首投","description":"<pre>首投天数：注册n天后首投&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_007_st ${首投天数=1},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":null,"isAvailable":1,"tag":"10","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":37,"name":"非首投","description":"<pre>非首投天数：注册后n天进行这次投资&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_008_st ${非首投天数=7},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'\n","params":"非首投天数:7|||时间单位:2|||用户类型:1","isAvailable":0,"tag":"8","createdBy":null,"created":null,"modified":null,"modifiedBy":null},
	    	{"id":38,"name":"活期赎回","description":"<pre>投资天数：天数（n天前投资）&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;最小赎回金额：最小赎回金额&#10;最大赎回金额：最大赎回金额&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_027_st ${投资天数=1},\n${时间单位=2},\n${最小赎回金额=100},\n${最大赎回金额=200},'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":null,"isAvailable":0,"tag":"3","createdBy":null,"created":null,"modified":null,"modifiedBy":null}
    	]);
  	}
}