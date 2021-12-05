import react from "react";
import './App.css';
import { Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";

class Mycompteur extends Component{
    constructor(){
        super();
            this.state ={
                count : 0
        }
    }

    ajouter() {
        this.setState({
            count: this.state.count +1
        })
    }

    supprimer(){
        this.setState({
            count: this.state.count -1
        })
    }

    render(){
        return(
         <div className='container '>
         <br/><br/><br/><br/>
            <Card  className="mb-2">
            <Card.Header><h1> Compteur</h1></Card.Header>
                 <Card.Body>
                    <Card.Title>     <h1>Count: {this.state.count}</h1> </Card.Title>
                      <Card.Text>
                        <Button variant="success"  onClick={()=> this.ajouter()}>Ajouter  1</Button>
                        <Button variant="danger"  onClick={this.supprimer.bind(this)}>Enlever 1</Button>
                    </Card.Text>
                 </Card.Body>
             </Card>
         
         </div>
        );
    }
}
export default Mycompteur;