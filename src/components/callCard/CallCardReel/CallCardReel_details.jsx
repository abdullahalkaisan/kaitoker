
import ChipsCustom from '../ChipsCustom';
import { Box, Tooltip, Typography } from '@mui/material';
import SubDetails from '../SubDetails';
// import { usersDataLocal } from '../../../usersDataLocal';
import RoomIcon from '@mui/icons-material/Room';
import TranslateIcon from '@mui/icons-material/Translate';
// import TagIcon from '@mui/icons-material/Tag';


export default function CallCardReel_details(props) {




    const {
        followers,
        rating,
        totalCall,
        flag, 
        languages, 
        country, 
        city,
        skills,
        id
      } = props.usersDataLocal[props.currentUser];
      
    


  

      
      // setDisplayedSkills(skills.map((skill) => <ChipsCustom key={id} size={"large"} label={skill} />))
      // setDisplayedSkills(displayedSkills.map((skill) => <ChipsCustom key={id} size={"large"} label={skill} />))


  return (
    <>

<Box padding={0} display={"flex"} alignItems={"center"} flexDirection={"column"}>

<Box
  width={1}
  pl={8}
  display={"flex"}
  flexDirection={"column"}
  alignContent={"flex-start"}
  justifyContent={"flex-start"}
>
  <SubDetails
    user_followers={new Intl.NumberFormat("en-US", {
      useGrouping: true,
      notation: 'compact',
    }).format(followers)}
    user_rating={rating}
    // user_language={languages.join(", ")}
    justifyContent={"flex-start"}
    user_total_call={totalCall}
    // flag={flag}
  />

  {/* <Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    mt={0}
    p={0}
    gutterBottom
  >
  <TagIcon sx={{ fontSize: "medium", mr:0.5 }}/>
  {id}
  </Typography> */}

  <Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    mt={1}
    p={0}
    gutterBottom
  >
    <RoomIcon sx={{ fontSize: "medium", mr:0.5 }} />

    {`${city ? city + "," : ""} ${country}`}
    <Tooltip title={country} placement="top">
      <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
        <img
          style={{
            borderRadius: 3,
            border: "1px solid #77777750",
            boxShadow: "10px 10px 10px solid black",
          }}
          src={`https://flagcdn.com/w20/${flag}.png`}
        />
      </Box>
    </Tooltip>
  </Typography>

  <Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    mt={0}
    p={0}
    gutterBottom
  >
    <TranslateIcon sx={{ fontSize: "medium", mr:0.5 }} />

    {languages.join(", ")}
  </Typography>
</Box>

<Box width={1} display={"flex"} justifyContent={"flex-start"}>

  <Box
    display={'flex'}
    bgcolor={"background.default"}
    color={"text.primary"}
    direction="row"
    justifyContent={"flex-start"}
    flexWrap={"wrap"}
    ml={2}
    mt={2}
    px={2}
    overflow={"auto"}
    //   sx={{
    //     maxHeight: { md: "120px", xs: "120px" },
    //     minHeight: { md: "120px", xs: "auto" },
    //   }}
  >
    {/* <CallCardDynamic user_skills={user_skills}/> */}


    { 
      skills.map((skill) =>   { return <ChipsCustom key={id} size={"large"} label={skill.name} />
      })
    }

  </Box>

</Box>

</Box>



    </>
  )
}
