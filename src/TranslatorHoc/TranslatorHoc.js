import React, { Component, PropTypes } from 'react';
import forOwn from 'lodash/forOwn';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

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

        getWrappedInstance() {
            return this.wrappedInstance;
        }

        render() {
            let props = this.context.translator ? this.getTranslatedProps() : {...this.props};

            props.ref = (c) => { this.wrappedInstance = c };

            return <WrappedComponent {...props} />;
        }
    }

    TranslatorProviderWrapper.contextTypes = {
        translator: PropTypes.object
    };

    TranslatorProviderWrapper.displayName = `TranslatorHoc(${getDisplayName(WrappedComponent)})`

    return TranslatorProviderWrapper;
}