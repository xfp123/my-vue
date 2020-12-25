
//主页
const Home = () => import('@/components/home')

//首页
const myIndex = () => import('@/components/myIndex')

//动画效果
const animate = () => import('@/components/animate')

//AI中台需要的功能
const AIcenter = () => import('@/components/AIcenter')

//开发者社区需要的功能
const devCommunity = () => import('@/components/devCommunity')



const router = [{
  path: '',
  component: Home,
  redirect: '/home'
},
{
  path: '/',
  component: Home,
  redirect: '/home'
},
{
  path: '/home',
  name: 'home',
  component: Home
},

//首页
{
  path: '/myIndex',
  name: 'myIndex',
  component: myIndex
},

//动画效果
{
  path: '/animate',
  name: 'animate',
  component: animate
},

//AI中台
{
  path: '/AIcenter',
  name: 'AIcenter',
  component: AIcenter
},
//开发者社区
{
  path: '/devCommunity',
  name: 'devCommunity',
  component: devCommunity
},


]

export default router
