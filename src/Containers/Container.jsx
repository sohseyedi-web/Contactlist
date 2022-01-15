import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ContactList from '../Components/Contact/ContactList/ContactList'
import AddContact from './../Components/Contact/AddContact/AddContact';
import EditContact from './../Components/Contact/EditContact/EditContact';

const Container = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </>
    )
}

export default Container
