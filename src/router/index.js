import Vue from 'vue'
import Router from 'vue-router'
import upImg from '@/components/upImg'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'upImg',
      component: upImg
    },
    {
      path: '/upImg',
      name: 'upImg',
      component: upImg
    }
  ]
});

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  let language=localStorage.getItem('language');
  let author = localStorage.getItem('author');
  if( language===null || language==='null' || language===''){
    localStorage.setItem('language','en');
    console.log(localStorage.getItem('language'))
  }
  if(author === 'isLogin'){
    if (to.path === '/login') {
      next('/upImg');
    } else {
      next();
    }
  }else{
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
  
});

export default router;
