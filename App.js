import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      val: 0,
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this);
    this.colorCheck = this.colorCheck.bind(this);
    this.increment = this.increment.bind(this);
  }
  //Gets called once
    //At this point => no access to DOM but have access to state and props
  componentWillMount() {
    console.log('Mounting');
    this.setState({m:2});
  }
  //Once the DOM loads, this gets fired
  componentDidMount() {
    console.log('Mounted');
    this.inc = setInterval(this.increment, 1000)
  }
  componentWillUnMount() {
    console.log('Bye');
    clearInterval(this.inc);
  }


  update(event) {
    this.setState({ txt: event.target.value})
  }

  increment() {
    console.log('FIRED')
    this.setState({
      val: this.state.val + 1
    })
  }

  colorCheck(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }

  render() {
    return (
      <div>
        {this.state.txt}
        <br/>
        <CounterButton increment={this.increment} />
        {this.state.val}
        <br/>
        {this.state.val * this.state.m}
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} />
        <br />
        <hr />
        <br />

        <Slider ref="red" colorCheck={this.colorCheck} />
        {this.state.red}
        <br /><br />
        <Slider ref="green" colorCheck={this.colorCheck} />
        {this.state.green}
        <br />
        <br /><br />
        <Slider ref="blue" colorCheck={this.colorCheck} />
        <br />
        {this.state.blue}
      </div>
    )
    {/*This is a comment*/}

    {/*React don't like like if statements so use ternary operations instead*/}
    {i>1 ? 'More than one': 'one'}
  }
}


class Wrapper extends React.Component {

  constructor() {
    super();
  }

  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    )
  }
}

class CounterButton extends React.Component {
  render() {
    console.log('Boom');
    return (
      <button onClick={this.props.increment}>Click me</button>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range"
        min="0"
        max="255"
        onChange={this.props.colorCheck} />
    )
  }
}



const Widget = (props) => {
  return (
      <div>
        <input type="text"
          onChange={props.update} />
        <Button>I <Heart/> React</Button>
        <h3>{props.txt}</h3>
      </div>
    )
}

const Heart = () => {

  var myStyle = {
    backgroundColor: '#000',
    color: 'red'
  }
  return (
    <span style={myStyle} className="glyphicon glyphicon-heart"></span>
  )
}


//Stateless function component
  //no state
// const App = () => <h1>Hello Eggheads</h1>


//This is set for Wrapper
export default Wrapper
// export default App