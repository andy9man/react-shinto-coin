import React, {Component} from 'react';

class Buy extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    render(){
        return(
            <div>
                <h1>Buy ShintoCoins</h1>
                <p>Current ShintoCoin Value:</p>
                <p>Number of ShintoCoins Owned:</p>
                <form>
                    <div className='row'>
                        <div className='columns'>
                            <div className='md-text-field with-floating-label'>
                                <input type='text' id='buyInput' value={this.state.input} onInput={(e) => (this.setState({ input: e.target.value }))} />
                                <label htmlFor='buyInput'>number</label>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Buy