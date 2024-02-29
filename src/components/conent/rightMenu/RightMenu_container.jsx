import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Badge, IconButton, TextField, Typography} from '@mui/material';
// import PeopleList from './peopleList';

import { 
  UilUser,
  UilCommentLines,
  UilUsdCircle,
  UilHistory, 
} from '@iconscout/react-unicons'
import PeopleCard from './PeopleCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TypeMessageBox from '../../TypeMessageBox';
import { useTheme } from '@emotion/react';
// import PeopleList from './peopleList';


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
  const theme = useTheme();
  const themeUse = theme.palette.mode;


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
                  {/* <PeopleList title="Abdullah Al Kaisan" subTitle="Web developer" accountType="verified" avatar={1} badge={1}/> */}

              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Box
                display={"flex"} 
                height={"100%"} 
                // width={"100%"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                overflow={"auto"} 
                sx={{flexGrow:1}}
                py={3}
              >


                <Box px={3} display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
                  <IconButton>
                    <ArrowBackIcon/>
                  </IconButton>
                  <PeopleCard title='Abdullah Al Kaisan' subTitle='Web deloper' avatar={1} badge={1}  />
                  <IconButton>
                    <MoreHorizIcon/>
                  </IconButton>
                </Box>




{/* justifyContent:"flex-end",  */}
                <Box px={2} sx={{flexGrow:1, flexDirection:"column",  height:"100%",  display:"flex", overflowY:"auto"}}>
                  

                <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      // border:"1px solid #99999920"
                    }} bgcolor={`${themeUse === "dark" ? "#222" :"#f1f1f190"}`}>
                      {/* <Avatar_small/> */}

                      <Box display={"flex"} justifyContent={"space-between"} width={1}>
                        <PeopleCard title={"Abdullah Al Kaisan"} varified={1} subTitle='Founder of Kaitoker' avatar={true}/>
                        <IconButton>
                        <MoreHorizIcon/>
                        </IconButton>
                      </Box>

                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam asperiores, soluta aliquam at explicabo ad perspiciatis veritatis voluptatum tenetur!
                      </Typography>

                      <Box width={1} textAlign={"end"}>
                        <Typography mx={1} variant="caption" gutterBottom>
                          3:11 AM - 1/2/2024
                        </Typography>
                      </Box>




                    </Box>
                  </Box>



                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      bgColor:"red"

                    }} bgcolor={`${themeUse === "dark" ? "#222" :"#f1f1f1"}`}>
                      {/* <Avatar_small/> */}
                      <PeopleCard/>
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam asperiores, soluta aliquam at explicabo ad perspiciatis veritatis voluptatum tenetur!
                      </Typography>

                    </Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 

                    }} bgcolor={"#f1f1f1"}>
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>


                  <Box display={"flex"} justifyContent={"flex-end"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      backgroundColor:"#333000",
                      color:"#fff"

                    }} 

                    >
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>




                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      bgColor:"red"

                    }} bgcolor={"#f1f1f1"}>
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam asperiores, soluta aliquam at explicabo ad perspiciatis veritatis voluptatum tenetur!
                      </Typography>

                    </Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      bgColor:"red"

                    }} bgcolor={"#f1f1f1"}>
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>


                  <Box display={"flex"} justifyContent={"flex-end"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      backgroundColor:"#333000",
                      color:"#fff"

                    }} 

                    >
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>



                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      bgColor:"red"

                    }} bgcolor={"#f1f1f1"}>
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam asperiores, soluta aliquam at explicabo ad perspiciatis veritatis voluptatum tenetur!
                      </Typography>

                    </Box>
                  </Box>

                  <Box display={"flex"} justifyContent={"flex-start"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      backgroundColor:"#f1f1f1",
                      


                    }}>
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>

   

                  <Box display={"flex"} justifyContent={"flex-end"}  width={"100%"} my={0.5}>
                    <Box sx={{
                      p:1,
                      borderRadius:4,
                      display:"flex",
                      // width:"max-content"
                      minWidth:"auto",
                      maxWidth:"fit-content",
                      flexWrap:"wrap",
                      wordWrap:"break-word", 
                      backgroundColor:"#333000",
                      color:"#fff"

                    }} 

                    >
                      {/* <Avatar_small/> */}
                      <Typography m={1} variant="p" gutterBottom>
                        Lorem, ipsum dolor.
                      </Typography>

                    </Box>
                  </Box>








                </Box>
                
                  <TypeMessageBox/>

                  {/* <PeopleList/>
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
                  <PeopleList/> */}
              </Box>
              {/* <MessageList/> */}
              
 
              



              
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
