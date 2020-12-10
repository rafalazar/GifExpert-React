import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });
   
    test('Debe mostrarse correctamente', () => {

       expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {
       
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: {value} });
    });
    
    test('NO debe de postear', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('Debe llamar al setCategories y limpiar la caja de texto', () => {
       
        const value = 'Silicon Valley';
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        // 4. el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});
