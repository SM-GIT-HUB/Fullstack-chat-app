import { Link } from "react-router-dom"
import GenderCheck from "./GenderCheck"
import { useState } from "react"
import useSignup from "../../hooks/useSignup.js"

function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const {loading, signup} = useSignup();

  function handleCheckbox(gender)
  {
    setInput({...input, gender});
  }

  async function handleSubmit(e)
  {
    e.preventDefault();
    
    await signup(input);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-[7px] shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign up <span className="text-blue-500">{"Let's Chat"}</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
                <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input value={input.fullName} onChange={(e) => { setInput({...input, fullName: e.target.value}) }} 
            type="text" placeholder="Enter full name" className="w-full input input-primary input-bordered h-10"/>
          </div>

          <div className="mt-[10px]">
            <label className="label p-2">
                <span className="text-base label-text text-white">Username</span>
            </label>
            <input value={input.username} onChange={(e) => { setInput({...input, username: e.target.value}) }} 
            type="text" placeholder="Enter username" className="w-full input input-primary input-bordered h-10"/>
          </div>

          <div className="mt-[10px]">
            <label className="label p-2">
                <span className="text-base label-text text-white">Password</span>
            </label>
            <input value={input.password} onChange={(e) => { setInput({...input, password: e.target.value}) }} 
            type="password" placeholder="Enter password" className="w-full input input-primary input-bordered h-10"/>
          </div>

          <div className="mt-[10px]">
            <label className="label p-2">
                <span className="text-base label-text text-white">Confirm password</span>
            </label>
            <input value={input.confirmPassword} onChange={(e) => { setInput({...input, confirmPassword: e.target.value}) }} 
            type="password" placeholder="Confirm password" className="w-full input input-primary input-bordered h-10"/>
          </div>

          <GenderCheck handleCheckbox={handleCheckbox} selectedGender={input.gender}/>

          <Link to={'/login'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300">
            Already have an account? {"⬅️Click"}
          </Link>

          <div className="flex justify-center items-center text-white">
            {
              loading? <span className="loading loading-spinner"></span> :
              <button type="submit" className="mt-2 bg-blue-600 px-[20px] py-[5px] rounded-[4px] hover:bg-blue-700 transition-all" disabled={loading}>Sign up</button>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup