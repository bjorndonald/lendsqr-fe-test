import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../../components/table/Table'
import { MONTHS, STORAGE_KEY } from '../../../constants/strings'
import DotMenuIcon from '../../../icons/DotMenu.icon'
import $ from 'jquery'
import ActivateIcon from '../../../icons/table/Activate.icon'
import BlacklistIcon from '../../../icons/table/Blacklist.icon'
import EyeIcon from '../../../icons/table/Eye.icon'
import { useUsersContext } from '../../../pages/users/users.context'
import { UserStatus, UserType } from '../../../types/user'
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
    const navigate = useNavigate()
    const { users, setUsers } = useUsersContext()

    const blacklistUser = () => {
        let arr: UserType[]
        arr = users.map((item) => {
            let tmp = item
            if (item.id === user.id) {
                tmp.status = UserStatus.BLACKLISTED
            }
            return tmp
        })
        setUsers(arr)
    }

    const activateUser = () => {
        let arr: UserType[]
        arr = users.map((item) => {
            let tmp = item
            if (item.id === user.id) {
                tmp.status = UserStatus.ACTIVE
            }
            return tmp
        })
        setUsers(arr)
    }

    return (
        <div style={{ position: "relative" }} className="d-flex status w-100 justify-content-between align-items-center">
            {new Date().getTime() - new Date(user.createdAt).getTime() > 0 && !user.status ? <div className="yellow-bubble bubble">
                Pending
            </div> :
                <>
                    {!user.status && <div className="grey-bubble bubble">
                        Inactive
                    </div>}
                    {user.status === UserStatus.ACTIVE && <div className="green-bubble bubble">
                        Active
                    </div>}
                    {user.status === UserStatus.BLACKLISTED && <div className="red-bubble bubble">
                        Blacklisted
                    </div>}
                </>}



            <a onClick={(e) => {
                $(e.target).parents('.status')
                    .find('.popup-menu')
                    .toggleClass('active')
            }} className="menu">
                <DotMenuIcon />
            </a>
            <div className="popup-menu">
                <div className="popup-item" onClick={() => {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
                    navigate('/user/' + user.id)
                }}>
                    <EyeIcon color='#545F7D' />
                    <span>View Details</span>
                </div>
                <div className="popup-item" onClick={blacklistUser}>
                    <BlacklistIcon color='#545F7D' />
                    <span>Blacklist User</span>
                </div>
                <div className="popup-item" onClick={activateUser}>
                    <ActivateIcon color='#545f7d' />
                    <span>Activate User</span>
                </div>
            </div>
        </div>
    )
}

function UsersTable({ users }: { users: UserType[] }) {
    const navigate = useNavigate()


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
                organization: <div onClick={() => {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
                    navigate('/user/' + value.id)
                }
                } className='org'>{value.orgName}</div>,
                username: <div onClick={() => {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
                    navigate('/user/' + value.id)
                }} className='username'>{value.userName}</div>,
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