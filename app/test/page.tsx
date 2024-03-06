"use client"

import Link from 'next/link';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {

    const test = () => {
        
        const deneme0 = document.querySelector(".testo.show");
        const deneme = document.querySelector(".testo .dropdown-menu.show");
        const button = document.querySelector('.testo .dropdown-toggle.show');
        console.log(button);
        
        console.log(deneme);
        if(deneme && button && deneme0){
            deneme.classList.remove("show")
            button.classList.remove("show")
            deneme0.classList.remove("show")
            button.setAttribute("aria-expanded","false")
        }
        
        
    }

  return (
    <Dropdown className='testo'>
      <Dropdown.Toggle variant="success" id="dropdown-basic"  >
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="/">Something else</Dropdown.Item>
       
        <Link href={"#"} data-rr-ui-dropdown-item className='dropdown-item' onClick={test} >TEST</Link>
      </Dropdown.Menu>
    </Dropdown>
    
  );
}

export default BasicExample;