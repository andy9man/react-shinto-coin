import React, {Component} from 'react';
import { connect } from 'react-redux'
import { sellCoin } from '../store/actions';
import { numberWithCommas } from '../components/helper';

class Sell extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: '',
            error: undefined
        }
    }
    render(){
        const {coinPrice, acctBal} = this.props;
        return(
            <div>
                <h1>Sell ShintoCoins</h1>

                <div className="margin-vert-large margin-horiz-large">
                    <p>Current ShintoCoin Value: <strong>${coinPrice}</strong></p>
                    <p>Number of ShintoCoins Owned: <strong>{numberWithCommas(acctBal)}</strong></p>
                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            let error = undefined;
                            if( this.state.input < acctBal ) {
                                this.props.appSellCoin(this.state.input);
                            }
                            else {
                                error = acctBal > 1 ? `You can only sell ${acctBal-1}` : "You don't have enough to sell";
                            }
                            this.setState({input: '', error: error});
                        }}>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        type="number"
                                        id="sellInput"
                                        value={this.state.input}
                                        className={this.state.error && "has-error"}
                                        onInput={(e) => (
                                            this.setState({ input: e.target.value })
                                        )}
                                        required
                                    />
                                    <label htmlFor="sellInput">Number to Coins to Sell</label>
                                    <span className="error">{this.state.error}</span>
                                    <button>Sell</button>
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
        appSellCoin(coins){
            dispatch(sellCoin(coins))
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Sell)
