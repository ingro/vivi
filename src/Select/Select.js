import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';
import ReactSelect from 'react-select';
import Highlight from 'react-highlighter';
import classnames from 'classnames';

import TranslatorHoc from '../TranslatorHoc';

class Select extends Component {
    render() {
        const { className, clearable, create, disabled, labelKey, minimumInput, multi, name, noResultsText, onBlur, onChange, onFocus, openUp, options, placeholder, value, valueKey } = this.props;

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
    labelKey: 'name',
    minimumInput: 0,
    multi: false,
    openUp: false,
    placeholder: 'Select a value',
    valueKey: 'id'
};

const UncontrolledSelect = uncontrollable(Select, {
    value: 'onChange'
});

export default TranslatorHoc(UncontrolledSelect, {
    noResultsText: 'Select.noResultsText',
    placeholder: 'Select.placeholder'
});