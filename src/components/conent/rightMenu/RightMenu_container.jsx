import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Badge, TextField} from '@mui/material';
import PeopleList from './peopleList';

import { 
  UilUser,
  UilCommentLines,
  UilUsdCircle,
  UilHistory, 
} from '@iconscout/react-unicons'





export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{
        // width:"100%", 
        flexGrow:1,
        height:"100%"
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box   
        sx={{ 
          // p: 3, 
          display:"flex", 
          flexDirection:"column", 
          overflowY:"auto",
          width:"100%", 
          height:"100%"
          }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function RightMenu_container() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (



    <Box  bgcolor={"background.default"} color={"text.primary"} 
      sx={{ 
        height:"100%",
        width: '370px',
        display:{md:"flex", xs:"none"},
        flexDirection:"column"
      }}
    >





      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,paddingTop:1}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={
              <UilUser />
          }  {...a11yProps(0)} />
      
          <Tab icon={
            <Badge badgeContent={10} color="error" max={9}>
              < UilCommentLines  />
            </Badge>

          
          }  {...a11yProps(1)} />
          <Tab icon={
            <Badge color="error" badgeContent={2} max={9}>
              <UilUsdCircle />
            </Badge>

          }  {...a11yProps(4)} />
          <Tab icon={
            <Badge color="error" badgeContent={1} max={9}>
              <UilHistory  />
            </Badge>
          }  {...a11yProps(3)} />
        </Tabs>


      </Box>


        <Box height={"100%"} width={"100%"} display={"flex"} overflow={"auto"}>
            <CustomTabPanel value={value} index={0}>

            <TextField
              sx={{m:3, mb:2}}
              id="filled-search"
              label="Search"
              type="search"
              size='small'
              variant="outlined"
            />


              <Box 
                display={"flex"} 
                height={"100%"} 
                // width={"100%"}
                flexDirection={"column"}
                overflow={"auto"} 
                sx={{flexGrow:1}}
                p={3}
                  
              >

                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>


            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
        </Box>





      {/* <Box bgcolor={"gray"} display={"flex"} flex={1}>

        <CustomTabPanel value={value} index={0}>
              <PeopleList/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>


        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>

      </Box> */}


    </Box>
  );
}
