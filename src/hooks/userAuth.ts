import { useAppSelector } from "../store/hooks"

export const userAuth = (): boolean=>{
    const isAuth = useAppSelector((state)=> state.user.isAuth)

    return isAuth
} 