// import { useTheme } from '@emotion/react';
// import { PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useRef } from 'react'
// import { IoMdPlay } from "react-icons/io";
// import { IoMdPause } from "react-icons/io";
import { 
    UilPlay,
    UilPause,
  
  } from '@iconscout/react-unicons'
  









export default function AudioPlay_button() {


  const audioPlayerRef = useRef(null);
  const [paused, setPaused] = React.useState(true);

  // const [audioSrc, setAudioSrc] = useState('./src/portfuio_4.mp3');
  const audioSrc = './src/portfuio_4.mp3';


    useEffect(() => {
      if (!paused) {
        audioPlayerRef.current.play()
      }else{
        audioPlayerRef.current.pause();
      }
    }, [paused, audioPlayerRef]);





  return (
    <>

      <audio 
        // controls 
        onEnded={()=> setPaused(true)} 
        src={audioSrc} 
        ref={audioPlayerRef} 
      ></audio>

        <IconButton
        color="primary"
        aria-label={paused ? 'play' : 'pause'}
        onClick={() => {setPaused(!paused);} } 
        >
        {paused ? (
        <UilPlay
            sx={{ fontSize: '3rem' }}
        />
        


        
        ) : (
        <UilPause sx={{ fontSize: '3rem' }} 
        />



        )}
    </IconButton>
    </>

  )
}


{/* <IoMdPlay size={"40px"} /> */}
{/* <IoMdPause size={"40px"} /> */}
     
