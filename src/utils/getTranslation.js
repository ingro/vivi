import get from 'lodash/get';

export default function getTranslation(component, propName, defaultValue) {
    if (component.props[propName]) {
        return component.props[propName];
    }

    if (typeof component.context.translator == 'undefined') {
        return defaultValue;
    }

    const translation = get(component.context.translator.messages, `${component.constructor.name}.${propName}`);

    if (translation) {
        return translation;
    }

    return defaultValue;
}