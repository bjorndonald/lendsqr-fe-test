import React from 'react'
import { Tab, TabContent } from 'react-bootstrap'
import { TabEnum } from '../../../pages/user/user.context'
import GeneralDetails from '../generaldetails/GeneralDetails'
import './userbody.style.scss'

function UserBody() {
    return (
        <div id='user-body'>
            <Tab.Content>
                <Tab.Pane eventKey={TabEnum.GENERAL}>
                    <GeneralDetails />
                </Tab.Pane>
            </Tab.Content>
        </div>
    )
}

export default UserBody