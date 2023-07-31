import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'roote',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'index',
      component: ()=>import ('../views/Main/ViewIndex.vue'),
    },
    {
      path:'/chat',
      name:'chat',
      component:()=>import('../views/Chat/Main.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
