import {useParams} from 'react-router-dom';

export function Form({data}) {

    const {id}= useParams()
    const title=id? "Edit Task":"Add a new Task"
    return (
        <div>
            {title}
        </div>
    );
}
