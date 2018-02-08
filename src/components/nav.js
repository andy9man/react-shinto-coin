import React from 'react';
import {FreakingAwesomeNavLink as CustomNav} from './helper'

export const Navigation = props => {
    return (
        <nav>
            <ul className="tabs padding-bottom-medium">
                <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/mine' label='Mine Coins' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/buy' label='Buy Coins' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/sell' label='Sell Coins' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/ledger' label='Browse Ledger' generalClassName="tab-title" activeOnlyWhenExact={true} />
            </ul>
        </nav>
    )
}
