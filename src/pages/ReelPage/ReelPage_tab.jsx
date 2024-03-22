import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChipsCustom from '../../components/callCard/ChipsCustom';
import { usersDataLocal } from '../../usersDataLocal';
import ReelPage_details from './ReelPage_details';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
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

export default function ReelPage_tab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height:"100%", overflow:"auto", display:"flex", flexDirection:"column", }}>
      <Box sx={{ display:"flex", 
      justifyContent:"", 
      borderBottom: 1, borderColor: 'divider', 
      margin:"0 30px" 
      }}>
        <Tabs allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Shidule" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        {/* <Typography
          sx={{ color: "#777", display: "flex", alignItems: "center" }}
          // textAlign={"center"}
          variant="subtitle1"
          mt={-0.5}
          p={0}
          gutterBottom
        >
          <MdRoom sx={{ fontSize: "medium" }} />

          {"Bangladesh"}

          <Tooltip title={"Bangladesh"} placement="top">
            <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
              <img
                style={{
                  borderRadius: 3,
                  border: "1px solid #77777750",
                  boxShadow: "10px 10px 10px solid black",
                }}
                src={`https://flagcdn.com/w20/${"bd"}.png`}
              />
            </Box>
          </Tooltip>
        </Typography> */}


          {/* <AboutList/> */}

          <ReelPage_details/>

          




      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{padding:2}}>
          {usersDataLocal.map((item)=> <ChipsCustom item={item} key={item.id}/>)}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, pariatur ea. Quae ea tempore cumque dolore aperiam corporis ipsam repellat rem? Nesciunt perspiciatis eius quisquam? Nihil odio cupiditate iste nobis. Distinctio, in quidem asperiores odit unde dolorem deserunt suscipit recusandae sit minus assumenda odio voluptatibus ab beatae architecto culpa reprehenderit cum necessitatibus minima maiores eaque. Possimus, veritatis recusandae nisi, in amet quis quia aspernatur eos consequuntur iure corporis? Consequuntur fugit, repellendus cumque enim nisi ab nesciunt, voluptatum aspernatur minima quas error saepe ad alias! Omnis sapiente fuga ut odit delectus quo dolorem eaque aperiam esse corporis. Expedita nesciunt et aliquam eum perspiciatis. Delectus harum doloribus tenetur laboriosam numquam? Sit dolorem nemo molestias qui distinctio voluptate omnis est aspernatur, enim eveniet doloribus accusamus totam exercitationem sapiente eum laudantium deleniti numquam nam eos repudiandae quam aut veniam ex praesentium. Adipisci sit magni laudantium saepe? Illo inventore aut illum? Aperiam modi nihil placeat vero non? Nesciunt exercitationem voluptates blanditiis error voluptas, deserunt debitis dolor placeat similique, libero quis labore distinctio? Consequatur maxime facere iure ipsam non doloremque maiores, dolorem magni numquam incidunt. Debitis nam fugit mollitia aliquid possimus fugiat voluptatem! Nobis harum consequatur deserunt quod expedita iusto possimus ab inventore magnam consequuntur earum tempore similique voluptas saepe placeat et dignissimos, ipsa deleniti laboriosam commodi, enim vitae. Veritatis, incidunt! Adipisci sunt commodi modi dicta maiores nihil enim, dolore, doloribus sit neque aut placeat! Ducimus saepe, assumenda molestias minus laboriosam asperiores quam? Praesentium quasi cupiditate dignissimos maiores ab culpa neque, at commodi reprehenderit tempora officiis consequuntur eum, itaque dicta. Magni laudantium nihil totam! Illo cupiditate voluptas autem, esse debitis facilis nam et voluptatum non similique maxime enim dolor molestias illum totam reiciendis exercitationem tempora eius ad necessitatibus. Qui voluptatibus officiis voluptatum hic odio ab vitae sed, voluptates blanditiis illo assumenda nulla minima odit eaque eligendi quam error cumque fugiat? Repellat, mollitia! Eum minima voluptatum eligendi velit officiis non? Consectetur, beatae repellat deserunt rem totam dicta! Ex minus, quisquam numquam magni eum, quaerat ad suscipit, voluptate enim voluptatum recusandae. Animi, totam quos fugit a repellendus corrupti at rerum molestiae commodi quasi error neque tempora ad nulla dicta aliquid dolorem. Voluptatem sint deleniti veniam quod blanditiis velit nisi, repudiandae molestias ea mollitia ratione incidunt accusamus provident quae hic dolore iusto et minima magni esse eum autem laborum recusandae quis? Ea explicabo earum excepturi error voluptate esse, at inventore atque vero magni. Placeat voluptatem et beatae quidem fuga, asperiores exercitationem pariatur sunt odit itaque neque voluptates eos aliquam accusantium facere quia laudantium ipsam dolores totam iure quibusdam. Excepturi, maxime saepe, similique officiis, est fugit consequuntur sit aliquid fugiat fuga esse. Veniam eveniet similique quia, dolor aliquam ab perspiciatis blanditiis architecto libero sunt officia hic odit atque velit impedit et earum soluta. Aspernatur, laudantium! Repudiandae, sed accusantium sunt doloremque aliquid esse corrupti illum perferendis at obcaecati provident! Vel, quaerat debitis doloribus, natus magnam modi ipsum quia eligendi sint voluptatibus architecto? Sequi atque totam accusantium quisquam dolor incidunt nobis, voluptatum harum odio accusamus beatae eligendi, facere ratione deleniti a dolore.
      </CustomTabPanel>
    </Box>
  );
}
