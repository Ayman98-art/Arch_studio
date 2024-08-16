import React from "react";
import HeadSection from "../HeadSection";
import ImgGroup from "../ImgGroup";
import projectdelsol from "../../assets/features/project-del-sol.jpg";
import Tower from "../../assets/features/Tower-228b.jpg";
import laPrototype from "../../assets/features/la-prototype.jpg";

function Featured() {
  return (
    <div className="pb-5">

      <HeadSection />

      <div className="container-fluid px-50 d-flex flex_direction justify-content-center align-items-center">

        <div className="col-lg-4 p-2">
          <ImgGroup
            featureImg={projectdelsol}
            featureTitile={"Project Del Sol"}
            featureData={"Janaury 2016"}
            featureNO={"1"}
          />
        </div>

        <div className="col-lg-4 p-2">
          <ImgGroup
            featureImg={Tower}
            featureTitile={"228B Tower"}
            featureData={"April 2015"}
            featureNO={"2"}
          />
        </div>

        <div className="col-lg-4 p-2">
          <ImgGroup
            featureImg={laPrototype}
            featureTitile={"Le Prototype"}
            featureData={"October 2015"}
            featureNO={"3"}
          />
        </div>

      </div>
    </div>
  );
}

export default Featured;
