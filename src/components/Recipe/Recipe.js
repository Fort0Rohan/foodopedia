import { HomeOutlined } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Ingredients from '../Ingredients/Ingredients';

import './Recipe.css';


const Recipe = () => {

    ///////////////////////////////////////////// styles ///////////////////////////////////////////
     const bannerLogo = { typography: {
                                md: 'h2',
                                sm: 'h2',
                                xs: 'h4'
                          }, 
                          m: {
                            md:7,
                            sm:10,
                            xs:9
                          },
                          fontWeight: {
                                md:700,
                                sm:700,
                                xs:700
                          }
                        }

    const mealName = {
                        typography:'h3',
                        textShadow: '3px 3px 5px black',
                        textAlign: 'left',
                        color: '#00b67f',
                        ml: '10px'
                     }

    const mealSummary = {
                            fontSize: '35px',
                            textAlign: 'left',
                            color: 'text.secondary',
                            backdropFilter: 'blur(5px)',
                            ml:'10px',
                            mr:'10px'
                        }
    const recipeHeader = { 
                            typography:'h3',
                            fontWeight:300,
                            color:'#BD2124',
                            textAlign: 'left',
                            textShadow: '1px 1px 3px black'
                        }

    const instructionInfo = {
                                typography:'body1', 
                                textAlign:'left',
                                lineHeight:'2'
                            }

    ////////////////////////////////////////////////////////////////////////////////////////////

    
    
    
    ///////////////////////////API call, declaring variables of specific data////////////////////
    const {idMeal} = useParams(); //took dyna-var from route
    
    const [recipes, setRecipes] = useState([]);
    const {strMeal, strMealThumb, strArea, strCategory, strInstructions} = recipes;
    
    
    
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.meals[0]))
    },[idMeal])
    ////////////////////////////////////////////////////////////////////////////////////////////    
    let rows = [];

    for(let i=1; i<=20; i++){
        const ing = `strIngredient`.concat(`${i}`);
        const amount = `strMeasure`.concat(`${i}`);
        if(recipes[ing] !== '' && recipes[amount] !== ''){
            let obj = {
                ingredient: recipes[ing],
                amount: recipes[amount]
            }
            rows[i]= obj;
            
        }
        else{
            break;
        }
    }


    ////////////////////////////////////////////////////////////////////
    

    return (
        <div>
            <Link to='/restaurant'>
                <IconButton sx={{
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '11px',
                    top: '18px',
                    bgcolor: '#eeebeb',
                    ':hover': {
                        bgcolor: '#eeebeb',
                        color: '#841719',
                        boxShadow: '0px 2px 10px lightgrey'
                    }
                }} color="secondary" aria-label="add an alarm">
                    <HomeOutlined fontSize='large'/>
                </IconButton>
            </Link>
            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
                
                <Grid item xs={12} sm={12} md={12}>
                    <div className='test'>
                        <div className='test-h' md={12}>
                            <Box sx={bannerLogo}>Foodopedia</Box>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} mr='10px'>
                <Grid item xs={12} sm={6} md={4} my={4}>
                    <div className='recipe-img'>
                        <Typography component='div'>
                            <Box sx={mealName}>{strMeal}</Box>
                            <Box sx={mealSummary}>A {strArea}, {strCategory} cuisine.</Box>
                        </Typography>
                        <img src={strMealThumb} alt="" />

        
                    </div>
                </Grid> 

                    
                <Grid item xs={12} sm={6} md={3} my={4}>
                    <Ingredients
                        rows={rows}
                    ></Ingredients>
                </Grid>


                <Grid item xs={12} sm={12} md={5} my={4}>
                        <div className='recipe-description'>
                            <Box sx={recipeHeader}>Recipe...</Box>
                            <Box sx={instructionInfo}>{strInstructions}</Box>
                        </div>
                </Grid>
                
            </Grid>
</div>
);
};

export default Recipe;


