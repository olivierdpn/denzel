import React, { Component } from 'react';

import { Table } from 'reactstrap';



class TestApi extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          item : [],
          isLoaded: false,
        }
      }
  componentDidMount(){
    fetch('http://localhost:9292/movies/populate')
    .then(res => res.json())
    .then(json =>{
        this.setState({
          isLoaded : true,
          item : json,
        })
    }
      
    )

}
  render() {
    var { isLoaded , item} = this.state

    if(!isLoaded){
      return <div>Loading....</div>
    }
    else{
    return (
      <div>
        
          {item.map(it=>(<div>
            Title : {it.title}
            </div>
          ))}
        
        </div>
    );
  }
  }
}

export default TestApi;