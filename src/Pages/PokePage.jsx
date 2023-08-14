import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Grid } from '@chakra-ui/react'
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
const PokePage = () => {
    const [pokeArr,setPokeArr] = useState([]);
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(20);
    const [totalPage,setTotalPage] =useState(1)
    const updatePage = (value)=>{
        setPage(page+value)
    }
    const getData = async()=>{
       
           const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page}`;
           const req = await axios.get(url);
           setTotalPage(req.data.count)
           setPokeArr(req.data.results)
           
    }
    useEffect(()=>{
      getData();
    },[page])
  return (
    <>
      <Grid templateColumns='1fr' gap={6} >
        {pokeArr?.map((ele,index)=><PokemonCard key={ele.name} {...ele} index={index}/>)}
    
      </Grid>
    <Pagination page={page} updatePage={updatePage} totalPage={setTotalPage}/>
    </>
  );
}

export default PokePage;
