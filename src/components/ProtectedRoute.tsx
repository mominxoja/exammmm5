import { FC } from "react"
import { userAuth } from "../hooks/userAuth"
import img from "../assets/shield_4691586.png"

interface Props{
    children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({children}) => {
    const isAuth = userAuth()
    return <> 
    {isAuth ? children : (
    <div className="flex flex-col justify-center items-center mt-20 gap-10">
        <h1 className="text-3xl  text-black fond-extrabold">To view this page you must be logged in.</h1>
        <img className="w-1/3" src={img} alt="img" />
    </div>)}
    </>
  
}
export default ProtectedRoute
