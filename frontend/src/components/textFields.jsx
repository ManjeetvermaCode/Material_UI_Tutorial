//Text Fields let users enter and edit text.
import { useState } from 'react'
import {TextField,Typography,FormGroup,Checkbox,FormControlLabel} from '@mui/material'

export default function TextFields(){
const [input,setinput]=useState({
    name:'',
    email:'',
    password:'',
    subscribe:false
})

const handleChange=(e)=>{//it will get call everytime there's a change
    setinput((prestate)=>(//This ensures that the existing state's properties are retained in the new state.
      {
        ...prestate,
        [e.target.name]:e.target.value//e.target.name will result to it's output, for example [e.target.name] of email field will result to email which will be set to its value i.e entered field value.
      }
    ))
}

const handleSubmit=(e)=>{//on form submit
    e.preventDefault();
    console.log(input)
}

    return (
        <>
        <h1>Input fields</h1>
            <form onSubmit={handleSubmit}>
            <TextField name='name' type='text' placeholder='Name' sx={{margin:3}} variant='outlined' onChange={handleChange} />
            <TextField name='email' type='email' placeholder='Email' sx={{margin:3}} variant='standard' onChange={handleChange}/>
            <TextField name='password' type='password' placeholder='Password' sx={{margin:3}} variant='filled' onChange={handleChange}/>
            {/* CheckBox */}

            <h1>Checkbox</h1>

            <FormGroup sx={{display:'flex',flexDirection:'row'}}>
                <FormControlLabel onChange={()=>{setinput((e)=>({...e,subscribe:true}))}} control={<Checkbox/>} label="Label" />
                {/* handling inline change */}
            </FormGroup>
            <button type='submit'>Submit</button>
            </form>
        </>
    )
}

//Type specifieds the type of input the TextField is suppose to take
//(outlined,standard,filled) are the variant types
//TextField also takes onChange event handler for handling input change