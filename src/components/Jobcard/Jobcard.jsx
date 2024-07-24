import { Box, Button, Card, IconButton, Tooltip, Typography } from "@mui/material";
import ChipsCustom from "../callCard/ChipsCustom";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import SubDetails from "../callCard/SubDetails";
import { MdBookmark, MdBookmarkBorder, MdMoreHoriz, MdMoreVert, MdSupervisedUserCircle } from "react-icons/md";


export default function Jobcard() {
  return (
    <Card variant="none" sx={{
        width:500, 
        p:2,
        m:2, 
        // border:"1px solid #00000020", 
        borderRadius:2, 
        boxShadow:"0 0 10px #00000010"
        }}>



<Box sx={{display:"flex", width:"100%",  alignItems:"flex-start", justifyContent:"space-between", p:"10px 0"}}>

<PeopleCard 
    time={"1 month ago"}
    
    avatarUrl={"https://media.licdn.com/dms/image/D4D0BAQHvDovCIxClUQ/company-logo_200_200/0/1704298517859/myticas_consulting_logo?e=1727913600&v=beta&t=xITJBWS7GR0QdPu9du4LlRM_6MASenfl0uBoz3LiE-k"} 
    avatarSize={44}
    avatarRadious={4}
    badge
    isOnline={"online"}
    avatar

    title={"Myticas Consulting"} 
    isVarified
    country={"Dhaka, Bangladesh"}
    subTitle="Remote"
    // subTitle2="Remote"
    subTitleColor2={"#777"}
    />


<Box sx={{display:"flex", alignItems:"center"}}>



    <Box sx={{marginRight:2}}>
        <Button size="small" variant="contained" sx={{
            borderRadius:3, 
            // width:"100%", 
            // padding:"10px 0px"
            }}>
        {/* {"7/10 "}  */}
        Apply
        </Button>
    </Box>
    
    <Box sx={{
        marginRight:0, 
        // backgroundColor:"#00000010", 
        borderRadius:999
        }}>
        {/* <IconButton>
            <MdBookmarkBorder/>
        </IconButton> */}
        <IconButton>
            <MdMoreVert/>
            {/* <MdMoreHoriz /> */}
        </IconButton>
    </Box>



</Box>


</Box>




<Typography variant="h6" component="h2">
    Front End Developer (31591)
</Typography>
<Typography variant="body2" color={"#555"} component="h2">
    Looking for Mobile App and website UI and UX Designer who know how to use Figma and other design tools.
</Typography>


<Box sx={{margin:"10px 0", display:"flex", alignItems:"center"}}>


{/* <Box sx={{display:"flex", alignItems:"center", fontSize:"15px", fontWeight:"bold", opacity:"70%", margin:"0 10px"}}>
    <MdSupervisedUserCircle />
    15/20
</Box> */}


<SubDetails 
proposal={"15/20"}
// user_rating={"45"}
user_language={"En"}
// flag={"bd"}
askingCost={"$600/mo"}
justifyContent={"flex-start"}
/>



</Box>


<Box sx={{margin:"10px 0", display:"flex", flexWrap:"wrap", justifyContent:"start"}}>
        <ChipsCustom size={"large"} label={"React"} />
        <ChipsCustom size={"large"} label={"Ui Ux designer"} />
        <ChipsCustom size={"large"} label={"Javascript "} />
        <ChipsCustom size={"large"} label={"Css"} />
        <ChipsCustom size={"large"} label={"Figma"} />
        <ChipsCustom size={"large"} label={"Web development"} />
        <ChipsCustom size={"large"} label={"Front end"} />
        <ChipsCustom size={"large"} label={"English"} />
        {/* <ChipsCustom label={"Management"} /> */}
    </Box>







    





    
    
    
    </Card>
  )
}
