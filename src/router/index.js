import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/indexPage",
        redirect: "/echarts",
        name: "index",
        component: index,
        isShow: true,
        meta: { title: "首页", icon: "el-icon-office-building" },
        children: [{
                path: "/echarts",
                name: "echarts",
                component: () =>
                    import ("../views/echarts.vue"),
                meta: { title: "图表" },
            },
            {
                path: "/crumbs/home",
                name: "home",
                component: () =>
                    import ("../views/crumbs/home"),
                meta: { title: "面包屑" },
            },
        ],
    },
    {
        path: "/crumbs",
        redirect: "/crumbs/crumbsBread",
        component: index,
        name: "crumbs",
        isShow: true,
        meta: { title: "面包屑", icon: "el-icon-bank-card" },
        children: [{
                path: "/crumbs/crumbsBread",
                name: "crumbsBread",
                component: () =>
                    import ("../views/crumbs"),
                meta: { title: "混入" },
            },
            {
                path: "/crumbs/home",
                name: "home",
                component: () =>
                    import ("../views/crumbs/home"),
                meta: { title: "面包屑" },
            },
        ],
    },
    {
        path: "/res",
        component: index,
        name: "res",
        isShow: true,
        meta: { title: "知识框架", icon: "el-icon-link" },
        children: [{
                path: "/res/resources-vue",
                name: "resources",
                component: () =>
                    import ("../views/resources/resources-vue.vue"),
                meta: { title: "vue" },
            },
            {
                path: "/res/resources-css",
                name: "resourcesCss",
                component: () =>
                    import ("../views/resources/resources-css.vue"),
                meta: { title: "css" },
            },
            {
                path: "/res/resources-js",
                name: "resourcesCss",
                component: () =>
                    import ("../views/resources/resources-js.vue"),
                meta: { title: "js" },
            },
            {
                path: "/res/resources-git",
                name: "resourcesGit",
                component: () =>
                    import ("../views/resources/resources-git.vue"),
                meta: { title: "git" },
            },
        ],
    },
    // 登录页面
    {
        isShow: false,
        path: "/",
        component: () =>
            import ("@/views/login"),
        meta: { title: "登录" },
    },

    // 错误页面
    {
        isShow: false,
        path: "/error",
        component: () =>
            import ("@/views/error/Error.vue"),
    },
    // 没有配置页面的路由
    {
        path: "*",
        isShow: false,
        redirect: "/error",
    },
];

const router = new VueRouter({
    routes,
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

router.beforeEach((to, form, next) => {
    document.title = to.meta.title || "潮汐"; //修改网页展示title
    console.log(to, form, "to, form,");
    let userName = localStorage.getItem("userName");
    if (!userName) {
        if (to.path == "/") {
            next();
        } else {
            next("/");
        }
    }
    next();
});

export default router;