import React from 'react'
import { Nav } from 'react-bootstrap'
import ProfileIcon from '../../../icons/Profile.icon'
import StarIcon from '../../../icons/Star.icon'
import { TabEnum, useUserContext } from '../../../pages/user/user.context'
import { numberWithCommas } from '../../../utils/numbers'
import './userheader.style.scss'

function UserHeader() {
    const { user, setTab } = useUserContext()
    return (
        <div id='user-header'>
            <div className="d-flex profile-info align-items-center">
                <div className="profile-img">
                    <ProfileIcon color='#213F7D' />
                    <div className="img" style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: `url(${user?.profile.avatar})`
                    }}></div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                        <h3>{user?.profile.firstName + ' ' + user?.profile.lastName}</h3>
                        <h5>{user?.phoneNumber.split('x')[0]}</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <h6>User’s Tier</h6>
                        <div className="stars">
                            <StarIcon active={true} color='#E9B200' />
                            <StarIcon active={false} color='#E9B200' />
                            <StarIcon active={false} color='#E9B200' />
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h3>₦{numberWithCommas(user?.accountBalance)}</h3>
                        <small>{user?.accountNumber}/Providus Bank</small>
                    </div>
                </div>
            </div>

            <Nav>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.GENERAL)}
                        eventKey={TabEnum.GENERAL}>
                        General Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.DOCUMENTS)} eventKey={TabEnum.DOCUMENTS}>Documents</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.BANK)} eventKey={TabEnum.BANK}>Bank Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.LOANS)} eventKey={TabEnum.LOANS}>Loans</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.SAVINGS)} eventKey={TabEnum.SAVINGS}>Savings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(TabEnum.SYSTEM)} eventKey={TabEnum.SYSTEM}>App and System</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default UserHeader