import React from 'react';
const { ipcRenderer } = window.require('electron');
export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadFile: false,
      isNewFile: false
    };
  }  
  // after component finish loading
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        nisLoadFile: false,
        isNewFile: false
      });
    },1000);
  }
  //real-time update
  componentDidUpdate(){

  } 
  
//   onTypingUserInfo = (event) =>{
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
    
//   }
  onNewFile = ()=> {    
    this.setState({
        isNewFile:true,
        isLoadFile:false
    });
    ipcRenderer.send('request-user-info',this.state);
  }
  onLoadFile = ()=>{   
    this.setState({
        isNewFile:false,
        isLoadFile:true
    })
    ipcRenderer.send('request-user-info',this.state);
  }
  render(){
    
    return (
      <div>
        <div id="background">
            <p> Welcome to Minimun Spanning Tree Simulator </p>  
            <button id="openBtn" onClick={this.onNewFile}> OpenFile </button>
            <button id="loadBtn" onClick={this.onLoadFile}> LoadFile </button>
        </div>
        
  
     </div>
    )
  };  
}


