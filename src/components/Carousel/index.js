import React from 'react';
import { 
    MDBCarousel, 
    MDBCarouselItem, 
    MDBCarouselCaption, 
    MDBContainer 
    } from 'mdb-react-ui-kit';
import MDbtnCarsouel from '../MDbtnCarsouel';
import imgHome1 from '../../assets/home/image-hero-paramour.jpg';
import imgHome2 from '../../assets/home/image-hero-seraph.jpg';
import imgHome3 from '../../assets/home/image-hero-trinity.jpg';
import imgHome4 from '../../assets/home/image-hero-federal.jpg';
import style from'./Carousel.module.css';


export default function Carousel() {
return (
<MDBCarousel showIndicators showControls fade 
className={style.pb_75}>

    <MDBContainer> 

    <MDBCarouselItem itemId={1}>
        <img src={imgHome1} 
        className='d-block STDImg' 
        alt='Project Paramour' 
        />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <MDBCarouselCaption className={style.imgCaption}>
        <h1 className={style.headOne}>Project Paramour</h1>
        <p className={style.paragraf}>
            Project made for an art museum near Southwest London. 
            Project Paramour is a statement of bold, modern architecture.
        </p>
        <MDbtnCarsouel btnName={'See Our Portfolio'} btnLink={'/portfolio'} />
        <span className={style.span01}>01</span>
    </MDBCarouselCaption>

    </MDBCarouselItem>

    <MDBCarouselItem itemId={2}>
        <img src={imgHome2} 
        className='d-block STDImg' 
        alt='Seraph Station' 
        />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <MDBCarouselCaption className={style.imgCaption}>
        <h1 className={style.headOne}>Seraph Station</h1>
        <p className={style.paragraf}>
        The Seraph Station project challenged us to design 
        a unique station that would transport people through time. 
        The result is a fresh and futuristic model inspired by space stations.
        </p>
        <MDbtnCarsouel btnName={'See Our Portfolio'} btnLink={'/portfolio'}  />
        <span className={style.span01}>02</span>
    </MDBCarouselCaption>

    </MDBCarouselItem>

    <MDBCarouselItem itemId={3}>
        <img src={imgHome3} 
        className='d-block STDImg' 
        alt='Trinity Bank Tower' 
        />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <MDBCarouselCaption className={style.imgCaption}>
        <h1 className={style.headOne}>Trinity Bank Tower</h1>
        <p className={style.paragraf}>
        Trinity Bank challenged us to make a concept for a 84 story building 
        located in the middle of a city with a high earthquake frequency. 
        For this project we used curves to blend design and stability to meet our objectives.
        </p>
        <MDbtnCarsouel btnName={'See Our Portfolio'} btnLink={'/portfolio'}  />
        <span className={style.span01}>03</span>
    </MDBCarouselCaption>

    </MDBCarouselItem>

    <MDBCarouselItem itemId={4}>
        <img src={imgHome4} 
        className='d-block STDImg' 
        alt='Federal II Tower' 
        />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <MDBCarouselCaption className={style.imgCaption}>
        <h1 className={style.headOne}>Federal II Tower</h1>
        <p className={style.paragraf}>
            A sequel theme project for a tower originally built in the 1800s. 
            We achieved this with a striking look of brutal minimalism with modern touches.
        </p>
        <MDbtnCarsouel btnName={'See Our Portfolio'} btnLink={'/portfolio'} />
        <span className={style.span01}>04</span>
    </MDBCarouselCaption>

    </MDBCarouselItem>

    </MDBContainer>

</MDBCarousel>
);
}