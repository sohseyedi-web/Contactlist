import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddContact.scss'
import https from './../../../Services/https';
const AddContact = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email }
        try {
            if (user.name || user.email) {
                await https.post('/contact', user);
                navigate('/')
            } else {
                alert('error');
                return;
            }
        } catch (error) {
        }
    }

    return (
        <section className='form'>
            <div className="container pt-5">
                <form className='form-box' onSubmit={handleSubmit}>
                    <div className="form-box__input">
                        <input type="text" placeholder='Name...' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-box__input">
                        <input type="text" placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type='submit' className='form-box__btn'>
                        Go To
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddContact
