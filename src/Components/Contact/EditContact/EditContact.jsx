import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import https from './../../../Services/https';
import './EditContact.scss'
const EditContact = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email }
        try {
            if (user.name || user.email) {
                await https.put(`/contact/${id}`, user);
                navigate('/')
            } else {
                alert('error');
                return;
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await https.get(`/contact/${id}`);
                setName(data.name);
                setEmail(data.email);
            } catch (error) { }
        }
        getData();
    }, [])

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
                        Edit Contact
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EditContact
