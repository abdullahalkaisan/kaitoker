import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { MdOutlineTranslate } from "react-icons/md";

export const Language_step = () => {
    const [language, setLanguage] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleDelete = (languageToDelete) => {
        setLanguage((prevLanguages) => prevLanguages.filter((language) => language !== languageToDelete));
    };

    const handleAddLanguage = () => {
        if (inputValue && language.length < 5) {
            setLanguage((prevLanguages) => [...prevLanguages, inputValue]);
            setInputValue("");
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddLanguage();
        }
    };

    return (
        <>
            <Typography variant="h5" component="h2" sx={{ my:2}}>
                Add your top 5 languages
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3, mb: 2, width: { md: 1, xs: 1 } }}>
                {language.map((lang, index) => (
                    <Chip
                        icon={<MdOutlineTranslate />}
                        key={index}
                        sx={{ m: 0.5, borderRadius: 3 }}
                        onDelete={() => handleDelete(lang)}
                        label={lang}
                    />
                ))}
            </Box>

            <Box sx={{ display: "flex" }}>
                <TextField
                    fullWidth
                    rows={3}
                    maxRows={3}
                    sx={{ mb: 2, flex: 1 }}
                    id="outlined-basic"
                    label="Languages"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
                <Box>
                    <Button
                        sx={{ borderRadius: 3, mt: 0.5, ml: 2 }}
                        size="small"
                        variant="contained"
                        onClick={handleAddLanguage}
                        disabled={language.length >= 5 || !inputValue}
                    >
                        ADD ({language.length}/5)
                    </Button>
                </Box>
            </Box>
        </>
    );
};
