
import { db } from '../../firebase-config'

const Detail = (props) => {
    return (
        <div>

            
                <div className="card-header float-right">{props.notes.title} </div>
                <div className="card-body">
                    <h5 className="card-title">{props.notes.title}</h5>
                    <p className="card-text">{props.notes.des}</p>
                </div>
                <div className="col-md">
                    <div className="card-footer bg-transparent border-success">Last modified : {" "}{new Date(props.notes.modified.seconds * 1000).toDateString('YYYY-MM-DD')}
                    </div>
                </div>
               
   
        </div>



    )
}
export default Detail