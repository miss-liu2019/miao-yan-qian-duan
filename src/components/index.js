// import {default as Article} from './Article'
// 完善后端系统
import Loadable from 'react-loadable'
import Loading from './Loading'

const TabBar = Loadable({   //模块懒加载实现
    loader:() => import('./tabBar/index'),
    loading:Loading
})
const NavBar = Loadable({   
    loader:() => import('./navBar'),
    loading:Loading
})
const NotFount = Loadable({   
    loader:() => import('./NotFount'),
    loading:Loading
})
export {
    TabBar,
    NavBar,
    NotFount
}