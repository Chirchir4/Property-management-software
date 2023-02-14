
import { Box, useTheme } from '@mui/material'
import React from 'react'
import { Geographychart } from '../../components/Geographychart'
import Header from '../../components/Header'
import { tokens } from '../../theme'



const Geo = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
  return (
    <Box m="20px">
    <Header title="Geographychart" subTitle="A Simple Geography Chart"/>
    <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <Geographychart/>
    </Box>

  </Box>
  )
}

export default Geo