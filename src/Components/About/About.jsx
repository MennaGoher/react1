import React from "react";

export default function About() {
  return (
    <>
      <div className="myMarginTop myAbout  text-white py-5">
        <h2 className="text-center text-bolder pt-5 fs-1 pb-4">
          ABOUT COMPONENT
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-5 ">
              <p className=" pb-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-1 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
