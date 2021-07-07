import React, { Component } from 'react';

class App extends Component{

  hiClicked(){
    alert('helo kishore')
  }
  

  hiClickedWithParams(data){
    alert('hi'+data)
  }
addNum(num1){
  let num2=2;
  let num3=num1*num2;
  alert (num3);
}

  render(){

    return(
      <div>
        <h1 onClick={this.hiClicked}>Hello kishore</h1>
      <h1 onClick={()=>this.hiClickedWithParams('kishore how are you')}>hi </h1>

      <h1 onClick={()=>this.addNum(2)}>add number s</h1>

      </div>
    )
  }

}
export default App;
