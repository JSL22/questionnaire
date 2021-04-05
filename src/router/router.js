export default  [
    {
        name: "Index",
        path: "/",
        meta: {title:"首页"},
        component: ()=> import("@/views/home/index")
    },
    {
        name:"Login",
        path:'/login',
        meta: {title:"登录"},
        component: ()=> import("@/views/home/login")
    },
    {
        name:"Tip",
        path:'/tip',
        meta: {title:"提示"},
        component: ()=> import("@/views/home/tip")
    },
    // 内容
    {
        name:"System",
        path:'/system',
        meta: {title:"问卷页"},
        component: ()=> import("@/views/system/index"),
        children: [
            {
                name: "Folder",
                path: '/system/folder',
                component: ()=> import("@/views/folder/index")
            }
        ]
    },
    {
        name :"Text1",
        path :"/text",
        component : ()=> import("@/views/system/text1")
    },
    //异常
    {
        name:"404",
        path: '*',
        meta: {title:"404"},
        component: ()=> import("@/views/exception/404")
    }
    
]