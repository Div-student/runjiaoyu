import Vue from 'vue'
import Router from 'vue-router'
import {Login} from '@/components/login'
import {Home} from '@/components/home'
import {Wode, Wdheader} from '@/components/parts/wode'
import {Huodong, Hdheader} from '@/components/parts/huodong'
import {Kecheng} from '@/components/parts/kechen'
import {Shouye, Headers} from '@/components/parts/shouye'
import {Yishukaoji, Yskjheader} from '@/components/parts/yishukaoji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/wode',
      component: Home,
      children: [
        // 底部导航栏的路由
        {
          path: '/wode',
          name: 'Wode',
          components: {contentview: Wode, headerview: Wdheader}
        },
        {
          path: '/huodong',
          name: 'Huodong',
          components: {contentview: Huodong, headerview: Hdheader}
        },
        {
          path: '/kecheng',
          name: 'Kecheng',
          components: {contentview: Kecheng, headerview: Headers}
        },
        {
          path: '/shouye',
          name: 'Shouye',
          components: {contentview: Shouye, headerview: Headers}
        },
        {
          path: '/yishukaoji',
          name: 'Yishukaoji',
          components: {contentview: Yishukaoji, headerview: Yskjheader}
        },
        // 头部的路由
        {
          path: '/headers',
          name: 'Headers',
          component: Headers
        },
        {
          path: '/hdheader',
          name: 'Hdheader',
          component: Hdheader
        },
        {
          path: '/wdheader',
          name: 'Wdheader',
          component: Wdheader
        },
        {
          path: '/yskjheader',
          name: 'Yskjheader',
          component: Yskjheader
        }
      ]
    }
  ]
})
