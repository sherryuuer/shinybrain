import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'Let the magic Brain give you answer. Give it a try.'}
            </p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-2">
                    <input className='f4 pa2 w-70 center' type='tex' placeholder="Write your question here" onChange={onInputChange} />
                    <button className='w-25 grow f4 link ph3 pv2 dib black bg-light-green' onClick={onButtonSubmit}>think</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
