import React from 'react';
import Cropper from 'cropperjs';

import Answers from './Answers';
import Question from './Question';
import {
	Header,
	Segment,
	Button,
	Icon,
	Form,
	Label,
	Message,
	Grid
} from 'semantic-ui-react';

class FormAddQuestion extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: {
				visible: true,
			},
			question: {
				name: '',
				image: null,
			},
			answers: ['', '', '', ''],
		};
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.dt === parseInt(new Date().getTime() / 1000, 10))
			this.cropper.replace(this.state.question.image);
	}

	componentDidMount() {
		this.cropper = new Cropper(this.imageCropElement, {
			dragCrop: false,
			// cropBoxResizable: false,
			autoCropArea: 0,
			highlight: false,
			zoomable: false,
			checkCrossOrigin: false,

			modal: true,
			guides: true,
			center: true,
			background: true,
			autoCrop: true,
			cropBoxMovable: true,
			aspectRatio: 1/1,
		});
	}

	handleDismiss() {
		this.setState({
			message: {
				visible: !this.state.message.visible,
			}
		});
	}

	handleSetQuestionName(questionName) {
		this.setState((state) => {
			state.question.name = questionName;
			return state;
		});
	}

	handleSetQuestionImage(imagePayload) {
		this.setState((state) => {
			this.dt = parseInt(new Date().getTime() / 1000, 10);
			state.question.image = imagePayload;
			return state;
		});
	}

	handleSetAnswers(answers) {
		this.setState({
			answers: answers
		});
	}

	handleSave() {
		const data = Object.assign({}, this.state);
		alert('FILE: ' + data.question.image);
		delete data.question.image;
		alert(JSON.stringify(data));
	}

	handleReset() {
		this.setState({});
	}

	render() {
		let message = null;
		if (this.state.message.visible) {
			message = (
				<Message info onDismiss={this.handleDismiss.bind(this)}>
			    <Message.Header>Answer </Message.Header>
			    <Message.List>
			      <Message.Item>
			      	<Label color="green" style={{opacity: '0.7'}}> </Label> - Right answer
			      </Message.Item>
			      <Message.Item>
			      	<Label color="red" style={{opacity: '0.7'}}> </Label> - Wrong answer
			      </Message.Item>
			    </Message.List>
			    <br />
			    <Message.Header>Required field - <Icon name="asterisk" /></Message.Header>
			  </Message>
			);
		}

		return (
			<Segment attached="bottom">
				<Grid container doubling columns={2}>
					<Grid.Row>
						<Grid.Column width={7}>
							<Form>
								<Header as="h1" style={{textTransform: 'uppercase'}}>Create question</Header>
								{message}

								<Question
									name={this.state.question.name}
									setQuestionName={this.handleSetQuestionName.bind(this)}
									setQuestionImage={this.handleSetQuestionImage.bind(this)}
								/>
								<Answers
									items={this.state.answers}
									setAnswers={this.handleSetAnswers.bind(this)}
								/>

								<Form.Group style={{paddingTop: '15px'}}>
									<Form.Field width="8">
										<Button basic style={{width: '100%'}} animated="vertical" onClick={this.handleReset.bind(this)}>
											<Button.Content visible>RESET</Button.Content>
											<Button.Content hidden>
												<Icon name="ban" />
											</Button.Content>
										</Button>
									</Form.Field>
									<Form.Field width="8">
										<Button basic style={{width: '100%'}} color="green" animated="vertical" onClick={this.handleSave.bind(this)}>
											<Button.Content visible>SAVE</Button.Content>
											<Button.Content hidden>
												<Icon name="save" />
											</Button.Content>
										</Button>
									</Form.Field>
								</Form.Group>
							</Form>
						</Grid.Column>

						<Grid.Column width={9}>
							<Header as="h1" style={{textTransform: 'uppercase'}}>crop image</Header>
							<div>
								<img ref={(element) => this.imageCropElement = element} src="" style={{width: '100%'}} alt="" />
							</div>
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

export default FormAddQuestion;