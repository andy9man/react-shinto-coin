import React from 'react';
import { connect } from 'react-redux'

const Ledger = (props) => {
    const {ledger} = props;
    return(
        <div>
            <div>
                <h1>Browse the Ledger</h1>
                <p>Here you can browse all ShintoCoin transactions.</p>
            </div>
            <div className="row">
                <div className="small-12 medium-8 columns">
                    <h3>ShintoCoin Ledger</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="500">Action</th>
                                <th width="100" className="text-right">Amount</th>
                                <th width="400">Value</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ledger.length > 0 &&
                                    ledger.map( item => (
                                        <tr key={item.id}>
                                            <td>{item.action}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.value}</td>
                                            <td><button id={item.id}>Details</button></td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
        ledger: state.ledger,
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps)(Ledger)