import React from 'react'
import { Typography, Stack, Box } from '@mui/material';

const SimilarExercises = ({targetMuscleExercise, equipmentExercise}) => {
  return (
    <Box sx = {{mt:{lg:'100px', xs:'0px'}}}>
      <Typography variant='h3' mb='33px'>
        Exercises that target the same muscle group.
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {targetMuscleExercise.length > 0  && <HorizontalScrollbar data = {targetMuscleExercise} />}
      </Stack>


    </Box>
  )
}

export default SimilarExercises
