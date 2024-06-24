import { Avatar, AvatarGroup } from '@mui/material'

// sx={{marginX:2}} 
export default function CourseCard_avatarGroup() {

  return (
    <AvatarGroup  max={4}>
    <Avatar sx={{height:24, width:24}} alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/ACg8ocL1a-xNIqHHXT9L8DLw8U0OHXt4Gwc7erfvuod3d1V-gjw" />
    <Avatar sx={{height:24, width:24}} alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1273225109528961024/FahFysNy_400x400.jpg" />
    <Avatar sx={{height:24, width:24}} alt="Cindy Baker" src="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890" />
    </AvatarGroup>
  )
}
