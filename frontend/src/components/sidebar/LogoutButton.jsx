import {BiLogOut} from "react-icons/bi"

function LogoutButton() {
  return (
    <div className="mt-auto flex gap-[5px] pt-3">
        <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
        <span className="text-white">Logout</span>
    </div>
  )
}

export default LogoutButton