
import { db } from '../../firebase-config'
import '../View/note.css';
import { collection, getDocs, deleteDoc, doc, userDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Detail from '../View/viewNote'

const ViewNote = () => {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        const querySnapshot = await getDocs(collection(db, "notes"));
        setNotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
    }
    useEffect(() => {
        getNotes();
    }, [])

    const onDelete = async (id) => {
        if (window.confirm("Are you sure that?")) {
            const userDoc = doc(db, "notes", id);
            await deleteDoc(userDoc)
        }
    }
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    {notes.map((note) => (
                        <div className="col-md-5 col-xl-4" key={note.id}>
                            <div className="card text-white bg-dark mb-3"  >
                                <Detail notes={note}>
                                </Detail>
                                <div className="card-footer bg-transparent border-success">
                                    <button className="btn btn-danger btn-sm rounded-0 " type="button" title="Delete" onClick={() => onDelete(note.id)} ><i className="bi bi-trash" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="col-md  ">

                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>

        </section>








    );
}
export default ViewNote;