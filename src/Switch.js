import React, { Component, PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';

export default class Switch extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('switch');
    }

    render() {
        const { checked, defaultChecked, onChange, onClick } = this.props;

        const controlled = typeof checked === 'boolean' ? { checked } : { defaultChecked };

        return (
            <span>
                <input
                    ref="checkbox"
                    onClick={onClick}
                    id={this.checkboxId}
                    type="checkbox"
                    className="Switch__tgl Switch__tgl-switch"
                    onChange={() => onChange(this.refs.checkbox.checked)}
                    {...controlled}
                />
                <label
                    htmlFor={this.checkboxId}
                    className="Switch__tgl-btn"
                />
            </span>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Switch.defaultProps = {
    defaultChecked: false,
    onChange: () => {},
    onClick: () => {}
};
