import { FC, useState } from "react"
import { AuthService } from "../services/auth.service"
import { toast } from "react-toastify"
import { setTokenToLocalStorage } from "../helpers/localstorage.helper"
import { useAppDispatch } from "../store/hooks"
import { login } from "../store/user/userSlice"
import { useNavigate } from "react-router-dom"


const Auth: FC = () => {
    const [email, setEmail] = useState<string>('') 
    const [password, setPassword] = useState<string>('') 
    const [isLogin, setIsLogin ] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const registrationHendler = async (e:React.FormEvent<HTMLFormElement>)=>{
        try {
            e.preventDefault()
            const data = await AuthService.registration({email, password })
            if(data){
                toast.success('Account has been created.')
                setIsLogin(!isLogin)
            }
        } catch (err:any) {
            const errors = err.response?.data.message;
            if (Array.isArray(errors)) {
              errors.forEach((error) => {
                toast.error(error.toString());
              });
            } else {
              toast.error(errors.toString());
            }
          }
    }

    const loginHendler = async (e:React.FormEvent<HTMLFormElement>)=>{
        try {
           e.preventDefault()
           const data = await AuthService.login({email, password})

           if(data){
            setTokenToLocalStorage('token', data.token)
            dispatch(login(data))
            toast.success('You logged in successfully.')
            navigate('/')
            
           }
           
        } catch (err:any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

  return (
    <div className="w-screen flex-col items-center justify-center bg-slate-900 text-white ">
       <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Register'}
       </h1>

       <form
       onSubmit={isLogin ? loginHendler : registrationHendler}
       className="flex w-1/3 flex-col mx-auto gap-5" action="">
            <input
             type="text"
             className="rounded-md bg-transparent p-2 border bg-state-700 placeholder:text-white border-slate-800 outline-none focus:border-slate-100" 
             placeholder="Email" 
             onChange={(e) => setEmail(e.target.value) 
             }
/>
            <input
             type="password" 
             className="rounded-md bg-transparent p-2 border bg-state-700 placeholder:text-white border-slate-800 outline-none focus:border-slate-100" 
             placeholder="Password" 
             onChange={(e) => setPassword(e.target.value)}
             />

            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg  mx-auto">Submit</button>

       </form>

        <div className="flex justify-center mt-5">
            {
                isLogin?(
                    <button
                    onClick={()=> setIsLogin(!isLogin)}
                    className="text-slate-300 hover:text-white">
                        You don't have account?
                    </button>
                ) : (
                    <button
                    onClick={()=> setIsLogin(!isLogin)}
                    className="text-slate-300 hover:text-white">
                        Already have an account?
                    </button>
                )
            }
        </div>


    </div>
  )
}

export default Auth
