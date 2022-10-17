import React, { useState } from 'react'

const Forms = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPasssword] = useState('');
  const [passwordError, setPasswordError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    if(email === '' && !email.includes('@')){
      setEmailError(true)
    }
    if(password.length < 5 || password === ''){
      setPasswordError(true);
    }
    if(emailError || passwordError){
    alert(`Email: ${email} , Password: ${password}`)
  }
  }


  return (
    <form className='card card-body shadow m-5' onSubmit={submitHandler}>
      <h3 className='text-center'> Login </h3>
      <div className="mb-3">
        <label htmlFor='email'>Email</label>
        <input type="text" className={` form-control ${emailError && 'border border-danger'}`}
        name='email' id='email' 
        onChange={(e)=>{setEmail(e.target.value)}} 
        value={email}/>
        {emailError && <small className='text-danger'>Invalid Email</small>}
      </div>
      <div className="mb-3">
        <label htmlFor='password'>Password</label>
        <input type="text" className={` form-control ${passwordError && 'border border-danger'}`}
        name='password' id='password' 
        onChange={(e)=>{setPasssword(e.target.value)}} 
        value={password}/>
        {passwordError && <small className='text-danger'>Invalid Password</small>}
      </div>
      <div className="text-center">
        <button className='btn btn-warning'>Login</button>
      </div>
    </form>
  )
}

export default Forms;