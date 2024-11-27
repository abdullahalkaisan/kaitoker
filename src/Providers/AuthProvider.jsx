import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import { 
  signInWithPopup, 
  // signInWithRedirect, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signOut,
} from "firebase/auth";


import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, setDoc, getDoc, arrayUnion, increment, onSnapshot } from "firebase/firestore";


import { db } from "../firebase/firebase.config"; // Import Firestore instance
import { Snackbar } from "@mui/material";



export const AuthContext = createContext(null);



export default function AuthProvider({children}) {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




  // Snakbar 
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState();

    // const handleClickSnackbar = () => {
      // setOpenSnackbar(true);
      // setSnackBarMessage("Post Deleted!");

    // };
  
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackbar(false);
    };
  




    const [isPosting, setIsPosting] = useState(false);


    const [userPosts, setUserPosts] = useState([]);

    const [user_database, set_user_database] = useState([]);
    const [getPostId, setGetPostId] = useState();





    // async function recordView(postId, userId, listenUniqueViews) {
    //   const postRef = doc(db, "posts", postId);
    //   setGetPostId(postId)

    //   try {

    //     await updateDoc(postRef, {
    //       totalViews: increment(1),
    //       uniqueViews: arrayUnion(userId)  ,
    //     });

    //   } catch (error) {
    //     console.error("Error recording view:", error);
    //   }
    // }







    // LIKE 



    const [likePostId, setLikePostId] = useState();
    const [likePostUserId, setLikePostUserId] = useState();


    const [likeCount, setLikeCount] = useState(0);
    const [isLikedChecked, setIsLikedChecked] = useState(false);


    {console.log("check like post id", likePostId)}





    // useEffect(() => {
    //   // Fetch the initial like status and like count when the component mounts
    //   const fetchLikes = async () => {

    //     const postRef = doc(db, 'posts', "7cvRJmL9PflWVRBWw3gi");
    //     const postSnap = await getDoc(postRef);
    
    //     if (postSnap.exists()) {
    //       const postData = postSnap.data();
    //       const likedBy = postData.likedBy || []; // Use an empty array if likedBy is undefined
    //       const updatedLikes = isLikedChecked ? postData.likes - 1 : postData.likes + 1;
          
    //       const updatedLikedBy = isLikedChecked
    //         ? likedBy.filter(id => id !== "7cvRJmL9PflWVRBWw3gi") // Remove user ID
    //         : [...likedBy, "7cvRJmL9PflWVRBWw3gi"]; // Add user ID
    
    //       await updateDoc(postRef, {
    //         likes: updatedLikes,
    //         likedBy: updatedLikedBy
    //       });
    
    //       // Update local state
    //       setLikeCount(updatedLikes);
    //       setIsLikedChecked(!isLikedChecked);
    //     }


    //   };
  
    //   fetchLikes();
    // }, [likePostId, likePostUserId]);
  




    // Pass the postId to handleLike when clicking the button
  const handleLike = async (likePostUserId) => {
    console.log("handlePostID", likePostUserId)
    const postRef = doc(db, 'posts', likePostUserId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      const updatedLikes = isLikedChecked ? postData.likes - 1 : postData.likes + 1;
      const updatedLikedBy = isLikedChecked
        ? postData.likedBy.filter(id => id !== likePostUserId) // Remove user ID
        : [...(postData.likedBy || []), likePostUserId]; // Add user ID

      await updateDoc(postRef, {
        likes: updatedLikes,
        likedBy: updatedLikedBy
      });

      // Update local state
      setLikeCount(updatedLikes);
      setIsLikedChecked(!isLikedChecked);
    }
  };



















  const [uniqueViewCount, setUniqueViewCount] = useState(0);
  


    async function recordView(postId, userId, setUniqueViewCount) {


      const postRef = doc(db, "posts", postId);
    
      try {
        // Fetch the post document to get its current data
        const postSnap = await getDoc(postRef);
    
        if (postSnap.exists()) {
          // Update the totalViews and uniqueViews in Firestore
          await updateDoc(postRef, {
            totalViews: increment(1),  // Increment total views
            uniqueViews: arrayUnion(userId),  // Add userId to uniqueViews if not already present
          });
    
          // After updating, fetch the new unique views count
          const updatedPostSnap = await getDoc(postRef);
    
          if (updatedPostSnap.exists()) {
            const uniqueViews = updatedPostSnap.data().uniqueViews || [];
            setUniqueViewCount(uniqueViews.length); // Set the count of unique views
          } else {
            console.log("No such post!");
          }
        } else {
          console.log("No such post!");
        }
      } catch (error) {
        console.error("Error recording view:", error);
      }
    }



    const handleDeletePost = async (postId) => {

      let postList = [];
      try {
        // Target the specific document in your collection by its ID
        const postRef = doc(db, "posts", postId); // "posts" is the collection name
        await deleteDoc(postRef); // Delete the document


        const postDatabase = await getDocs(collection(db, "posts"));
        postDatabase.forEach((doc)=>{
        postList.push({id: doc.id, ...doc.data()})
          setUserPosts(postList);          
        })


        console.log("Post deleted successfully!");

        setOpenSnackbar(true);
        setSnackBarMessage("Post deleted successfully!");

      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    };




    // useEffect(() => {
    //   const postRef = doc(db, "posts", getPostId);
  
    //   // Real-time listener to get updates whenever the post document changes
    //   const unsubscribe = onSnapshot(postRef, (postSnap) => {
    //     if (postSnap.exists()) {
    //       const uniqueViews = postSnap.data().uniqueViews || [];
    //       setUniqueViewCount(uniqueViews.length); // Update the count of unique views in real-time
    //     } else {
    //       console.log("No such post!");
    //     }
    //   });
  
    //   // Cleanup the listener when the component unmounts
    //   return () => unsubscribe();
    // }, [getPostId]);
  








    // const [uniqueViewCount, setUniqueViewCount] = useState(0);


    

    //   // Fetch unique views count
    //   useEffect(() => {
    //     const fetchUniqueViews = async () => {
    //       const postRef = doc(db, "posts", postId); // Reference to the specific post
    //       const postSnap = await getDoc(postRef);
    
    //       if (postSnap.exists()) {
    //         const uniqueViews = postSnap.data().uniqueViews || [];
    //         setUniqueViewCount(uniqueViews.length); // Set the count of unique views
    //       } else {
    //         console.log("No such post!");
    //       }
    //     };
    
    //     fetchUniqueViews();
    //   }, [postId]); // Re-run when postId changes
  
      



// Function to fetch unique views count for a specific post
// const fetchUniqueViews = async (postId, setUniqueViewCount) => {
//   const postRef = doc(db, "posts", postId); // Reference to the specific post
//   try {
//     const postSnap = await getDoc(postRef);

//     if (postSnap.exists()) {
//       const uniqueViews = postSnap.data().uniqueViews || [];
//       setUniqueViewCount(uniqueViews.length); // Set the count of unique views
//     } else {
//       console.log("No such post!");
//     }
//   } catch (error) {
//     console.error("Error fetching post data:", error);
//   }
// };







// Function to get unique views with user details
// async function getUniqueViewersWithDetails(postId) {
//   const postRef = doc(db, "posts", postId);
//   const postSnap = await getDoc(postRef);

//   if (postSnap.exists()) {
//     const uniqueViewerIds = postSnap.data().uniqueViews || [];

//     // Fetch user details for each viewer
//     const viewerPromises = uniqueViewerIds.map(async (userId) => {
//       const userRef = doc(db, "users", userId);
//       const userSnap = await getDoc(userRef);
//       return userSnap.exists() ? { id: userId, ...userSnap.data() } : null;
//     });

//     // Wait for all user details to be fetched
//     const viewers = await Promise.all(viewerPromises);
//     return viewers.filter(viewer => viewer !== null); // Filter out any null values if user data is missing
//   } else {
//     console.log("No such post!");
//     return [];
//   }
// }





    async function checkAndCreateUser(objData) {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
    
        // Reference to the user document in Firestore
        const userDocRef = doc(db, "users", userId);
    
        try {
          // Check if user already exists in the database
          const userDoc = await getDoc(userDocRef);
    
          if (userDoc.exists()) {
            console.log("User already exists in the database.");
          } else {
            // If user does not exist, create a new user document
            await setDoc(userDocRef, objData
          );
            console.log("New user created in the database.");
          }
        } catch (error) {
          console.error("Error checking or creating user:", error);
        }
      } else {
        console.log("No authenticated user found.");
      }
    }




    // const add_user = async (objData) => {
    //   try {
    //     await addDoc(collection(db, "users"), objData);
    //   } catch (error) {
    //     console.error("Error adding user:", error);
    //   }
    // };
  
  
  
  





    // const [avatar, setAvatar] = useState(null);

    console.log(userPosts)


  // Fetch users from Firestore




  const fetchData = async () => {
    let postList = [];
    let userList = [];
    try{
      const postDatabase = await getDocs(collection(db, "posts"));
      const userDatabase = await getDocs(collection(db, "users"));
      postDatabase.forEach((doc)=>{
        postList.push({id: doc.id, ...doc.data()})
        setUserPosts(postList);        
      })
      userDatabase.forEach((doc)=>{
        userList.push({id: doc.id, ...doc.data()})
        set_user_database(userList);          
      })
    }catch(err){
      console.log(err)
    }
    
  };



  // useEffect(()=>{




  // }, [])









  // get user data from post 

  // async function getUserDataFromPost(postId) {
  //   try {
  //     // Reference to the post document
  //     const postDocRef = doc(db, "posts", postId);
      
  //     // Fetch the post document
  //     const postDoc = await getDoc(postDocRef);
      
  //     if (postDoc.exists()) {
  //       const postData = postDoc.data();
  //       const userAuthId = postData.userAuthId; // Assuming your post has `userAuthId`

  //       console.log(userAuthId);
        
  
  //       // Reference to the user document in userDatabase
  //       const userDocRef = doc(db, "user", userAuthId);
  
  //       // Fetch the user document
  //       const userDoc = await getDoc(userDocRef);
        
  //       if (userDoc.exists()) {
  //         const userData = userDoc.data();
  //         console.log("User data:", userData);
  //         return userData; // Return or use userData as needed
  //       } else {
  //         console.log("User not found in the userDatabase.");
  //       }
  //     } else {
  //       console.log("Post not found.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data from post:", error);
  //   }
  // }










  async function getUserDataById() {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
  
      try {
        // Reference to the user document in Firestore
        const userDocRef = doc(db, "users", userId);
        
        // Fetch the user document
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("User data:", userData);
          return userData; // Return or use userData as needed
        } else {
          console.log("User not found in the userDatabase.");
        }
      } catch (error) {
        console.error("Error fetching user data by ID:", error);
      }
    } else {
      console.log("No authenticated user found.");
    }
  }
















   // Create (Add User)
   const post_add_news = async (objData) => {
    setIsPosting(true);
    try {
      await addDoc(collection(db, "posts"), objData);
      setIsPosting(false);
    } catch (error) {
      console.error("Error adding user:", error);
      setIsPosting(false);
    }
  };






    const GoogleProvider = new GoogleAuthProvider();



    const signIn_google = ()=>{
      setLoading(true)
      return signInWithPopup(auth, GoogleProvider)
    }



    const signOut_google = ()=>{
      setLoading(true)
      return signOut(auth)
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
      } )

      fetchData()




      return ()=>{
        unSubscribe()
      } 
    },[])





    const authInfo = {
        user,
        loading,
        // userAvater,
        signIn_google,
        signOut_google,
        post_add_news,
        checkAndCreateUser,
        userPosts, 
        setUserPosts,
        user_database,
        isPosting, setIsPosting,
        getUserDataById,
        recordView,
        // fetchUniqueViews,
        uniqueViewCount, 
        handleDeletePost, 
        openSnackbar, setOpenSnackbar, handleCloseSnackbar, snackBarMessage,

        setLikePostId, setLikePostUserId,
        likeCount, setLikeCount,
        isLikedChecked, setIsLikedChecked,
        handleLike

        // signIn_google_redirectResult
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
