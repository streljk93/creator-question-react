import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon, Input } from 'semantic-ui-react';

export default class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			imageData: null,
		};

		this.handleSetQuestion = this.handleSetQuestion.bind(this);
	}

	handleSetQuestion(event) {
		if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
				this.props.setQuestionImage(e.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
	}

	render() {
		return (
			<Form.Group>
				<Form.Field width={13}>
					<label>Question name</label>
					<Input 
						label={{ icon: 'asterisk' }}
				    labelPosition='right corner'
						type="text"
						placeholder="Question name"
						defaultValue={this.props.name}
						onChange={(e) => {this.props.setQuestionName(e.target.value)}}
					/>
				</Form.Field>
				<Form.Field width={5}>
					<label>Select image</label>
					<Button basic style={{height: '38px', width: '100%'}} icon labelPosition="left">
						<input
							type="file"
							style={{
								position: 'absolute',
								left: '0',
								top: '0',
								height: '100%',
								opacity: '0',
								zIndex: '2',
							}}
							onChange={this.handleSetQuestion}
						/>
						<Icon name="upload" />
						Upload
					</Button>
				</Form.Field>
			</Form.Group>
		);
	}
}

Question.propTypes = {
	name: PropTypes.string,
};