import React,{useState} from "react";

function FormComponent() {
    const [formData, setFormData] = useState({name:'',email:'', phone:''});
    function handleInputChange(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("formData",formData);
        setFormData({});
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/>
            <input type="text" name="email" placeholder="Email" onChange={handleInputChange}/>
            <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange}/>
            <button type="submit">Submit</button>
        </form>
        <span> name:{formData.name}</span><br/>
        <span> email:{formData.email}</span><br/>
        <span> phone:{formData.phone}</span><br/>
        </>

    )
}

export default FormComponent;