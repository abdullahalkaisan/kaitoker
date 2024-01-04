import { Autocomplete, Box, Button, TextField } from "@mui/material";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import { useTheme } from "@emotion/react";
// import LanguageSelect from "./LanguageSelect";
// import CallCardDynamic from "../callCard/CallCardDynamic";
import LanguageSelect from "../callCard/LanguageSelect";
// import CallCardDynamic from "../callCard/CallCardDynamic";
import CallCard from "../callCard/CallCard";
// import CallCardLite from "../callCard/CallCardLite";

// import CallCard3 from "./CallCard3";



export default function Center_container() {


  const theme = useTheme();
  const themeSelect = theme.palette.mode;

  return (

    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"background.default"}
      color={"text.primary"}
      height={"100%"}
      width={"100%"}

    >











      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          width: "100%",
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-betwee",
        }}
      >
        <Autocomplete
          bgcolor={"background.default"}
          color={"text.primary"}
          size="small"
          disablePortal
          id="combo-box-demo"
          options={searchItemsSuggetioins}
          sx={{ width: "70%", m: 1 }}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />


        <LanguageSelect />

        <Button
          variant="contained"
          sx={{ 
            borderRadius: 999, m: "0 15px", 
            bgcolor: themeSelect==="dark" ? "#333" : "#1565C0",
            "&:hover":{bgcolor: themeSelect==="dark" ? "#222" : "#1565C0"},
            color:themeSelect==="dark" ? "#fff" : "#fff"
          }}
          size="small"
        >
          <AllInclusiveOutlinedIcon sx={{ 
            marginRight: 1, 
            color: themeSelect==="dark"?"#fff":"#fff"
          }} 
            />
          534
        </Button>
      </Box>






      <Box
        sx={{
          bgcolor: `${themeSelect === "light" ? "#f1f1f1" : "#222"}`,
          // width: "100%",
          flexGrow:1,
          height:"100%",
          overflowY: "auto",
          display:"flex", 
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"flex-start",
          p:1,

        }
      }
      >
{/* 
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
         */}


        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />


<CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

<CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />









      </Box>
    </Box>
  );
}

const searchItemsSuggetioins = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];

