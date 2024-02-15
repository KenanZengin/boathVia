"use client"

import Dropdown from "react-bootstrap/Dropdown";
import { BiWorld } from "react-icons/bi";




const ChangeLang = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle title="Language selection">
            <BiWorld size={24} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown_lang">
            <Dropdown.Header>
                Language
            </Dropdown.Header>
            <Dropdown.Item as={"button"}>
                Türkçe
            </Dropdown.Item>
            <Dropdown.Item as={"button"} className="actived" disabled={true}>
                English
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default ChangeLang