import React from 'react';
import './UserForm.css';



const handleSubmit = ()=>{
    const button = document.querySelector('button');
    button.addEventListener('click', (event)=>{
        const fullName = document.querySelector('input:nth-child(1)');
        return console.log(fullName.value);
    })
   }

const UserForm = ()=>{
    
    return(
        <div>
            <form>
                <input type='text' placeholder='Your First Name' required />
                <input type='text' placeholder='Your Last Name' required />
                <input type='date' placeholder='Your Birthday' required />
                <input type='number' placeholder='Your Age' required />
                <input type='text' placeholder='Your Hobby' required />
                <button type='primary' id='submitButton' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserForm;