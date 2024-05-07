import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
// import Marquee from "react-fast-marquee";
// import { usersDataLocal } from '../../usersDataLocal';
// import CallCard from '../../components/callCard/CallCard';
// import CreateAccount_page from '../CreateAccount_page';



export default function LoginPage() {

  const {signIn_google, user, loading} = useContext(AuthContext);

  // console.log(user.displayName);




  // photoURL 
  // uid 
  // email 
  // displayName 

  // const {displayName, photoURL} = user;



  // console.log(user.photoURL);



  const loginHandle = ()=>{
    signIn_google()
      .then((result)=> console.log(result))
      .catch((error)=> console.log(error))
  }




  return (
    <Box sx={{height:"100vh", width:"100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        

        {/* <Marquee>
        {usersDataLocal.map((item) => <CallCard key={item.id} item={item} />)}
        </Marquee> */}

        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"50%", height:"50%"}}>

        {loading ? <h1>loading....</h1>
        :
          <Box>
              <img style={{height:80, width:"auto"}} src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1" />
              {/* <img style={{height:80, width:"auto", borderRadius:999, margin:"0 20px"}} src={photoURL} /> */}
          </Box>
        }


          {/* <Typography variant="h5" fontFamily={"arial"} color={"#333"}>
              Welcome to Kaitker {displayName}
          </Typography> */}






          <Box sx={{width:"50%", display:"flex", alignItems:"center", justifyContent:'center',  my:4}}>
              <Button onClick={loginHandle} sx={{ display:"flex", alignItems:"center", justifyContent:'center', borderRadius:3, bgcolor:"#f1f1f1",}}  >
              <FcGoogle fontSize={30} style={{margin:"0 10px 0 0"}} />
              <Box sx={{margin:"0 10px 0 0"}}>
              Sign in With google
              </Box>
              {/* with Google */}
              </Button>
          </Box>

        </Box>
      


    </Box>
  )
}
