import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uncontrollable from 'uncontrollable';
import Select from 'react-select';
import Highlight from 'react-highlight-words';

import TranslatorHoc from '../TranslatorHoc';

class SelectAsync extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (value) => {
        this.setState({
            inputValue: value
        });

        this.props.onInputChange(value);
    }

    render() {
        const { autoload, clearable, create, disabled, labelKey, loadingPlaceholder, loadOptions, multi, name, noResultsText, onBlur, onChange, onFocus, placeholder, searchPromptText, searchingText, value, valueKey, onInputChange, ...rest } = this.props;

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
                onInputChange={this.handleInputChange}
                optionRenderer={option => {
                    return <Highlight searchWords={[this.state.inputValue]} textToHighlight={option[labelKey]}/>;
                }}
                {...rest}
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
    multi: PropTypes.bool,
    name: PropTypes.string,
    noResultsText: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onInputChange: PropTypes.func,
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
    multi: false,
    onInputChange: () => {},
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