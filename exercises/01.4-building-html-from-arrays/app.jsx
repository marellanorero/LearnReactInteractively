import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const linkItems = ["google.com", "facebook.com", "amazon.com"];
const navlinkItems = linkItems.map((linkItems, index) => (
	<li key={index} className="nav-item">
		<a className="nav-link" href="#">
			Link to {linkItems}
		</a>
	</li>
));
console.log(navlinkItems);

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
