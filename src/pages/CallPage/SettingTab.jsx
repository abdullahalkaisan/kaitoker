
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// import Switch from '@mui/material/Switch';
import { UilMoon } from '@iconscout/react-unicons'
import { useContext, useEffect, useState } from 'react';
import { ThemeCustomContext } from '../../Providers/ThemeCustomProvider';
import IOS_Switch from '../../components/IOS_Switch';
import { useTheme } from '@emotion/react';
import CallAction from './CallAction';
import { Box } from '@mui/material';
import Logo from '../../components/topbar/others/Logo';
import MunitesAndMoneyPop from '../../components/topbar/others/MunitesAndMoneyPop';
export default function SettingTab() {

    const [checked, setChecked] = useState(['']);

    const theme = useTheme()
    const darkTheme = theme.palette.mode=== "dark";

    useEffect(()=>{
        if(darkTheme){
            setChecked('darkmode')
        }else{
            setChecked('')
        }
    },[theme, darkTheme])



  const {darkModeToggleFunc} = useContext(ThemeCustomContext)

    console.log(checked);


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];


    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    darkModeToggleFunc()
  };

  return (
    <>

<Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around", mt:3}}>
    <Logo />
    <MunitesAndMoneyPop />
</Box>

    <Box sx={{margin:"30px auto", bgcolor:`${darkTheme ? "#222":"#7773"}`, p:"5px", borderRadius:3}}>
        <CallAction  />
    </Box>

    <List
      sx={{ width: '100%', maxWidth: 320, margin:"10px auto", bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Settings</ListSubheader>}
    >
      <ListItem>
        <ListItemIcon>
        <UilMoon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-darkmode" primary="Dark mode" />
        <IOS_Switch 
            edge="end"
            onChange={handleToggle('darkmode')}
            checked={checked.indexOf('darkmode') !== -1}
            inputProps={{
            'aria-labelledby': 'switch-list-label-darkmode',
            }}
        />
      </ListItem>





    </List>
    </>
  );
}