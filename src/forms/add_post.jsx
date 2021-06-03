import { Form, Field } from 'react-final-form';
import { composeValidators, maxLengthCreator, requiredField } from '../utils/validators';
import { TextArea } from './FormsControl/FormsControl';
import s from './forms.module.css';


const AddPost = (props) => {

    const onSubmit = (values) => {
        props.addPost(values.addPost);
    };

    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={s.addPost}>
                <h3>Add post</h3>
                <div>
                    <Field name="addPost" component={TextArea} placeholder="Add post"
                        validate={composeValidators(maxLengthCreator(100), requiredField)} />
                </div>
                <button type="submit">Add post</button>
            </form>
        )}
    />
};



export {AddPost};

