import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './info.css'
function Example({example}){

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  

    return(
        <div>
        <a  onClick={toggle}> Click Here! </a>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}> Example</ModalHeader>
          <ModalBody className="terminal">
            {example}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}
export default Example;