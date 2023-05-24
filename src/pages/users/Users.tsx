import React from 'react'
import Metrics from '../../features/users/metrics/Metrics'
import PageLayout from '../../layouts/Page.layout'
import './users.scss'

function Users() {
    return (
        <PageLayout>
            <div id='users'>
                <h3>Users</h3>
                <Metrics />
            </div>
        </PageLayout>

    )
}

export default Users