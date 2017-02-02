import React, { Component, PropTypes } from 'react';
import Flatpickr from 'flatpickr';

export default class DatePicker extends Component {
    componentWillReceiveProps(props) {
        if (props.value) {
            this.flatpickr.setDate(props.value);
        }

        if (props.options.minDate) {
            this.flatpickr.set('minDate', props.options.minDate);
        }
    }

    componentDidMount() {
        const options = {
            ...this.props.options,
            onChange: (this.props.onChange)
        };

        if (this.props.displayFormat) {
            options.altInput = true;
            options.altFormat = this.props.displayFormat;
        }

        if (this.props.range) {
            options.mode = 'range';
        }

        this.flatpickr = new Flatpickr(this.node, options);
    }

    componentWillUnmount() {
        this.flatpickr.destroy()
    }

    handleClear = () => {
        if (this.flatpickr) {
            this.flatpickr.clear();
        }
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const { onChange, options, defaultValue, value, clearable, displayFormat, range, ...props } = this.props;

        return (
            <span className="DatePicker__Wrapper">
                <input {...props} defaultValue={defaultValue || value} ref={node => this.node = node} />
                {clearable &&
                    <span className="DatePicker__Clear_Btn text-danger">
                        <i className="fa fa-times" onClick={this.handleClear}/>
                    </span>
                }
            </span>
        );
    }
}

DatePicker.propTypes = {
    clearable: PropTypes.bool,
    defaultValue: PropTypes.any,
    displayFormat: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.object,
    range: PropTypes.bool,
    value: PropTypes.any
};

DatePicker.defaultProps = {
    clearable: false,
    displayFormat: 'd/m/Y',
    onChange: () => {},
    options: {},
    range: false
};