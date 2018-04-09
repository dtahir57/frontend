import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Offer from '@/components/club-manager/Offer'
import CreateOffer from '@/components/club-manager/CreateOffer'
import Profile from '@/components/club-manager/Profile'
import Account from '@/components/club-manager/Account'
import SingleOffer from '@/components/club-manager/SingleOffer'
import Admin from '@/components/admin/index'
import Form from '@/components/admin/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/offer',
      name: 'Offer',
      component: Offer
    },
    {
      path: '/create-offer',
      name: 'Create-Offer',
      component: CreateOffer
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/offer/single-offer',
      name: 'Single-offer',
      component: SingleOffer
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/form',
      name: 'Form',
      component: Form
    }
  ]
})
