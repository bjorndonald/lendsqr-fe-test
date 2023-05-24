import React from 'react'
import ActiveIcon from '../../../icons/metrics/Active.icon'
import LoansIcon from '../../../icons/metrics/Loans.icon'
import SavingsIcon from '../../../icons/metrics/Savings.icon'
import UsersIcon from '../../../icons/metrics/Users.icon'
import './metrics.style.scss'

function Metrics() {
    return (
        <div id='metrics'>
            <div className="box d-flex flex-column">
                <div className="circle">
                    <UsersIcon color='#DF18FF' />
                </div>
                <h6>USERS</h6>
                <h3>2,453</h3>
            </div>
            <div className="box d-flex flex-column">
                <div className="circle">
                    <ActiveIcon color='#5718FF' />
                </div>
                <h6>ACTIVE USERS</h6>
                <h3>2,453</h3>
            </div>
            <div className="box d-flex flex-column">
                <div className="circle">
                    <LoansIcon color='#F55F44' />
                </div>
                <h6>USERS WITH LOANS</h6>
                <h3>2,453</h3>
            </div>
            <div className="box d-flex flex-column">
                <div className="circle">
                    <SavingsIcon color='#FF3366' />
                </div>
                <h6>USERS WITH SAVINGS</h6>
                <h3>2,453</h3>
            </div>
        </div>
    )
}

export default Metrics