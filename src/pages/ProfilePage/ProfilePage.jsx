// import { Box } from "@mui/material";
import TabMenuProfile from "./TabMenuProfile";
// import Error_page from "../Error_page/Error_page";
import SideControlProfile from "./SideControlProfile";
import SideControlProfile_tab from "./SideControlProfile_tab";
import { Box } from "@mui/material";
import { redirect, useLoaderData, useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";




export default function ProfilePage() {



  const {unique_username_id} = useParams();
  // const getId = parseInt(id);

  const userData = useLoaderData()
  const getProfile = userData.find((item)=> item.unique_username.toLowerCase() === unique_username_id.toLowerCase())




  return (
    <>
    {/* <Helmet>
      <title>{`Kaitoker | ${getProfile.userName}`}</title>
    </Helmet> */}
    <Box
      display={"flex"}
      flexDirection={"row"}
      bgcolor={"background.default"}
      color={"text.primary"}
      height={"100vh"}
      width={"100%"}
      overflow={"hidden"}
    >
      {/* <Helmet>
        <title>{getProfile.unique_username}</title>
      </Helmet> */}
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
    </>
  );
}
