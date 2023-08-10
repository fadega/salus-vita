import React from 'react'
import { Typography, Stack, Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <InfinitySpin color="gray" />
      
    </Stack>
  )
}

export default Loader
