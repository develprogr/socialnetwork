import { composeValidators, maxLengthCreator, requiredField } from '../utils/validators';
import { TextArea } from './FormsControl/FormsControl';
import { Form, Field } from 'react-final-form';
import s from './forms.module.css';


const AddDialogForm = (props) => {

    const onSubmit = (values) => {
        props.addMessage(values.addDialog);
    }

    return <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.addPost}>
            <div>
                <Field name="addDialog" component={TextArea} placeholder="Add dialog"
                    validate={composeValidators(requiredField, maxLengthCreator(50))} />
            </div>
            <button type="submit">Add post</button>
        </form>
    )}
/>

};

export {AddDialogForm}