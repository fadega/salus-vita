import React from 'react'
import { Typography, Stack, Box, Button } from '@mui/material';

const ExerciseVideos = ({exerciseVideos, name}) => {

  if(!exerciseVideos){
    return null
  }
  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p="20px">
      <Typography variant='h3' mb='33px'>
        watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start"
        flexWrap="wrap"
        alignContent="center"
        sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        gap: { lg: '10px', xs: '0px'}

        }}
      >
        {exerciseVideos?.slice(0,3).map((item,index) => (
          <a key={index} 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank" 
            rel="noreferrer">
          <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'300px', height:'200px'}}/>
            <Box>
              <Typography variant='h6' mt='10px' mb='10px'>
                {item.video.title}
              </Typography>
              <Typography>
                {item.video.channelName}
              </Typography>

            </Box>
          </a>
          ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos
