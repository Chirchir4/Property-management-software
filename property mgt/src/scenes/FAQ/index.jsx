import React from 'react'
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export const FAQ = () => {
    const theme= useTheme()
    const colors=tokens(theme.palette.mode)
  return (
   <Box m="20px">
<Header title="FAQ" subTitle="Frequently Asked Questions Page"/>
   <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis est, recusandae praesentium sint, autem 
            ducimus reiciendis sunt et assumenda a aut? Commodi unde accusamus amet. Rerum et distinctio deserunt.
        </Typography>
    </AccordionDetails>
   </Accordion>
   <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis est, recusandae praesentium sint, autem 
            ducimus reiciendis sunt et assumenda a aut? Commodi unde accusamus amet. Rerum et distinctio deserunt.
        </Typography>
    </AccordionDetails>
   </Accordion>
   <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis est, recusandae praesentium sint, autem 
            ducimus reiciendis sunt et assumenda a aut? Commodi unde accusamus amet. Rerum et distinctio deserunt.
        </Typography>
    </AccordionDetails>
   </Accordion>
   <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            Just a random question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis est, recusandae praesentium sint, autem 
            ducimus reiciendis sunt et assumenda a aut? Commodi unde accusamus amet. Rerum et distinctio deserunt.
        </Typography>
    </AccordionDetails>
   </Accordion>
      <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            My favorite question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis est, recusandae praesentium sint, autem 
            ducimus reiciendis sunt et assumenda a aut? Commodi unde accusamus amet. Rerum et distinctio deserunt.
        </Typography>
    </AccordionDetails>
   </Accordion>
   
   </Box>
  )
}
