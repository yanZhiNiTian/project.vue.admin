/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 14:39:14
 */
import Vue from 'vue';
import Router from 'vue-router';
import { getSessionId } from '@/util/auth';

// 定义白名单，可以直接进入
const whiteList = ['/login'];

const Login = () =>
  import ('@/view/login/login.vue')
const Page404 = () =>
  import ('@/view/page404/page404.vue')

Vue.use(Router);

const adminRouter = new Router({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/404',
    component: Page404
  }]
});

// 导航守卫
adminRouter.beforeEach((to, from, next) => {
  if (getSessionId()) {
    next()
  } else {
    if (whiteList.indexOf(to.path) > -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

export default adminRouter
