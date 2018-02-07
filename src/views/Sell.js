import React, {Component} from 'react';

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
                <form>
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

export default Sell