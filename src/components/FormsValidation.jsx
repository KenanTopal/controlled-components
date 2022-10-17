import React, { useState } from 'react'

const FormsValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  // const [emailError, setEmailError] = useState('Email Field is required');
  // const [passwordError, setPasswordError] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const passwordError = (password == '' || password.length < 5) && passwordTouched;

  const emailError = (email === '' && emailTouched) ? 'Email Field is required'
    : (!email.includes('@') && emailTouched) ? 'Invalid Email Format'
      : null;

  const emailHandler = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setEmailTouched(true);

    /* if (enteredEmail === '') {
      setEmailError('Email Field is required')
    } else if (!enteredEmail.includes('@')) {
      setEmailError('Invalid Email Format')
    } else {
      setEmailError(null)
    } */

    /* if(enteredEmail==='' || !enteredEmail.includes('@')){
      setEmailError(true);
    } else{
      setEmailError(false)
    }*/
  }

  const passwordHandler = (e) => {
    const enteredPassword = e.target.value;
    setPasssword(enteredPassword);
    setPasswordTouched(true);
    /* if(enteredPassword == '' || enteredPassword.length < 5){
      setPasswordError(true)
    }else{
      setEmailError(false)
    } */
  }
  return (
    <form className='card card-body shadow m-5' >
      <h3 className='text-center'> Login </h3>
      <div className="mb-3">
        <label htmlFor='email'>Email</label>
        <input type="text" className={` form-control ${emailError && 'border border-danger'}`}
          name='email' id='email'
          onChange={emailHandler}
          onBlur={() => setEmailTouched(true)}
          value={email} />
        {passwordError && <small className='text-danger'>{emailError}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor='password'>Password</label>
        <input type="text" className={` form-control ${passwordError && passwordTouched && 'border border-danger'}`}
          name='password' id='password'
          onChange={passwordHandler}
          onBlur={() => setPasswordTouched(true)}
          value={password} />
        {passwordError && passwordTouched && <small className='text-danger'>Invalid Password</small>}
      </div>
      <div className="text-center">
        <button className='btn btn-warning'>Login</button>
      </div>
    </form>
  )
}

export default FormsValidation;