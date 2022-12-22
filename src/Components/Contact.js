import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{useEffect,useState} from 'react'
import Baner from '../Components/Baner/Baner';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
function Contact() {
  const initialValues={
    username:'',
    email:'',
    password:'',
    address:'',
    number:'',
    textarea:'',
  }
  const[FormValues,setFormValues]=useState(initialValues);
  const[FormErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
const handelChange=(e)=>{
  const{name,value}=e.target;
 setFormValues({...FormValues,[name]:value})
}
const handelSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(Validate(FormValues))
  setIsSubmit(true);
 }
 const Validate=(values)=>{
  const errors={};
  const regx=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regx2=/^01[0125][0-9]{8}$/gm;
  if(!values.username){
    errors.username="Username is required!" 
  }
  if(!values.email){
    errors.email="Email is required!" 
  }else if(!regx.test(values.email)){
    errors.email="This is not a valid format";
  }
  if(!values.password){
    errors.password="Password is required!" 
  }else if(values.password.length<4){
    errors.password="Password must be more than 4 characters";
  }else if(values.password.length>10){
    errors.password="Password must be less than 10 characters";
  }

  if(!values.address){
    errors.address="Address is required!" 
  }
  if(!values.number){
    errors.number="Address is required!" 
  }else if(!regx2.test(values.number)){
    errors.number="This is not valid phone number";
  }
  
  return errors;
 }

 useEffect(()=>{
  if(Object.keys(FormErrors).length===0 &&isSubmit){
 console.log(FormValues)
  }
 },[FormErrors])
  return (
    <>
      <Baner title="Contact" smalltitle="contact"/>
      <section className='contact-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <form onSubmit={handelSubmit}>
         <div className='form-control'>
         <input placeholder='Your Name' type='text'  name='username'value={FormValues.username} onChange={handelChange}/>
         <p className='text-danger para'>{FormErrors.username}</p>
         </div>
         <div className='form-control'>
         <input placeholder='Your Email' type='email' name='email' value={FormValues.email} onChange={handelChange}/>
         <p className='text-danger para'>{FormErrors.email}</p>
         </div>
         <div className='form-control'>
         <input placeholder='Your Address' type='text' name='address' value={FormValues.address} onChange={handelChange}/>
         <p className='text-danger para'>{FormErrors.address}</p>
         </div>
         <div className='form-control'>
         <input placeholder='Your Phone' type='text' name='number' value={FormValues.number} onChange={handelChange}/>
         <p className='text-danger para'>{FormErrors.number}</p>
         </div>
         <div className='form-control'>
         <input placeholder='Your Password' type='password' name='password' value={FormValues.password} onChange={handelChange}/>
         <p className='text-danger para'>{FormErrors.password}</p>
         </div>
         <div className='form-control'>
         <textarea placeholder='Message' name='textarea' value={FormValues.textarea} onChange={handelChange}></textarea>
         </div>
         <button>Submit</button>
         {Object.keys(FormErrors).length === 0 && isSubmit ?( 
  <div className='success mb-3' onClick={()=>{
  }}>Success Register</div>
  ):[]}
         </form>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='side'>
                <div className='overlay'>
                  <h3>Contact Us For Any Information</h3>
                  <i><FontAwesomeIcon icon={faMap}/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
