import React from "react";
import ModalForm from "./modalform";

import {
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'


  export default function RepoModal(props) {
    const { isOpen,  onOpen, onClose } = useDisclosure()
    return (
      <div>
        <Button onClick={onOpen}>Create Repository</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ fontSize: "23px",fontWeight: "800",color:" #0d117c"}}>Create Repository</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalForm
              handleChange={props.handleChange}
              repoName={props.repoName} 
              newRepo ={props.newRepo}
              errorMessage={props.errorMessage}
              />
              {props.Loading &&repoName ==="" && <p>Creating repo....</p>}
            </ModalBody>
  
            <ModalFooter style={{display:"flex", gap: "50%"}}>
                
              <button className={`mdl-btn   ${!props.Loading && props.newRepo !==""? "dn": "mdl-rd"}`}  onClick={onClose}>
              {!props.Loading && props.newRepo !==""? "Done": "Cancel"}
              </button>


              <button onClick={props.createRepoBtn} className="mdl-btn" variant='ghost'>
              {!props.Loading && props.newRepo !==""? "": "Create"}
                </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ div>
    )
  }