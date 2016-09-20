import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';
import ReactSelect from 'react-select';
import Highlight from 'react-highlighter';

class Select extends Component {
    render() {
        const { create, disabled, labelKey, minimumInput, multi, name, onBlur, onChange, onFocus, options, placeholder, value, valueKey } = this.props;

        const Component = create ? ReactSelect.Creatable : ReactSelect;

        return (
            <Component
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
                    if (create && this.select && this.select.inputValue) {
                        return <Highlight search={this.select.inputValue}>{option[labelKey]}</Highlight>;
                    } else if (! create && this.select) {
                        return <Highlight search={this.select.state.inputValue}>{option[labelKey]}</Highlight>;
                    }

                    return <span>{option[labelKey]}</span>;
                }}
            />
        );
    }
}

Select.propTypes = {
    create: PropTypes.bool,
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
    create: false,
    disabled: false,
    labelKey: 'name',
    minimumInput: 0,
    multi: false,
    placeholder: 'Seleziona un valore',
    valueKey: 'id'
};

export default uncontrollable(Select, {
    value: 'onChange'
});