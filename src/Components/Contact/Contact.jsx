import React from "react";

export default function Contact() {
  return (
    <>
      <div className="myMarginTop myContacts">
        <h2 className="text-center  text-bolder pt-5 fs-1 pb-4">
          CONTACT SECTION
        </h2>
        <div className="container w-50 mb-5">
          <form>
            <div class="mb-5">
              <input
                type="text"
                class="form-control "
                id="exampleFormControlInput1"
                placeholder="userName"
              />
            </div>
            <div class="mb-5">
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="userAge"
              />
            </div>
            <div class="mb-5">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="userEmail"
              />
            </div>
            <div class="mb-5">
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="userPassword"
              />
            </div>
            <button className="btn btn-success">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
