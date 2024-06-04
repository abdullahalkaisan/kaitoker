import { createContext, useRef, useState } from "react"


export const CallCardContext = createContext()

export default function CallCardProvider({children}) {

    const audioPlayerRef = useRef();
    const [isPaused, setIsPaused] = useState(true);
    const audioSrc = './src/portfuio_4.mp3';



    const audioData = {
    audioPlayerRef,
    isPaused, 
    setIsPaused,
    audioSrc
    }


  return (
    <CallCardContext.Provider value={audioData}>
        {children}
    </CallCardContext.Provider>
  )
}
