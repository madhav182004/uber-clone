import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4 mb-6'>
                  <input 
                      required 
                      value={firstname}
                      onChange={(e)=>{
                          setFirstname(e.target.value);
                      }}
                      className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                      type="text" 
                      placeholder='Firstname'
                  />
                  <input 
                      required 
                      value={lastname}
                      onChange={(e)=>{
                          setLastname(e.target.value);
                      }}
                      className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                      type="text" 
                      placeholder='Lastname'
                  />
                </div>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                    required 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="email" 
                    placeholder='email@example.com'
                />
                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                    required 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="password" 
                    placeholder='password'
                />
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign Up</button>
            </form>
            <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignUp