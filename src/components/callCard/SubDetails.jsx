import { Badge, Box, Tooltip } from '@mui/material'
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
import PropTypes from 'prop-types';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import RoomIcon from '@mui/icons-material/Room';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { MdCalendarMonth, MdOutlinePeopleAlt, MdSupervisedUserCircle } from 'react-icons/md';
import PeopleCard from '../conent/rightMenu/PeopleCard';
import NumberFormat from './NumberFormatCustom';
import NumberFormatCustom from './NumberFormatCustom';
SubDetails.propTypes = {
  user_followers: PropTypes.number.isRequired,
  user_rating: PropTypes.number.isRequired,
  user_language: PropTypes.string.isRequired,
  user_total_call: PropTypes.number.isRequired,
};

export default function SubDetails({user_followers, proposal, askingCost, user_rating , user_language, user_total_call, justifyContent, flag, sinceTime }) {
  

  // const [isBadge, setIsBadge] = useState(false);

  const isBadge = 0;

  // 0-500 = no badge
  // 500 = lavel 1 warning  
  // 5,000 = lavel 2 error
  // 50,000 = lavel 3 secondary


  
  return (
    <Box
      display={"flex"}
      bgcolor={"background.default"}
      color={"text.primary"}
      fontSize={"medium"}
      mb={0.5}
      fontWeight={"boldd"}
      sx={{ color: "#777" }}
      flexDirection={"row"}
      justifyContent={justifyContent === "flex-start" ? "flex-start" : "center"}
      flexWrap={"wrap"}
      // pt={2}
      // pb={1}
      alignItems={"center"}
    >
      {isBadge ? (
        <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
          <Badge
            color="warning"
            badgeContent={user_followers}
            max={999999}
          ></Badge>
        </Box>
      ) : (

        user_followers &&
        <Tooltip placement='top' title={`${user_followers} followers`}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pr: 1,
              fontSize: "medium",
              cursor: "pointer"
              // medium
            }}
          >
            <PeopleOutlineOutlinedIcon sx={{ fontSize: "larger", mr: 0.5 }} />
            {new Intl.NumberFormat("en-US", {
              useGrouping: true,
              notation: "compact",
            }).format(user_followers)}
          </Box>
        </Tooltip>

      )}




      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pr: 1,
          fontSize: "medium",
        }}
      >

{proposal &&
<Box sx={{display:"flex", alignItems:"center", fontSize:"medium", fontWeight:"", opacity:"100%", 
  // margin:"0 10px"
  }}>
    {/* <MdSupervisedUserCircle /> */}
    <MdOutlinePeopleAlt />
    {proposal ? proposal : `0/0`}
    
</Box>
}



      {user_rating && 
        <StarIcon sx={{ fontSize: "medium", color: "#25c600" }} />
      }

      {user_rating &&
        <Tooltip placement='top' title={`${user_rating}% Ratting`}>
          <Box sx={{ fontWeight: "bold", cursor:"pointer", pr: 0.5, color: "#25C600" }}>
            {`${user_rating}%`}
          </Box>
        </Tooltip>
      }



        {user_total_call &&
          <Tooltip placement='top' title={`${user_total_call} people meet`}>
            <Box sx={{ cursor: "pointer", }}>
              {`(${
                  new Intl.NumberFormat("en-US", {
                    useGrouping: true,
                    notation: "compact",
                  }).format(user_total_call)
                })`}
            </Box>
          </Tooltip>
        }
      </Box>


      {/* //   new Intl.NumberFormat("en-US", {
        //        useGrouping: true,
        //        notation: "compact",
        //      }).format(totalCall)}
        // } */}


      {/* <Box sx={{ display: "flex", alignItems: "center", pr: 1, fontSize: "medium" }}>
        <TranslateIcon sx={{ fontSize: "medium" }} />
        {user_language}
      </Box> */}

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pr: 1,
          fontSize: "medium",
        }}
      >
        <RoomIcon sx={{ fontSize: "medium" }} />


        {"Bangladesh"}
      </Box> */}


      {flag && 
          <Tooltip
            style={flag ? { display: "block" } : { display: "none" }}
            title={"India"}
            placement="top"
          >
            <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
              <img
                style={{
                  borderRadius: 4,
                  border: "1px solid #77777750",
                  boxShadow: "10px 10px 10px solid black",
                }}
                src={`https://flagcdn.com/w20/${flag}.png`}
              />
            </Box>
          </Tooltip>
      }



      {user_language && 
        <Tooltip placement='top' title="English">
          <Box
            sx={
              user_language
                ? {
                    display: "flex",
                    cursor:"pointer",
                    alignItems: "center",
                    pr: 1,
                    fontSize: "medium",
                  }
                : { display: "none" }
            }
          >
            <TranslateIcon sx={{ fontSize: "medium" }} />
            {user_language}
            {/* {" ক क ص 항 あ"} */}
          </Box>
        </Tooltip>
      }




      {
        askingCost &&
        <Tooltip placement='top' title={`${askingCost}`}>
          <Box sx={{color:"#1565C0", cursor:"pointer", 
          fontSize:"medium",
            fontWeight:"bold"
            }}>
            {askingCost}
            {/* `$500/mo` */}
            {/* `$5.00/hr` */}
          </Box>
        </Tooltip>
      }



      {sinceTime &&
        <Tooltip placement='top' title={`Since 12th June 2021`}>
          <Box
            sx={ {
                    display: "flex",
                    cursor:"pointer",
                    alignItems: "center",
                    pr: 1,
                    fontSize: "medium",
                  }
            }
          >
            <MdCalendarMonth sx={{ fontSize: "medium" }} />
            {sinceTime}
          </Box>

        </Tooltip>
      }



    </Box>
  );
}
