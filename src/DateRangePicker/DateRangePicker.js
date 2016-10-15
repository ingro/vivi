import React, { Component, PropTypes } from 'react';
import { DateRangePicker as RangePicker } from 'react-dates';
import uniqueId from 'lodash/uniqueId';

import getTranslation from '../utils/getTranslation';

export default class DateRangePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null,
            startDate: props.startDate,
            endDate: props.endDate
        };

        this.startPickerId = uniqueId('startPicker');
        this.endPickerId = uniqueId('endPicker');
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate });

        this.props.onChange({ startDate, endDate });
    }

    onFocusChange = (focusedInput) => {
        this.setState({ focusedInput });
    }

    getInitialVisibleMonth = () => {
        return this.props.startDate;
    }

    render() {
        const { displayFormat, minimumNights, numberOfMonths, showClearDates } = this.props;
        const { focusedInput, startDate, endDate } = this.state;

        return (
            <RangePicker
                startDateId={this.startPickerId}
                endDateId={this.endPickerId}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                displayFormat={displayFormat}
                numberOfMonths={numberOfMonths}
                minimumNights={minimumNights}
                showClearDates={showClearDates}
                startDatePlaceholderText={getTranslation(this, 'startDatePlaceholderText')}
                endDatePlaceholderText={getTranslation(this, 'endDatePlaceholderText')}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                initialVisibleMonth={this.getInitialVisibleMonth}
            />
        );
    }
}

DateRangePicker.propTypes = {
    displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    endDate: PropTypes.any,
    endDatePlaceholderText: PropTypes.string,
    minimumNights: PropTypes.number,
    numberOfMonths: PropTypes.number,
    onChange: PropTypes.func,
    showClearDates: PropTypes.bool,
    startDate: PropTypes.any,
    startDatePlaceholderText: PropTypes.string
};

DateRangePicker.defaultProps = {
    displayFormat: 'DD/MM/YYYY',
    minimumNights: null,
    numberOfMonths: 2,
    onChange: () => {},
    showClearDates: false
};

DateRangePicker.contextTypes = {
    vivi: React.PropTypes.object
};