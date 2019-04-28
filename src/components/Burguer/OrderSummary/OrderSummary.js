import React, {Component} from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
import { isMaster } from 'cluster';

class OrderSummary extends Component {
    //this could be a functional component it doesnt have to be a class based component.
    // componentDidUpdate(){
    //     console.log('[orderSummary] DidUpdate');
    // };

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( (igKey) => (
            <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        ))
        return(
            <Aux>
            <h3>Your order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to checkout?</p>

            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary;