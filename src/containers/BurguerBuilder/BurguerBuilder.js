import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'
import buildControl from '../../components/Burguer/BuildControls/BuildControl/BuildControl';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'



const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurguerBuilder extends React.Component{
    
    state= {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseable (ingredients){
      
        const arrIngredients = Object.keys(ingredients).map( ing =>{
            return ingredients[ing];
        })
        .reduce((arrIngredients, el)=>{
            return arrIngredients + el;
        },0);

        this.setState({purchaseable : arrIngredients>0});

    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients : updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseable(updatedIngredients);
        
    }

    removeIngredientHadler = (type) =>{
        //1° Guardo la cantidad que tengo de ese ingrediente en una variable
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        //Guardo en otra variable el conteo anterior menos 1
        const updatedCount = oldCount -1;

        //guardo el state en una variable
        const updatedIngredients = {
            ...this.state.ingredients
        };

        //Actualizo en el state copiado el nuevo contador para el ingrediente
        updatedIngredients[type] = updatedCount;

        //guardo en una variable el precio qeu esta en la constante de precios
        const priceDeduction = INGREDIENT_PRICES[type];

        //Guardo en una variable el precio total del state
        const oldPrice = this.state.totalPrice;

        //Creo una variable donde deduzco el precio del producto del precio total
        const newPrice = oldPrice - priceDeduction;

        //Actualizo el precio total y la cantidad de ingredientes del State.
        this.setState({ingredients : updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseable(updatedIngredients);

    }

 

    purchaseHandler= () =>{
        this.setState({purchasing : true})
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () =>{
        alert('you continued');
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice.toFixed(2)}/>
                    </Modal>
                    <Burguer ingredients={this.state.ingredients}/>
                    <BuildControls 
                        clicked={this.purchaseHandler}
                        ingredients={this.state.ingredients}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHadler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        />
            </Aux>
        );
    }
}

export default BurguerBuilder;