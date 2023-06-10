
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

const CreateForm = () => {
    
    const [cId, setCId] = useState("");
    const [cName, setCName] = useState("");
    const [cDesc, setCDesc] = useState("");
    const [cPrice, setCPrice] = useState("");
    const [cFile, setCFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setCFile(selectedFile);
    };

    const handleUpload = (event) => {
        event.preventDefault()
        if (cFile) {
          const reader = new FileReader();
          reader.onload = () => {
            const imageData = reader.result;
            sendItemToDb(imageData.toString());

          };
          reader.readAsDataURL(cFile);
        }
    };

    function sendItemToDb(data) {
        Axios.post('http://localhost:3001/postItem', {
            id: cId,
            name: cName,
            desc: cDesc,
            price: cPrice,
            data
        }).then(() => {
            
        });
    };

    return (
    <div className='create-container'>
        <div className='create-box'>
            <h1>Add a product</h1>
            <form className='create-form'>
                <label className='create-label'>Suit Api</label>
                    <input
                    className='create-input'
                    type="text" 
                    value={cId}
                    onChange={(e) => setCId(e.target.value)}
                    required
                    />
                <label className='create-label'>Name</label>
                    <input
                    className='create-input'
                    type="text" 
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    required
                    />
                <label className='create-label'>Description</label>
                    <textarea
                    rows="4" 
                    cols="50"
                    className='create-input create-textarea'
                    type="textarea" 
                    value={cDesc}
                    onChange={(e) => setCDesc(e.target.value)}
                    required
                    />
                <label className='create-label'>Price</label>
                    <input
                    className='create-input'
                    type="text" 
                    value={cPrice}
                    onChange={(e) => setCPrice(e.target.value)}
                    required
                    />
                <label className='create-label'>Select Photo</label>    
                    <input
                    className='create-file' 
                    type="file"
                    onChange={handleFileChange} 
                    />
                <input className='create-btn' type="submit" value={'Create'} onClick={handleUpload}/>
            </form>
        </div>
    </div>
    );
};

export default CreateForm;