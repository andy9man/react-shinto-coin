import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addCoin } from '../store/actions';

class Buy extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: '',
            error: undefined
        }
    }
    render(){
        return(
            <div>
                <h1>Buy ShintoCoins</h1>

                <div className="margin-vert-large margin-horiz-large">
                    <p>Current ShintoCoin Value: <strong>${this.props.coinPrice}</strong></p>
                    <p>Number of ShintoCoins Owned: <strong>{this.props.acctBal}</strong></p>


                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            this.props.appBuyCoin(this.state.input);
                            this.setState({input: ''});
                        }}>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        type="number"
                                        id="buyInput"
                                        value={this.state.input}
                                        onInput={(e) => (
                                            this.setState({ input: e.target.value })
                                        )}
                                        required
                                    />
                                    <label htmlFor="buyInput">Number of Coins to Buy</label>
                                    <button>Buy</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
        coinPrice: state.coinPrice,
        acctBal: state.acctBal
    }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
        appBuyCoin(coins){
            dispatch(addCoin(coins))
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Buy)
