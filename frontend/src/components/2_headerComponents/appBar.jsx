import { AppBar,Typography,Button,Toolbar } from "@mui/material"


export default function AppBarComponent() {
    return(
        // <AppBar variant="outlined">has two variants elevation and outlined. elevation is default one.
        //     <Typography color='black'>Logo</Typography>we can use subcomponents inside out AppBar
        //     <Button variant="contained" color="secondary">Login</Button>
        // </AppBar>

        <>
        <h1>AppBar with toolbar</h1>
        <AppBar variant="outlined">
            {/* Toolbar helps in aligning contents horizontally, commonly used with Components like AppBar and other header compnonents.  */}
            <Toolbar>
                <Typography variant="h4" color='red'>Logo</Typography>
                <Button color="warning" variant="contained" sx={{marginLeft:'auto'}}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
        </>
    )
}