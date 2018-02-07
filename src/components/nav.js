import React from 'react';
import {FreakingAwesomeNavLink as CustomNav} from './helper'

export const Navigation = props => {
    return (
<nav>
    <CustomNav to='/' label='Home'/>
    <CustomNav to='/mine' label='Mine Coins'/>
    {/* <CustomNav label='Buy Coins'/> 
    <CustomNav label='Sell Coins' />
    <CustomNav label='Browse Ledger'/> */}
</nav>

    )
}
