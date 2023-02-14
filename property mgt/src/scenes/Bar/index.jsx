
import { Box } from '@mui/material'
import React from 'react'
import Barchart from '../../components/Barchart'
import Header from '../../components/Header'

export default function Bar() {
  return (
    <Box m="20px">
<Header title="BAR" subTitle="A  simple barchart"
/>
<Box height="75vh">
<Barchart/>
</Box>
    </Box>
  )
}
