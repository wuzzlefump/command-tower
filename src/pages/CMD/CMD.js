import React, {useState, useEffect} from "react"
import { Container, Row, Col,Jumbotron, Table, Button} from 'reactstrap';
import commands from './commands.json'
import './CMD.css'
import Example from './components/info'


function CMD(props){

    let [pageState,setPage]=useState(commands[0])

    const changePage = (e)=>{
      let x = e.target.name
      setPage(commands[x]);
    }
    useEffect(()=>{
        setPage(commands[0])
    },[])

    return (
    <Container>
        <Row>
        <Col sm="12" md="4">
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-3">CMD</h1>
                <p className="lead">Choose an OS to find the default commands for</p>
                <div className="buttonContainer">
                {commands.map(item=>{
                    return <Button  onClick={changePage} className="buttonlyfe" color="secondary" name={item.id} size="lg">{item.name}</Button>
                })}
                </div>
                </Container>
            </Jumbotron>
        </Col>
        <Col sm="12" md ="8">
        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Command</th>
          <th>Use</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
            {pageState.commands.map(item =>{
             return(<tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.use}</td>
                <td><Example example ={item.example} /></td>
              </tr>)   
            })}
      </tbody>
    </Table>

    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Use</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
      {pageState.flags.map(item =>{
             return(<tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.use}</td>
                <td><Example example ={item.example} /></td>
              </tr>)   
            })}
      </tbody>
    </Table>
        </Col>
        </Row>
    </Container>)
}
export default CMD;