import { Avatar, CardActionArea } from "@mui/material";
export default function Avatar_small() {
  return (
    <CardActionArea
      sx={{ height: "auto", width: "auto", borderRadius: "999px" }}
    >
      <Avatar
        sx={{ width: 32, height: 32 }}
        alt="Remy Sharp"
        src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
      />
    </CardActionArea>
  );
}
