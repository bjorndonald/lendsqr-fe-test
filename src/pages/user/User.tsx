import React from 'react'
import { Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import ArrowIcon from '../../icons/Arrow.icon'
import PageLayout from '../../layouts/Page.layout'
import { useUserContext } from './user.context'
import './user.scss'

function User() {
    const { tab } = useUserContext()
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



            </div>
        </PageLayout>

    )
}

export default User