import { Typography } from "@mui/material";
import CountrySelectInput from "../../../components/CountrySelectInput";



export default function Country_step() {
    return (
        <>
            <Typography variant="h5" component="h2" sx={{ my:2}}>
                Select your country
            </Typography>
            <CountrySelectInput/>
        </>
    );
}
