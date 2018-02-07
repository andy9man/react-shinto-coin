import React from 'react';
import {FreakingAwesomeNavLink as CustomNav} from './helper'

const Navigation = props => {
    return (
<nav>
    <CustomNav label='Home'/>
    <CustomNav label='Coins'/>
    <CustomNav label='Buy Coins'/> 
    <CustomNav label='Sell Coins' />
    <CustomNav label='Browse Ledger'/>
</nav>

    )
}