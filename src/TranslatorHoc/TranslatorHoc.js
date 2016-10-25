import React, { Component, PropTypes } from 'react';
import forOwn from 'lodash/forOwn';

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

    TranslatorProviderWrapper.propTypes = {
        children: PropTypes.element
    };

    TranslatorProviderWrapper.contextTypes = {
        translator: PropTypes.object
    };

    return TranslatorProviderWrapper;
}