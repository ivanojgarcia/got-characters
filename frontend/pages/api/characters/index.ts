// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const {API_URL } = process.env;

interface PageRank {
    rank: number
    title: string
}

interface CharacterData {
  id: string
  name: string
  house: string
  slug: string
  imageLink: string
  gender: string
  books: string
  rank: number
  titles: string
  pagerank: PageRank
  createdAt: string
  updatedAt: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharacterData[]>
) {
    const apiUrl:string = "http://localhost:3001";
    const { query: {page, filter} } = req;
    const toFind = filter ? `?filter=${filter}` : "";
    const result = await axios.get<CharacterData[]>(`${apiUrl}/api/characters/${page}${toFind}`);
    const character = result.data;
    res.status(200).json(character)
}