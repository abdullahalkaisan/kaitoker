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
    <Chip onClick={handleClick_chips} sx={{m:0.5,  color:`${themeMode==="light"?"#555":"#ddd"}`, bgcolor:`${themeMode ==="light" ? "":"#222"}`, fontSize:"14px", border:`1px solid ${themeMode==="light"? "rgba(0, 0, 0, 0.12)" : "#ffffff1a"  }`}} label={props.label}/>

    // <Chip onClick={handleClick_chips} sx={{m:0.5, color:"#555", fontSize:"14px", border:"1px solid rgba(0, 0, 0, 0.12)"}} label="SEO"/>

  )
}


ChipsCustom.propTypes = {
  label: PropTypes.string
};