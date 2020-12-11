import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Soy un título';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener párrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    });

    test('Debe tener src y alt igual que los props', () => {
        const img = wrapper.find('img');
        const {src, alt} = img.props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const { className } = div.props();
        
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
});
