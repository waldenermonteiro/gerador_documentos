import msg from './pt_BR'
const config = {
    errorBagName: 'errors',
    fieldsBagName: 'inputs ',
    locale: 'pt_BR',
    dictionary: {
        pt_BR: {
            messages: msg
        }
    },
    strict: true,
    enableAutoClasses: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true
}
export default config