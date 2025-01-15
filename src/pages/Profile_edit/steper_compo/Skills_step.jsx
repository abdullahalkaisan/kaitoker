import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Copy, Plus } from "lucide-react";
import { categories_profession } from "../../../professionCategoryObj";

export const Skills_step = () => {
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");
    const [alertMessage, setAlertMessage] = useState(null);

      const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);
    
    let getCategory = categories_profession.find(item => item.name === "Languages Teacher");
    const filteredExistCategory = getCategory.suggestedSkills.filter(item => !skills.includes(item));


        console.log(filteredExistCategory);
        

          useEffect(() => {
            setCreateAccount_mongo({...createAccount_mongo, skills});
          },[skillInput, skills])
      


    const handleDelete = (skillToDelete) => {
        setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
    };

    const handleAddSkill = () => {

        if(skills.includes(skillInput.trim())){
            setAlertMessage("You've already added this skill. Try adding different ones to diversify your profile!")
            return;
        }

        if(skills.length === 5){
            setSkillInput("");
            // setAlertMessage("You can add up to 5 skills with the Basic plan. Upgrade to the Premium plan to showcase up to 10 skills and significantly boost your visibility and impressions!")
            return 
        }

        if (skillInput && skills.length < 5) {
            setSkills((prevSkills) => [...prevSkills, skillInput.trim().charAt(0).toUpperCase() + skillInput.slice(1)]);
            setSkillInput("");
            setAlertMessage("")
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

            
            <Box sx={{ display: skills.length === 5 ? "none" :"flex" }}>
                <TextField
                    fullWidth
                    rows={3}
                    maxRows={3}
                    sx={{ mb: 2, flex: 1 }}
                    id="outlined-basic"
                    label="Type your services or skills"
                    variant="outlined"
                    value={skillInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    disabled={skills.length === 5}
                />
                <Box>
                    <Button
                        sx={{ borderRadius: 3, mt: 0.5, ml: 2 }}
                        size="small"
                        variant="contained"
                        onClick={handleAddSkill}
                        disabled={skills.length >= 5 || !skillInput && skills.includes(skillInput)}
                    >
                        ADD ({skills.length}/5)
                    </Button>
                </Box>
            </Box>

            <Typography color={"error"} variant="body" component="p" sx={{ my:2}}>
                {alertMessage}
            </Typography>



            <Typography sx={{color:"#777", mt:2, mb:1}} variant="body2" component="p">
                Choose common skills ex. 
            </Typography>
            <Box sx={{display:"flex", flexWrap:"wrap", width:{md:1, xs:1}}}>
                {filteredExistCategory.map((suggestedProfession, index) => {
                return(
                    <Chip 
                    key={index} 
                        icon={<Plus 
                        size={18} 
                        style={{marginLeft:10}}/>} 
                        onClick={()=> {
                            // setSkillInput(suggestedProfession)
                            // handleAddSkill()
                            setSkills((prevSkills) => [...prevSkills, suggestedProfession]);
                        }}
                        sx={{m:0.5, borderRadius:3, cursor:"pointer"}}  
                        label={suggestedProfession} 
                    />
                )
                })}
            </Box>




        </>
    );
};
