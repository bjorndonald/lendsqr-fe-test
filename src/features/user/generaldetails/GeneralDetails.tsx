import React from 'react'
import EducationAndEmployment from './Edu&Emp'
import './generaldetails.style.scss'
import Guarantor from './Guarantor'
import PersonalInformation from './PersonalInformation'
import Socials from './Socials'

function GeneralDetails() {
    return (
        <div id='general-details'>
            <PersonalInformation />
            <div className="line"></div>
            <EducationAndEmployment />
            <div className="line"></div>
            <Socials />
            <div className="line"></div>
            <Guarantor />

        </div>
    )
}

export default GeneralDetails