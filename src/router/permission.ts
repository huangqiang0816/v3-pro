import store from '@/store'
import { SET_USER_INFO } from '@/store/sys/actionType'
import { getUrlparmas } from '@/utils/helper/url'
import router from './'

router.beforeEach((to, from, next) => {
  // 获取登录信息
  if (to.fullPath.includes('?') && getUrlparmas(to.fullPath).token) {
    store.dispatch(SET_USER_INFO, getUrlparmas(to.fullPath))
    next({
      path: '/'
    })
  }

  // 没有登录执行登录操作
  if (!store.state.sys.token && to.path !== '/login') {
    return next({
      path: '/login'
    })
  }
  console.log('已经登录了')
  next()
})
