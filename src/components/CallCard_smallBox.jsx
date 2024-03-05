import { Avatar, Badge, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";

export default function CallCard_smallBox(props) {
    console.log(props);
    const {flag, avatar, userName, profession, isVarified} = props.item;

    // id: 11,
    // userName: "Purno",
    // profession: "Video Editor",
    // avatar:
    //   "https://lh3.googleusercontent.com/a/ACg8ocJJD54sQONqFJ2SdyfXr-VuaRK-In5C3kOpkuPrann2eGs",
    // hourRate: 50,
    // isVarified: false,
    // isOnline: "online",
    // followers: 50,
    // rating: 80,
    // totalCall: 150,
    // flag: "bd",
    // gigLanguage: "Bengali",
    // languages: ["Bengali"],
    // country: "Bangladesh",
    // city: "Jamalpur",
    // skills: ["Premere pro", "Video editor", "Photoshop", "Advisor"],


  return (
    <>
    <CardActionArea style={{height:"max-content", width:"max-content", margin: 6, borderRadius:6}}>
          <Card sx={{ padding: 2,  height: "max-content"}} variant="outlined">
        {/* <Badge variant="dot" badgeContent={1} color="info" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}> */}
            <Avatar 
                src={avatar} 
                sx={
                    // { width: 200, height: 200 }
                    { width: 160, height: 160, borderRadius:3}
                } 
                variant="rounded">
            </Avatar>
        {/* </Badge> */}

            <div style={{marginTop:10}}>
                <PeopleCard 
                // flag={flag} 
                title={userName} isVarified={isVarified} subTitle={profession}/>
            </div>

        </Card>
        </CardActionArea>


        <Card variant="outlined" sx={{ width: 180,margin: 1, borderRadius:2, display:"none", height:"max-content" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt="green iguana"
        />
        {/* <CardContent> */}
                <div style={{margin:7}}>
                    <PeopleCard 
                    // flag={flag} 
                    title={userName} isVarified={isVarified} subTitle={profession}/>
                </div>
        {/* </CardContent> */}
      </CardActionArea>
    </Card>



    </>
  )
}
