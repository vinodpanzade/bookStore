import React from 'react'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
     <div  className="w- [600px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>

    <div className="mt-4 space-y-2">
  <span>Name</span>
  <br />
  <input
    type="text"
    placeholder="Enter your name"
    className="w-80 px-3 py-1 border rounded-md outline-none"
  />
  <br />
  <span className="text-sm text-red-500">This field is required</span>
</div>

<div className="mt-4 space-y-2">
  <span>Email</span>
  <br />
  <input
    type="email"
    placeholder="Enter your email"
    className="w-80 px-3 py-1 border rounded-md outline-none"
  />
  <br />
  <span className="text-sm text-red-500">This field is required</span>
</div>


<div className="mt-4 space-y-2">
  <span>Password</span>
  <br />
  <input
    type="password"
    placeholder="Enter your password"
    className="w-80 px-3 py-1 border rounded-md outline-none"
  />
  <br />
  <span className="text-sm text-red-500">This field is required</span>
</div>


<div className="flex justify-around mt-6 ">
  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
    Signup
  </button>
  <p>
    Have Account? 
    {/* <a href="/signup" class="underline text-blue-500 cursor-pointer">
      Signup
    </a> */}
     <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signin
                </Link>
  </p>
</div>
  </div>
</div>
    </div>
  )
}

export default Signup
