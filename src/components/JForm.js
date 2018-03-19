import React from 'react';
import JInput from './JInput';

import './JForm.css';

export function JFormGroup(props) {
	return (
		<div className="jform-group">
			{props.children}
		</div>
	);
}

export function JFormItem(props) {
	return (
		<div className="jform-group__item">
			<JInput
				icon={props.icon}
				placeholder={props.placeholder}
			/>
		</div>
	);
}