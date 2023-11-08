import { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { userAuth } from "../hooks/userAuth";
import { logout } from "../store/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { toast } from 'react-toastify';

const Header: FC = () => {
  const isAuth = userAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logoutHandler = ()=>{
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You logged out successfully.')
    navigate('/')
  } 
  return (
    <header className="w-screen mb-4 flex items-center px-4 py-2 shadow-sm bg-slate-800 backdrop-blur-sm">
      <Link to="/">
        <FaBtc size={20} />
      </Link>

      {/** menu */}
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/transactions"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Transaction
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/** actions */}
      {
        isAuth ? (
            <button className="btn bg-rose-900 hover:bg-rose-800" onClick={logoutHandler}>
                <span>Log Out</span>
                <FaSignOutAlt/>
            </button>
        ):(
            <Link className="py-2 text-white/50 hover:text-white ml-auto" 
            to={'auth'}
        >
            Log In / Sing In

            </Link>
        )
      }
    </header>
  );
};

export default Header;
