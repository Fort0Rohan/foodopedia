import { BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodCard.css'

import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import FavoriteSharpIcon from '@mui/icons-material/Favorite';
import ClassOutlinedSharpIcon from '@mui/icons-material/ClassOutlined';
import SoupKitchenSharpIcon from '@mui/icons-material/SoupKitchenSharp';

const FoodCards = (props) => {
    const {strMeal, strMealThumb, strArea, strCategory, strTags, idMeal} = props.food;
    const [value, setValue] = useState(1);

    //to send recipe data to recipe component
    const recipe = props.food;
    //for null tags, print none
    let Tags = '';
    strTags === null ? Tags="none" : Tags=strTags; 

    return (
        <Card sx={{
            marginTop: '15px',
            borderRadius: '10px',
            mx:{
                md:'15px',
                sm: '10px'
            }
        }}>
            <CardMedia
                component="img"
                height='300px'
                width='auto'
                image={strMealThumb}
                alt="food image"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" color='secondary.dark' fontWeight='bold' sx={{textShadow:'1px 1px 2px #6E43A3'}}>
                    {strMeal}
                </Typography>

                <Grid container justifyContent='space-between'>
                    <Grid item xs={6} sm={6} md={6} display='flex'>
                        <FlagTwoToneIcon sx={{
                            color: 'secondary.light',
                            fontSize: '28px',
                            pt: '2px',
                            pr: '4px'
                        }}/>
                        <Typography variant="subtitle1" color="text.secondary" textAlign='left'>
                            {strArea}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography component='div' textAlign='right'>
                                <Box sx={{
                                   fontSize:'10px',
                                   fontWeight:'600',
                                   color:'warning.main',
                                   fontFamily:'arial',
                                }}>
                                    #{Tags}
                                </Box>
                                     
                                <Box sx={{
                                    fontSize:'14px',
                                    fontWeight:'600',
                                    color:'primary.light', 
                                    fontFamily:'arial'
                                }}>
                                    <ClassOutlinedSharpIcon
                                        sx={{ fontSize:'11px'}}/>{strCategory}
                                </Box>
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography component='div' text-align='left'>
                            <BottomNavigation
                                value={value}
                                onChange={() => {
                                    value === 1 ? setValue(0) : setValue(1);
                                }}
                                sx={{pr:'120px'}}
                            >
                                <BottomNavigationAction 
                                   icon={<FavoriteSharpIcon sx={{fontSize:'40px'}}/>}
                                   sx={{pr:'25px'}} 
                                />
                            </BottomNavigation>
                        </Typography>
                    </Grid>
                            
                                    
                    <Grid item xs={6} sm={6} md={6}>
                        <Link to={`/restaurant/${idMeal}`} className='recipe-link'>
                            <Button 
                                variant='outlined' 
                                color="secondary" 
                                size='small' 
                                startIcon={<SoupKitchenSharpIcon />}
                                sx={{
                                    mt: '15px',
                                    ml: '22px',
                                    fontWeight:600
                                }}
                            >See Recipe!</Button>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>  
);
};

export default FoodCards;