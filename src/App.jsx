import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'about',
    element: <About />
  },
  {
    path:'blog',
    element: <Blog />
  },
  {
    path:'contact',
    element: <Contact />
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
      )
}

export default App
