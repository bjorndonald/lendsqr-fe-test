import React from 'react'
import { useUserContext } from '../../../pages/user/user.context'

function PersonalInformation() {
    const { user } = useUserContext()
    return (
        <section>
            <h5>Personal Information</h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>full Name</small>
                        <h6>{user?.profile.firstName} {user?.profile.lastName}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>Marital Status</small>
                        <h6>Single</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Phone Number</small>
                        <h6>{user?.profile.phoneNumber.split('x')[0]}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>Children</small>
                        <h6>None</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Email</small>
                        <h6>{user?.email}</h6>
                    </div>
                    <div className="d-flex flex-column">
                        <small>Type of residence</small>
                        <h6>{user?.profile.address}</h6>
                    </div>
                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>BVN</small>
                        <h6>{user?.profile.bvn}</h6>
                    </div>

                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Gender</small>
                        <h6>{user?.profile.gender}</h6>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default PersonalInformation