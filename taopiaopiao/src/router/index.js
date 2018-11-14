import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import Mine from '@/components/mine/Mine'
import Cinema from '@/components/cinema/Cinema'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/movie/movieList'
    },{
      path:'/movie',
      name:'Movie',
      component:Movie,
      children:[
        {
          path:'movieList',
          name:'MovieList',
          component:MovieList
        }
      ]
    },{
      path:'/movie/movieDetail/:movieId',
      name:'MovieDetail',
      component:MovieDetail
    },{
      path:'/mine',
      name:'Mine',
      component:Mine
    },{
      path:'/cinema',
      name:'Cinema',
      component:Cinema
    }
  ]
})
