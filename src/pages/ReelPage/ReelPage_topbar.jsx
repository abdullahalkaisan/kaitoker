import { Box, IconButton } from '@mui/material'
import { IoMdSearch } from 'react-icons/io'
import { MdMoreVert, MdOutlineArrowBack, MdOutlineChat, MdOutlineHistory, MdOutlineTune } from 'react-icons/md'
import { Link } from 'react-router-dom'



import { UilSearch, UilCommentLines, UilSlidersVAlt, UilHistory, UilEllipsisV,  UilArrowLeft



} from '@iconscout/react-unicons'


export default function ReelPage_topbar() {
  return (
    <Box sx={{display:"flex", alignItems:"center", position:"relative", justifyContent:"space-between", p:"10px 10px 10px 10px"}}>
            
<Box sx={{position:"absolute", top:0, left:0, height:"70px", width:"100%",  background:"linear-gradient( #000000 , transparent)"}}></Box>
    <Box display={"flex"} alignItems={"center"}>
      <Link to={"/"}>
        <IconButton style={{marginRight:23}}>
            <MdOutlineArrowBack color='#f1f1f1' />
        </IconButton>
      </Link>
    </Box>

        <Box display={"flex"} alignItems={"center"}>
          {/* <IconButton>
              <UilSearch color='#f1f1f1'/>
          </IconButton> */}

{/* 
          <IconButton>
              <UilCommentLines color='#f1f1f1'/>
          </IconButton> */}


          {/* <IconButton>
              <UilHistory color='#f1f1f1'/>
          </IconButton> */}

          {/* <IconButton>
              <UilSlidersVAlt color='#f1f1f1'/>
          </IconButton> */}

          <IconButton>
            <MdMoreVert color='#f1f1f1'/>
              {/* <UilEllipsisV color='#f1f1f1'/> */}
          </IconButton>
        </Box>
    </Box>
  )
}
