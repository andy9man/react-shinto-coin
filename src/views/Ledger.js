import React, {Component} from 'react';

class Ledger extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    render(){
        return(
            <div>
                <h1>Browse the Ledger</h1>
                <p>Here you can browse all ShintoCoin transactions.</p>
            </div>
        )
    }
}

export default Ledger