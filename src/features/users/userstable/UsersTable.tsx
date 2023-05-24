import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../../components/table/Table'
import { MONTHS } from '../../../constants/strings'
import DotMenuIcon from '../../../icons/DotMenu.icon'
import FilterIcon from '../../../icons/Filter.icon'
import ActivateIcon from '../../../icons/table/Activate.icon'
import BlacklistIcon from '../../../icons/table/Blacklist.icon'
import EyeIcon from '../../../icons/table/Eye.icon'
import { useUsersContext } from '../../../pages/users/users.context'
import { UserType } from '../../../types/user'
import './userstable.style.scss'

const COLUMNS = [
    {
        title: "Organization",
        key: "organization",
        width: "calc(9ch + 26px)"
    },
    {
        title: "Username",
        key: "username",
        width: "calc(10ch)"
    },
    {
        title: "Email",
        key: "email",
        width: "calc(22ch)"
    },
    {
        title: "Phone Number",
        key: "phone",
        width: "calc(13ch)"
    },
    {
        title: "Date Joined",
        key: "date_joined",
        width: "calc(16ch)"
    },
    {
        title: "Status",
        key: "status",
        width: "calc(13ch)"
    },

]

const StatusRow = ({ user }: { user: UserType }) => {
    return (
        <div style={{ position: "relative" }} className="d-flex status w-100 justify-content-between align-items-center">
            {!user.accountNumber ? <div className="grey-bubble bubble">
                Inactive
            </div> :
                !!user.accountNumber ? <div className="green-bubble bubble">
                    Active
                </div> :
                    +user.education.loanRepayment > 0 ? <div className="yellow-bubble bubble">
                        Pending
                    </div> :
                        !user.accountBalance ? <div className="red-bubble bubble">
                            Blacklisted
                        </div> : null}

            <a onClick={(e) => {
                $(e.target).parents('.status')
                    .find('.popup-menu')
                    .toggleClass('active')
            }} className="menu">
                <DotMenuIcon />
            </a>
            <div className="popup-menu">
                <div className="popup-item">
                    <EyeIcon color='#545F7D' />
                    <span>View Details</span>
                </div>
                <div className="popup-item">
                    <BlacklistIcon color='#545F7D' />
                    <span>Blacklist User</span>
                </div>
                <div className="popup-item">
                    <ActivateIcon color='#545f7d' />
                    <span>Activate User</span>
                </div>
            </div>
        </div>
    )
}

function UsersTable() {
    const navigate = useNavigate()
    const { users } = useUsersContext()

    const formatDate = (date: Date) => {
        const month = MONTHS[date.getMonth()];
        const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        const year = date.getFullYear()
        const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        const gmt = date.getHours() < 12 ? "AM" : "PM"

        return month + " " + day + ", " + year + " " + hour + ":" + minutes + " " + gmt
    }

    const getRows = () => {
        return users.map((value, index) => {
            return {
                organization: <div onClick={() => { navigate('/user/' + value.id) }} className='org'>{value.orgName}</div>,
                username: <div className='username'>{value.userName}</div>,
                email: value.email,
                phone: value.phoneNumber.split('x')[0],
                date_joined: formatDate(new Date(value.createdAt)),
                status: <StatusRow key={index} user={value} />
            }
        })
    }

    return (
        <div id='users-table'>
            <Table rows={getRows()} columns={COLUMNS} />
        </div>
    )
}

export default UsersTable