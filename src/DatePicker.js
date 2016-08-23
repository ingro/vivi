import React, { Component, PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';

export default class DatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            focused: false
        };
    }

    onDateChange = (date) => {
        this.setState({ date });
    }

    onFocusChange = ({ focused }) => {
        this.setState({ focused });
    }

    render() {
        // const {  } = this.props;
        const { focused, date } = this.state;

        return (
            <SingleDatePicker
                id="c01"
                date={date}
                focused={focused}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
            />
        );
    }
}

DatePicker.propTypes = {
    date: PropTypes.any
};

DatePicker.defaultProps = {

};
