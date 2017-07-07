export default {
    // 店族 ajax 请求，增加了与店族后台拟定的默认参数
    fetch (obj) {
        obj.data = Object.assign({
            token: vm.getCookie(vm.config.tokenName)
        }, obj.data || {})

        obj.headers = obj.headers || {
            'Content-Type': 'application/json',
            "Cache-Control": "no-cache" // 禁止缓存（返回刷新数据）
        }

        obj.method = obj.method || 'GET' 

        return new Promise(function (resolve, reject) {
            this.$http(obj)
            .then(res => {
                if (!res.err) resolve(res)
                else if (res.err > 0)  reject(res)
                // err = -1，进行微信授权
                else if (res.err == -1 && !!res.data)
                    location.href = res.data
            })
            .catch(err => vm.$dialog.toast({mes: '请求失败'}))
        })
    },

    // 店族 get 请求
    get (obj) {
        return this.fetch(obj)
    },

    // 店族 post 请求
    post (obj) {
        obj.method = 'POST'
        return this.fetch(obj)
    }
}