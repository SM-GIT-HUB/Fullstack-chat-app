import {BiLogOut} from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

function LogoutButton() {
  const [loading, logout] = useLogout();

  return (
    <div className="mt-auto flex gap-[5px] pt-3 cursor-pointer" onClick={logout}>
      {
        loading? <span className="loading loading-spinner"></span> :
        <>
          <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
          <span className="text-white">Logout</span>
        </>
      }
    </div>
  )
}

export default LogoutButton