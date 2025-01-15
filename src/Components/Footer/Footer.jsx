import React from "react";

export default function Footer() {
  return (
    <>
      <div className="myFooter bottom-0 position-relative start-0 end-0 pt-5 text-center text-white">
        <div className="container  py-5">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div>
                <i class="icons fa-brands fa-facebook"></i>
                <i class="icons fa-brands fa-twitter"></i>
                <i class="icons fa-brands fa-linkedin-in"></i>
                <i class="icons fa-solid fa-globe"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="mySmallerFooter pt-4 pb-2 mt-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
