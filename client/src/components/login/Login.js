import { Link } from 'react-router-dom'
import './login.css'
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from '../../hooks/useForm'

const Login = () => {
  const {onLoginSubmit} = useAuthContext()
  const { values, changeHandler, onSubmit } = useForm({
    email: "",
    password: "",
  }, onLoginSubmit)


  return (
    <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Login</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input type='email' id='email' name='email' value={values.email} onChange={changeHandler}/>
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input type='password' id='password'  name='password' value={values.password} onChange={changeHandler}/>
          </div>
          <input type='submit' value='Login' className='button-main' id='button-login'/>
        </form>
        <div className='divider'></div>
        <Link to='/register'><button className='button-secondary' id='button-to-register'>Create New Account</button></Link>
      </div>
    </div>
  )
}

export default Login
