import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'
import Cate from '@/components/Cate'
import Top from '@/components/Top'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book
    },
    {
      path: '/cate',
      name: 'Cate',
      component: Cate
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
