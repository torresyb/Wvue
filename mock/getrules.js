module.exports = {
  api: '/querySqltempandtags',
  response: function (req, res) {
    res.json({"temps":[{"id":32,"name":"绑卡未充值","description":"<p></p><p></p><pre>绑卡天数：天数（n天前绑卡并至今未充值天数）<br/>单位：时间单位（0代表单位：天，目前默认为0）<br/>用户类型：用户类型</pre><p></p><p></p>","sqlStatement":"EXEC getAccountID_003_st ${绑卡天数=1},\n${单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":"count1:1|||count2:2|||usertype:1","isAvailable":1,"tag":"9","createdBy":null,"modified":null,"modifiedBy":null,"created":null},{"id":33,"name":"首投","description":"<pre>首投天数：注册n天后首投&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_007_st ${首投天数=1},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'","params":null,"isAvailable":1,"tag":"10","createdBy":null,"modified":null,"modifiedBy":null,"created":null},{"id":34,"name":"非首投","description":"<pre>非首投天数：注册后n天进行这次投资&#10;时间单位：时间单位（0代表单位：天，目前默认为0）&#10;用户类型：用户类型</pre>","sqlStatement":"EXEC getAccountID_008_st ${非首投天数=7},\n${时间单位=2},\n'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4},'\n","params":"非首投天数:7|||时间单位:2|||用户类型:1","isAvailable":1,"tag":"8","createdBy":null,"modified":null,"modifiedBy":null,"created":null},{"id":37,"name":"累计取现金额","description":"<p>统计天数：X天内的数据。注意，60天内包含30天内的数据。</p><p>累计取现金额：X天内的累计取现金额。注意，所有区间如无特殊说明，均为左闭右开。例如 0~1000包含0不包含1000</p>","sqlStatement":"EXEC getAccountID_001x_st '${统计天数=S|30天内,1|60天内,2|90天内,3}',\r\n'${取现金额=S|0~1000,1|1000~5000,2|5000~10000,3|10000~20000,4|20000~50000,5|50000~100000,6|100000~150000,7|150000~300000,8|300000~500000,9|500000~1000000,10|大于1000000（包括1000000）,11}'\r\n,'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4}'","params":"统计天数:3|||取现金额:1","isAvailable":1,"tag":"","createdBy":null,"modified":null,"modifiedBy":null,"created":null},{"id":38,"name":"累计取现次数","description":"<p><br/></p><p style=\"font-size: 14px;\">统计天数：X天内的数据。注意，60天内包含30天内的数据。</p><blockquote><p style=\"font-size: 14px;\">取现次数：X天内的累计取现次数。注意，所有区间如无特殊说明，均为左闭右闭。例如 3~5包含0且包含1000</p></blockquote><!--EndFragment--><p><br/></p><p><br/></p>","sqlStatement":"EXEC getAccountID_002x_st '${统计天数=S|30天内,1|60天内,2|90天内,3|180天内,4}',\r\n'${取现次数=S|1次,1|2次,2|3~5次,3|6~10次,4|11~20次,5|11~30次,6|大于10次,7|大于20次,8|大于30次,9}'\r\n,'${用户类型=M|自由注册,1|好友推荐,2|渠道推荐,4}'","params":"统计天数:1|||取现次数:1","isAvailable":1,"tag":"","createdBy":null,"modified":null,"modifiedBy":null,"created":null}],"tags":[{"label":"注册未投资","value":"1"},{"label":"累计充值金额","value":"2"},{"label":"活期赎回","value":"3"},{"label":"充值未投资","value":"4"},{"label":"定期回款到账","value":"5"},{"label":"赎回到账","value":"6"},{"label":"定期回款到账(即时)","value":"7"},{"label":"投资成功(非首投)","value":"8"},{"label":"绑卡未充值","value":"9"},{"label":"投资成功(首投)","value":"10"}]});
  }
}