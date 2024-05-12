// import { Box } from "@mui/material";
import TabMenuProfile from "./TabMenuProfile";
// import Error_page from "../Error_page/Error_page";
import SideControlProfile from "./SideControlProfile";
import SideControlProfile_tab from "./SideControlProfile_tab";

import { Box } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom";




export default function ProfilePage() {

  const {id} = useParams();
  const getId = parseInt(id);
  const userData = useLoaderData()
  const getProfile = userData.find((item)=> item.id === getId)


  return (

    <Box
      display={"flex"}
      flexDirection={"row"}
      bgcolor={"background.default"}
      color={"text.primary"}
      height={"100vh"}
      width={"100%"}
      overflow={"hidden"}
    >
      <Box
        sx={{
          display: { md: "block", xs: "none" },
          height: "100%",
          width:"400px",
          overflow: "auto",
          borderRight: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <SideControlProfile_tab />
        <SideControlProfile getProfile={getProfile}/>
      </Box>

      <TabMenuProfile />

    </Box>
  );
}
