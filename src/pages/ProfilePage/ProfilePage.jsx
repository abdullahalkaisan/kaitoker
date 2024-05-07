import { Box } from "@mui/material";
import TabMenuProfile from "./TabMenuProfile";
import SideControlProfile from "./SideControlProfile";
import SideControlProfile_tab from "./SideControlProfile_tab";




export default function ProfilePage() {
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
        {/* <SideControlProfile_tab /> */}
        {/* <SideControlProfile /> */}
      </Box>

      {/* <TabMenuProfile /> */}
      Hi this is abdullah Al Kaisan profile page

    </Box>
  );
}
