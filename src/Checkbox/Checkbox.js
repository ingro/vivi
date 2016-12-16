import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable';

import Checkable from '../shared/Checkable';

class Checkbox extends Component {
    render() {
        return <Checkable
            inputClassName="Checkbox__cmp-checkbox"
            labelClassName="Checkbox__cmp-btn"
            {...this.props}
        />
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};

export default uncontrollable(Checkbox, {
    checked: 'onChange'
});