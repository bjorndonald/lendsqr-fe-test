import React from 'react'
import { Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UserBody from '../../features/user/userbody/UserBody'
import UserHeader from '../../features/user/userheader/UserHeader'
import _ from 'lodash'
import ArrowIcon from '../../icons/Arrow.icon'
import PageLayout from '../../layouts/Page.layout'
import { useUserContext } from './user.context'
import './user.scss'
import Loading from '../../components/loading/Loading'

function User() {
    const { tab, user } = useUserContext()
    const navigate = useNavigate()

    return (
        <PageLayout>
            <div id='user'>
                <div onClick={() => navigate('/users')} className="d-flex pointer back align-items-center">
                    <ArrowIcon color='#545F7D' />
                    <h6>Back to Users</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>User Details</h3>
                    <div className="buttons">
                        <button className='btn btn-outline-red'>
                            BLACKLIST USER
                        </button>
                        <button className='btn btn-outline-green'>
                            ACTIVATE USER
                        </button>
                    </div>
                </div>
                {!_.isEmpty(user) && <Tab.Container activeKey={tab}>
                    <UserHeader />
                    <UserBody />
                </Tab.Container>}
                {_.isEmpty(user) && <Loading />}
            </div>
        </PageLayout>

    )
}

export default User