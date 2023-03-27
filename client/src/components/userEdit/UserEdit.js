import './userEdit.css'

const UserEdit = () => {
  return (
    <div>
      <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Settings</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input type='email' id='email' />
          </div>
          <label htmlFor='username'>Username</label>
          <div className='input-field'>
            <input type='username' id='username' />
          </div>
          <label htmlFor='password'>New Password</label>
          <div className='input-field'>
            <input type='password' id='password' />
          </div>
          <label htmlFor='confirm-password'>Confirm New Password</label>
          <div className='input-field'>
            <input type='password' id='confirm-password' />
          </div>
          <label htmlFor='pfp'>Profile Pic</label>
          <div className='input-field'>
            <input type='text' id='pfp' />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type='submit' value='Save changes' className='button-secondary'  />
          <input type='submit' value='Delete account' className='button-delete'/>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UserEdit
