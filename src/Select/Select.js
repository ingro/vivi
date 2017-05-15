import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uncontrollable from 'uncontrollable';
import ReactSelect from 'react-select';
import Highlight from 'react-highlight-words';
import classnames from 'classnames';

import TranslatorHoc from '../TranslatorHoc';

class Select extends Component {
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
        const { className, clearable, create, disabled, labelKey, minimumInput, multi, name, noResultsText, onBlur, onChange, onFocus, openUp, options, placeholder, value, valueKey, onInputChange, ...rest } = this.props;

        const Component = create ? ReactSelect.Creatable : ReactSelect;

        return (
            <Component
                ref={ref => this.select = ref}
                className={classnames(className, { 'Select-drop-up': openUp })}
                disabled={disabled}
                clearable={clearable}
                noResultsText={noResultsText}
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
                onInputChange={this.handleInputChange}
                optionRenderer={option => {
                    return <Highlight searchWords={[this.state.inputValue]} textToHighlight={option[labelKey]}/>;
                    // if (create && this.select && this.select.inputValue) {
                    //     return <Highlight search={this.select.inputValue}>{option[labelKey]}</Highlight>;
                    // } else if (! create && this.select) {
                    //     return <Highlight search={this.select.state.inputValue}>{option[labelKey]}</Highlight>;
                    // }

                    // return <span>{option[labelKey]}</span>;
                }}
                {...rest}
            />
        );
    }
}

Select.propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    create: PropTypes.bool,
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    name: PropTypes.string,
    noResultsText: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onInputChange: PropTypes.func,
    openUp: PropTypes.bool,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string
};

Select.defaultProps = {
    clearable: true,
    create: false,
    disabled: false,
    labelKey: 'label',
    minimumInput: 0,
    multi: false,
    onInputChange: () => {},
    openUp: false,
    placeholder: 'Select a value',
    valueKey: 'value'
};

const UncontrolledSelect = uncontrollable(Select, {
    value: 'onChange'
});

export default TranslatorHoc(UncontrolledSelect, {
    noResultsText: 'Select.noResultsText',
    placeholder: 'Select.placeholder'
});