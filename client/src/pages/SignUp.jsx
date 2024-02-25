import React from 'react'
import {Button, Label, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex  p-3 max-w-3xl mx-auto  md:flex-row md:items-center'>
        <div className=''>
          <form className='flex flex-col gap-5 '>
            <div>
              <Label value="Your Username"/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username'
              />
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput
              type='text'
              placeholder='Email'
              id='email'
              />
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
