module.exports = {
  api: '/bi/initform',
  response: function (req, res) {
    res.json({
    	type: 0 , // 0 添加，1 编辑
    	title: '摇旺加息券',
    	lists:[{  //权益
    		id:1,
    		name: '加息券1',
    		params:[{
    			name: '金刚A',
    			eles: [{
    				label: '天数',
    				type: 'text',
    				value: '1',
    				prop:'day',
    				rules: [{
    					required: true, message: '请填写天数', trigger: 'blur'
    				}],
    				reg: ['/^\d+$/g','请填写正确的天数'],
    				placehold: '请填写天数'
    			},{
    				label: '活动名称',
    				type: 'text',
    				value: 'sss',
    				prop:'name',
    				rules: [{ 
    					required: true, message: '请输入活动名称', trigger: 'blur' 
    				},{ 
    					min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' 
	            	}],
    				reg: [],
    				placehold: '请输入活动名称'
    			},{
    				label: '区域',
    				type: 'select',
    				value: '',
    				options: [{
    					value: 'shanghai',
    					label: '区域一'
    				},{
    					value: 'beijin',
    					label: '区域二'
    				}],
    				prop:'area',
    				rules: [{
    					required: true, message: '请选择活动区域', trigger: 'change'
    				}],
    				reg: [],
    				placehold: '请选择活动区域'
    			},{
    				label: '特殊资源',
    				type: 'radio',
    				value: '1',
    				options: [{
    					value: '1',
    					label: '备选项1'
    				},{
    					value: '2',
    					label: '备选项2'
    				}],
    				prop:'resource',
    				rules: [{
    					required: true, message: '请选择特殊资源', trigger: 'change'
    				}],
    				reg: [],
    				placehold: '请选择特殊资源'
    			}]
    		}]
    	}]
    });
  }
}