import React from 'react';
import { connect } from 'react-redux'

const LedgerDetails = props => {
    console.log("Display Ledger Details...");
    const {match: {params: {id}}}= props
    const {ledger} = props;
    const item = ledger.length > 0 ? props.ledger.find((item) => { return item.id==id}) : undefined;
    console.log(item);

    console.log(props.ledger)
    return (
        <div className="margin-left-large">
            {
                item ?
                    <div>
                        <p> Transaction <b># {id} </b></p>

                        <p><b>{item.action} {item.amount} </b> ShintoCoin</p>
                    </div>
                :
                <h3>There are no Ledger Details Available.</h3>
            }
        </div>

    );
}
const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
        ledger: state.ledger,
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps)(LedgerDetails);

