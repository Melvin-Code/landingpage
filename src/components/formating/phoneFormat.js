import { PatternFormat } from 'react-number-format'

function PhoneFormat(props) {
    const { inputRef, onChange, ...other } = props

    return (
        <PatternFormat
            {...other}
            defaultValue={props.defaultValue}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                })
            }}
            // thousandSeparator
            allowLeadingZeros={false}
            allowNegative={false}
            isNumericString
            type="tel"
            format="(###) ###-####"
            mask='_'
        // decimalScale="0"
        // isAllowed={(values) => { return values.value <= 9999999999 ? true : false }}
        // suffix="%"
        />
    )
}

export default PhoneFormat