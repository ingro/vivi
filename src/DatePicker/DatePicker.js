import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import classnames from 'classnames';

export default class DatePicker extends Component {
    componentWillReceiveProps(props) {
        if (props.value) {
            this.flatpickr.setDate(props.value, false);
        }

        if (props.options.minDate) {
            this.flatpickr.set('minDate', props.options.minDate);
        }
    }

    componentDidMount() {
        const options = {
            // positionElement: this.wrapper,
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

        if (this.props.value) {
            options.defaultDate = this.props.value;
        }

        this.flatpickr = new flatpickr(this.node, options);
    }

    componentWillUnmount() {
        this.flatpickr.destroy()
    }

    handleClear = () => {
        if (this.flatpickr) {
            this.flatpickr.clear();
        }
    }

    handleToggle = () => {
        if (this.flatpickr) {
            // TODO: now working without setTimeout???
            setTimeout(() => {
                this.flatpickr.toggle();
            }, 0);
        }
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const { onChange, options, defaultValue, value, clearable, displayFormat, range, showIcon, wrapperClass, ...props } = this.props;

        const finalWrapperClass = classnames('DatePicker__Wrapper', wrapperClass);

        // console.warn('DefaultValues', defaultValue);
        // console.warn('Value', value);

        return (
            <div className={finalWrapperClass} ref={ref => this.wrapper = ref}>
                <input {...props} defaultValue={defaultValue || value} ref={node => this.node = node} />
                {clearable && value &&
                    <span className="DatePicker__Clear_Btn text-danger">
                        <i className="fa fa-times" onClick={this.handleClear}/>
                    </span>
                }
                {showIcon &&
                    <span className="DatePicker__Icon_Holder text-muted">
                        <i className="fa fa-calendar" onClick={this.handleToggle}/>
                    </span>
                }
            </div>
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
    showIcon: PropTypes.bool,
    value: PropTypes.any,
    wrapperClass: PropTypes.string
};

DatePicker.defaultProps = {
    clearable: false,
    displayFormat: 'd/m/Y',
    onChange: () => {},
    options: {},
    range: false,
    showIcon: false,
    wrapperClass: null
};