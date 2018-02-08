import React from 'react';
import { connect } from 'react-redux'
import {
    Route,
    Redirect
} from 'react-router-dom';
import {LedgerDetails as LedgerDetailsComponent} from '../components/LedgerDetails';

const Transaction = (props) => {
    const {ledger} = props;
    const ledgerItemsExist = ledger > 0;
    return(
        <div>
            <div>
                <h1>Ledger Transaction Details</h1>
                <p>Detailed view of a transaction from the ledger.</p>
            </div>
            <div className="row">
                <div className="small-12 medium-10 large-8 columns">

                    <div>
                        {
                            // ledgerItemsExist ?
                            //     <Route path={`${props.match.path}/:id`} component={LederDetailsComponent} />
                            // :
                            //     <Redirect to="/ledger" />
                        }
                    </div>
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

export default connect(getStateFromReduxPassToAppComponentAsProps)(Transaction)