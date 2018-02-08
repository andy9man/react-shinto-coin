import React, {Component} from 'react';
import { connect } from 'react-redux'
import { mineCoin } from '../store/actions';

class Mine extends Component {
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
                <h1>Mine ShintoCoins</h1>

                <div className="margin-vert-large margin-horiz-large">
                    <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>

                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            let error = undefined;
                            parseInt(this.state.input, 10) === 13 ? this.props.appMineCoin() : error = "Your answer is incorrect";
                            this.setState({input: '', error: error});
                        }
                    }>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        type="text"
                                        id="mineInput"
                                        value={this.state.input}
                                        className={this.state.error && "has-error"}
                                        onInput={(e) => (
                                            this.setState({input: e.target.value})
                                        )}
                                        required
                                    />
                                    <label htmlFor="mineInput">
                                        What is the 7th Fibonacci sequence number?
                                    </label>
                                    <span className="error">{this.state.error}</span>
                                    <button>Mine</button>
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
    }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
        appMineCoin(){
            dispatch(mineCoin())
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Mine)
