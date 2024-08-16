import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Style from "./ImgGroup.module.css";

function ImgGroup({ featureImg, featureTitile, featureData, featureNO }) {
  return (
    <>
      <MDBCard className={Style.width_100}>
        <MDBCard className="bg-image STDImg_card">
          <MDBCardImage
            src={featureImg}
            loading="lazy"
            className="STDImg position-relative"
            alt={featureTitile}
          />
          <div
            className="mask "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>

          <div className={Style.MDBCard_text}>
            <MDBCardTitle>{featureTitile}</MDBCardTitle>
            <MDBCardText className="p-0">{featureData}</MDBCardText>
          </div>

          <div className={Style.featureNO}>
            <span>{featureNO}</span>
          </div>
        </MDBCard>
      </MDBCard>
    </>
  );
}

export default ImgGroup;
