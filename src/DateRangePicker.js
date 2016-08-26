import React, { Component, PropTypes } from 'react';
import { DateRangePicker as RangePicker } from 'react-dates';
import uniqueId from 'lodash/uniqueId';

export default class DateRangePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null,
            startDate: props.startDate,
            endDate: props.endDate
        };

        this.datepickerId = uniqueId('datepicker');
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate });

        this.props.onChange({ startDate, endDate });
    }

    onFocusChange = (focusedInput) => {
        this.setState({ focusedInput });
    }

    render() {
        // const {  } = this.props;
        const { focusedInput, startDate, endDate } = this.state;

        return (
            <RangePicker
                id={this.datepickerId}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
            />
        );
    }
}

DateRangePicker.propTypes = {
    startDate: PropTypes.any,
    endDate: PropTypes.any,
    onChange: PropTypes.func
};

DateRangePicker.defaultProps = {
    onChange: () => {}
};
