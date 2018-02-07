import React, {Component} from 'react';
import { connect } from 'react-redux'
import { sellCoin } from '../store/actions';

class Sell extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    render(){
        return(
            <div>
                <h1>Sell ShintoCoins</h1>
                <p>Current ShintoCoin Value:</p>
                <p>Number of ShintoCoins Owned:</p>
                <form onSubmit={
                    (e) => {
                        e.preventDefault()
                        this.props.appSellCoin()
                    }}>
                    <div className='row'>
                        <div className='columns'>
                            <div className='md-text-field with-floating-label'>                        <label htmlFor='sellInput'>number</label>
                                <input type='text' id='sellInput' value={this.state.input} onInput={(e) => (this.setState({ input: e.target.value }))} />
                                <button>Sell</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
    }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
        appSellCoin(){
            dispatch(sellCoin())
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Sell)
