import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../src/GifExpertApp';

describe('Pruebas sobre <GifExpertApp />', () => {
    
    
    test('Debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorías', () => {
       
        const categories = ['The Last of Us', 'God of war'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    });
    
});
