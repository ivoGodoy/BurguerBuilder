import React from 'react'
import classes from './Burguer.module.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'

const burguer = (props) =>{
    let transformIngredients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map( (_, i) =>{
            return <BurguerIngredient key={igKey + i} type={igKey}/>
        }) ;
    }).flat();

    
    if (transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredient.</p>
    }

    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top"/>
            {transformIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;

