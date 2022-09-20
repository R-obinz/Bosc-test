import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from '../Assets/pexels-tobias-bjørkli-1887624.jpg'
import {useFormik} from 'formik';
import { LoginSchema } from '../Schemas';
import axios from '../AxiosInstance'
import { useEffect } from 'react';


const initialValues ={
    email:"", 
    password:"",
    
}
 const Login= ()=> {
    
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/album')
        }
    })
   const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema: LoginSchema,
        onSubmit: async(values)=>{
            try{
                console.log('mos');
                const data = await axios.post("/user/login", values, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                 
                })
                
                localStorage.setItem('user', JSON.stringify(data.data.user));
                    localStorage.setItem('token', data.data.token);
                    navigate("/");
                
                 
            }catch(error){
                console.log(error);
               
            }
          console.log(values)
        }
        
    })

  return (
    <div className='w-full h-screen flex'>  
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px]  hidden md:block'>
                <img src={bgImage} alt="/" className="w-full h-full" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center mb-8 '>Gallery App</h2>
                <div>{errors.email && touched.email ? (<p className='text-red-600'>{errors.email}</p>):null}
                    <input className='border rounded-md p-2 mr-1 w-full mb-3' type="text" placeholder='Email' name='email' value={values.email}  onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? (<p className='text-red-600'>{errors.password}</p>):null}
                    <input  className='border rounded-md p-2 w-full' type="password" placeholder='Password'  name='password' value={values.password}  onChange={handleChange} onBlur={handleBlur} />
                </div>
                <button type="submit" className='w-full py-2 my-4 bg-blue-900 hover:bg-blue-900 text-slate-200 '>SignUp</button>
                
            </form>
            <p className='text-center'>New User?<Link to={'/register'} >Create an account?</Link> </p>
           
        </div>
        </div>
       
    </div>
  )
}

export default Login