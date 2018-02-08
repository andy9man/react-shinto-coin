 import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import {numberWithCommas} from '../components/helper';

const Ledger = (props) => {
    const {ledger} = props;
    return(
        <div>
            <div>
                <h1>Browse the Ledger</h1>
                <p>Here you can browse all ShintoCoin transactions.</p>
            </div>
            <div className="row">
                <div className="small-12 medium-10 large-8 columns">
                    <h3>ShintoCoin Ledger</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="30%">Action</th>
                                <th width="30%" className="text-right">Amount</th>
                                <th width="25%" className="text-right">Value</th>
                                <th width="15%">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ledger.length > 0 &&
                                    ledger.map( item => (
                                        <tr key={item.id}>
                                            <td>{item.action}</td>
                                            <td className="text-right">{numberWithCommas(item.amount)}</td>
                                            <td className="text-right margin-right-small">${numberWithCommas(item.value)}</td>
                                            <td className="text-right">
                                                <Link to={`/transaction/${item.id}`}>
                                                    <button
                                                        id={item.id}
                                                        className="margin-vert-small"
                                                    >Details</button>
                                                </Link>
                                            </td>
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