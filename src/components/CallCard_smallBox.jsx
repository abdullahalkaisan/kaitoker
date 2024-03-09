import { Avatar, Badge, Card, CardActionArea } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { usersDataLocal } from "../usersDataLocal";

export default function CallCard_smallBox(props) {

  const theme = useTheme();

  const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {

// curve style 
      height:"10px",
      width:"10px",
      right: 10,
      bottom: 10,
      outline: `8px solid ${theme.palette.background.paper}`,


// round style
      // height:"12px",
      // width:"12px",
      // right: 20,
      // bottom: 25,
      // outline: `8px solid ${theme.palette.background.paper}`,

      // borderRadius:3,
      borderRadius:30,
      padding:"0"
    },
    });



    console.log(props);
    // const {flag, avatar, userName, profession, isVarified} = props.item;

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


      {usersDataLocal.map((item) =>

        <CardActionArea
          style={{height:"max-content", width:"max-content", borderRadius:"40px 40px 30px 40px", margin:8}}
          key={item.id}
        >
          <StyledBadge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
            color={item.isOnline === "online" ? "info" : "warning"}
            badgeContent={
              item.isOnline === "online" || item.isOnline === "busy" ? 1 : 0
            }

          >
            <Avatar
              src={item.avatar}
              // sx={{ height: 100, width: 100, borderRadius: "40px 40px 30px 40px" }}
              item={item}
              sx={
                item.isOnline === ""
                  ? { height: 100, width: 100, borderRadius: "40px"  }
                  : { height: 100, width: 100, borderRadius: "40px 40px 30px 40px" }
              }

            />
          </StyledBadge>
        </CardActionArea>

      )}

    </>
  )
}
