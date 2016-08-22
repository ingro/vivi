import React, { Component, PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';

export default class Switch extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('switch');
    }

    render() {
        const { checked, onChange } = this.props;

        return (
            <span>
                <input onClick={() => console.warn('ON CLICK')} id={this.checkboxId} type="checkbox" className="Switch__tgl Switch__tgl-switch" onChange={onChange} defaultChecked={checked} />
                <label htmlFor={this.checkboxId} className="Switch__tgl-btn"  />
            </span>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

Switch.defaultProps = {
    checked: false,
    onChange: () => {}
};
