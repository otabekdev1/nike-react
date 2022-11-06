import React from "react";
import bigimg from "../images/bigimg.png";
import img1 from "../images/firstrow.png";
import img2 from "../images/second.png";
import img3 from "../images/three.png";
import img4 from "../images/four.png";
export default function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="row  ">
          <div
            style={{ overflow: "hidden" }}
            className="col-12 col  col-xl-6 col-lg-6  col-md-12"
          >
            <img
              className="img-box col-md-12 col-12"
              style={{ marginBottom: "30px" }}
              src={bigimg}
              alt=""
            />
            <h1 className="col-md-12" style={{ marginBottom: "30px" }}>
              Шорты <span>Nike Neoline</span>
            </h1>
            <p className="p-box  col-12 " style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deser
            </p>
          </div>
          <div className="col-12 col flex-direction-column col-xl-6 col-lg-6 ">
            <div className="box d-flex  ">
              <img
                className="small-box-img col-md-6  "
                style={{
                  marginBottom: "27px",
                  width: "159px",
                  height: "160px",
                }}
                src={img1}
                alt=""
              />
              <div className="text col-md-6">
                <h1>Шорты Nike Keds </h1>
                <p
                  className="none-p"
                  style={{ width: "350px", height: "53px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
                  elit, sed do eiusmod tempor incididunt <br /> ut labore et
                  dolore magna aliqua. Ut enim ad <br /> minim veniam, quis
                  nostrud exercitation ullamco <br />
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                </p>
              </div>
            </div>
            <div className="box d-flex   ">
              <img
                className="small-box-img"
                style={{ marginBottom: "27px" }}
                src={img2}
                alt=""
              />
              <div className="text">
                <h1>Шорты Nike Shooter</h1>
                <p
                  className="none-p"
                  style={{ width: "350px", height: "53px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
                  elit, sed do eiusmod tempor incididunt <br /> ut labore et
                  dolore magna aliqua. Ut enim ad <br /> minim veniam, quis
                  nostrud exercitation ullamco <br />
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                </p>
              </div>
            </div>
            <div className="box d-flex  ">
              <img
                className="small-box-img"
                style={{ marginBottom: "27px" }}
                src={img3}
                alt=""
              />
              <div className="text">
                <h1>Шорты Nike Impulse </h1>
                <p
                  className="none-p"
                  style={{ width: "350px", height: "53px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
                  elit, sed do eiusmod tempor incididunt <br /> ut labore et
                  dolore magna aliqua. Ut enim ad <br /> minim veniam, quis
                  nostrud exercitation ullamco <br />
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                </p>
              </div>
            </div>
            <div className="box d-flex  ">
              <img className="small-box-img" src={img4} alt="" />
              <div className="text">
                <h1>Шорты Nike Nuke </h1>
                <p
                  className="none-p"
                  style={{ width: "350px", height: "53px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
                  elit, sed do eiusmod tempor incididunt <br /> ut labore et
                  dolore magna aliqua. Ut enim ad <br /> minim veniam, quis
                  nostrud exercitation ullamco <br />
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
