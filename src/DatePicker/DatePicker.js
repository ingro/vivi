import React, { Component, PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';
import uniqueId from 'lodash/uniqueId';

export default class DatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            focused: false
        };

        this.datepickerId = uniqueId('datepicker');
    }

    onDateChange = (date) => {
        this.setState({ date });

        this.props.onChange(date);
    }

    onFocusChange = ({ focused }) => {
        this.setState({ focused });
    }

    render() {
        const { displayFormat, numberOfMonths, placeholder } = this.props;
        const { focused, date } = this.state;

        return (
            <SingleDatePicker
                id={this.datepickerId}
                date={date}
                focused={focused}
                numberOfMonths={numberOfMonths}
                displayFormat={displayFormat}
                placeholder={placeholder}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
            />
        );
    }
}

DatePicker.propTypes = {
    date: PropTypes.any,
    displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    numberOfMonths: PropTypes.number,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

DatePicker.defaultProps = {
    displayFormat: 'DD/MM/YYYY',
    numberOfMonths: 1,
    onChange: () => {},
    placeholder: 'Seleziona data'
};
