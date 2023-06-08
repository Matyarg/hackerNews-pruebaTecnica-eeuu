
import { lazy } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))
const DetailPage = lazy(() => import('./pages/Detail'))




function App() {
  return (
    <>
      <Header></Header>
      <Route path='/' component={TopStoriesPage}></Route>
      <Route path='/article/:id' component={DetailPage}></Route>
    </>
  )
}

export default App
