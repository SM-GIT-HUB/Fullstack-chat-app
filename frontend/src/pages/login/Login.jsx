
function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-[7px] shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login <span className="text-blue-500">{"Let's Chat"}</span>
            </h1>

            <form action="" method="post" className="">
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-white">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-primary input-bordered h-10"/>
                </div>

                <div className="mt-[10px]">
                    <label className="label p-2">
                        <span className="text-base label-text text-white">Password</span>
                    </label>
                    <input type="text" placeholder="Enter password" className="w-full input input-primary input-bordered h-10"/>
                </div>

                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-gray-300">
                    {"Don't"} have an account? {"⬅️Click"}
                </a>
        
                <div className="flex justify-center text-white">
                    <button type="submit" className="mt-2 bg-blue-600 px-[20px] py-[5px] rounded-[4px] hover:bg-blue-700 transition-all">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login