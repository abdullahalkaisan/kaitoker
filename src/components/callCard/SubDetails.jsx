import { Badge, Box } from '@mui/material'
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
import PropTypes from 'prop-types';




SubDetails.propTypes = {
  user_followers: PropTypes.number.isRequired,
  user_rating: PropTypes.number.isRequired,
  user_language: PropTypes.string.isRequired,
  user_total_call: PropTypes.number.isRequired,
};

export default function SubDetails({user_followers, user_rating , user_language, user_total_call }) {
  

  // const [isBadge, setIsBadge] = useState(false);

  const isBadge = 0;

  // 0-500 = no badge
  // 500 = lavel 1 warning  
  // 5,000 = lavel 2 error
  // 50,000 = lavel 3 secondary


  
  return (
    <Box
      display={"flex"}
      bgcolor={"background.default"}
      color={"text.primary"}
      fontSize={"medium"}
      mb={0.5}
      fontWeight={"boldd"}
      sx={{ color: "#777" }}
      flexDirection={"row"}
      justifyContent={"center"}
      pl={0}
      pt={2}
      // pb={1}
      alignItems={"center"}
    >
      {isBadge ? 

        <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
          <Badge
            color="warning"
            badgeContent={user_followers}
            max={999999}
          ></Badge>
        </Box>

       : 

        <Box sx={{ display: "flex", alignItems: "center", pr: 1, fontSize: "medium" }}>
          <RssFeedRoundedIcon sx={{ fontSize: "medium" }} />
          {user_followers}
        </Box>

      }

      <Box sx={{ display: "flex", alignItems: "center", pr: 1, fontSize: "medium" }}>
        <StarIcon sx={{ fontSize: "medium", color: "#25c600" }} />
        <Box sx={{ fontWeight: "bold", pr: 0.5, color: "#25C600" }}>
          {`${user_rating}%`}
        </Box>
        {`(${user_total_call})`}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", pr: 1, fontSize: "medium" }}>
        <TranslateIcon sx={{ fontSize: "medium" }} />
        {user_language}
      </Box>
    </Box>
  );
}
