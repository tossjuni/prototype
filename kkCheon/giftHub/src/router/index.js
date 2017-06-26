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
  routes: [
    {
      path: '/',
      name: 'storeHub',
      component: storeHub
    },
    {
      path: '/steam',
      name: 'steam',
      component: steam
    },
    {
      path: '/googlePlayGift',
      name: 'googlePlayGift',
      component: googlePlayGift
    },
    {
      path: '/afreecaTV',
      name: 'afreecaTV',
      component: afreecaTV
    }
  ]
})
