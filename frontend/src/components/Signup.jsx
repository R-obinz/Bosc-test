import React from 'react'
import bgImage from '../Assets/pexels-tobias-bjørkli-1887624.jpg'
import {useFormik} from 'formik';
import { SignUpSchema } from '../Schemas';
import axios from '../AxiosInstance'
import { Link,useNavigate } from 'react-router-dom';

const initialValues ={
    firstName:"",
    lastName:"",
    userName:"",
    email:"", 
    gender:"",
    password:"",
    confirmPassword:""
}

const Signup= ()=> {
    
    const navigate = useNavigate()
   const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema: SignUpSchema,
        onSubmit: async(values)=>{
            try{
                console.log("hiii")
                const data = await axios.post("/user/register", values, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                 
                })
                console.log(data);
                console.log(data.status);
                 if (data.status) {
                    navigate('/login')
                }
                 
            }catch(error){
                console.log(error);
               
            }
          console.log(values)
        }
    })


  return (
    <div className='w-full  h-screen flex '>
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-auto shadow-lg shadow-gray-600 sm:max-w-[900px] ">
            <div className='w-full h-auto hidden md:block'>
                <img className='w-full h-full' src={bgImage} />
            </div>
            <div className='p-4 flex-col justify-around'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-4xl font-bold  text-center mb-8'>Gallery App</h2>
                    <div>
                    {errors.firstName && touched.firstName ? (<p className='text-red-600'>{errors.firstName}</p>):null}
                    <input className='border rounded-md p-2 mr-5 mb-3 w-full' type="text" placeholder='First Name' name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}></input>
                    {errors.lastName && touched.lastName ? (<p className='text-red-600'>{errors.lastName}</p>):null}
                    <input className='border rounded-md p-2  mb-3  w-full' type="text" placeholder='Last Name' name='lastName' value={values.lastName}  onChange={handleChange} onBlur={handleBlur}></input>
                    {errors.userName && touched.userName ? (<p className='text-red-600'>{errors.userName}</p>):null}
                    <input className='border rounded-md p-2 mr-1 mb-3 w-full' type="text" placeholder='UserName' name='userName' value={values.userName}  onChange={handleChange} onBlur={handleBlur}></input>
                    {errors.email && touched.email ? (<p className='text-red-600'>{errors.email}</p>):null}
                    <input className='border rounded-md p-2 mr-1 mb-3 w-full' type="email" placeholder='Email' name='email' value={values.email}  onChange={handleChange} onBlur={handleBlur}></input>
                    <div className='text-center'>
                    <input id="default-radio-1" type="radio" style={{position:"relative",top:2}} name="gender" className="w-4 h-4   text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                     value="Male"
                     onChange={handleChange} onBlur={handleBlur}/>
                    <label for="default-radio-1"  className="mr-1 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                    <input id="default-radio-2" type="radio" style={{position:"relative",top:2}} name="gender" value="Female"  onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                    
                    </div>
                    {errors.password && touched.password ? (<p className='text-red-600'>{errors.password}</p>):null}
                    <input className='border rounded-md p-2 mb-3 w-full' type="password" placeholder='Password' name='password' value={values.password}  onChange={handleChange} onBlur={handleBlur}></input>
                    {errors.confirmPassword && touched.confirmPassword ? (<p className='text-red-600'>{errors.confirmPassword}</p>):null}
                    <input className='border rounded-md p-2 mb-3 w-full' type="password" placeholder='ConfirmPassword' name='confirmPassword' value={values.confirmPassword}  onChange={handleChange} onBlur={handleBlur}></input>
                    </div>
                    <button type="submit" className='w-full py-2 my-4 bg-blue-900 hover:bg-blue-900 text-slate-200 '>SignUp</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Signup