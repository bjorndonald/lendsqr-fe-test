import React from 'react'
import { useUserContext } from '../../../pages/user/user.context'

function Guarantor() {
    const { user } = useUserContext()
    return (
        <div id='guarantor'>
            <h5>Guarantor</h5>
            <section>
                <div className="d-flex">
                    <div className="d-flex column">
                        <div className="d-flex flex-column">
                            <small>full Name</small>
                            <h6>{user?.guarantor.firstName} {user?.guarantor.lastName}</h6>
                        </div>
                    </div>

                    <div className="d-flex column">
                        <div className="d-flex flex-column">
                            <small>Phone Number</small>
                            <h6>{user?.guarantor.phoneNumber.split('x')[0]}</h6>
                        </div>
                    </div>

                    <div className="d-flex column">
                        <div className="d-flex flex-column">
                            <small>Gender</small>
                            <h6>{user?.guarantor.gender}</h6>
                        </div>
                    </div>

                    <div className="d-flex column">
                        <div className="d-flex flex-column">
                            <small>Address</small>
                            <h6>{user?.guarantor.address}</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Guarantor