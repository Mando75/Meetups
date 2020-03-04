import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '@/views/BookList'
import BookReviews from '@/views/BookReviews'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id/reviews',
    name: 'BookReviews',
    component: BookReviews
  }
]

const router = new VueRouter({
  routes
})

export default router
