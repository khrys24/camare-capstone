import React from "react";

const Testimonials = () => {
  return (
    <div className="container-fluid" style={{height:"400px", display:"flex", alignItems:"center", fontSize:"1.5rem", color:"#ce65cc", width:"60%", margin:"auto"}}>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <p>
                <em>
                  "Cake and delivery is perfect! A very trustworthy cakeshop.
                  Thank you Camare cakes!"
                
                <br />
                <br />
                -Cardo Dalisay
                </em>
              </p>
            </div>
            <div className="carousel-item ">
              <p>
                <em>
                  "Delicious cakes! My family have raved since we tested the cake. All we had to do was wait and eat.
                  We couldn't have been more pleased!"
                
                <br />
                <br />
                -Taylor Swift
                </em>
              </p>
            </div>
            <div className="carousel-item ">
              <p>
                <em>
                  "The staff was so accommodating and friendly. Delivery and execution was great. Will order again"
                
                <br />
                <br />
                -Gal Gadot
                </em>
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
