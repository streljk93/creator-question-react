import React from 'react';
import FormAddQuestion from './FormAddQuestion';
import TableQuestions from './TableQuestions';

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<FormAddQuestion />
					</div>
					<div className="col-md-6">
						<TableQuestions />
					</div>
				</div>
			</div>
		);
	}
}

export default Content;