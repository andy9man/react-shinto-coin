import React from 'react';
import { connect } from 'react-redux'

const LedgerDetails = props => {
    const {match: {params: {id}}}= props
    console.log("Display Ledger Details...");
    console.log(props.ledger);
    const item = props.ledger.find((item) => { return item.id==id})
    console.log(item);

    console.log(props.ledger)
    return (
        <div>
            <p> Transaction <b># {id} </b></p>

            <p><b>{item.action} {item.amount} </b> ShintoCoin</p>
        </div>

    );
}
const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
        ledger: state.ledger,
    }
}

export default connect(getStateFromReduxPassToAppComponentAsProps)(LedgerDetails);

