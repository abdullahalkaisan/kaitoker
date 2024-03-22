
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Box, Card, CardMedia, Checkbox, FormControlLabel, } from '@mui/material';

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
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MdOutlineInsertComment, MdOutlineShare } from 'react-icons/md';



export default function PostCard(props) {


  const like = props.likes;
  const disLike = props.disLikes;
  const totalLikes = like + disLike;
  const getPercentage = like / totalLikes * 100;


  console.log(getPercentage);




  return (
    <>
      <Card variant="" sx={{ width: 500, m: 1, p: 2, borderRadius:3, border:"1px solid #00000020" }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignContent={"center"}>
            <PeopleCard
              avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
              title="Abdullah Al Kaisan"
              subTitle="Web developer"
              accountType="verified"
              // flag={"bd"}
              time={"1 month"}
              avatar={1}
              badge={1}
              isOnline="online"

            />
          </Box>

          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </Box>



        <Box display={""} m={1} mb={0}>
          <ChipsCustom label="Javascript" />
        </Box>

        <CardMedia
          component="img"
          // height="194"
          height="auto"
          width={1}
          sx={{
            display: "none",
            objectFit: "cover",
            borderRadius: 2,
            marginTop: 1,
          }}
          image="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/68982374_889372348110010_3855543771697512448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=-gDFsoGZBd0AX9-W01o&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBqVqAwpZHIccqW3ekffHD8xDcMfqlnSVkGkJbQWKE0XQ&oe=65DE4300"
          alt="Paella dish"
        />



        <CardContent>
          <p style={{ fontSize: "large" }} color="text.default">
            {`
              Anyone's want to learn array and object concept in javascript please call me 
            `}
          </p>
        </CardContent>


        <Box sx={{backgroundColor:"#f1f1f190", p:1, mx:3, mb:3, borderRadius:4}}>
          <PeopleCard
            title={"Luca"}
            time={"6 month"}
            subTitle={"Python developer"}
            avatar
            avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocK386pzE7Z-bSFqbGXHYVxxKt5pYh_OAnMnkKWDOPhNabI"}
            avatarSize={24}
          />

          <CardContent>
            <p style={{ fontSize: "medium" }} color="text.default">
              {`
              Anyone's want to learn array and object concept in javascript please call me 
            `}
            </p>
          </CardContent>

        </Box>






        <Box
          sx={{
            width: "50px",
            height: "6px",
            backgroundColor: "#00000015",
            overflow: "hidden",
            borderRadius: 999,
            ml: 2
          }}
        >
          <Box sx={{ height: 1, width: "50%", backgroundColor: "tomato", borderRadius: 999 }}></Box>
        </Box>


        <CardActions>
          {/* <IconButton color='' aria-label="add to favorites"> */}
          {/* <Checkbox label="214" icon={<FavoriteBorderOutlinedIcon />} checkedIcon={<FavoriteIcon />} /> */}
          <FormControlLabel
            control={
              <Checkbox
                color="error"
                icon={<FavoriteBorderOutlinedIcon />}
                checkedIcon={<FavoriteIcon />}
              />
            }
            label={"120.5K"}
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<ThumbDownAltOutlinedIcon />}
                checkedIcon={<ThumbDownAltIcon />}
              />
            }
            label={"21.2K"}
          />
          {/* </IconButton> */}

          {/* <IconButton aria-label="share">
            <Checkbox icon={<ThumbDownAltOutlinedIcon />} checkedIcon={<ThumbDownAltIcon />} />
          </IconButton>

          <IconButton aria-label="share">
            <ForumOutlinedIcon />
          </IconButton> */}

          <FormControlLabel
            control={
              <IconButton>
                <MdOutlineInsertComment />
              </IconButton>
            }
            label={"4.1K"}
          />

          <FormControlLabel
            control={
              <IconButton>
                <MdOutlineShare />
              </IconButton>
            }
            label={"66.7K"}
          />





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


















