import React, {useState} from 'react';


const Form = () => {


    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const ImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const ChangingHandler = (event) => {

        let selected = event.target.files[0];

        if(selected && ImageTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
            
        }
        else {
            setFile(null);
            setError('You have selected a file which is of Wrong Format. Please Select .png/.jpeg/.jpg');
        }
    }


    return (
        <form>
            <input type= "file" onChange={ChangingHandler} />
            <div className='output error'>
                {error && <div className='error'>{ error }</div>}
                {file && <div>{ file.name }</div>}
            </div>
        </form>
    )

}

export default Form;
