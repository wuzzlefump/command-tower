import React from "react"
import { Jumbotron, Button } from 'reactstrap'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons'


function Home(props){

    return ( 
    <div>
        <Jumbotron className="home">
            <h1 className="display-3" >Command Tower</h1>
            <FontAwesomeIcon size="9x" icon={faBroadcastTower} />
            <hr className="my-2" />
            <p> a place to reference all your commands</p>
            <p className="lead">
            </p>
        </Jumbotron>
    </div>
    )

}

export default Home;