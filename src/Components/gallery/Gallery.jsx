import "./gallery.css";
import React ,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1   from  "../images/gimg-1.jpg";
import img2   from  "../images/gimg-2.jpg";
import img3   from  "../images/gimg-3.jpg";
import img4   from  "../images/gimg-4.jpg";
import img5   from  "../images/gimg-5.jpg";
import img6   from  "../images/gimg-6.jpg";
import img7   from  "../images/gimg-7.jpg";


function Gallery(){
    return(
    <div className="gallery-box">
    <h2 className="heading">Gallery</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor dolor sit amet mollis semper. Maecenas massa dolor, congue et risus vel,</p>
        <div className="gallery">
            <div className="img-1">
            <img src={img1} alt=""/>
            </div>
            <div className="img-2">
            <img src={img2} alt=""/>
            </div>
            <div className="img-3">
            <img src={img3}alt=""/>
            </div>
            <div className="img-4">
            <img src={img4}alt=""/>
            </div>
            <div className="img-5">
            <img src={img5}alt=""/>
            </div>
            <div className="img-6">
            <img src={img6}alt=""/>
            </div>
            <div className="img-7">
            <img src={img7}alt=""/>
            </div>
            
        </div>
        <div  className="button">
          <a className="btn" href="#">See more</a>
            </div>
        </div>
    );

}
export default Gallery;