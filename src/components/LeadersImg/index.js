import React from 'react';
import Chief_Architect from '../../assets/about/avatar-jake.jpg';
import Head_of_Finance from '../../assets/about/avatar-thompson.jpg';
import Lead_Designer from '../../assets/about/avatar-jackson.jpg';
import { MDBCard, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
import style from './LeadersImg.module.css';


function LeadersImg() {
return (
<>
<div className='d-flex flex-wrap justify-content-between align-items-baseline'>

    <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='p-2'>
            <MDBCard>
                <MDBCardImage loading='lazy' className={style.cardImg} 
                src={Chief_Architect} alt='Chief Architect'/>
                <div className={style.overlay}></div>
            </MDBCard>

            <div className='d-flex align-items-center justify-content-md-between justify-content-sm-between'>

                <div className='col-lg-8 '>
                    <div className={style.cardText}>
                        <h5>Thompson Smith</h5>
                        <p className='p-0 mb-0'>Head of Finance</p>
                    </div>
                </div>

                <div className='col-lg-4 text-end'>
                    <MDBIcon fab icon="linkedin" />
                    <MDBIcon fab icon="twitter" />
                    <MDBIcon fab icon="instagram" />
                </div>

            </div>

        </div>
    </div>

    <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='p-2'>
            <MDBCard>
                <MDBCardImage loading='lazy' className={style.cardImg} 
                src={Head_of_Finance} alt='Head of Finance'/>
                <div className={style.overlay}></div>
            </MDBCard>
            <div className='d-flex align-items-center justify-content-md-between justify-content-sm-between'>

                <div className='col-lg-8 '>
                    <div className={style.cardText}>
                        <h5>Thompson Smith</h5>
                        <p className='p-0 mb-0'>Head of Finance</p>
                    </div>
                </div>

                <div className='col-lg-4 text-end'>
                    <MDBIcon fab icon="linkedin" />
                    <MDBIcon fab icon="twitter" />
                    <MDBIcon fab icon="instagram" />
                </div>

            </div>
        </div>
    </div>

    <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='p-2'>
            <MDBCard>
                <MDBCardImage loading='lazy' className={style.cardImg} 
                src={Lead_Designer} alt='Lead Designer'/>
                <div className={style.overlay}></div>
            </MDBCard>
            <div className='d-flex align-items-center justify-content-md-between justify-content-sm-between'>

                <div className='col-lg-8 '>
                    <div className={style.cardText}>
                        <h5>Jackson Rourke</h5>
                        <p className='p-0 mb-0'>Head of Finance</p>
                    </div>
                </div>

                <div className='col-lg-4 text-end'>
                    <MDBIcon fab icon="linkedin" />
                    <MDBIcon fab icon="twitter" />
                    <MDBIcon fab icon="instagram" />
                </div>

            </div>
        </div>
    </div>

    <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='p-2'>
            <MDBCard>
                <MDBCardImage loading='lazy' className={style.cardImg} 
                src={Chief_Architect} alt='Chief Architect'/>
                <div className={style.overlay}></div>
            </MDBCard>
            <div className='d-flex align-items-center justify-content-md-between justify-content-sm-between'>

                <div className='col-lg-8 '>
                    <div className={style.cardText}>
                        <h5>Thompson Smith</h5>
                        <p className='p-0 mb-0'>Head of Finance</p>
                    </div>
                </div>

                <div className='col-lg-4 text-end'>
                    <MDBIcon fab icon="linkedin" />
                    <MDBIcon fab icon="twitter" />
                    <MDBIcon fab icon="instagram" />
                </div>

            </div>
        </div>
    </div>

</div>
</>
)
}

export default LeadersImg;