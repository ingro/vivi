import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';
import Select from 'react-select';
import Highlight from 'react-highlighter';

class SelectAsync extends Component {
    render() {
        const { create, disabled, labelKey, loadOptions, minimumInput, multi, name, onBlur, onChange, onFocus, placeholder, value, valueKey } = this.props;

        const Component = create ? Select.AsyncCreatable : Select.Async;

        return (
            <Component
                ref={ref => this.select = ref}
                disabled={disabled}
                loadingPlaceholder="Attendere..."
                searchingText="Ricerca in corso..."
                searchPromptText="Digita per ricercare"
                noResultsText="Nessun risultato trovato"
                placeholder={placeholder}
                loadOptions={loadOptions}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                multi={multi}
                minimumInput={minimumInput}
                name={name}
                valueKey={valueKey}
                labelKey={labelKey}
                backspaceRemoves={false}
                optionRenderer={option => {
                    // Not working anymore with react-select@1.0.0-rc.2
                    // if (this.select) {
                    //     return <Highlight search={this.select._lastInput}>{option[labelKey]}</Highlight>;
                    // }

                    return <span>{option[labelKey]}</span>;
                }}
            />
        );
    }
}

SelectAsync.propTypes = {
    create: PropTypes.bool,
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    loadOptions: PropTypes.func.isRequired,
    minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string
};

SelectAsync.defaultProps = {
    create: false,
    disabled: false,
    labelKey: 'name',
    minimumInput: 0,
    multi: false,
    placeholder: 'Seleziona un valore',
    valueKey: 'id'
};

export default uncontrollable(SelectAsync, {
    value: 'onChange'
});