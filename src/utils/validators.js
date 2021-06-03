export const requiredField = value => (value ? undefined : 'Required');

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) {
        return `Max length ${maxLength} symbols!`;
    }
    return undefined;
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

    
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);

const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`



