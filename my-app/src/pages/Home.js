import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import { Link } from 'react-router-dom'

function Home() {
  const images = [
    { url: "image/photo-1.avif" },
    { url: "image/photo-2.avif" },
    { url: "image/photo-3.avif" },
    { url: "image/photo-4.avif" },
    { url: "image/pic3.jpg" },

  ];
  return (
    <>
      <br/><br/>
      <SimpleImageSlider
        width="100%"
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
      />

      <div className='row'>
        <div className='left col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3 '>
          <ul className="list-group" style={{ boxShadow: "0 0 5px grayText" }}>
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <br />
          <ul className="list-group" style={{ boxShadow: "0 0 5px grayText" }}>
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <br />
          <ul className="list-group" style={{ boxShadow: "0 0 5px grayText" }}>
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>

        </div>

        <div className='right col-sm-12 col-md-6 col-lg-8 col-xl-9 p-3  text-center ' >

          <div className="card" style={{width: "18rem", float:"left",margin:"80px"}}>
            <img src="image/pic5.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nature</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">See More</Link>
            </div>
          </div>

          <div className="card" style={{width: "18rem", float:"left",margin:"80px"}}>
            <img src="image/pic4.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nature</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">See More</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home

