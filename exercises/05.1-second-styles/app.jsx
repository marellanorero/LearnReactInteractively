import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	backgroundColor: "yellow",
	fontSize: "16px",
	border: "none",
	color: "black",
};

const badgeStyles = {
	//write the span styles here
	backgroundColor: "red",
	borderRadius: "50%",
	padding: "3px",
	margin: "3px",
	color: "white",
	fontSize: "16px",
};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
