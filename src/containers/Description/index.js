import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Fragment } from 'react'
import { LocationInformation } from '../../components/LocationInformation'
import { PaperInformation } from '../../components/PaperInformation'

export const Description = ({ userState }) => {
  const { bio } = userState
  return (
    <Fragment>
      <Stack sx={{ justifyContent: 'center' }}>
        <Typography>
          {bio != null ? (
            <Typography variant='body1'>{bio}</Typography>
          ) : (
            <Typography variant='body1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          )}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  )
}
