import "./event.min.css";
import  imgLink from "../images/img1.jpg";
import React, {useEffect} from "react";
// import "./style.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from "./useMediaQuery";


function Figure1(props){
	return(
	<div className="eventBox">
		<figure>
			<img src={props.eventLink} alt={props.eventName}/>
			<figcaption>
				<h2>{props.eventName}</h2>
				<p>{props.content}</p>
				<a href="#d" className="btn fade-out">Know More</a>
			</figcaption>
		</figure>
	</div>
	);
}
function Figure2(props){
	return(
	<div className="container">
		<section className="card" data-aos={props.fade}>
		  <img src={props.eventLink} alt={props.eventName} />
		  <div>
			<h3>{props.eventName}</h3>
			<p>{props.content}</p>
			<a href="#d" className="btn fade-out">Know More</a>
		  </div>
		</section>
	  </div>
	);
}

function Figure() {
	const eventOneConent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	const eventTwoConent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

	const matches = useMediaQuery("(min-width: 968px");
    useEffect(() => {
        AOS.init({
            offset: 400,
            delay: 0,
            duration: 1000
          });
    }, []);
    return(
    <section>
      {matches ? 
		<>
	  <Figure1 
		  eventLink={imgLink} 
		eventName="Srijan" 
		content={eventOneConent}
	  /> 
	  <Figure1 
		eventLink={imgLink} 
		eventName="Empessario" 
		content={eventTwoConent}
	  /> 
	  </>
	  :
	  <>
	  <Figure2 
		eventLink={imgLink}
		fade="fade-left"
		eventName="Srijan" 
		content={eventOneConent}
	  />
	  <Figure2 
		eventLink={imgLink}
		fade="fade-left"
		eventName="Empressario" 
		content={eventTwoConent}
	  />
	  </>
	  }
    </section>
    );
}
function Event() {
	return ( 
		<section className = "event-info">
			<div className="event-badge">
				<div className="badgeContent">
					<h3>ECell - NIT Silhar</h3>
					<h4>Event Highlights</h4>
				</div>
			</div>
			<Figure/>
		</section>
	)
}

export default Event;