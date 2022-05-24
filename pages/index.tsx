import {  Grid } from '@nextui-org/react';
import  { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse } from '../interfaces'
import { SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {


  return (
   <Layout title='Listado de Pokemon'>
     <Grid.Container gap={2} justify='flex-start'>
       {
         pokemons.map((pokemon) => (
          <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
         ))
       }
     </Grid.Container>
   </Layout>
   
  )

}

  export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
      ...poke,
      id: i+1,
      img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }))
   
    return {
      props: {
        pokemons
      }
    }
  }

export default HomePage
