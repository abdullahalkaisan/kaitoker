

export default function VideoCardUser_small(props) {
  return (
    <>

        <video
            height={150}
            style={{ 
            objectFit: "cover", 
            display: "flex", 
            margin:5, 
            borderRadius:20,
            // height:{md:"150px", xs:"70px"},
            // width:{md:"150px", xs:"70px"}
            // flexGrow:2
        }}
            muted
            loop
            autoPlay
            src={props.url}></video>
    
    </>
  )
}
