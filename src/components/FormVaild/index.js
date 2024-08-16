import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import style from './FormVaild.module.css';

function FormVaild() {

return (
<>
<form method='get' action='#'>
    <div>

        <div>
            <input className={style.input} 
            type='text' placeholder='Name' 
            required
            />
        </div>

        <div>
            <input className={style.input} 
            type='email' placeholder='Email' 
            required
            />
        </div>

        <div>
            <textarea className={style.textarea} 
            type='text' 
            rows={5}
            placeholder='Massage' 
            />
        </div>

        <div className={style.btnIcon}>
            <button type='submit'>
                <MDBIcon fas icon="long-arrow-alt-right" />
            </button>
        </div>

    </div>
</form>
</>
);
}

export default FormVaild;