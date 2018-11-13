import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login';
import UploadScreen from './UploadScreen';
import LoginScreen from './LoginScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

//injectTapEventPlugin();
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })

                    
  }

  render() {
    return (
      
      <div className="App">
      {this.state.loginPage}
      {this.state.uploadScreen}
    </div>
    );
  }
}

export default App;
