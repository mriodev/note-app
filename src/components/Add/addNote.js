import { db } from '../../firebase-config'
import { useState } from 'react';
import Show from '../View/note';
import { addDoc, collection } from 'firebase/firestore'
import uuid from "react-uuid";
const AddNote = () => {

    const [title, setTitle] = useState([]);
    const [des, setDes] = useState([]);

    const addNotes = async () => {
        const date = new Date().toDateString('YYYY-MM-DD');
        const docRef = await addDoc(collection(db, "notes"), {

            id: uuid(),
            title: title,
            des: des,
            modified: date.toISOString(),
        }).then(res => {
            alert("Note Added !")
        }).catch(err => {
            alert("Failed Attempt !")
        });
    }
    
    return (
        <div className="container-fluid ">

            <section className="section ml-5">
                <div className="container ">
                    <div className="row ">
                        <div className='col-md-3'></div>
                        <div className="col-md-6 mt-2 mb-5 ">
                            <h1 className='mb-4'> Notes </h1>
                            <div className="form-group purple-border">
                                <input type="text" className=" form-control mb-4" value={title} onChange={(e) => {
                                    setTitle(e.target.value)
                                }} placeholder="Note Title"></input>
                            </div>
                            <div className="form-group shadow-textarea">
                                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" value={des} onChange={(e) => {
                                    setDes(e.target.value)
                                }} placeholder="Write something here..."></textarea>
                            </div>


                            <button type="submit" id="addbtn" className="col-5 btn btn-primary mt-4 " onClick={addNotes}>
                                <i className="bi bi-plus-lg"> </i> Add Note
                            </button>
                        </div>



                    </div>
                </div>
            </section>


            <Show></Show>
        </div>

    )

}
export default AddNote;