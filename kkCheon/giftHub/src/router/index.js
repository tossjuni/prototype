import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import storeHub from '@/apps/storeHub'
import storeTemplate from '@/apps/storeTemplate'
import afreecaTV from '@/apps/afreecaTV'
import steam from '@/apps/steam'
import googlePlayGift from '@/apps/googlePlayGift'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/service',
      name: 'storeHub',
      component: storeHub
    },
    {
      path: '/service/steam',
      name: 'steam',
      component: steam
    },
    {
      path: '/service/googlePlayGift',
      name: 'googlePlayGift',
      component: googlePlayGift
    },
    {
      path: '/service/afreecaTV',
      name: 'afreecaTV',
      component: afreecaTV
    }
  ]
})
