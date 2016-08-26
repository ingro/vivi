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
        // const {  } = this.props;
        const { focused, date } = this.state;

        return (
            <SingleDatePicker
                id={this.datepickerId}
                date={date}
                focused={focused}
                numberOfMonths={1}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
            />
        );
    }
}

DatePicker.propTypes = {
    date: PropTypes.any,
    onChange: PropTypes.func
};

DatePicker.defaultProps = {
    onChange: () => {}
};
