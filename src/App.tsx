import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { useAppDispatch } from "./store/hooks"
import { getTokenFromLocalStorage } from "./helpers/localstorage.helper"
import { AuthService } from "./services/auth.service"
import { login, logout } from "./store/user/userSlice"
import {useEffect} from 'react'


function App() {
  const dispatch = useAppDispatch()

  const cheskAuth = async ()=> {
    const token = getTokenFromLocalStorage()
    try{
      if(token){
        const data = await AuthService.getProfile()

        if(data){
          dispatch(login(data))
        }else{
          dispatch(logout())
        }
      }
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    cheskAuth()
  }, [])

  return <RouterProvider router={router}/>
 
}

export default App
