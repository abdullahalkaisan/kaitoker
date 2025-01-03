import { Avatar, Badge, Box, Typography } from "@mui/material";
import ReelPage_action from "./ReelPage_action";
import ReelPage_audioAction from "./ReelPage_audioAction";
import ReelPage_name from "./ReelPage_name";
import ReelPage_searchResult from "./ReelPage_searchResult";
import ReelPage_tab from "./ReelPage_tab";
import ReelPage_topbar from "./ReelPage_topbar";
import Slider_filter from "../../components/filter/Profession_filter";
import SubDetails from "../../components/callCard/SubDetails";
import ChipsCustom from "../../components/callCard/ChipsCustom";





export default function ReelPage() {

  
  const imgUrl = "https://i.pravatar.cc/150?img=20";


  return (
    <>
      <Box sx={{height:"100vh", width:"100%",   backgroundColor:"#000", zIndex:"-1", display:"flex", flexDirection:"column", justifyContent:"space-between",  position:"relative"}}>
        <img style={{height:"100vh", width:"100vw", display:"flex", objectFit:"cover", position:"absolute", zIndex:"-2", filter:"blur(60px)", opacity:"30%"}} src={imgUrl}  />
        
        <Box>
        <ReelPage_topbar/>

        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Badge variant="dot" badgeContent={"Active"} color="primary"   
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            sx={{ '& .MuiBadge-badge': {
              height:13,
              width:13,
              // height:10,
              // width:10,
              // height:17,
              // width:17,
              borderRadius:"20px",
              // right: 12,
              // bottom: 35,
              right: 12,
              bottom: 15,
              // outline: ` 4px #333 solid `,
              // outline: ` 2px #fff solid `,
              // padding: '0 4px',


            },}}
            >
              <Avatar sx={{ height:150, width:150, margin:"auto", marginTop:0, borderRadius:"60px 60px 80px 60px", boxShadow:"0px 0px 60px #00000070"}} src={imgUrl}></Avatar>
          </Badge>
        </Box>
        
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginY:3}}>
          <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: `#fff`,
                      width: "max-content",
                      textDecoration: "none",
                      fontSize:"25px"
                    }}
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h6"
                    gutterBottom
                  >
                    Abdullah Al Kaisan
                  </Typography>

                  <Typography
                    sx={{
                      color:"#999",
                      fontSize:"20px"

                    }}
                    variant="subtitle1"
                    mt={-2}
                    p={0}
                    gutterBottom
                    >
                    Web developer
                    </Typography>

          <SubDetails
            user_followers={"45"}
            user_rating={"60"}
            user_language={"En"}
            sinceTime="1.2y"
            justifyContent={"flex-start"}
            user_total_call={"235"}
            flag={"bd"}
          />

<ReelPage_action/> 

        </Box>


        <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", px:1}}>
          <ChipsCustom backgroundColor="#ffffff10" size={"large"} label={"UX UI Designer"} />
          <ChipsCustom backgroundColor="#ffffff10" size={"large"} label={"Mern Stack"} />
          <ChipsCustom backgroundColor="#ffffff10" size={"large"} label={"Javascript"} />
          <ChipsCustom backgroundColor="#ffffff10" size={"large"} label={"Python"} />
          <ChipsCustom backgroundColor="#ffffff10" size={"large"} label={"Graphic designer"} />


        </Box>




      </Box>



        {/* <ReelPage_tab/> */}






        {/* <Slider_filter/>  */}
        {/* <Box>
          <ReelPage_searchResult/>
          <Box>
          </Box>

        </Box>

         */}



<ReelPage_audioAction/>

      </Box>
    </>
  )
}
