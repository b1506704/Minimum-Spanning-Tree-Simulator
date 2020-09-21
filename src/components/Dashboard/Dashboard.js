import React from 'react';
const { ipcRenderer } = window.require('electron');
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password:''
    };
  }  
  
  render(){
    ipcRenderer.on('get-user-data',(event,arg)=>{
      this.setState({
        name: arg.name,
        email: arg.email,
        password: arg.password
      });      
    });
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let name=document.getElementById('name');
    email.innerHTML=this.state.email;
    password.innerHTML=this.state.password;
    name.innerHTML=this.state.name;   
    return (
      <div>
        Name: <p id="name"> </p>
        Email: <p id="email"> </p>
        Password: <p id="password"></p>
  
     </div>
    )
  };  
}


