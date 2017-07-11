/*
** 过滤器
**
** <template>
**     {{ 100 | number(2) }}
**     {{ '2016-01-28T01:57:22.000Z' | date('YYYY-MM-DD HH:MM:SS') }}
**     {{ '2016-01-28T01:57:22.000Z' | date('YYYY-mm-dd HHhh:mm:ss') }}
** </template>
**
** <script>
** import Filters from '../../components/Filters'
** export default {
**     filters: Filters
** }
** </script>
*/

export default {
	// 保留几位小数(四舍五入)
    number: (value, decimal) => Number(value || 0).toFixed(decimal),

    // 时间格式化(YYYY-MM(mm)-DD(dd) HH(hh):MM(mm):SS(ss))
    date (value, rule) {
    	// 保持两位数
    	let two = number => (number > 9 ? '' : '0') + number

    	let time = new Date(value)

    	let YYYY = time.getFullYear()
    	let mm = time.getMonth() + 1
    	let dd = time.getDate()

    	let hh = time.getHours()
    	let mi = time.getMinutes()
    	let ss = time.getSeconds()

    	// 两位数
    	let MM = two(time.getMonth() + 1)
    	let DD = two(time.getDate())

    	let HH = two(time.getHours())
    	let MI = two(time.getMinutes())
    	let SS = two(time.getSeconds())

    	// 输出
    	return rule.replace(/\:MM/g, ':MI').replace(/\:mm/g, ':mi')
    		.replace('YYYY', YYYY)
    		.replace('mm', mm)
    		.replace('dd', dd)
    		.replace('hh', hh)
			.replace('mi', mi)
			.replace('ss', ss)
    		.replace('MM', MM)
    		.replace('DD', DD)
    		.replace('HH', HH)
    		.replace('MI', MI)
    		.replace('SS', SS)
    },

    // 限制数组长度
    limitTo (value, length) {
        return value.slice(0, length)
    }
}
