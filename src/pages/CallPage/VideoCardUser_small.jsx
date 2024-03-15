

export default function VideoCardUser_small(props) {
  return (
    <>

        <video
          height={150}
          width={150}
          muted
          loop
          autoPlay
          src={props.url}

            style={{ 
            objectFit: "cover", 
            display: "flex", 
            margin:5 , 
            borderRadius:20,
            }}

          >
        </video>
    
    </>
  )
}
