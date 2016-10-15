import { Component, Children, PropTypes } from 'react';

export default class ViviProvider extends Component {
    getChildContext() {
        const { locale, messages } = this.props;

        return {
            vivi: {
                locale,
                messages
            }
        };
    }

    render() {
        return Children.only(this.props.children);
    }
}

ViviProvider.propTypes = {
    children: PropTypes.any.isRequired,
    locale: PropTypes.string,
    messages: PropTypes.object
};

ViviProvider.defaultProps = {
    locale: 'en',
    messages: {}
};

ViviProvider.childContextTypes = {
    vivi: PropTypes.object
};