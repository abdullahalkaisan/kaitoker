import { Box, IconButton } from '@mui/material'
import { IoMdSearch } from 'react-icons/io'
import { MdMoreVert, MdOutlineArrowBack, MdOutlineChat, MdOutlineHistory, MdOutlineTune } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ReelPage_topbar() {
  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", p:"10px 10px 0 10px"}}>
            
    <Box display={"flex"} alignItems={"center"}>
      <Link to={"/"}>
        <IconButton style={{marginRight:23}}>
            <MdOutlineArrowBack />
        </IconButton>
      </Link>
    </Box>

        <Box display={"flex"} alignItems={"center"}>
          <IconButton>
              <IoMdSearch/>
          </IconButton>
          <IconButton>
              <MdOutlineChat />
          </IconButton>
          <IconButton>
              <MdOutlineHistory />
          </IconButton>
          <IconButton>
              <MdOutlineTune/>
          </IconButton>
          <IconButton>
              <MdMoreVert/>
          </IconButton>
        </Box>
    </Box>
  )
}
