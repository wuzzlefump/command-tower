import React from "react"
import { Jumbotron, Button } from 'reactstrap'
import './home.css'
import Tower from "./assets/tower.jpg"
function Home(props){

    return ( 
    <div>
        <Jumbotron className="home">
            <h1 className="display-3">Command Tower</h1>
            <img className="tower" src={Tower}></img>
            <hr className="my-2" />
            <p> a place for to reference all your commands</p>
            <p className="lead">
            </p>
        </Jumbotron>
    </div>
    )

}

export default Home;