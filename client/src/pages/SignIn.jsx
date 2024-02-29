import React, { useState } from 'react'
import {Button, Label, TextInput, Alert, Spinner} from 'flowbite-react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const [formData, setFormdata] = useState({})

  const {loading, error: errorMessage} = useSelector(state => state.user);

  const dispatch = useDispatch();


  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value.trim()})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all field!"))
    }

    try {
      dispatch(signInStart());

      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json()

      if(data.success === false) {
         dispatch(signInFailure(data.message))
      }
      if(res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex  p-3 max-w-3xl mx-auto  md:flex-row md:items-center'>
        <div className=''>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
       
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
              placeholder='*********'
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
                ) : "Sign In"
              }

            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/signup' className='text-blue-500'>Sign Up</Link>
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

export default SignIn
