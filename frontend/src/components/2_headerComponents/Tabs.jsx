//Tabs make it easy to explore and switch between different views.
import { useState } from "react";
import { Tab,Tabs } from "@mui/material";

export default function TabContainer() {
    const [value, setvalue]=useState(0)

    return(
            <Tabs 
            value={value} 
            onChange={(e,v)=>setvalue(v)} 
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            >
                <Tab label='first' > </Tab>
                <Tab label='second'></Tab>
                <Tab label='third' disabled></Tab>
                <Tab label='forth'></Tab>

            </Tabs>
    )
}