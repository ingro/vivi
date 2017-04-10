import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

export default class TranslatorProvider extends Component {
    getChildContext() {
        const { locale, messages } = this.props;

        return {
            translator: {
                locale,
                messages,
                getTranslation(key) {
                    return get(this.messages, key);
                }
            }
        };
    }

    render() {
        return Children.only(this.props.children);
    }
}

TranslatorProvider.propTypes = {
    children: PropTypes.any.isRequired,
    locale: PropTypes.string,
    messages: PropTypes.object
};

TranslatorProvider.defaultProps = {
    locale: 'en',
    messages: {}
};

TranslatorProvider.childContextTypes = {
    translator: PropTypes.object
};