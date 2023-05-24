import React from 'react'
import { useUserContext } from '../../../pages/user/user.context'
import { numberWithCommas } from '../../../utils/numbers'

function EducationAndEmployment() {
    const { user } = useUserContext()
    return (
        <section>
            <h5>Education and Employment</h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>level of education</small>
                        <h6>{user?.education.level}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>office email</small>
                        <h6>{user?.education.officeEmail}</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>employment status</small>
                        <h6>{user?.education.employmentStatus}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>Monthly income</small>
                        <h6>₦{numberWithCommas(user?.education.monthlyIncome[0])}- ₦{numberWithCommas(user?.education.monthlyIncome[1])}</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>sector of employment</small>
                        <h6>{user?.education.sector}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>loan repayment</small>
                        <h6>{numberWithCommas(user?.education.loanRepayment)}</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>BVN</small>
                        <h6>{user?.profile.bvn}</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Duration of employment</small>
                        <h6>{user?.education.duration}</h6>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EducationAndEmployment