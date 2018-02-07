import React from 'react';
import {FreakingAwesomeNavLink as CustomNav} from './helper'

export const Navigation = props => {
    return (
<nav>
    <ul className="heading-nav padding-bottom-medium">
        <CustomNav to='/' label='Home' generalClassName="heading-nav-entry" activeOnlyWhenExact={true} />
        <CustomNav to='/mine' label='Mine Coins' generalClassName="heading-nav-entry" activeOnlyWhenExact={true} />
        {/* <CustomNav label='Buy Coins'/>
        <CustomNav label='Sell Coins' />
        <CustomNav label='Browse Ledger'/> */}
    </ul>
</nav>

    )
}
