import Layout from '../pages/Layout'
import Login from '@/pages/Login'
import {AuthRoute} from '@/components/AuthRoute'
import {createHashRouter} from 'react-router-dom' // Import createHashRouter instead of createBrowserRouter
// import Publish from '@/pages/Publish'
// import Article from '@/pages/Article'
// import Home from '@/pages/Home'

import { Suspense, lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

const router = createHashRouter([ // Use createHashRouter here
  {
    path:'/',
    element: <AuthRoute><Layout/></AuthRoute>,
    children:[
      {
        index: true,
        element: <Suspense fallback={'加载中'}><Home /></Suspense>,
      },
      {
        path: 'article',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>,
      },
      {
        path: 'publish',
        element: <Suspense fallback={'加载中'}><Publish /></Suspense>,
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  }
])

export default router