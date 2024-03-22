import { Box } from "@mui/material";
import ReelPage_action from "./ReelPage_action";
import ReelPage_audioAction from "./ReelPage_audioAction";
import ReelPage_name from "./ReelPage_name";
import ReelPage_searchResult from "./ReelPage_searchResult";
import ReelPage_tab from "./ReelPage_tab";
import ReelPage_topbar from "./ReelPage_topbar";




export default function ReelPage() {

  return (
    <>
      <Box sx={{height:"100vh", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <Box>
          <ReelPage_topbar/>
          {/* <Slider_filter/>  */}
          <ReelPage_searchResult/>
          <ReelPage_name/>
          <ReelPage_action/>
          <Box>
            <ReelPage_tab/>
          </Box>

        </Box>

        <ReelPage_audioAction/>

      </Box>
    </>
  )
}
