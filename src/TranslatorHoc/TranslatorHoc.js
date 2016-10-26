import React, { Component, PropTypes } from 'react';
import forOwn from 'lodash/forOwn';

// TODO: implement a method to get the WrappedComponent and to set ref on it, see https://github.com/ReactTraining/react-router/blob/master/modules/withRouter.js
export default function TranslatorHoc(WrappedComponent, propsMap) {
    class TranslatorProviderWrapper extends Component {
        getTranslatedProps() {
            const translatedProps = {};

            forOwn(propsMap, (value, key) => {
                translatedProps[key] = this.props[key] || this.context.translator.getTranslation(value)
            });

            return {
                ...this.props,
                ...translatedProps
            }
        }

        render() {
            if (! this.context.translator) {
                return <WrappedComponent {...this.props} />;
            }
            
            let newProps = this.getTranslatedProps();

            return <WrappedComponent {...newProps} />;
        }
    }

    TranslatorProviderWrapper.contextTypes = {
        translator: PropTypes.object
    };

    return TranslatorProviderWrapper;
}