import { Grid, LinearProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FoodCards from '../FoodCards/FoodCards';
import './Restaurant.css';

const Restaurant = () => {

    const [textValue, setTextValue] = useState('');
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textValue}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[textValue])
    
    
    const handleSearch = e =>{
        const searchText = e.target.value;
        setTextValue(searchText)
    }



    return (
        <div className='main'>
            <div className='header'>
            
                <div>
                    <h1>Foodopedia</h1>
                    <TextField 
                        onChange={handleSearch}
                        color='secondary'
                        id="outlined-basic" 
                        label="Search food" 
                        variant="outlined"
                        size='small'
                        sx={{
                            width: {
                                md:'400px',
                                sm:'350px',
                                xs:'180px' 
                            }
                        }} />
                </div>
            </div>
            {
                foods.length === 0 ? <LinearProgress color="success" /> :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
                {
                    foods.map( food => <Grid item xs={2} sm={2} md={4} >
                                        <FoodCards
                                            key={food.idMeal}
                                            food={food}
                                        ></FoodCards>
                                        </Grid>)
                }
            </Grid>
            }
            
        </div>
    );
};

export default Restaurant;