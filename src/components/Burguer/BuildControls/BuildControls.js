import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    { label: 'Salad' , type:'salad'},
    { label: 'Bacon' , type:'bacon'},
    { label: 'Cheese' , type:'cheese'},
    { label: 'Meat' , type:'meat'}
];

const buildControls = (props) =>(

    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( control =>( 
           <BuildControl 
                label={control.label} 
                key={control.label} 
                add={() =>props.ingredientAdded(control.type)} 
                remove={() =>props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}>
            </BuildControl>
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.clicked}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;