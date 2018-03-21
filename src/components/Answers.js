import React from 'react';
import { Label, Form, Input } from 'semantic-ui-react';

export default class Answers extends React.Component {
	render() {
		const answers     = this.props.items;
		let resultAnswers = null;

		if (answers && answers.length > 0) {
			resultAnswers = answers.map((answer, index) => {
				return (
					<Form.Field key={index}>
						<label>
							Answer {index + 1} <Label color={index === 0 ? 'green' : 'red'} style={{opacity: '0.7'}}> </Label>
						</label>
						<Input
							label={{ icon: 'asterisk' }}
					    labelPosition='right corner'
					    placeholder='Search...'
							type="text"
							placeholder={'Answer ' + (index + 1)}
							onChange={(e) => {
								answers[index] = e.target.value;
								this.props.setAnswers(answers);
							}}
						/>
					</Form.Field>
				);
			});
		}

		return (
			<div>
				{resultAnswers}
			</div>
		);
	}
}
