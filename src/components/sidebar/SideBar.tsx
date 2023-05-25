import React from 'react'
import BriefcaseIcon from '../../icons/sidebar/Briefcase.icon'
import CaretIcon from '../../icons/Caret.icon'
import './sidebar.style.scss'
import HomeIcon from '../../icons/sidebar/Home.icon'
import UsersIcon from '../../icons/sidebar/Users.icon'
import { BLUE_COLOR } from '../../constants/strings'
import GuarantorsIcon from '../../icons/sidebar/Guarantors.icon'
import LoansIcon from '../../icons/sidebar/Loans.icon'
import HandshakesIcon from '../../icons/sidebar/Handshakes.icon'
import SavingsIcon from '../../icons/sidebar/Savings.icon'
import LoanRequestIcon from '../../icons/sidebar/LoanRequest.icon'
import WhitelistIcon from '../../icons/sidebar/Whitelist.icon'
import BankIcon from '../../icons/sidebar/Bank.icon'
import FeesIcon from '../../icons/sidebar/Fees.icon'
import TransactionsIcon from '../../icons/sidebar/Transactions.icon'
import ServicesIcon from '../../icons/sidebar/Services.icon'
import UserCogIcon from '../../icons/sidebar/UserCog.icon'
import SettlementsIcon from '../../icons/sidebar/Settlements.icon'
import ReportsIcon from '../../icons/sidebar/Reports.icon'
import KarmaIcon from '../../icons/sidebar/Karma.icon'
import PreferencesIcon from '../../icons/sidebar/Preferences.icon'
import BadgeIcon from '../../icons/sidebar/Badge.icon'
import AuditIcon from '../../icons/sidebar/Audit.icon'
import MessagesIcon from '../../icons/sidebar/Messages.icon'
import LogoutIcon from '../../icons/sidebar/Logout.icon'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../contexts/app.context'
import DownPointerIcon from '../../icons/DownPointer.icon'

function SideBar({ mobile, isMenuOpen }: { mobile: boolean, isMenuOpen: boolean }) {
    return isMenuOpen || !mobile ? (
        <div id='side-bar'>
            {mobile && <div data-testid="profile-info" className='d-flex top-section align-items-center'>
                <a>Docs</a>
                <div className="icon"><img src="/images/header/bell.png" alt="" /></div>
                <div className="profile-menu">
                    <div className="profile-img">
                        <img src="/images/header/avatar.png" alt="" />
                    </div>
                    <span>Adedeji</span>
                    <DownPointerIcon color={BLUE_COLOR} />
                </div>
            </div>}
            <div className="menu">
                <BriefcaseIcon color={BLUE_COLOR} />
                <span>Switch Organization</span>

                <CaretIcon />
            </div>

            <ul className="list">
                <li className={window.location.href.includes('dashboard') ? 'active' : ''} onClick={() => window.location.assign('/dashboard')}><HomeIcon color={BLUE_COLOR} /> <span>Dashboard</span></li>
            </ul>

            <ul className="list">
                <h5>CUSTOMERS</h5>
                <li className={window.location.href.includes('users') ? 'active' : ''} onClick={() => window.location.assign('/users')} ><UsersIcon color={BLUE_COLOR} /><span>Users</span></li>
                <li><GuarantorsIcon color={BLUE_COLOR} /><span>Guarantors</span> </li>
                <li><LoansIcon color={BLUE_COLOR} /> <span>Loans</span></li>
                <li><HandshakesIcon color={BLUE_COLOR} /><span>Decision Models</span></li>
                <li><SavingsIcon color={BLUE_COLOR} /> <span>Savings</span></li>
                <li><LoanRequestIcon color={BLUE_COLOR} /> <span>Loan Requests</span></li>
                <li><WhitelistIcon color={BLUE_COLOR} /> <span>Whitelist</span></li>
                <li><KarmaIcon color={BLUE_COLOR} /> <span>Karma</span></li>
            </ul>
            <ul className="list">
                <h5>BUSINESSES</h5>
                <li><BriefcaseIcon color={BLUE_COLOR} /> <span>Organization</span></li>
                <li><LoanRequestIcon color={BLUE_COLOR} /> <span>Loan Products</span></li>
                <li><BankIcon color={BLUE_COLOR} /> <span>Savings Products</span></li>
                <li><FeesIcon color={BLUE_COLOR} /> <span>Fees and Charges</span></li>
                <li><TransactionsIcon color={BLUE_COLOR} /> <span>Transactions</span></li>
                <li><ServicesIcon color={BLUE_COLOR} /> <span>Services</span></li>
                <li><UserCogIcon color={BLUE_COLOR} /> <span>Service Account</span></li>
                <li><SettlementsIcon color={BLUE_COLOR} /> <span>Settlements</span></li>
                <li><ReportsIcon color={BLUE_COLOR} /> <span>Reports</span></li>
            </ul>
            <ul className="list">
                <h5>SETTINGS</h5>
                <li><PreferencesIcon color={BLUE_COLOR} /> <span>Preferences</span></li>
                <li><BadgeIcon color={BLUE_COLOR} /> <span>Fees and Pricing</span></li>
                <li><AuditIcon color={BLUE_COLOR} /> <span>Audit Logs</span></li>
                <li><MessagesIcon color={BLUE_COLOR} /> <span>Systems Messages</span></li>
            </ul>

            <div className="bottom list">
                <div className="log-out">
                    <LogoutIcon color={BLUE_COLOR} /> <span>Logout</span>
                </div>

                <small>v1.2.0</small>
            </div>
        </div>
    ) : <></>
}

export default SideBar