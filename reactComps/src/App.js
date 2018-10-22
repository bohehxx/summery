import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import Dialog from './components/dialog/dialog.js'
import {Link} from 'react-router-dom'
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            showDialog:false
        }

    }
    openDialog(){
        this.setState({
            showDialog:true
        })
    }
    closeDialog(){
        this.setState({
            showDialog:false
        })
    }
    ok(){
        this.closeDialog();
        console.log('确定事件');
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>
              <button onClick={this.openDialog.bind(this)}>弹框
              </button>
          </p>
          <p>
              <Link to="/dashboard">
                dashboard
              </Link>

          </p>
          {
            this.state.showDialog?
                <Dialog closeDialog={this.closeDialog.bind(this)}
                        ok={this.ok.bind(this)}>
                    22222222222222
                </Dialog>:null
      }

      </div>
    );
  }
}

export default App;
