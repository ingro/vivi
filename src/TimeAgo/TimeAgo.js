import React, { Component, PropTypes } from 'react';
import RcTimeAgo from 'react-timeago';
import itstrings from 'react-timeago/lib/language-strings/it';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import moment from 'moment';

import Tooltip from '../Tooltip';

const formatter = buildFormatter(itstrings);

export default class TimeAgo extends Component {

    renderTimeAgo() {
        const { date } = this.props;

        return (
            <RcTimeAgo
                date={date}
                formatter={formatter}
            />
        );
    }

    render() {
        const { date, tooltip, tooltipDateFormat, tooltipPosition } = this.props;

        if (tooltip) {
            return (
                <Tooltip
                    content={moment.isMoment(date) ? date.format(tooltipDateFormat) : date}
                    position={tooltipPosition}
                >
                    <a style={{ textDecoration: 'none' }}>
                        {this.renderTimeAgo()}
                    </a>
                </Tooltip>
            );
        }

        return this.renderTimeAgo();
    }
}

TimeAgo.propTypes = {
    date: PropTypes.any.isRequired,
    tooltip: PropTypes.bool,
    tooltipDateFormat: PropTypes.string,
    tooltipPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

TimeAgo.defaultProps = {
    tooltip: false,
    tooltipDateFormat: 'lll',
    tooltipPosition: 'top'
};
