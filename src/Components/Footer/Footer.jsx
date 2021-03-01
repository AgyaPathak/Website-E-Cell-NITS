import "./footer.min.css";
import logo from "../images/ecell-logo.png";
// import <script defer src="https://use.fontawesome.com/releases/v5.15.2/js/all.js" integrity="sha384-vuFJ2JiSdUpXLKGK+tDteQZBqNlMwAjhZ3TvPaDfN9QmbPb7Q8qUpbSNapQev3YF" crossorigin="anonymous"></script>
import {FaFacebook, FaInstagram, FaUserTie, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowCircleUp, FaLinkedinIn} from "react-icons/fa"

function Social(props){
	const icon = () => {
		if(props.FaIcons==="FaFacebook")
			return <FaFacebook className="icons"/>
		else if(props.FaIcons==="FaInstagram")
			return <FaInstagram className="icons"/>
		else if(props.FaIcons==="FaLinkedinIn")
			return <FaLinkedinIn className="icons"/>
	}
	return(
    <li>
			<a href={props.link} target="__blank">{icon()}</a>
			<span>{props.iconName}</span>
		</li>
	);
}
function Address(props){
	const icon = () => {
		if(props.FaIcons==="FaPhoneAlt")
			return <FaPhoneAlt/>
		else if(props.FaIcons==="FaMapMarkerAlt")
			return <FaMapMarkerAlt />
		else if(props.FaIcons==="FaUserTie")
			return <FaUserTie/>
		else
			return "";
	}
	return(
			<ul>
				<li>
				{icon()}
				<span>{props.spanVal}</span>
			</li>
			</ul>
	);
}
function FCol1(){
	return(
		<div className="fcol-1">
			<div>
				<img src={logo} alt="Ecell" />
				<h1>E-Cell</h1>
				<h3>NIT Silchar</h3>
			</div>
			<ul>
				<Address FaIcons="FaUserTie" spanVal="Entropreneur"/>
				<Address FaIcons="FaMapMarkerAlt" spanVal="NIT Silchar, Silchar, Assam, India,788010"/>
				<Address FaIcons="FaPhoneAlt" spanVal="0123456789"/>
			</ul>
	</div>
	);
}

function FCol2(){
	return(
		<div className="fcol-2">
			<h2>Be Social</h2>
			<hr />
			<ul>
				<Social link="https://www.facebook.com" FaIcons="FaFacebook" iconName="facebook" />
				<Social link="https://www.instagram.com" FaIcons="FaInstagram" iconName="instagram" />
				<Social link="https://www.inkedin.com" FaIcons="FaLinkedinIn" iconName="linkedin" />
			</ul>
		</div>
	)
}

function FCol3(){
	return (
		<div className="fcol-3">
			<h2>Subscribe</h2>
			<hr />
			<p>Keep yourself updated. Subscribe to our 	newsletter</p>
			<input type="email" placeholder="Enter Your Email" />
			<button><FaEnvelope size="1.6rem" color="#123" /></button>
		</div>
	)
}

function FooterTop(){
	return(
		<div className="footer-top">
			<FCol1 />
			<FCol2 />
			<FCol3 />
		</div>
	)
}

function FooterBottom(){
	return(
		<div className="footer-bottom">
			<p>All Rights Reserved  ©  E-Cell, NIT Silchar</p>
			<button><FaArrowCircleUp size="1.2rem"/></button>
		</div>
	)
}
function Footer() {
	return (
	<footer>
		<FooterTop />
		<FooterBottom />
	</footer>
	)
}

export default Footer;