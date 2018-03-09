export default [
    {
        title:'首页',
        component:'Home',
        icon:'el-icon-news',
        path:'/'
    },
    {
        title:'基础模块',
        icon:'el-icon-service',
        sub:[
            {
                title:'支付应用管理',
                component:'App',
                path:'/app',
                icon:'el-icon-star-on'
            }
        ]
    },
    {
        title:'账户相关',
        icon:'el-icon-service',
        sub:[
            {
                title:'财务中心',
                component:'Finance',
                path:'/finance',
                icon:'el-icon-star-on'
            }
        ]
    },
    {
        title:'支付场景',
        icon:'el-icon-service',
        sub:[
            {
                title:'企业打款',
                component:'Transfer',
                path:'/transfer',
                icon:'el-icon-star-on'
            }
        ]
    }
]