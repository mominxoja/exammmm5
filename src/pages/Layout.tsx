import { FC } from "react"
import {Outlet} from 'react-router-dom'
import Header from "../components/Header"
const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-state-900 fonst-roboto text-white pb-20">
      <Header/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
