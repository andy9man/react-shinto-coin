import React, {Component} from 'react';
import { connect } from 'react-redux'
import { mineCoin } from '../store/actions';

class Mine extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    render(){
        return(
            <div>
                <h1>Mine ShintoCoins</h1>
                <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>
                <p>What is the 7th Fibonacci sequence number?</p>
                <form onSubmit={
                    (e) => {
                        e.preventDefault()
                        parseInt(this.state.input,10) === 13 && this.props.appMineCoin()}}>
                    <input type='text' name='mineInput' value={this.state.input} onInput={(e) => (this.setState({input: e.target.value}))}/>
                    <button>Mine the ShintoCoin</button>
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
        appMineCoin(){
            dispatch(mineCoin())
        }
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(Mine)
