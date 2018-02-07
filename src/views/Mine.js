import React, {Component} from 'react';

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
                <form>
                    <input type='text' name='mineInput' value={this.state.input} onInput={(e) => (this.setState({input: e.target.value}))}/>
                    <button>Mine the ShintoCoin</button>
                </form>
            </div>
        )
    }
}

export default Mine