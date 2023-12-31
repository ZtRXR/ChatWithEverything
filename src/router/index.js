import { createRouter, createWebHashHistory } from 'vue-router'
// import { useUser } from '../stores/User'
// const User = useUser()


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'roote',
      redirect:'/chat/0'
    },
    {
      path:'/chat/:ChatName',
      name:'chat',
      component:()=>import('../views/Chat/Main.vue')
    },
    {
      path:'/login',
      name:"login",
      component:()=>import('../views/Login/Login.vue'),
      // redirect:'/login/ask',
      // children:[
      //   {
      //     path:'/login/ask',
      //     name:'loginAsk',
      //     component:()=>import('../views/Login/LoginAsk.vue')
      //   }
      // ]
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
