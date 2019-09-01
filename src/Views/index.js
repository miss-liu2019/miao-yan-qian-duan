import Loadable from 'react-loadable'

import Loading from '../components/Loading'  //预加载页面，未做页面优化



const Movie = Loadable({   //模块懒加载实现
    loader:() => import('./Movie'),
    loading:Loading
})

const Mine = Loadable({   
    loader:() => import('./Mine'),
    loading:Loading
})

const Cinema = Loadable({   
    loader:() => import('./Cinema'),
    loading:Loading
})

export {
    Movie,
    Mine,
    Cinema
}