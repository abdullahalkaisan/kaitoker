
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import {  Box, Card, CardMedia,  } from '@mui/material';

// import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';


// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';



import PeopleCard from '../../../components/conent/rightMenu/PeopleCard';
import ChipsCustom from '../../../components/callCard/ChipsCustom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';





export default function PostCard(props) {


  const like = props.likes;
  const disLike = props.disLikes; 
  const totalLikes = like + disLike;
  const getPercentage = like / totalLikes * 100;


 console.log(getPercentage);



  
  return (
    <>
      <Card variant="none" sx={{ maxWidth: 500, m: 1, p: 2 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <PeopleCard
            title="Abdullah Al Kaisan"
            subTitle="Web developer"
            accountType="verified"
            avatar={1}
            badge={1}
          />
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Box display={"none"} m={1} mb={0}>
          <ChipsCustom label="Javascript" />
        </Box>

        <CardMedia
          component="img"
          // height="194"
          height="auto"
          width={1}
          sx={{ objectFit: "cover", borderRadius: 2, marginTop: 1 }}
          image="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/68982374_889372348110010_3855543771697512448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=-gDFsoGZBd0AX9-W01o&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBqVqAwpZHIccqW3ekffHD8xDcMfqlnSVkGkJbQWKE0XQ&oe=65DE4300"
          alt="Paella dish"
        />

        <CardContent>
          <p  color="text.default">
            {`
              It was a long time ago 😊❤ 🤣🤣😑😎🙈💖💘💚💛🥰😍📉🥵🍗🚲🙄
            `}
          </p>
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
  );
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


















