import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs Fetch', () => {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('Star wars');

        expect(gifs.length).toBe(10);
        
    });

    test('No enviamos categoría', async() => {

        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0);
    });
    
    
});
