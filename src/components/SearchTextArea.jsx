import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import { MdTune } from 'react-icons/md';

export default function SearchTextArea(props) {
  return (
    <Paper
      component="form"
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: 320 , 
        // m:1, 
        boxShadow:"none", 
        // backgroundColor:"#f1f1f180", 
        border:"1px solid #00000020",
        borderRadius:4, 
        }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1,}}
        placeholder={`Search ${props.length ? props.length : "0"} Talent`}
      />
      <IconButton type="button" sx={{ p: '10px' }} >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} >
        {/* <DirectionsIcon /> */}
        <MdTune/>
      </IconButton>
    </Paper>
  );
}
