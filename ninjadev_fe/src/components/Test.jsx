import React from 'react';
import Form from './Form.jsx'
import './layout/Test.css'





export default class Test extends React.Component {
    constructor(){
           super();
           this.state = {
                black: true
           }
      }
  
      changeColor(){
          this.setState({black: !this.state.black})
      }
  
      render(){
          let btn_class = this.state.black ? "cadastraHidden" : "cadastraShow";
  
          return (
               <div>
                    <button className="button button2" 
                            onClick={this.changeColor.bind(this)} >
                            Cadastre-se Já!
                    </button>
                    <div className={btn_class}>
                        <Form/>
                    </div>
               </div>
          )
      }
  }
  

  