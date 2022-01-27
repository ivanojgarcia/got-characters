import axios from 'axios';
const { URL_API_GOT } = process.env

export const getAllCharacters = async () => {
    const allCharacters = await axios.get(`${URL_API_GOT}/api/general/characters`);
    return allCharacters.data;
}
export const getCharacterById = async (id:string) => {
    const character = await axios.get(`${URL_API_GOT}/api/map/characters/byId/${id}`);
    return character.data;
}