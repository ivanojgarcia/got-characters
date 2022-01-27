import { useEffect, useState, useContext } from 'react';
import CharactersRowDetail from '../components/characters/CharactersRowDetail';
import Layout from '../components/Layout'
import Link from 'next/link';
import Pagination from '../components/ui/Pagination';

export default function Home() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`/api/characters?page=${page}${filter}`);
      const data = await response.json();
      setCharacters(data);
      setLoading(false);
    } 
    fetchCharacters();
  }, [])

  const fetchCharacters = async () => {
      const response = await fetch(`/api/characters?page=${page}`);
      const data = await response.json();
      setCharacters(data);
      setLoading(false);
    } 

  const searchCharacter = () => {
    
  }
  const nextPage = () => {
    setLoading(true);
    setPage(page => page + 1);
    fetchCharacters();
  };
  const prevPage = () => {
    setLoading(true);
    setPage(page => page - 1);
    fetchCharacters();
  };
  return (
    <div>
      <Layout>
        {
          (loading) ? 
          <div className="flex justify-center items-center">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" alt="Loading" />
          </div>
          :
          <>
            <CharactersRowDetail characterDetail={characters} />
            <Pagination count={characters.count} nextPage={nextPage} prevPage={prevPage} page={page} />
          </>
        }      
      </Layout>
    </div>
  )
}
