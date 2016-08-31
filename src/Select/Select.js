import React, { Component, PropTypes } from 'react';
import ReactSelect from 'react-select';
import Highlight from 'react-highlighter';

export default class Select extends Component {
    render() {
        const { disabled, labelKey, minimumInput, multi, name, onBlur, onChange, onFocus, options, placeholder, value, valueKey } = this.props;

        return (
            <ReactSelect
                ref={ref => this.select = ref}
                disabled={disabled}
                noResultsText="Nessun risultato trovato"
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                options={options}
                value={value}
                name={name}
                multi={multi}
                minimumInput={minimumInput}
                valueKey={valueKey}
                labelKey={labelKey}
                backspaceRemoves={false}
                optionRenderer={option => {
                    if (this.select) {
                        return <Highlight search={this.select.state.inputValue}>{option[labelKey]}</Highlight>;
                    }

                    return <span>{option[labelKey]}</span>;
                }}
            />
        );
    }
}

Select.propTypes = {
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string
};

Select.defaultProps = {
    disabled: false,
    labelKey: 'name',
    minimumInput: 0,
    multi: false,
    placeholder: 'Seleziona un valore',
    valueKey: 'id'
};
