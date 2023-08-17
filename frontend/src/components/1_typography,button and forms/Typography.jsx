import {Typography} from '@mui/material'

export default function TypographyComponent(){

    return (
        <>
            <Typography color='grey' variant='h1' sx={{fontWeight:900,textAlign:'center',margingTop:'auto'}}>This is a sentence.</Typography>
            <Typography  variant='subtitle1' sx={{fontWeight:500,textAlign:'left',margingTop:'auto',color:'magenta'}}>sx attribute is used to specify css properites.</Typography>
            <Typography  variant='body2' sx={{fontWeight:300,textAlign:'right',margingTop:'auto',color:'red'}}>Some other properites of variant are as follows that you can checkout ('button', 'caption', 'overline')</Typography>

        </>
    )
}

// variant has wide range of properites for h1 to h6, p, etc..
//sx attribute is used for specifing css inline properite althogh we can also apply it individually.
