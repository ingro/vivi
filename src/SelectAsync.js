import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import Highlight from 'react-highlighter';

export default class SelectAsync extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     date: props.date,
        //     focused: false
        // };
    }

    // onDateChange = (date) => {
    //     this.setState({ date });

    //     this.props.onChange(date);
    // }

    // onFocusChange = ({ focused }) => {
    //     this.setState({ focused });
    // }

    render() {
        const { loadOptions, placeholder } = this.props;
        // const { focused, date } = this.state;

        return (
            <Select.Async
                ref={select => this.select = select}
                loadingPlaceholder="Attendere..."
                placeholder={placeholder}
                loadOptions={loadOptions}
                onChange={value => console.warn(value)}
                optionRenderer={option => {
                    return <Highlight search={this.select._lastInput}>{option.label}</Highlight>;
                }}
            />
        );
    }
}

SelectAsync.propTypes = {
    loadOptions: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

SelectAsync.defaultProps = {
    placeholder: 'Seleziona un valore'
};
