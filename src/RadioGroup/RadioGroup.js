import React, { Component, PropTypes } from 'react';

export default class RadioGroup extends Component {

    render() {
        return (
            <div>
                <label className="control control--radio">First radio
                    <input type="radio" name="radio" checked="checked"/>
                    <div className="control__indicator"></div>
                </label>
                <label className="control control--radio">Second radio
                    <input type="radio" name="radio" />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control--radio">Second radio
                    <input type="radio" name="radio" disabled />
                    <div className="control__indicator"></div>
                </label>
            </div>
        );
    }
}

RadioGroup.propTypes = {
    //
};

RadioGroup.defaultProps = {
    //
};
