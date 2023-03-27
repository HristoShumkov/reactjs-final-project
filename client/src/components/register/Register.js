import { Link } from 'react-router-dom'
import './register.css'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

const Register = () => {
  const {onRegisterSubmit} = useContext(AuthContext)
  const { values, changeHandler, onSubmit } = useForm({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    pfp: ""
  }, onRegisterSubmit)

  return (
    <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Sign up</h1>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input type='email' id='email' name='email' value={values.email} onChange={changeHandler} />
          </div>
          <label htmlFor='username'>Username</label>
          <div className='input-field'>
            <input type='username' id='username' name='username' value={values.username} onChange={changeHandler} />
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input type='password' id='password' name='password' value={values.password} onChange={changeHandler} />
          </div>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <div className='input-field'>
            <input type='password' id='confirm-password' name='confirmPassword' value={values.confirmPassword} onChange={changeHandler} />
          </div>
          {(values.password!==values.confirmPassword && values.confirmPassword.length>0) && <p style={{color:'red'}}>Passwords Don't Match</p>}
          <label htmlFor='pfp'>Profile Pic</label>
          <div className='input-field'>
            <input type='text' id='pfp' name='pfp' value={values.pfp} onChange={changeHandler} />
          </div>
          <input type='submit' value='Sign up' className='button-main' id='button-signup' />
        </form>
        <div className='divider'></div>
        <p style={{ textAlign: 'center' }}>Already have an account? <Link to='/login' id='to-login'>Sign in.</Link></p>
      </div>
    </div>
  )
}

export default Register
