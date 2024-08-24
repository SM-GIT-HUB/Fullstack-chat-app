import {IoSearchSharp} from "react-icons/io5"

function SearchInput() {
  return (
    <form className="flex items-center gap-2" action="">
        <input type="text" placeholder="Search.." name="" id="" className="input input-primary input-bordered rounded-full"/>
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput