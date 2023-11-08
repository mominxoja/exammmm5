import { FC } from "react"
import img from "../assets/404-notfoun.png"
import { Link } from "react-router-dom"
const ErrorPage: FC = () => {
  return (
    <div className="min-h-screen font-roboto border-4 text-white flex justify-center flex-col gap-10 m-auto">
      <img src={img} alt="img" className="w-80 border ml-auto mr-auto" />
      <Link to={'/'} className="bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-680 mr-auto ml-auto">
        Back
      </Link>
    </div>
  )
}

export default ErrorPage
