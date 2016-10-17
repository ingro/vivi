import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';
import Select from 'react-select';
// import Highlight from 'react-highlighter';

import getTranslation from '../utils/getTranslation';

class SelectAsync extends Component {
    render() {
        const { autoload, create, disabled, labelKey, loadOptions, /*minimumInput,*/ multi, name, onBlur, onChange, onFocus, placeholder, value, valueKey } = this.props;

        const Component = create ? Select.AsyncCreatable : Select.Async;

        return (
            <Component
                ref={ref => this.select = ref}
                disabled={disabled}
                loadingPlaceholder={getTranslation(this, 'loadingPlaceholder')}
                searchingText={getTranslation(this, 'searchingText', 'Searching...')}
                searchPromptText={getTranslation(this, 'searchPromptText')}
                noResultsText={getTranslation(this, 'noResultsText')}
                placeholder={getTranslation(this, 'placeholder', 'Select a value')}
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
    create: false,
    disabled: false,
    labelKey: 'name',
    // minimumInput: 0,
    multi: false,
    valueKey: 'id'
};

SelectAsync.contextTypes = {
    vivi: PropTypes.object
};

export default uncontrollable(SelectAsync, {
    value: 'onChange'
});