import React, {Component} from 'react'
import Aux from '../Auxiliary/Auxiliary';
import App from '../../App';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state={
        showSideDrawer :false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    toggleSideDrawerHandler = () =>{
        this.setState( (state) => {
            return ({showSideDrawer: !state.showSideDrawer})
        })
    }

    render(){
        return(
        <Aux>

            <div>
            <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
            <SideDrawer  
                show={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
            </div>


            <main className={classes.Content}>

                {this.props.children}

            </main>
        </Aux>
        );
    }
    

}
export default Layout;