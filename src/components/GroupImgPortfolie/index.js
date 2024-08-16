import React from 'react';
import ImgGroup from '../../components/ImgGroup';

import Seraph_Station from "../../assets/portfolio/image-01.jpg";
import Eebox_Building from "../../assets/portfolio/image-02.jpg";
import Federal_II_Tower from "../../assets/portfolio/image-03.jpg";
import Project_Del_Sol from "../../assets/portfolio/image-04.jpg";
import Le_Prototype from "../../assets/portfolio/image-05.jpg";
import B_Tower from "../../assets/portfolio/image-06.jpg";
import Grand_Edelweiss_Hotel from "../../assets/portfolio/image-07.jpg";
import Netcry_Tower from "../../assets/portfolio/image-08.jpg";
import Hypers from "../../assets/portfolio/image-09.jpg";
import SXIV_Tower from "../../assets/portfolio/image-010.jpg";
import Trinity_Bank_Tower from "../../assets/portfolio/image-011.jpg";
import Project_Paramour from "../../assets/portfolio/image-012.jpg";


function GroupImgPortfolie() {
return (
<>
    <div className="container-fluid px-50 d-flex flex-wrap flex-row justify-content-center align-items-center">

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Seraph_Station}
            featureTitile={"Seraph Station"}
            featureData={"September 2019"}
            alt={'Seraph Station'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Eebox_Building}
            featureTitile={"Eebox Building"}
            featureData={"August 2017"}
            alt={'Eebox Building'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Federal_II_Tower}
            featureTitile={"Federal II Tower"}
            featureData={"March 2017"}
            alt={'Federal II Tower'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Project_Del_Sol}
            featureTitile={"Project Del Sol"}
            featureData={"Janaury 2016"}
            alt={'Project Del Sol'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Le_Prototype}
            featureTitile={"Le Prototype"}
            featureData={"October 2015"}
            alt={'Le Prototype'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={B_Tower}
            featureTitile={"228B Tower"}
            featureData={"April 2015"}
            alt={'228B Tower'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Grand_Edelweiss_Hotel}
            featureTitile={"Grand Edelweiss Hotel"}
            featureData={"December 2013"}
            alt={'Grand Edelweiss Hotel'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Netcry_Tower}
            featureTitile={"Netcry Tower"}
            featureData={"August 2012"}
            alt={'Netcry Tower'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Hypers}
            featureTitile={"Hypers"}
            featureData={"Janaury 2012"}
            alt={'Hypers'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={SXIV_Tower}
            featureTitile={"SXIV Tower"}
            featureData={"March 2011"}
            alt={'SXIV Tower'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Trinity_Bank_Tower}
            featureTitile={"Trinity Bank Tower"}
            featureData={"September 2010"}
            alt={'Trinity Bank Tower'}
            />
        </div>

        <div className="col-lg-4 p-3">
            <ImgGroup
            featureImg={Project_Paramour}
            featureTitile={"Project Paramour"}
            featureData={"February 2008"}
            alt={'Project Paramour'}
            />
        </div>

    </div>
</>
)
}

export default GroupImgPortfolie;