import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import Piechart from '../../components/Piechart'


export default function Pie() {
  return (
  <Box m="20px">
    <Header title="Piechart" subTitle="A Simple Piechart"/>
    <Box height="75vh">
        <Piechart/>
    </Box>

  </Box>
  )
}
