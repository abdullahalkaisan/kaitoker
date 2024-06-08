// import { useTheme } from '@emotion/react';
// import { PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useContext, useEffect } from 'react'
// import { IoMdPlay } from "react-icons/io";
// import { IoMdPause } from "react-icons/io";
import { 
    UilPlay,
    UilPause,
  
  } from '@iconscout/react-unicons'
import { CallCardContext } from '../../Providers/CallCardProvider';
  





export default function AudioPlay_button() {



  // const audioPlayerRef = useRef(null);
  // const [paused, setPaused] = React.useState(true);
  // const audioSrc = './src/portfuio_4.mp3';

  // const [audioSrc, setAudioSrc] = useState('./src/portfuio_4.mp3');

  const {
    audioPlayerRef,
    isPaused, 
    setIsPaused,
    audioSrc
  } = useContext(CallCardContext);

  console.log(audioPlayerRef);

  // const { audioPlayerRef, paused, setPaused,audioSrc} = audioData;
  // console.log(audioData);
 


    useEffect(() => {
      if (!isPaused) {
        audioPlayerRef.current.play()
      }else{
        audioPlayerRef.current.pause();
      }
    }, [isPaused, audioPlayerRef]);





  return (
    <>

      <audio 
        onEnded={()=> setIsPaused(true)} 
        src={audioSrc} 
        ref={audioPlayerRef} 
      ></audio>

        <IconButton
        // sx={{ backgroundColor:`${isPaused ? "transparent":"#1565C030"}`, "&:hover":{backgroundColor:`${isPaused ? "transparent":"#1565C030"}`},p:0 }}
        color="primary"
        aria-label={isPaused ? 'play' : 'pause'}
        onClick={() => {setIsPaused(!isPaused);} } 
        >
        {isPaused ? (
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
     
