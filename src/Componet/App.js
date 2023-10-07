import React, {Component} from 'react';
import './App.css';
import FullName from './Fullname';
import Bio from './Bio';
import ImgSrc from './imgSrc';
import Profession from './Profession';

class App extends Component {

  constructor(){
    super()
    this.state ={
      fullName:'Adeem',
      bio:16,
      imgSrc:'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png',
      profession:'test',
      boolean:false,
      compteurApp:0
      }
    }


    componentDidMount(){
      setInterval( ()=> this.setState({compteurApp:this.state.compteurApp +1}),1000 ) 
    }


  render(){
    console.log(this.state.boolean)
    return (
        <>
        {
          this.state.boolean?
          <>
            <FullName pro={this.state.fullName}/>
            <Bio pro={this.state.bio}  />
            <ImgSrc pro={this.state.imgSrc} />
            <Profession pro={this.state.profession}/>
          </>:null
        }

          <button onClick={()=>this.setState({boolean:!this.state.boolean})  } >click me</button>
          <p>{this.state.compteurApp}</p>
        </>
    );
  }

}

export default App;