import React, { useState } from "react";

export default function Portfolio() {
  const [pics, setPics] = useState([
    {
      id: 10,
      url: "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    },
    {
      id: 20,
      url: "https://routeegy.github.io/startFramework/assets/images/port2.png",
    },
    {
      id: 30,
      url: "https://routeegy.github.io/startFramework/assets/images/port3.png",
    },
    {
      id: 40,
      url: "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    },
    {
      id: 50,
      url: "https://routeegy.github.io/startFramework/assets/images/port2.png",
    },
    {
      id: 60,
      url: "https://routeegy.github.io/startFramework/assets/images/port3.png",
    },
  ]);

  const [myStyle, setMyStyle] = useState({
    backgroundImage: `url('https://routeegy.github.io/startFramework/assets/images/port2.png')`,
  });

  const [display, setDisplay] = useState("d-none");

  function displayPic(index) {
    setDisplay("d-flex");
    console.log(index);
    setMyStyle({ backgroundImage: `url(${pics[index].url})` });
  }

  const buttonClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="myMarginTop myPortfolio">
        <h2 className="text-center  text-bolder pt-5 fs-1 pb-4">
          PORTFOLIO COMPONENT
        </h2>
        <div className="container pb-5">
          <div className="row g-4">
            {pics.map((pic, index) => (
              <div className="col-md-4">
                <div className="position-relative item">
                  <img src={pic.url} className="w-100 rounded-2 " alt="" />

                  <div
                    onClick={() => displayPic(index)}
                    className="position-absolute item-layout rounded-2 d-flex justify-content-center align-items-center"
                  >
                    <i class=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        onClick={() => setDisplay("d-none")}
        className={`lightbox-container top-0 bottom-0 end-0 start-0 position-fixed z-3 justify-content-center align-items-center ${display}`}
      >
        <div
          onClick={(e) => {
            buttonClicked(e);
          }}
          style={myStyle}
          className="lightbox-item "
        ></div>
      </div>
    </>
  );
}
