import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';

export default class Tooltip extends Component {
    render() {
        const { children, content, enterDelay, leaveDelay, overlayClassName, position, trigger, visible } = this.props;

        const props = {
            overlay: content,
            placement: position,
            trigger,
            mouseEnterDelay: enterDelay,
            mouseLeaveDelay: leaveDelay
        };

        if (typeof visible != 'undefined') {
            props.visible = visible;
        }

        if (typeof overlayClassName != 'undefined') {
            props.overlayClassName = overlayClassName;
        }

        return (
            <RcTooltip
                {...props}
            >
                {children}
            </RcTooltip>
        );
    }
}

Tooltip.propTypes = {
    children: PropTypes.any.isRequired,
    content: PropTypes.any.isRequired,
    enterDelay: PropTypes.number,
    leaveDelay: PropTypes.number,
    overlayClassName: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    trigger: PropTypes.array,
    visible: PropTypes.bool
};

Tooltip.defaultProps = {
    enterDelay: 0,
    leaveDelay: 0.1,
    position: 'top',
    trigger: ['hover']
};
