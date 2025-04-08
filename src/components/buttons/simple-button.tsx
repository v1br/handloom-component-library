import React from "react";

export interface ButtonProps {
	label: string;
}

const SimpleButton = (props: ButtonProps) => {
	return <button type="button">{props.label}</button>;
};

export default SimpleButton;
