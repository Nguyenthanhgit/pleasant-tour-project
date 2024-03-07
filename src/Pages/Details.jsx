import React from 'react';
import Menu from '../Components/Menu';

function Details() {
  return (
    <div>
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <Menu />
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Details
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="package-details">
          <img
            className="package-image"
            src="/img/package-1.jpg"
            alt="Package Image"
          />
          <h2>Package Details</h2>
          <p>
            <strong>Package Name:</strong> Awesome Package
          </p>
          <p>
            <strong>Description:</strong> This is an amazing package that
            includes a variety of awesome features.
          </p>
          <p>
            <strong>Price:</strong> $99.99
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
