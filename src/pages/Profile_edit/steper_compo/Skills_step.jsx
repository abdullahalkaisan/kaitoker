import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

export const Skills_step = () => {
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

      const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);
    
          useEffect(() => {
            setCreateAccount_mongo({...createAccount_mongo, skills});
          },[skillInput, skills])
      


    const handleDelete = (skillToDelete) => {
        setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    };

    const handleAddSkill = () => {
        if (skillInput && skills.length < 5) {
            setSkills((prevSkills) => [...prevSkills, skillInput]);
            setSkillInput("");
        }
    };

    const handleInputChange = (event) => {
        setSkillInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddSkill();
        }
    };

    return (
        <>

        {loading && !user && <div>loading...</div>}
            <Typography variant="h5" component="h2" sx={{ my:2}}>
                Add your top 5 skills
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3, mb: 2, width: { md: 1, xs: 1 } }}>
                {skills.map((skill, index) => (
                    <Chip
                        
                        key={index}
                        sx={{ m: 0.5, borderRadius: 3 }}
                        onDelete={() => handleDelete(skill)}
                        label={skill}
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
                    label="Skills"
                    variant="outlined"
                    value={skillInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
                <Box>
                    <Button
                        sx={{ borderRadius: 3, mt: 0.5, ml: 2 }}
                        size="small"
                        variant="contained"
                        onClick={handleAddSkill}
                        disabled={skills.length >= 5 || !skillInput}
                    >
                        ADD ({skills.length}/5)
                    </Button>
                </Box>
            </Box>
        </>
    );
};
