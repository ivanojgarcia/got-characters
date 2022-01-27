import { Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import {getConnection, ILike, Like} from "typeorm";
import { getAllCharacters } from '../services/character.services';
import {getRepository} from 'typeorm';
import {Character} from '../entity/Character';
import CharacterValidator from '../validators/character.validator';
const {URL, PORT} = process.env;


export const getCharacter = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const {error} = CharacterValidator(req.params);
        if(error) return res.status(400).json({status: "error", message: error.message});
        const findOption = {
            where: {
                id: req.params.id
            }
        }
        const character= await getRepository(Character).findOne(findOption);
        res.status(200).json(character);
    } catch (err: unknown) {
        let errorMessage = "Exception Error.";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(404).json({status: "error", message: errorMessage});
    }    
}

export const getCharacters = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { limit,  currentPage } = req.params;
        const { filter } = req.query; 
        let take: number = parseInt(limit) || 10;
        let skip: number;
        let queryFilter: string = (filter) ? `?filter=${filter}` : "";
        let page: number = parseInt(currentPage);
        if(currentPage) skip = +page === 1 ? 0: (+page - 1) * take;
        else {
            skip = 0;
            page = 1;
        }
        const findOption = {
            take,
            skip,
            where: [
                {name: Like(`%${filter}%`)},
                {house: Like(`%${filter}%`)}
            ], 
            cache: true
        }
        if(!filter) {
            delete findOption.where;
        }
        const [data, count] = await getRepository(Character).findAndCount(findOption);
        const pages: number = Math.round(count/take);

        res.status(200).json({
            data, 
            limit: take, 
            page: page || "1",
            pages,
            prev: (page-1 != 0 && count > 0) ? `${URL}:${PORT}/api/characters/${page-1}/${take}${queryFilter}` : null,
            next: (page+1 <= pages && count > 0) ? `${URL}:${PORT}/api/characters/${page+1}/${take}${queryFilter}` : null,
            count
        });
    } catch (err: unknown) {
        let errorMessage = "Exception Error.";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(404).json({status: "error", message: errorMessage});
    }    
}

export const syncCharacter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const characters = await getAllCharacters();
        const characterToSave = characters.book.reduce((characterArray, character) => {
            let characterValue = {
                name: character.name,
                house: character.house,
                slug: character.slug,
                imageLink: character.image,
                gender: character.gender,
                books: groupElements(character.books),
                rank: character.pagerank.rank,
                pagerank: character.pagerank,
                titles: groupElements(character.titles)
            }
            characterArray.push(characterValue);
            return characterArray;
        }, [])
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Character)
        .values(characterToSave)
        .execute();
        res.status(200).json(characterToSave);
    } catch (err: unknown) {
        let errorMessage = "Exception Error.";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        res.status(404).json({status: "error", message: errorMessage});
    }

}

const groupElements = (data:string[]) => {
    return data.join();
}