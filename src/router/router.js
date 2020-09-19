
//主页
const Home = () => import('@/components/home')

//首页
const myIndex = () => import('@/components/myIndex')


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
  component: Home
},
{
  path: '/myIndex',
  component: myIndex
}
]

export default router
