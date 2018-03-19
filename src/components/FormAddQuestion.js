import React from 'react';
import { JFormGroup, JFormItem } from './JForm';

class FormAddQuestion extends React.Component {
	render() {
		return (
			<form>
				<JFormGroup>
					<JFormItem icon="question" placeholder="Enter your question..." />
				</JFormGroup>
			</form>
		);
	}
}

export default FormAddQuestion;