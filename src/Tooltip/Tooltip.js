import React, { Component, PropTypes } from 'react';
import RcTooltip from 'rc-tooltip';

export default class Select extends Component {
    render() {
        const { children, content,  enterDelay, leaveDelay, position, trigger } = this.props;

        return (
            <RcTooltip
                overlay={content}
                placement={position}
                trigger={trigger}
                mouseEnterDelay={enterDelay}
                mouseLeaveDelay={leaveDelay}
            >
                {children}
            </RcTooltip>
        );
    }
}

Select.propTypes = {
    children: PropTypes.any.isRequired,
    content: PropTypes.any.isRequired,
    enterDelay: PropTypes.number,
    leaveDelay: PropTypes.number,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    trigger: PropTypes.array
};

Select.defaultProps = {
    enterDelay: 0,
    leaveDelay: 0.1,
    position: 'top',
    trigger: ['hover']
};
