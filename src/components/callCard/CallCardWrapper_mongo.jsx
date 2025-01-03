
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../AxiosInstance";

import { CallCard_skeliton } from "./CallCard_skeliton";
import CallCard_mongo from "./CallCard_mongo";
import { Box } from "@mui/material";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion } from "framer-motion"


export const CallCardWrapper_mongo = () => {

    const [getAllUserData, setGetAllUserData] = useState(null);
    const [getAllUserData_loading, setGetAllUserData_loading] = useState(true);




    useEffect(()=>{
      setGetAllUserData_loading(true);
      axiosInstance.get('/users')
      .then(res=>{
        setGetAllUserData(res.data);
      })
      setGetAllUserData_loading(false);
    },[])


    const { loginUserData } = useContext(AuthContext);
    const filteredUsersWithoutMe = getAllUserData?.filter(user => user?._id !== loginUserData?._id);
  
  


    
  return (
    <Box 
    // sx={{display:"flex", justifyContent:"center", w:1, flexWrap:"wrap", p:3}}
    >


<motion.div 
style={{display:"flex", justifyContent:"center", w:1, flexWrap:"wrap", p:3}} 
transition={{ type: "spring" }}
>

      


      {getAllUserData_loading ? (
        <CallCard_skeliton/>
      ) : (
        getAllUserData && filteredUsersWithoutMe.map(user => <CallCard_mongo key={user._id} item={user}/> )
      )}

</motion.div>

    </Box>
  );
}




// category:"Programmer"
// completeProfile:true
// country:{ code: 'BD', label: 'Bangladesh' }
// email:"alkaisan8265@gmail.com"
// fullName:"Kaisan"
// profession:"Software Engineer"
// profilePic:"https://lh3.googleusercontent.com/a/ACg8ocJHITRJqPmJk-M1JhFGqfyz0qL_gzIlKxeSd0stIaYziV73Fieq"
// skills:['Python', 'MERN ', 'Problem solving ', 'English ', 'Javascript ']
// updatedAt:"2024-12-22T12:51:13.654Z"
// username:"AOubc9zKjAXUGmOAtOF8fmDRy9B2"
// _id:"67680ae8a0a7057ad6ece650"
// const UserCard = ({ user }) => {
//   return (
//     <div className="user-card">
//       <img src={user.profilePic} alt={`${user.fullName}'s profile`} />
//       <h2>{user.fullName}</h2>
//       <p>{user.profession}</p>
//       <p>{user.email}</p>
//       <p>{user.country.label}</p>
//       <p>Skills: {user.skills.join(', ')}</p>
//     </div>
//   );
// };

// return (
//   <div>
//     {getAllUserData_loading ? (
//       <p>Loading...</p>
//     ) : (
//       getAllUserData && getAllUserData.map(user => <UserCard key={user._id} user={user} />)
//     )}
//   </div>
// );