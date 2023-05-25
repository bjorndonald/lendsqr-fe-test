import React from 'react'
import Metrics from '../../features/users/metrics/Metrics'
import UsersTable from '../../features/users/userstable/UsersTable'
import PageLayout from '../../layouts/Page.layout'
import { useUsersContext } from './users.context'
import './users.scss'

function Users() {
    const { users } = useUsersContext()
    return (
        <PageLayout>
            <div id='users'>
                <h3>Users</h3>
                <Metrics />
                <UsersTable users={users} />
            </div>
        </PageLayout>

    )
}

export default Users