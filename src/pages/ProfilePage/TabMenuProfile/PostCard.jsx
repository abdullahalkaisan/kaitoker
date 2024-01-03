import { useState } from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Badge, CardActionArea, CardMedia, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Chip from '@mui/material/Chip';

import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import DeleteIcon from '@mui/icons-material/Delete';
import styled from "@emotion/styled";
import PropTypes from 'prop-types';


// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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

 const [likeButton, setLikeButton] = useState(props.likes);




  const like = props.likes;
  const disLike = props.disLikes; 
  const totalLikes = like + disLike;
  const getPercentage = like / totalLikes * 100;


 console.log(getPercentage);


  const chipClick = () => {
    console.info('You clicked the Chip.');
  };



  



  return (
    <>
      afsdfasdf

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