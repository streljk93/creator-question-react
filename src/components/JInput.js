import React from 'react';

import './JInput.css';

export default function JInput(props) {

	return (
		<div className="jinput">
			<span className={'jinput__icon' + (props.icon ? '' : ' jinput__icon_hidden')}>
				<i className={`fa fa-${props.icon}`}></i>
			</span>
			<input type="text"
				placeholder={props.placeholder}
				className={'jinput__field' + (props.icon ? '' : ' jinput__field_without-icon')}
			/>
		</div>
	);
}