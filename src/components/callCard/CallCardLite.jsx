import { Card } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";

export default function CallCardLite() {
  return (
    <>
        <Card variant="outlined" sx={{p:1, m:1, width:"max-content"}}>
                <PeopleCard/>
        </Card>
    
    </>
  )
}
