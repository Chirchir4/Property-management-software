import React, { useState } from 'react'
import { ProSidebar,Menu,MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import profilePic from "../../data/Images/gloria1.png"
import { borderRadius } from '@mui/system';

const Item=({selected,})=>{
  const theme= useTheme()
  const colors=tokens(theme.palette.mode)
  return(
    <NavItem>

    </NavItem>
  )
}

function Sidebar() {
  const theme = useTheme()
   const colors = tokens(theme.palette.mode)
  const [IsCollapsed, setIsCollapsed] = useState(false)
  const [selected, setselected] = useState('Dashboard')

   return (
  
 <Box
 sx={{
  "& .pro-sidebar-inner":{
    background: `${colors.primary[400]} !important`
  },
  "& .pro-icon-wrapper": {
    backgroundColor: "transparent !important",
  },
  "& .pro-inner-item": {
    padding: "5px 35px 5px 20px !important",
  },
  "& .pro-inner-item:hover": {
    color: "#868dfb !important",
  },
  "& .pro-menu-item.active": {
    color: "#6870fa !important",
  },
 }}
 >
  <ProSidebar >
          <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!IsCollapsed)}
            icon={IsCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}>
          {!IsCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant='h5' color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
             </MenuItem>
            
          
  {!IsCollapsed && (
      <Box mb="25px">
        <Box display="flex" justifyContent="center" alignItems="center">
        <img
           alt='user-profile'
           height="100px"
           width="100px"
           src={profilePic}
           style={{cursor:"pointer" , borderRadius:"50%"}}
         />
        </Box>
        <Box textAlign="center">
        <Typography 
          variant="h3"
          color={colors.grey[100]}
          fontWeight= "bold"
          sx={{m:"10px 0 0 0"}}
        >Gloria </Typography>
        <Typography
        variant='h5'
        color={colors.greenAccent[500]}
        >Admin</Typography>
        </Box>
      </Box>
    )
  }
  {/* Menu items */}
  <Box paddingLeft={IsCollapsed ? undefined : "10%"}>

  </Box>
   </Menu>
   </ProSidebar>
 </Box>
  )
}

export default Sidebar