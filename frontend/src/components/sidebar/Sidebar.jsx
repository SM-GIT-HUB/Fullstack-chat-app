import Contacts from "./Contacts"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput/>
        <div className="divider divider-info px-3"></div>
        <Contacts/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar