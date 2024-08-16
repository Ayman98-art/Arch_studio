import React from 'react'
import style from './AboutContactText.module.css'

function AboutContactText({h1AboutContact, h2AboutContact, pAboutContact}) {
return (
<>
<div>
    <div>
        <h1 className={style.h1AboutContact}>{h1AboutContact}</h1>
    </div>
    <hr className={style.hrAboutContact}/>
    <div>
        <h2 className={style.AboutContact}>{h2AboutContact}</h2>
        <div className={style.pAboutContact}>
            <p>
                {pAboutContact}
            </p>
        </div>
    </div>
    <div className={style.bg_text}></div>
</div>
</>
)
}

export default AboutContactText;