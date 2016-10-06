import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';

import Checkable from '../shared/Checkable';

class Switch extends Component {
    render() {
        return <Checkable
            inputClassName="Switch__tgl Switch__tgl-switch" 
            labelClassName="Switch__tgl-btn"
            {...this.props} 
        />
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Switch.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};

export default uncontrollable(Switch, {
    checked: 'onChange'
});