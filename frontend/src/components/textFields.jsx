//Text Fields let users enter and edit text.
import { useState } from 'react'
import {TextField,Typography} from '@mui/material'

export default function TextFields(){
const [name,setname]=useState('')
    return (
        <>
            <TextField type='text' placeholder='Name' sx={{margin:3}} variant='outlined' onChange={(e)=>setname(e.target.value)}/>
            <TextField type='email' placeholder='Email' sx={{margin:3}} variant='standard'/>
            <TextField type='password' placeholder='Password' sx={{margin:3}} variant='filled'/>
            <Typography variant='body1' color='purple' fontSize='30px'>Name :{name}</Typography>
        </>
    )
}

//Type specifieds the type of input the TextField is suppose to take
//(outlined,standard,filled) are the variant types
//TextField also takes onChange event handler for handling input change