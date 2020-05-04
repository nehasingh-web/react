import  React, {useState, useEffect} from 'react';
import ContactForm from '../../components/contactForm';
import firebaseDb from '../../firebase';
import './Contact.css'

const Contact = () => {
    const addOrEdit = obj => {
        // console.log(obj,'obj')
        // let messageRef = firebaseDb.database().ref('messages').orderByKey().limitToLast(100);
        // firebaseDb.database().ref('messages').push(
        //     obj,
        //     err => {
        //         if(err)
        //         console.log(err,'err')
        //     }
        // )
        // firebaseDb.child('contact').push(
        //     obj,
        //     err => {
        //         if(err)
        //         console.log(err)
        //     }
        // )

    }
    return (
        <div className="flex-center"> 
        <ContactForm addOrEdit={addOrEdit}/>
        </div>
    )
}
// const Contact = () => {
//     const intialFieldValues = {
//         text : ""
//       }
//       const [values, setValues] = useState(intialFieldValues)

//       const handleText=e=>{
//         var {name, value} = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         })
//       }
//       const handleSubmit=e=>{
//         console.log(values.text)
//         let messageRef = firebaseDb.database().ref('messages').orderByKey().limitToLast(100);
//         firebaseDb.database().ref('messages').push(values.text);
//         setValues({
//           text : ""
//         })
//       }
    
//         return (
//           <div className="App-header">
//            <input type ="text" name='text' value={values.text} onChange={handleText} id="inputText"/>
//            <br/>
//            <button onClick={handleSubmit} > Save </button>
//           </div>
//         );


// }
export default Contact;