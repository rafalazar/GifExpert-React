import React from "react";
import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe("Pruebas sobre <GifGrid />", () => {

    const category = "The last of us";

    test("Debe mostrar el componente correctamente", () => {

        useFetchGifs.mockReturnValue({

            data: [],
            loading: true,

		});

		const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });

    test("Debe mostrar items cuando se cargan imágenes con useFetchGifs", () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Whatever'
        }];

        useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		const wrapper = shallow(<GifGrid category={category} />);
		
		expect(wrapper.find('p').exists()).toBe(false);

    });

});
