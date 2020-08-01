import { getGifs } from '../../helpers/getGifs';

describe('Tests on getGifs', () => {
    test('should return an array with 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    test('should return an empty array if no gifs are found', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
