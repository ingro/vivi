import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Switch from '../src/Switch';

test('<Switch />', t => {
    const wrapper = shallow(<Switch />);

    const input = wrapper.find('input[type="checkbox"]');

    // console.log(input.first().is('[checked=false]'));

    t.is(input.length, 1);

    // TODO: non posso chiamare l'evento change dato che all'interno del componente uso ref, dovrei usare il metodo
    // mount di enzyme ma questo richiederebbe instanziare un document globale con jsdom
    // input.first().simulate('change');

    // console.log(input.first().is('[checked=true]'));
});