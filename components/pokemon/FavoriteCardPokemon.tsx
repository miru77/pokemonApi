import React from 'react'
import { Card } from '@nextui-org/react'
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    pokeId: number
}

export const FavoriteCardPokemon  :  FC<Props> = ({pokeId}) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokeId}`)
    }
  return (
    <Card hoverable clickable css={{padding : 10}}  onClick={onFavoriteClicked}>
    <Card.Image 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
      width={'100%'}
      height={140}
    />

    </Card>
   
  )
}
