import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { Linechart } from '../../components/Linechart'


export const Line = () => {
  return (
    <Box m="20px">
    <Header title="Linechart" subTitle="A Simple Linechart"/>
    <Box height="75vh">
        <Linechart/>
    </Box>

  </Box>
  )
}
