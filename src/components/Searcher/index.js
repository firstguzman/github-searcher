import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

export const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('')

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue)
  }

  return (
    <Stack direction='row' sx={{ marginTop: '30px', width: '80%' }}>
      <FormControl size='small' sx={{ width: '90%' }} variant='outlined'>
        <InputLabel>GitHub User</InputLabel>
        <OutlinedInput
          placeholder='Octocat'
          value={valueInput}
          onChange={onSearchValueChange}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                onClick={handleSubmit}
                size='small'
                aria-label='search'
                edge='end'
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label='GitHub User'
        />
      </FormControl>
    </Stack>
  )
}
