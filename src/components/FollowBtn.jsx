import { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../AxiosInstance';
import { CircleCheck, CirclePlus, Handshake, LoaderCircle } from 'lucide-react';
import { CircularProgress, IconButton, Skeleton} from '@mui/material';
import { ConfirmUnfollow } from './ConfirmUnfollow';
import { AuthContext } from '../Providers/AuthProvider';



const FollowButton = ({currentUserId, targetUserId }) => {





  const {user , loginUserData } = useContext(AuthContext);




  const [unfollowState, setUnfollowState] = useState(null);
  const openUnfollow = Boolean(unfollowState);
  const handleUnfollowClick = (event) => {
    setUnfollowState(event.currentTarget);
  };
  const handleUnfollowClose = () => {
    setUnfollowState(null);
  };



  const spinAnimate = {
    width: '40px',
    height: '40px',
    border: '4px solid #3b82f6', // Tailwind's blue-500
    borderTopColor: 'transparent', // Transparent top border for spinner effect
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
      to: {
        transform: 'rotate(360deg)',
      },
    },
  }






  const [relationship, setRelationship] = useState({
    isFollowing: false,
    isFriend: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);


  console.log(targetUserId)
  const [showConfirm, setShowConfirm] = useState(false);




  // Fetch relationship status (Call this on component mount)
  const fetchRelationship = async () => {
    try {
      setIsLoadingFetch(true);
      const response = await axiosInstance.get(`/following/${currentUserId}/${targetUserId}`);
      setRelationship(response.data); // Assume API returns { isFollowing: boolean, isFriend: boolean }
      setIsLoadingFetch(false);
    } catch (error) {
      console.error('Error fetching relationship status:', error);
    }
  };

  const handleFollow = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.post('/following/follow', { currentUserId, targetUserId });
      setRelationship((prev) => ({
        ...prev,
        isFollowing: !prev.isFollowing,
        isFriend: prev.isFollowing ? false : prev.isFriend, // Adjust for mutual unfollow
      }));
      setIsLoading(false);

    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const handleUnfollow = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.post('/following/unfollow', { currentUserId, targetUserId });
      setRelationship({
        isFollowing: false,
        isFriend: false,
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  // Show confirmation before unfollowing
  const confirmUnfollow = () => setShowConfirm(true);
  // const cancelUnfollow = () => setShowConfirm(false);

  const performUnfollow = () => {
    handleUnfollow();
    setShowConfirm(false);
  };



      // Component mounts
      useEffect(() => {
        fetchRelationship();
      }, [
        loginUserData, 
        relationship.isFollowing, 
        relationship.isFriend]);
    



  return (

    <>
    {isLoadingFetch ? <Skeleton variant="circular" width={24} height={24} /> : 
  
          <>
        {relationship.isFriend ? (
          <>
            <IconButton onClick={handleUnfollowClick} color="success">
              {isLoading ? <CircularProgress size={24}/>  : <Handshake />}
            </IconButton>

            <ConfirmUnfollow 
              unfollowMessage={"Unfriend"}
              handleUnfollowClose={handleUnfollowClose}
              openUnfollow={openUnfollow}
              unfollowState={unfollowState}
              performUnfollow={performUnfollow}
            />
          </>

        ) : relationship.isFollowing ? (
          <>
            <IconButton onClick={handleUnfollowClick} color="">
              {isLoading ? <CircularProgress size={24}/>  : <CircleCheck />}
            </IconButton>

            <ConfirmUnfollow 
              unfollowMessage={"Unfollow"}
              handleUnfollowClose={handleUnfollowClose}
              openUnfollow={openUnfollow}
              unfollowState={unfollowState}
              performUnfollow={performUnfollow}
            />
          </>

        ) : (
            <IconButton onClick={handleFollow} color="primary">
            {isLoading ? <CircularProgress size={24} />  : <CirclePlus />}
          </IconButton>
        )}
          </>
  }
  </>


  );
};

export default FollowButton;



{/* <CircleCheck/>   */}


{/* <button onClick={handleFollow} className="follow-icon">
➕ Follow
</button> */}

{/* <button onClick={confirmUnfollow} className="friend-icon">
👬 Unfriend
</button> */}

{/* <button onClick={confirmUnfollow} className="following-icon">
➖ Unfollow
</button> */}
