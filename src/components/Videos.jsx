import React from 'react'
import { Box, Stack } from '@mui/material'
import { ChannelCard, Loader, VideoCard } from "./";
import { useState } from 'react';

const Videos = ({ videos, direction}) => {

  if (!videos?.length) return 'Loading...';

 

  
  return (
    <Stack direction={direction || 'row' } flexWrap='wrap' alignItems='start' justifyContent='start' gap={2}>
        {videos.map((item, idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos