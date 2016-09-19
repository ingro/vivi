import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';
import ReactSelect from 'react-select';
import Highlight from 'react-highlighter';

class Select extends Component {
    render() {
        const { creable, disabled, labelKey, minimumInput, multi, name, onBlur, onChange, onFocus, options, placeholder, value, valueKey } = this.props;

        const Component = creable ? ReactSelect.Creatable : ReactSelect;

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
                    const selectState = (this.select && creable) ? this.select.select : this.select;

                    if (this.select && selectState) {
                        return <Highlight search={selectState.state.inputValue}>{option[labelKey]}</Highlight>;
                    }

                    return <span>{option[labelKey]}</span>;
                }}
            />
        );
    }
}

Select.propTypes = {
    creable: PropTypes.bool,
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
    creable: false,
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