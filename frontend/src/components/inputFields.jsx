import { useState } from "react"
import { TextField,InputLabel,Select,MenuItem,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,FormGroup,Checkbox } from "@mui/material"

export default function TextFields() {
    const [input,setinput]=useState({
        name:'',
        email:'',
        password:'',
        age:0,
        gender:null,
    })

const [checked,setchecked]=useState(false)

    const handleCheckboxChange=(e)=>{
        return setchecked(e.target.checked)
    }

    const handleChange=(e)=>{
        setinput((preele)=>(
            {
                ...preele,
                [e.target.name]:e.target.value
                
            }
        ))
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
       
        console.log(checked)
    }

   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h3>Input Fields</h3>
            <TextField sx={{margin:'10px'}} name="name" onChange={handleChange} size="large" id="outlined-basic" label="Name" type="text" variant="outlined" />
            <TextField sx={{margin:'10px',}} name="email"size="small" onChange={handleChange} id="filled-basic" label="Email" type="email" variant="filled" />
            <TextField sx={{margin:'10px'}} name="password" size="large" onChange={handleChange} id="standard-basic" label="Password" type="password" variant="standard" />
            
            <h3>DropDown List</h3>
            <FormControl fullWidth>
                <InputLabel>Age</InputLabel>
                    <Select name='age' label="Age" onChange={handleChange}  value={input.age} >
                        <MenuItem  value={10} defaultChecked>Ten</MenuItem>
                        <MenuItem  value={20} name='age'>Twenty</MenuItem>
                        <MenuItem value={30} name='age'>Thirty</MenuItem>
                    </Select>
            </FormControl>

            <h3>Radio List</h3>

            <FormControl>
                <FormLabel >Gender</FormLabel>
                    <RadioGroup onChange={handleChange} value={input.gender}  defaultValue="female" name="gender">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>

            <h3>checkBox</h3>

            <Checkbox checked={checked} onChange={handleCheckboxChange}/>
           


            <button type="submit">Submit</button>
        </form>
        </>
    )

}