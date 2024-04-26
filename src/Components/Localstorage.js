import React, { useState } from 'react'

export default function Localstorage() {
    const [inputs, setInputs] = useState({
        name:"",
        password:"",
        email:""
    }
    )
const handleChange=(e)=>{
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value})
}
const handleSubmit=(e)=>
{
    e.preventDefault();
    localStorage.satItem("UserInfo",JSON.stringify(inputs))
}
    return (
        <div>
            <form>
                <input type='text' value={inputs.name}
                onChange={handleChange} name='name'/> <br/>
                <input type='password' value={inputs.password}
                onChange={handleChange} name='passport'/> <br/>
                <input type='email' value={inputs.email}
                onChange={handleChange} name='email'/> <br/>
                <input type='submit' value="submit"/>
            </form>
        </div>
    )
  
}
