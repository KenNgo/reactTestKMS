import React from 'react';

console.clear();

const Title = ({itemCount}) => {
   	return (
      	<h3 className="app--title">Test</h3>
   	);
}

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {data: []};
		this.updateState = this.updateState.bind(this);
	}
	updateState(e) {
		this.state.data.push({"numberOfBoxes": e.target.value});
		console.log(this.state);
	}
   	render() {
      	return (
      		<div className="app">
      			<Title />
      			<InputNumber myDataProp={this.state.data} updateStateProp={this.updateState} />
        	</div>
      	);
   	}
}

class InputNumber extends React.Component {
	render () {
		return (
			<div className="app--form">
            	<input type="number" size="50" value= {this.props.myDataProp} onChange={this.props.updateStateProp} />
	      	</div>
		);
	}
}
export default App;