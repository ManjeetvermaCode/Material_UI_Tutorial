//Text Fields let users enter and edit text.
import { useState } from 'react'
import {TextField,Typography,FormGroup,Checkbox,FormControlLabel,FormControl,InputLabel,MenuItem,Select,FormLabel,RadioGroup,Radio} from '@mui/material'

export default function TextFields(){
const [input,setinput]=useState({
    name:'',
    email:'',
    password:'',
    subscribe:false,
    age:0
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
        <h1>Text fields</h1>
            <form onSubmit={handleSubmit}>
            <TextField name='name' type='text' placeholder='Name' sx={{margin:3}} variant='outlined' onChange={handleChange} />
            <TextField name='email' type='email' placeholder='Email' sx={{margin:3}} variant='standard' onChange={handleChange}/>
            <TextField name='password' type='password' placeholder='Password' sx={{margin:3}} variant='filled' onChange={handleChange}/>
            {/* CheckBox */}

            <h1>Checkbox (Checkboxes allow the user to select one or more items from a set.)</h1>

            <FormGroup sx={{display:'flex',flexDirection:'row'}}>
                <FormControlLabel onChange={()=>{setinput((e)=>({...e,subscribe:true}))}} control={<Checkbox/>} label="Label" />
                {/* handling inline change */}
            </FormGroup>

            <h1>DropDown (allow to select one option from many options)</h1>
    <FormControl fullWidth>
                <InputLabel >Age</InputLabel>
        <Select name='age'value={input.age} label="Age"onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>

    <h1>Rodio Button (used for single selection from multiple options )</h1>

<FormControl sx={{display:'flex',flexDirection:'row'}}>
    <FormLabel >Gender</FormLabel>

  <RadioGroup  defaultValue="female" name="gender" onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>

            <button sx={{display:'block'}} type='submit'>Submit</button>
            </form>
        </>
    )
}

