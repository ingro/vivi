import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import Highlight from 'react-highlighter';

export default class SelectAsync extends Component {
    render() {
        const { disabled, labelKey, loadOptions, minimumInput, multi, onChange, placeholder, value, valueKey } = this.props;

        return (
            <Select.Async
                ref={ref => this.select = ref}
                disabled={disabled}
                loadingPlaceholder="Attendere..."
                searchingText="Ricerca in corso..."
                searchPromptText="Digita per ricercare"
                noResultsText="Nessun risultato trovato"
                placeholder={placeholder}
                loadOptions={loadOptions}
                onChange={onChange}
                value={value}
                multi={multi}
                minimumInput={minimumInput}
                valueKey={valueKey}
                labelKey={labelKey}
                backspaceRemoves={false}
                optionRenderer={option => {
                    if (this.select) {
                        return <Highlight search={this.select._lastInput}>{option[labelKey]}</Highlight>;
                    }

                    return <span>{option[labelKey]}</span>;
                }}
            />
        );
    }
}

SelectAsync.propTypes = {
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    loadOptions: PropTypes.func.isRequired,
    minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string,
};

SelectAsync.defaultProps = {
    disabled: false,
    labelKey: 'name',
    minimumInput: 0,
    multi: false,
    placeholder: 'Seleziona un valore',
    valueKey: 'id'
};
