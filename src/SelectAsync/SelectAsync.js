import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable';
import Select from 'react-select';
// import Highlight from 'react-highlighter';

import TranslatorHoc from '../TranslatorHoc';

class SelectAsync extends Component {
    render() {
        const { autoload, clearable, create, disabled, labelKey, loadingPlaceholder, loadOptions, /*minimumInput,*/ multi, name, noResultsText, onBlur, onChange, onFocus, placeholder, searchPromptText, searchingText, value, valueKey } = this.props;

        const Component = create ? Select.AsyncCreatable : Select.Async;

        return (
            <Component
                ref={ref => this.select = ref}
                clearable={clearable}
                disabled={disabled}
                loadingPlaceholder={loadingPlaceholder}
                searchingText={searchingText}
                searchPromptText={searchPromptText}
                noResultsText={noResultsText}
                placeholder={placeholder}
                loadOptions={loadOptions}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                multi={multi}
                autoload={autoload}
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
    autoload: PropTypes.bool,
    clearable: PropTypes.bool,
    create: PropTypes.bool,
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    loadOptions: PropTypes.func.isRequired,
    loadingPlaceholder: PropTypes.string,
    // minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    name: PropTypes.string,
    noResultsText: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    searchingText: PropTypes.string,
    searchPromptText: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string
};

SelectAsync.defaultProps = {
    autoload: false,
    clearable: true,
    create: false,
    disabled: false,
    labelKey: 'label',
    // minimumInput: 0,
    multi: false,
    placeholder: 'Select a value',
    searchingText: 'Searching...',
    valueKey: 'value'
};

const UncontrolledSelectAsync = uncontrollable(SelectAsync, {
    value: 'onChange'
});

export default TranslatorHoc(UncontrolledSelectAsync, {
    loadingPlaceholder: 'SelectAsync.loadingPlaceholder',
    noResultsText: 'SelectAsync.noResultsText',
    placeholder: 'SelectAsync.placeholder',
    searchPromptText: 'SelectAsync.searchPromptText',
    searchingText: 'SelectAsync.searchingText',
});