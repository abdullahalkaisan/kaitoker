
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Avatar, AvatarGroup, Box, Button, Card, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Menu, MenuItem, Paper, Snackbar, Tabs, Tooltip, } from '@mui/material';


// import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';


// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

// import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';



import PeopleCard from '../../../components/conent/rightMenu/PeopleCard';
import ChipsCustom from '../../../components/callCard/ChipsCustom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MdBookmark, MdBookmarkBorder, MdDelete, MdEdit, MdMoreHoriz, MdOutlineInsertComment, MdOutlineShare, MdOutlineThumbDown, MdPin, MdPushPin, MdReport, MdThumbDown, MdThumbDownOffAlt } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import PostContext from '../../../PostContext';
import { AuthContext } from '../../../Providers/AuthProvider';

import { FiEye, FiHeart, FiMessageCircle, FiShare, FiThumbsDown } from "react-icons/fi";
import { PiChatCircle, PiChatCircleBold, PiEye, PiHeart, PiHeartBold, PiHeartFill, PiShareFat, PiShareFatBold, PiShareFatLight, PiThumbsDown, PiThumbsDownBold, PiThumbsDownFill, PiThumbsDownLight, PiThumbsDownThin } from "react-icons/pi";




export default function PostCard({item}) {

  function formatNumber(num = 0) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K';
    }
    return num.toString(); // for numbers less than 1,000
  }


  const {  loading, setLoading, fetchUniqueViews, recordView, uniqueViewCount, handleDeletePost , user,   setLikePostId, setLikePostUserId,setRecordViewData

    // likeCount, 
    // setLikeCount,
    // isLikedChecked, 
    // setIsLikedChecked, 
    // handleLike

} = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(0);
  const [isLikedChecked, setIsLikedChecked] = useState(false);

  const [disLikeCount, setDisLikeCount] = useState(0);
  const [isDisLikedChecked, setIsDisLikedChecked] = useState(false);



  const handleLike = (e) => {
    setIsLikedChecked(!isLikedChecked);
    if(e.target.checked){
      setLikeCount(likeCount + 1);
      if(isDisLikedChecked){
        setIsDisLikedChecked(false);
        setDisLikeCount(disLikeCount - 1);
      }
    }else{
      setLikeCount(likeCount - 1);
    }
  };



  const handleDisLike = (e) => {
    setIsDisLikedChecked(!isDisLikedChecked);
    if(e.target.checked){
      setDisLikeCount(disLikeCount + 1);
      if(isLikedChecked){
        setIsLikedChecked(false);
        setLikeCount(likeCount - 1);
      }

    }else{
      setDisLikeCount(disLikeCount - 1);
    }
  };



 





  // console.log("isLikeCheck", isLikedChecked);


  // const handleDisLike = () => {
  //   if (isDisLikedChecked) {
  //     setIsLikedChecked(false)
  //     setDisLikeCount(likeCount + 1);
  //   }
  // };





  // const handleDisLike = (e) => {
  //   setIsDisLikedChecked(true);
  //   if (e.target.checked) {
  //     setIsLikedChecked(false);
  //     setDisLikeCount(disLikeCount + 1);
  //     setLikeCount(likeCount - 1);
  //   } else {
  //     setDisLikeCount(disLikeCount - 1);
  //     setIsDisLikedChecked(false)
  //   }
  //   setIsDisLiked(!isDisliked); 
  // };






  const [openDelete, setOpenDelete] = useState(false);

  const handleClickDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };







  const [getAuthUserId, setGetAuthUserId] = useState(null);







  useEffect(() => {
    if(!loading){
      if(user){
        const userId = user.uid;
        console.log(userId);
        setGetAuthUserId(userId)
      }

      // setGetAuthUserId(user.uid)
    }
  }, [user.uid, loading, user])



  
  if(getAuthUserId !== null){
    console.log(getAuthUserId)
  }


  







  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const [isUser, setIsUser] = useState()

  if(loading){
    setIsUser(user.userId)
  }

  useEffect(()=> {
    if(loading){
       console.log(user)
    }
    }
    ,[loading, user])
  // const [uniqueViewCount, setUniqueViewCount] = useState(0);


  
  useEffect(() => {
    recordView(item.id, item.userId, item.uniqueViews)
  }, [item.id, recordView, item.userId, item.uniqueViews]); // Re-run when postId changes


  console.log(uniqueViewCount)



  console.log(item);
  

  const [postActionTab, setPostActionTab] = useState(0);
  const handleChange_postAction = (event, newValue) => {
    setPostActionTab(newValue);
  };


  const [moreText, setMoreText] = useState(false)





  function formatDate(postTime) {
    const date = new Date(postTime);
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      weekday: 'long'
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
  
    return `${formattedTime}, ${formattedDate}`;
  }
  

  function timeAgo(postTime) {
    const now = Date.now();
    const diff = now - postTime;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "just now";
    if (minutes < 60) return minutes + " min" + (minutes > 1 ? "s" : "");
    if (hours < 24) return hours + " hour" + (hours > 1 ? "s" : "");
    if (days < 30) return days + " day" + (days > 1 ? "s" : "");
    if (months < 12) return months + " month" + (months > 1 ? "s" : "");
    return years + " year" + (years > 1 ? "s" : "");
}


const getFormatDate = formatDate(item.postTime);
const getPostTime =  timeAgo(item.postTime);
// const [userData, setUserData] = useState(null);
// // const [loading, setLoading] = useState(true);


// useEffect(() => {
//   async function fetchUserData() {
//     const data = await getUserDataById();
//     setUserData(data);
//     // setLoading(false);
//   }
//   fetchUserData();
// }, [getUserDataById]);


// console.log(userData);




// just now 
// min 
// hour
// day 
// month 
// year  



console.log(item);








  return (





      <Card 
      variant="none" 
      sx={{ width:
        // "auto", 
        {md:500, xs:320}, 
        m:{md:1, xs:1}, p: 0, borderRadius:3, 
      // border:"1px solid #00000020" 
      }}>







        <Box sx={{p:"10px 10px 5px 10px"}} display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignContent={"center"}>


              <PeopleCard
              avatarUrl={item.userProfile}
              title={item.userName}
              subTitle="Web developer"
              accountType="verified"
              // flag={"bd"}
              timeAgo={getPostTime}
              timeFormat={getFormatDate}
              avatar={1}
              badge={1}
              isOnline="online"
            />




    <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this post?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button color='error' onClick={()=> {handleDeletePost(item.id); handleCloseDelete()} }>
            Delete
          </Button>
        </DialogActions>
      </Dialog>






        </Box>
          <IconButton onClick={handleMenuClick} aria-label="settings">
            <MdMoreHoriz />
          </IconButton>

              <Menu
              id="demo-customized-menu"
              // MenuListProps={{
              //   'aria-labelledby': 'demo-customized-button',
              // }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              

              {console.log(item.userId)}
          

                {item.userId === getAuthUserId &&
                  <MenuItem onClick={handleMenuClose} >
                    <MdEdit color='royalblue' style={{ marginRight: 10 }} />
                    Edit
                  </MenuItem>
                }

                {/* {item.id !== user.userId &&
                  <MenuItem onClick={handleMenuClose} >
                    <MdPushPin style={{ marginRight: 10 }} />
                    Save
                  </MenuItem>
                } */}

                {item.userId !== getAuthUserId &&
                  <MenuItem onClick={handleMenuClose} >
                    <MdReport style={{ marginRight: 10 }} />
                    Report
                  </MenuItem>
                }


                {console.log(user.userId)}



                  {
                  getAuthUserId === item.userId &&
                  <MenuItem onClick={()=> {setOpenDelete(!openDelete); handleMenuClose()}} >
                    <MdDelete color='orangered' style={{marginRight:10}}/>
                    Delete
                  </MenuItem> 
                  }

                {/* {user.userId === item.id && */}

                {/* } */}



            </Menu>


        </Box>



        <Box display={"none"} m={1} mb={0}>
          <ChipsCustom label="Javascript" />
        </Box>








        <CardContent sx={{p:"0px 10px 0px 10px"}}>
          <p style={item.content.length <= 50 ?  { fontSize: "x-large" } : { fontSize: "large"} } color="text.default">
            
            {/* {item.content.length >= 50 ? item.content.slice(0,278)+"..." : item.content} */}
            {!moreText && item.content.length >= 50 ? item.content.slice(0,278)+"..." : item.content}

            
            {item.content.length >= 50 &&
              <Button onClick={()=> setMoreText(!moreText) }>{moreText ? "Less":"More"} </Button>
            }
          </p>
        </CardContent>


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
            cursor:'pointer'
          }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYrEkrhFzD3OI34RWW_v8ETsuW0G0poSIjg&s"
          alt="Post photo"
        />





        <Box sx={{display:"none", backgroundColor:`#f1f1f190`, border:"1px solid #77777740", cursor:"pointer", p:1, mx:3, mb:3, borderRadius:4}}>
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





        {/* <Box
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
        </Box> */}


{/* <Box sx={{width:1, display:"flex", paddingLeft:2}}>
  <AvatarGroup>
    <Avatar sx={{height:20, width: 20}}  src="https://pbs.twimg.com/profile_images/1771091617119649792/1WK8yB_C_400x400.jpg" />
    <Avatar sx={{height:20, width: 20}}  src="https://lh3.googleusercontent.com/a/ACg8ocJNAjeGBRG_M8eEYVTbBrWw_P3o3SKDcc6uoOiX-SWM8UE" />
    <Avatar sx={{height:20, width: 20}}  src="https://pbs.twimg.com/profile_images/1273225109528961024/FahFysNy_400x400.jpg" />
  </AvatarGroup>
</Box> */}





        <CardActions>
          {/* <IconButton color='' aria-label="add to favorites"> */}
          {/* <Checkbox label="214" icon={<FavoriteBorderOutlinedIcon />} checkedIcon={<FavoriteIcon />} /> */}
          
          <Tabs variant='scrollable' scrollButtons="false"  indicatorColor  value={postActionTab} onChange={handleChange_postAction} centered>





          <FormControlLabel
           sx={{pl:1.5}}
            control={
              <Checkbox
                checked={isLikedChecked}
                // onChange={handleLike}
                onChange={handleLike}
                color="error"
                icon={
                <PiHeart color='#333' size={"22px"}/>
                // <FiHeart size={"22px"}/>
              }
                checkedIcon={<PiHeartFill size={"22px"} />}
              />
            }
            // label={likePostToggle && setLikePost(likePost + 1)}
            label={likeCount <1 ? "" : likeCount }
          />
{/* item.like  */}



{/* DISLIKE  */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isDisLikedChecked}
                onChange={handleDisLike}
                color="default"
                icon={
                <PiThumbsDown size={"22px"} color='#333'  />
                // <FiThumbsDown size={"22px"}/>
              }
                // checkedIcon={<MdThumbDown size={"24px"} color='royalblue' />}
                checkedIcon={<PiThumbsDownFill  size={"22px"} color='royalblue' />}
              />
            }
            // label={item.dislike <1 ? "" : item.dislike}
            label={disLikeCount <1 ? "" : disLikeCount}
          />



          {/* </IconButton> */}

          {/* <IconButton aria-label="share">
            <Checkbox icon={<ThumbDownAltOutlinedIcon />} checkedIcon={<ThumbDownAltIcon />} />
          </IconButton>

          <IconButton aria-label="share">
            <ForumOutlinedIcon />
          </IconButton> */}




{/* VIEWS  */}
        <Tooltip placement='top' 
        title={`${item.totalViews} Views`}
        >
          <FormControlLabel
              control={
                <IconButton>
                  <PiEye color='#333'/>
                </IconButton>
              }
              label={formatNumber(item.totalViews)}
              // label={item.totalViews}
            />
        </Tooltip>
          

{/* COMMENTS  */}
          <FormControlLabel
            control={
              <IconButton>
                <PiChatCircle color='#333' size={"22px"}/>
              </IconButton>
            }
            label={item.comment <1 ? "" : item.comment}
            // label={0}
          />


{/* SHARE */}
          <FormControlLabel
            control={
              <IconButton>
                <PiShareFat style={{fontWeight:"bold"}} color='#333' size={"22px"}/>
              </IconButton>
            }
            label={"100.2K"}
          />


        </Tabs>


        </CardActions>
      </Card>
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


















