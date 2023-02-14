import { useState } from "react";
import{Calendar} from "fullcalendar"
// import FullCalendar, { formatDate } from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

export const Calendart= () => {
    const theme=useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setcurrentEvents] = useState([])
    const handleDateClick=(selected)=>{
        const title=prompt("Please enter new title for the date")
        const calendarApi =selected.view.calendar
        calendarApi.unselect()

        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${selected.title}`,
                title: title,
                start: selected.start,
                end: selected.end,
                allDay: selected.allDay
            })
        }  
    }
    const handleEventClick=()=>{
        if(
            window.confirm(`Are you sure you want to delete the event '${selected.event,title}'`) 
        ){
            selected.event.remove()
        }
    }
  return (
    <Box m="20px">
        <Header title="Calendar" subTitle="Full  interactive Calendar "/>
<Box display="flex" justifyContent="space-between">
   {/* Calendar Sidebar */}
    <Box 
    flex="1 1 20%" 
    backgroundColor={colors.primary[400]} 
    p="15px"
    borderRadius="4px"
    >
<Typography variant='h5'>
Events
</Typography>
<List>
{currentEvents.map((event)=>{
<ListItem
key={event.id}
sx={{
    backgroundColor:colors.greenAccent[500],
    marging:"10px 0",
    borderRadius:"2px"
}}
>
<ListItemText
primary={event.title}
secondary={
    <Typography>
{formatDate(event.start,{
 day:"numeric",
 month:"short",
 year:"numeric"
})}
    </Typography>
}/>
</ListItem>
})}
</List>
    </Box>
    <Box flex="1 1 100%" ml="15px"> 
        <Calendar
        height="75vh"
        // plugins={[
        //   dayGrid
        // ]}
        />
    </Box>
</Box>
    </Box>
  )
}
