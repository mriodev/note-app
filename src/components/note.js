
import { db } from '../firebase-config'
import '../components/note.css';
import uuid from "react-uuid";
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';


const addNote = () => {

    const [title, setTitle] = useState([]);
    const [des, setDes] = useState([]);

    const addNotes = async () => {
        const docRef = await addDoc(collection(db, "notes"), {
            id: uuid(),
            title: title,
            des: des,
            modified: Date.now(),
        }).then(res => {
            alert("Note Added !")
        }).catch(err => {
            alert("Failed Attempt !")
        });
    }

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        const querySnapshot = await getDocs(collection(db, "notes"));
        setNotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
    }
    useEffect(() => {
        getNotes();
    }, [])


    return (
        <div>
            <div className="container-fluid ">
                <div className="row bg-dark mb-5">

                    <div className="col-md-3 mt-2">
                        <nav className="navbar navbar-light bg-dark">
                            <input type="text" className=" form-control " value={title} onChange={(e) => {
                                setTitle(e.target.value)
                            }} placeholder="Note Title"></input>

                        </nav>
                    </div>
                    <div className="col-md-5  mt-2">
                        <div className="form-group mt-2 ">
                            <input type="text" className=" form-control rounded-5" rows="10" value={des} onChange={(e) => {
                                setDes(e.target.value)
                            }} placeholder="Description"></input>
                        </div>

                    </div>
                    <div className="col-md-4 mt-2 mb-2">
                        <nav className="navbar navbar-light bg-dark  ">
                            <button type="submit" id="addbtn" className="col-6 btn btn-primary " onClick={addNotes}>
                                <i className="bi bi-plus-lg"> </i> Add Note
                            </button>

                        </nav>
                    </div>
                </div>
                <section className="section">


                    <div className="container">
                        <div className="row">
                            {notes.map((note) => (
                                <div className="col-md-5 col-xl-4" key={note.id}>

                                    <div className="card bg-c-blue order-card">

                                        <div className="card-block">
                                            <h6 className="m-b-20">{note.title}</h6>
                                            <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{note.des}</span></h2>
                                            <span className="f-left">Last modified : {" "}{new Date(note.modified.seconds * 1000).toDateString('YYYY-MM-DD')}</span> <i className="bi bi-trash px-2"></i>
                                        </div>

                                    </div>

                                </div>))
                            }
                        </div></div>

                </section>
            </div>


        </div>




    );
}
export default addNote;