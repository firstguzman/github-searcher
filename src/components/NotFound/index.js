
import { Stack, Typography } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import React from 'react'

export const NotFound = () => {
  return (
    <Stack direction='column' spacing={2} alignItems='center' align='center' sx={{marginTop: '30px'}}>
      <SentimentVeryDissatisfiedIcon fontSize='large' />
      <Typography variant='h4'>Not Found, try with another account</Typography>
    </Stack>
  )
}
