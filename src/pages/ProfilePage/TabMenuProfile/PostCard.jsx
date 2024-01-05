
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import {  Box, Card,  } from '@mui/material';

// import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';


// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


import PeopleCard from '../../../components/conent/rightMenu/PeopleCard';
import ChipsCustom from '../../../components/callCard/ChipsCustom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';





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

    <Box display={"none"} m={1} mb={0}>
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
            {`
              Hello everyone! it's been a long I haven't post anything
              Hello everyone! it's been a long I haven't post anything
              Hello everyone! it's been a long I haven't post anything
            `}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownAltOutlinedIcon />
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


















