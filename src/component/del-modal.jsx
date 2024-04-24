import React, { useEffect, useState } from "react";
import DelForm from "./del-fm";
import { Octokit } from "@octokit/rest";

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


  export default function DelModal() {
    const { isOpen,  onOpen, onClose } = useDisclosure()
    const [inputValue, setInputValue] = useState("") 
    const [deleted, setDeleted] = useState(false)
  
    // handle change for the input fields and options
    function handleChange(e){
        setInputValue(e.target.value)
    }
       // api authentication
       const apiKey = import.meta.env.VITE_API_KEY;
       const octokit = new Octokit({
           auth: apiKey
           })

    async function deleteRepo(){
      try {
        const response =await octokit.request(`DELETE /repos/bakeji/${inputValue}`, {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
  
        console.log("Repository deleted:", response.status);
        response.status === 204? setDeleted(true): setDeleted(false)
      } catch (error) {
        console.error("Error deleting repository:", error);
        alert( "Please enter a valid repository name")
      }

    }

    // click on the button to call the deleteRepo function

    function deleteRepoBtn(){
      deleteRepo()

    }




    return (
      <div>
        <Button style={{background: "red", color: "white"}} onClick={onOpen}>Delete Repository</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ fontSize: "23px",fontWeight: "800",color:" #0d117c"}}>Delete Repository</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <DelForm 
             handleChange = {handleChange}
             inputValue ={inputValue}
              />
              {deleted && <p>Deleted</p>}
             

            </ModalBody>
  
            <ModalFooter style={{display:"flex", gap: "50%"}}>
                
              <button className="mdl-btn" onClick={onClose}> {deleted? "": "Cancel"} </button>

              <button className="mdl-btn mdl-rd" onClick={deleteRepoBtn}  variant='ghost'> {deleted? "" :"Delete"}</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ div>
    )
  }