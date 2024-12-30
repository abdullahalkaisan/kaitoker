import { useContext, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { countries } from "../countryList";
import { AuthContext } from "../Providers/AuthProvider";

export default function CountrySelectInput() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (event, newselectedCountry) => {
        setSelectedCountry(newselectedCountry);
    };


      const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);
    
        useEffect(() => {
          setCreateAccount_mongo({...createAccount_mongo, 
            country:selectedCountry, 
            profilePic:user?.photoURL.slice(0,92),
            username:user?.uid,
            email:user?.email,
            completeProfile:true
        });
        },[selectedCountry, user])
    


    

    return (
        <>
        
        {loading && !user && <div>loading...</div>}
        

            <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={handleChange}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        },
                    }}
                />
            )}
        />
    </>
    );
}
