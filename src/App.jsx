// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Card from './components/class-card/Card'
// import LoginPage from './pages/login'
// import HomePage from './pages/home'

// import NewsPage from './pages/news'
// import SchedulesPage from './pages/schedules'
// import EnlistmentPage from './pages/enlistment'
// import SchedulePage from './pages/schedule'

// import CampusPage from './pages/campus'
// import AboutPage from './pages/about'

// import ErrorPage from './pages/error'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route index element={<HomePage />} />
//       <Route path="/login" element={<LoginPage />} />
      
//       <Route path="/news" element={<NewsPage />} />
//       <Route path="/schedules" element={<SchedulesPage />} />
//       <Route path="/schedule/enlistment" element={<EnlistmentPage />} />
//       <Route path="/schedule/:id" element={<SchedulePage />} />

//       <Route path="/campus" element={<CampusPage />} />
//       <Route path="/about" element={<AboutPage />} />

//       <Route path="*" element={<ErrorPage />} />
//     </>
//   )
// )

function App() {
  return (
    // <RouterProvider router={router} />
    <Card />
  )
}

export default App