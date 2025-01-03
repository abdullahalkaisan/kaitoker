import { Avatar, Badge, Card, CardActionArea } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { usersDataLocal } from "../usersDataLocal";

export default function CallCard_smallBox(props) {

  const theme = useTheme();

  const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {
      height:"10px",
      width:"10px",
      right: 10,
      bottom: 10,
      outline: `8px solid ${theme.palette.background.paper}`,

      borderRadius:30,
      padding:"0"
    },
    });




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
