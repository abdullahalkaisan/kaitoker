import { Box, Button, Typography } from "@mui/material";
import ChipsCustom from "../callCard/ChipsCustom";
import { StarIcon, TranslateIcon } from "@hugeicons/react-pro";
import { MdFormatListBulleted, MdOutlinePeopleOutline, MdStar, MdTranslate } from "react-icons/md";
import CourseCard_avatarGroup from "./CourseCard_avatarGroup";


export default function CourseTitleDetails(props) {
  return (
    <Box>

    <Box padding={2}>
        <ChipsCustom size={"large"} hashTagStyle={true} label="Web development" />
        <ChipsCustom size={"large"} hashTagStyle={true} label="React" />

    </Box>

{/* <iframe style={{border:"none", borderRadius:9, flexGrow:1, margin:"10px 0"}} width="100%" height="200" src="https://www.youtube.com/embed/pBzrHxm6mco?si=IwitSnSkiKX73d3o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> */}
<Typography variant="h6" sx={{ fontSize: "medium", fontWeight: "bold" }}>
  {" "}
  {props.videoTitle}
</Typography>


<Typography sx={{width:"max-content"}} variant="body2">
  <Box
    color={"#777"}
    display={"flex"}
    justifyContent={"space-between"}
    alignItems={"center"}
  >
    <Box marginRight={1.5} display={"flex"} alignItems={"center"}>
      {/* <MdOutlinePeopleOutline sx={{ marginRight: 0.5 }} fontSize="small" /> */}
      <Box marginRight={1}>
        <CourseCard_avatarGroup/>
      </Box>

      112,266 students

    </Box>

    {/* <Box marginRight={1.5} display={"flex"} alignItems={"center"}>
      <MdFormatListBulleted
        sx={{ marginRight: 0.5 }}
        fontSize="small"
      />
      650
    </Box> */}

    <Box marginRight={1.5} display={"flex"} alignItems={"center"}>
      <MdTranslate fontSize="medium" />
      English
    </Box>

    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{ color: "green", fontWeight: "bold", margin: "0 5px" }}
    >
      <MdStar sx={{ marginRight: 0 }} fontSize="medium" />
      56%
    </Box>

    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{ color: "primary", fontWeight: "bold", margin: "0 5px" }}
    >
      {/* <StarIcon sx={{marginRight:0}} fontSize="small"/> */}
      <Button
        sx={{ padding: 0,margin:0, textTransform: "none" }}
        color="primary"
        size="smaller"
      >
        $2.34/hr
      </Button>
    </Box>
  </Box>
</Typography>
    
    </Box>
  )
}







