import { Box } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";


export default function CallCard_SmallCard() {
  return (
    <Box 
    // border={"1px solid #33333320"} 
    margin={0.5} padding={1} 
    // borderRadius={1}
    sx={{borderRadius:1}}

    >
      <PeopleCard 
        title={"Abdullah Al Kaisan"}
        subTitle={"CEO At Kaitoker"}
        // languages="Bengali, English"
        country={"Bangladesh"}
        pro
        avatar
        avatarSize={45} 
        // titleSize={16}
        // subTitleSize={14}
        avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
        badge
        isOnline="online"
        flag={"bd"}
        isVarified

      />
    </Box>
  )
}
