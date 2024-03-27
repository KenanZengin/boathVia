"use client"

import { FiShare } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa6";
import { PiCopy } from "react-icons/pi";


const ShareLink = () => {


    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    };
    const shareOnWhatsapp = () => { 
        
        const href = window.location.href;
        
        window.open(`https://web.whatsapp.com/send?text=${href}.com`);
    };

  return (
    <div className="share-link">
        <label htmlFor="share-link">
        <input 
                type="checkbox" 
                name="share-link" 
                id="share-link" 
            />
        <FiShare size={20} />
            Share
        </label>
        <div className="share-option">
           <label htmlFor="share-link">
           <ul>
                <li>
                   <p onClick={copyToClipboard}>
                        <PiCopy size={20} /> Copy Link
                   </p>
                </li>
                <li>
                   <p onClick={shareOnWhatsapp}>
                        <FaWhatsapp size={20} /> Whatsapp
                   </p>
                </li>
            </ul>
           </label>
        </div>
    </div>
  )
}

export default ShareLink