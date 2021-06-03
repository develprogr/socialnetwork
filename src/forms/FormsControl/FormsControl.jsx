import React from 'react';
import s from './FormsControl.module.css';


const FormControl = ({ meta, element}) => {
    const showError = (meta.touched && meta.error);
    return (
        <div className={s.textareaBlock}>
            {element}
            {showError ? <span className={s.span}>{meta.error}</span> : undefined}
        </div>
    )
}



export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div>
        <div>
            <textarea
                className={s.textareaBlock + ' ' + (hasError ? s.errorTextarea : '')}
                {...input} {...props} />
        </div>
        <div className={s.span}>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>
    </div>
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div>
        <div>
            <input
                className={s.textareaBlock + ' ' + (hasError ? s.errorTextarea : '')}
                {...input} {...props} />
        </div>
        <div className={s.span}>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>
    </div>
};






// export const TextArea = (props) => {

//     const {input, meta, ...restProps} = props;
//     return <FormControl  {...props} element={<input {...input} {...restProps} touched={meta.touched} error={meta.error}
//     className={(meta.touched && meta.error) ? s.errorTextarea  : ''} />} />
// };


// export const Input = (props) => {
//     const {input, meta, ...restProps} = props;
//     return <FormControl  {...props} element={<input {...input} {...restProps} touched={meta.touched} error={meta.error}
//             className={(meta.touched && meta.error) ? s.errorTextarea  : ''} />} />
// };

