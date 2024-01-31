import { useTheme } from "@emotion/react";
import { Chip } from "@mui/material";
import PropTypes from 'prop-types';

const handleClick_chips = () => {
  console.info('You clicked the Chip.');
};


export default function ChipsCustom(props) {
  const theme  = useTheme();
  const themeMode = theme.palette.mode;


  return (
    <Chip
      onClick={handleClick_chips}
      variant="none"

      size={props.hashTagStyle ? "small" :"medium"}  


      sx={

        props.hashTagStyle ? 
        {
          // m: 0.5,
          // #0960b5 
          // #1976d2
          // #90caf9
          // #3ea6ff
          color: `${themeMode === "light" ? "#0960b5" : "#3ea6ff"}`,
          bgcolor:"transparent",
          // bgcolor: `${themeMode === "light" ? "transparent" : "transparent"}`,
          fontSize: "14px",
          // border: `1px solid ${
          //   themeMode === "light" ? "rgba(0, 0, 0, 0.12)" : "#ffffff1a"
          // }`,
        } 
        :
        {
        m: 0.5,
        color: `${themeMode === "light" ? "#555" : "#ddd"}`,
        bgcolor: `${themeMode === "light" ? "" : "#222"}`,
        fontSize: "14px",
        border: `1px solid ${
          themeMode === "light" ? "rgba(0, 0, 0, 0.12)" : "#ffffff1a"
        }`,
      }
    
    }
      label={props.hashTagStyle ? "#"+props.label :props.label}  
    />

    // <Chip onClick={handleClick_chips} sx={{m:0.5, color:"#555", fontSize:"14px", border:"1px solid rgba(0, 0, 0, 0.12)"}} label="SEO"/>
  );
}


ChipsCustom.propTypes = {
  label: PropTypes.string,
  hashTagStyle: PropTypes.bool
};