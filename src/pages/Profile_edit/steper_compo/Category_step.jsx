import { useContext, useEffect, useState } from 'react';
import { Chip, Typography } from '@mui/material';
import { categories_profession } from '../../../professionCategoryObj';
import { AuthContext } from '../../../Providers/AuthProvider';

export const Category_step = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);


    const handleSelect = (name) => {
        setSelectedCategory(name);
    };


    console.log(selectedCategory);
    

    useEffect(() => {
        setCreateAccount_mongo({...createAccount_mongo, category:selectedCategory});
      },[selectedCategory])
    



    return (


        <>
        {loading && !user && <div>loading...</div>}
        <Typography variant="h5" component="h2" sx={{ my:2}}>
            Select a category
        </Typography>

            {categories_profession
                .filter(item => item.name !== "All")
                .map((item) => {
                    return (
                        <Chip 
                            key={item.id} 
                            label={item.name} 
                            icon={
                                <img 
                                    src={item.iconUrl}
                                    alt={item.name}
                                    style={{height:"20px"}}
                                />
                            }
                            sx={{
                                m: 0.5, 
                                borderRadius: 3,
                                cursor: "pointer",
                                backgroundColor: selectedCategory === item.name ? '#555' : 'default',
                                "&:hover": {
                                    backgroundColor: selectedCategory === item.name ? '#444' : 'default'
                                },
                                color: selectedCategory === item.name ? '#fff' : 'default',
                            }} 
                            onClick={() => handleSelect(item.name)}
                        />
                    );
                })
            }
        </>
    );
};
