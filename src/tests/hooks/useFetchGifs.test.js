import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el Hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('The last of us'));
    
        const {data, loading} = result.current;

        await waitForNextUpdate();
    
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('Debe de retornar arreglo de imágenes y el loading en false', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('The last of us'));

        await waitForNextUpdate();

        const {data, loading} = result.current;
    
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    });
    
});
