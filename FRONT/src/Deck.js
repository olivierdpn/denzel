import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Media, CardDeck } from 'reactstrap';

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  class Deck extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          item : [],
          pic : "",
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
        var ref1  = getRandomInt(55)
        var ref2 =  getRandomInt(55)
        var ref3  = getRandomInt(55)
        var ref4 =  getRandomInt(55)
        var ref5  = getRandomInt(55)
        var ref6 =  getRandomInt(55)
    return (
      <div>

        <CardDeck>
      <Card>
        <CardImg top width="100%" src={item[ref1].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[ref1].title}</CardTitle>
          <CardSubtitle className="text-danger">Rating : {item[ref1].rating}</CardSubtitle>
          <CardText>{item[ref1].synopsis}</CardText>
          <a href={item[ref1].link}><Button >View Site !</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[ref2].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[ref2].title}</CardTitle>
          <CardSubtitle className="text-danger">Rating : {item[ref2].rating}</CardSubtitle>
          <CardText>{item[ref2].synopsis}</CardText>
          <a href={item[ref2].link}><Button >View Site !</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[ref3].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[ref3].title}</CardTitle>
          <CardSubtitle className="text-danger">Rating : {item[ref3].rating}</CardSubtitle>
          <CardText>{item[ref3].synopsis}</CardText>
          <a href={item[ref3].link}><Button >View Site !</Button></a>
        </CardBody>
      </Card>
      
      <Card>
        <CardImg top width="100%" src={item[ref4].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[ref4].title}</CardTitle>
          <CardSubtitle className="text-danger">Rating : {item[ref4].rating}</CardSubtitle>
          <CardText> {item[ref4].synopsis}</CardText>
          <a href={item[ref4].link}><Button >View Site !</Button></a>
        </CardBody>
      </Card>
      
      
    </CardDeck>
     
        </div>
    );
  }
  }
}

export default Deck;