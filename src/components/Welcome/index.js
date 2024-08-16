import React from 'react';
import WelcomeLeft from '../WelcomeLeft';
import WelcomeRigth from '../WelcomeRigth';
import Style from './Welcome.module.css'

function Welcome() {
return (
<>
    <div className=' position-relative container py-75 d-flex justify-content-between align-items-center'>
        <h2 className={Style.pos_word}>Welcome</h2>
        <WelcomeLeft />
        <WelcomeRigth />
    </div>
</>
)
}

export default Welcome;