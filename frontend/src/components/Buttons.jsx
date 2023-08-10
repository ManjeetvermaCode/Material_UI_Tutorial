import {Button} from '@mui/material'

export default function ButtonComponent(){
    return (
        <>
        <Button size='small' color='success' variant='text' sx={{margin:4}} onClick={()=>alert('Button is clicked')}>Click me</Button>
        {/* event handlers can also be passed in the buttons */}
        <Button size='medium' color='primary' variant='contained' disabled sx={{margin:4}}>Click me, sike i'm disable</Button>
        {/* Cantained variant button is typically used for emphasizing that the button is primary button. */}
        <Button size='large' color='secondary' variant='outlined' sx={{margin:4}}>Click me</Button>
        {/* This variant of button is used to show that the button in important but not primary. */}
        </>

    )
}
// Code is pretty self explanatory