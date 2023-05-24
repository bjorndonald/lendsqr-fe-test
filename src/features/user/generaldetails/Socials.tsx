import React from 'react'
import { useUserContext } from '../../../pages/user/user.context'

function Socials() {
    const { user } = useUserContext()
    return (
        <section id='socials'>
            <h5>Socials</h5>
            <div className="d-flex">
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Twitter</small>
                        <h6>{user?.socials.twitter}</h6>
                    </div>

                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Facebook</small>
                        <h6>{user?.socials.facebook}</h6>
                    </div>

                </div>
                <div className="d-flex column">
                    <div className="d-flex flex-column">
                        <small>Instagram</small>
                        <h6>{user?.socials.instagram}</h6>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Socials