import { Box, Chip, ListItemIcon, Stack } from "@mui/material";
import { 
    UilCalender

} from '@iconscout/react-unicons'

// import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';

export default function Schedules() {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };



  return (
    <Box p={2}>

            {/* <Stack m={5} direction="row" spacing={1}>
                <Chip disabled icon={<LockIcon fontSize="16px" />} label="6:00 AM - 8:00 AM" onClick={handleClick} />
                <Chip color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
            </Stack> */}




      <Accordion variant="outlined" defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <ListItemIcon sx={{display:"flex"}}>
                <UilCalender />
                <Box mx={1}>
                    Today
                </Box> 
            </ListItemIcon>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* spacing={1}  */}
          <Stack flexWrap={"wrap"} direction="row" >
                <Chip sx={{m:0.5}} disabled icon={<LockIcon fontSize="16px" />} label="6:00 AM - 8:00 AM" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
                <Chip sx={{m:0.5}} color="primary" label="6:00 AM - 8:00 AM" variant="outlined" onClick={handleClick} />
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>






    </Box>
  )
}



















