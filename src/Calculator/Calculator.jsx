import React from 'react';
class Calculator extends React.Component{
    state ={
        a:10,
        b:20,
        showresult:false
    
    }
    setA= e =>{
        this.setState({
           a: e.target.value,
           showresult:false
        })
    }
    
    setB= e =>{
        this.setState({
           b: e.target.value,
           showresult:false
        })
    }
    setshowresult =e => {
    this.setState(prevState =>{
        return{showresult:!prevState.showresult}
    })
}
render() {
return <div>
    <input
    className='inputA'
    onChange={
        this.setA
    }
    
    />
    <input
    className='inputB'
    onChange={
        this.setB
    }
     />
     <button onClick={this.setshowresult}>Result</button><br/>
     
     {this.state.showresult ? (<div>
    {'a= ' +this.state.a+ ' b=' +this.state.b}<br/>
    {'add=' +(this.state.a + this.state.b)}<br/>
    {'sub=' +(this.state.a-this.state.b)}<br/>
    {'mul=' +(this.state.a*this.state.b)}<br/>
    {'div=' +(this.state.a/this.state.b)}
    </div>):
    (<div>click on button</div>)}


</div>;

}
}
export default Calculator;