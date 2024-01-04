import { useState } from 'react'
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Badge, Box, Card,  CardMedia } from '@mui/material';

// import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import DeleteIcon from '@mui/icons-material/Delete';
import styled from "@emotion/styled";
import PropTypes from 'prop-types';


// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PeopleCard from '../../../components/conent/rightMenu/PeopleCard';
import ChipsCustom from '../../../components/callCard/ChipsCustom';






const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    outline: `3px solid ${theme.palette.background.paper}`,
    right:4,
    bottom:5,
    // top:15,
    // right:7,
    // height:10,
    // width:10,
    borderRadius:9999
  },
}));



export default function PostCard(props) {


  const like = props.likes;
  const disLike = props.disLikes; 
  const totalLikes = like + disLike;
  const getPercentage = like / totalLikes * 100;


 console.log(getPercentage);



  
  return (
    <>
      <Card variant="none" sx={{ maxWidth: 500, m:1, p:2 }}>

    
    <Box display={"flex"} justifyContent={"space-between"}>
      <PeopleCard/>
      <IconButton aria-label="settings">
          <MoreVertIcon />
      </IconButton>
    </Box>

    <Box m={1} mb={0}>
      <ChipsCustom label="Javascript"/>
    </Box>












      {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
      /> */}



      <CardContent >
        <Typography variant="p" color="text.default">
            {`Hello everyone! it's been a long I haven't post anything`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>


    </>
  )
}

PostCard.propTypes = {
  name: PropTypes.string.isRequired,
  likes: PropTypes.string,
  disLikes: PropTypes.string,
  profilePicture: PropTypes.string,
  profession: PropTypes.string,
  postTime: PropTypes.string,
  topic: PropTypes.string,
  postContent: PropTypes.string,
  topicLogoUrl: PropTypes.string,
};


















