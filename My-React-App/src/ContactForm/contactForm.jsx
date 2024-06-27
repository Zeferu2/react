import React,{useState} from "react";

function ContactForm() {
    const [formData, setFormData] = useState({ name:'',email:'', phoneNumber:''});
    const [errors, setErrors] = useState({});

    function validateEmail(email) {
        return email.includes("@")&&email.includes(".");
 }
function handleInputChange(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});

if( name === 'email'){
    if(!value){// if the email is empty
        setErrors((prevErrors)=>({...prevErrors,email:'Email is required'}));//{}
    }else if(!validateEmail(value)){
        setErrors((prevErrors)=>({...prevErrors,email:'Invalid email'}));
     } else{
            setErrors((prevErrors)=>{
                const{email, ...rest}=prevErrors;
                return rest
            });
         } 
    }
        
    if (name === 'name') {
        if(!value){
        setErrors((prevErrors)=>({...prevErrors,name:'Name is required'}));//{'Name is required}
     } else{
        setErrors((prevErrors)=>{
                const{name,...rest}=prevErrors;
                return rest
            });
        }
     }
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("formData",formData);
        setFormData({});
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/><br/>
            <span style={{color:'red'}}>{errors.name}</span><br/>
            <input type="text" name="email" placeholder="Email" onChange={handleInputChange}/><br/>
            <span style={{color:'red'}}>{errors.email}</span><br/>
            <input type="tel" name="phoneNumber" placeholder="Phone" onChange={handleInputChange}/>
            <button type="submit" disabled={!(formData.name&&formData.email&&!errors.email)}>Submit</button>
        </form>
        <span> name:{formData.name}</span><br/>
        <span> email:{formData.email}</span><br/>
        <span> phone number:{formData.phoneNumber}</span><br/>
        </>

    );
}


export default ContactForm;