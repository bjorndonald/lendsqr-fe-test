import React from 'react'
import Metrics from '../../features/users/metrics/Metrics'
import UsersTable from '../../features/users/userstable/UsersTable'
import PageLayout from '../../layouts/Page.layout'
import './users.scss'

function Users() {
    return (
        <PageLayout>
            <div id='users'>
                <h3>Users</h3>
                <Metrics />
                <UsersTable />
            </div>
        </PageLayout>

    )
}

export default Users