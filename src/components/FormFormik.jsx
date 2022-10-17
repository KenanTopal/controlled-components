import React from 'react'
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormFormik = () => {

  //custom validation function
  const validate = values => {
    const errors = {}
    if(values.email == ''){
      errors.email = 'Email Field is required!'
    } else if (!values.email.includes('@')){
      errors.email = 'Invalid Email';
    }

    if(!values.password){
      errors.password = 'Password Field is required'
    } else if(values.password.length < 5){
      errors.password = 'Min 5 characters for passwords'
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: (values)=>{
      toast.success('Successfully Logged In', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  })
  return (<>
    <form className='card card-body shadow m-5' onSubmit={formik.handleSubmit}>
      <h3 className='text-center'> Login </h3>
      <div className="mb-3">
        <label htmlFor='email'>Email</label>
        <input type="text" className={` form-control ${formik.errors.email &&formik.touched.email && 'border border-danger'}`}
        name='email' id='email' 
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && <small className='text-danger'>{formik.errors.email}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor='password'>Password</label>
        <input type="text" className={` form-control 
        ${formik.errors.password 
          && formik.touched.password 
          && 'border border-danger'}`}
        name='password' id='password' 
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && <small className='text-danger'>{formik.errors.password}</small>}
      </div>
      <div className="text-center">
        <button className='btn btn-warning'>Login</button>
      </div>
    </form>
    <ToastContainer />
    </>
    
  )
}

export default FormFormik