import React, { useState } from 'react'
import {Button, Label, TextInput, Alert, Spinner} from 'flowbite-react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'

const SignUp = () => {
  const [formData, setFormdata] = useState({})
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value.trim()})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all field!")
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json()

      if(data.success === false) {
         return setErrorMessage(data.message);
         setLoading(false);
      }

      setLoading(false)
      if(res.ok) {
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex  p-3 max-w-3xl mx-auto  md:flex-row md:items-center'>
        <div className=''>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username"/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username'
              onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput
              type='text'
              placeholder='Email'
              id='email'
              onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                  </>
                ) : "Sign Up"
              }

            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignUp
