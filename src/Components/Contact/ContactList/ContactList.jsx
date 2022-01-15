import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BiEdit, BiTrash, BiUserCircle } from 'react-icons/bi';
import https from './../../../Services/https';
import './ContactList.scss'
const ContactList = () => {

    const [contacs, setContacts] = useState(null);
    const [allContact, setAllContact] = useState(null);
    const [searchItem, setSearchItem] = useState('');



    useEffect(() => {
        const getContacts = async () => {
            try {
                const { data } = await https.get('/contact');
                setContacts(data)
                setAllContact(data);
            } catch (error) {

            }
        }

        try {
            getContacts();
        } catch (error) {

        }
    }, [])

    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        const search = e.target.value
        if (searchItem !== '') {
            const searchItem = allContact.filter((all) => (
                Object.values(all).join(" ").toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ))
            setContacts(searchItem)
        } else {
            setContacts(allContact)
        }
    }
    const deleteHandler = async (id) => {
        try {
            await https.delete(`/contact/${id}`);
            const removeItem = contacs.filter(c => c.id !== id);
            setContacts(removeItem);
        } catch (error) {

        }
    }

    return (
        <section className='list'>
            <div className="container text-center pt-5">
                <div className="list-header">
                    <h3>Contact List</h3>
                    <input type="text" placeholder='Search...' value={searchItem} onChange={changeHandler} />
                </div>
                <hr />
                <div className="list-box">
                    {
                        contacs ? (
                            contacs.map((contact) => (
                                <div className="list-box__items" key={contacs.id}>
                                    <div className="list-box__items-left">
                                        <BiUserCircle size={45} />
                                        <div className="list-box__items-left__content">
                                            <div className="list-box__items-left__content-name">Name : {contact.name}</div>
                                            <div className="list-box__items-left__content-email">Email : {contact.email}</div>
                                        </div>
                                    </div>
                                    <div className="list-box__items-right">
                                        <Link to={`/edit/${contact.id}`}>
                                            <button className="list-box__items-right__edit">
                                                <BiEdit />
                                            </button>
                                        </Link>
                                        <button className="list-box__items-right__delete" onClick={() => deleteHandler(contact.id)}>
                                            <BiTrash />
                                        </button>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="display-6 pt-2">No Contacts in the list : <Link to="/add">Add Contact</Link></div>
                        )
                    }
                </div>
            </div>
        </section >
    )
}

export default ContactList
