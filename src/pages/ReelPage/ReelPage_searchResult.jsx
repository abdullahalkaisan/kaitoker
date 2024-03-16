import { Tabs } from "@mui/material";
import ChipsCustom from "../../components/callCard/ChipsCustom";
import { useState } from "react";

export default function ReelPage_searchResult() {

    const [chipValue, setChipValue] = useState(0);

    const chipHandleChange = (event, newValue) => {
        setChipValue(newValue);
    };
  


  return (
    <Tabs
    value={chipValue}
    onChange={chipHandleChange}
    variant="scrollable"
    // scrollButtons
    // allowScrollButtonsMobile
    indicatorColor
    aria-label="scrollable force tabs example"
    sx={{padding:" 15px"}}
  >

    <ChipsCustom whiteSpace={false} onDelete={true}   size={"large"} label={`Search reasult:  "Web develoepr"`}/>
    <ChipsCustom whiteSpace={false} onDelete={true}   size={"large"} label={`Country: Bangladesh`}/>
    <ChipsCustom whiteSpace={false} onDelete={true}  size={"large"} label={`Language: English`}/>
  </Tabs>

  )
}
