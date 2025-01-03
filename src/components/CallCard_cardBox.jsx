import { Avatar, Badge, Card, CardActionArea, } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { usersDataLocal } from "../usersDataLocal";


export default function CallCard_cardBox() {

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

  return (
    <>
    {usersDataLocal.map((item)=>{<h1>{item.userName}</h1> })}
    {/* {usersDataLocal.map((items)=>{
        <CardActionArea key={items.id} style={{height:"max-content", width:"max-content", margin: 6, borderRadius:6}}>
            <Card sx={{ padding: 2,  height: "max-content"}} variant="outlined">
            <StyledBadge
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
                }}
                variant="dot"
                badgeContent={1}
                color="primary"
            >
                <Avatar 
                    src={items.avatar} 
                    sx={
                        { width: 160, height: 160, borderRadius:3}
                    } 
                    variant="rounded">
                </Avatar>
            </StyledBadge>
                <div style={{marginTop:10}}>
                    <PeopleCard 
                    title={items.userName} isVarified={items.isVarified} subTitle={items.profession}/>
                </div>
            </Card>
            </CardActionArea>
    })} */}
    </>
  )
}
