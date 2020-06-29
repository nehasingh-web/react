import React, { useState, useEffect } from 'react';
import firebaseDb from '../firebase'

const ContactForm = (props) => {
    const intialFieldValues = {
        name: '',
        email: '',
        mobile: '',
        address: ''
    }
    let [values, setValues] = useState(intialFieldValues);
    let [contactObjects, setContactObjects] = useState({});
    let [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDb.database().ref('messages').on('value', snapshort => {
            if (snapshort.val() !== null)
                setContactObjects({
                    ...snapshort.val()
                })
            else 
                setContactObjects({})
        })
    }, [])

    useEffect(() => {   //edit functionality for populating details in form
        if (currentId === '')
            setValues({
                ...intialFieldValues
            })
        else
            setValues({
                ...contactObjects[currentId]
            })
    }, [currentId, contactObjects])

    const handleInput = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        console.log(values.name)
        let messageRef = firebaseDb.database().ref('messages').orderByKey().limitToLast(100);
        if (currentId == '') {
            firebaseDb.database().ref('messages').push(
                values,
                err => {
                    if (err)
                        console.log(err);
                    else
                        setCurrentId('')
                }
            );
        }
        else {
            firebaseDb.database().ref(`messages/${currentId}`).set(
                values,
                err => {
                    if (err)
                        console.log(err);
                    else
                        setCurrentId('')
                }
            );
        }
        setValues({
            name: '',
            email: '',
            mobile: '',
            address: ''
        })
    }
        const onDelete = id => {
            if (window.confirm('Are you sure to delete this record?')) {
                firebaseDb.database().ref(`messages/${id}`).remove(
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
            }
        }
    return (
        <div className='contactForm'>
            <div className='flex-center form-wrapper'>
                <div className='inputField'>
                    <input type="text" name='name' placeholder='Name' value={values.name} onChange={handleInput} id="inputText" />
                </div>
                <div className='inputField'>
                    <input type="email" name='email' placeholder='Email' value={values.email} onChange={handleInput} />
                </div>
                <div className='inputField'>
                    <input type="text" name='mobile' placeholder='Mobile' value={values.mobile} onChange={handleInput} />
                </div>
                <div className='inputField'>
                    <textarea placeholder='Address' name='address' value={values.address} onChange={handleInput}></textarea>
                </div>
                <button type='submit' className='primary-btn' onClick={handleSubmit}> {currentId == '' ? 'Save' : 'Update'} </button>
            </div>
            <div>
                <table className='table table-borderless table-striped table-hover'>
                    <thead className=''>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contactObjects).map(id => {
                                return <tr key={id}>
                                    <td>{contactObjects[id].name}</td>
                                    <td>{contactObjects[id].email}</td>
                                    <td>{contactObjects[id].mobile}</td>
                                    <td>{contactObjects[id].address}</td>
                                    <td>
                                        <a className='btn text-primary' onClick={() => { setCurrentId(id) }}>Edit</a>
                                        <a className='btn text-danger' onClick={()=>{ onDelete(id)}}>Delete</a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ContactForm;

// function alt(){
//     a=10;
//     b.a=10; 
// }; 
// var a= 2; 
// var b ={a:2, b:3}; 
// alt(a,b); 
// console.log(a); 
// console.log(b.a); 