import Head from 'next/head'
import  { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui';


interface Props {
    title? : string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>>= ({children, title}) => {

  return (
  <>
  <Head>
      <title>{title || 'PokemonApp'}</title>
      <meta name='author' content='Jorge Miranda'/>
      <meta name='description' content={`Informacion sobre pokemon ${title}`}/>
      <meta name='keywords' content={`${title}, pokemon, pokedex`} />

      <meta property="og:title" content={`Informacion sobre ${title}`} />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content={`${origin}/banner.png`} />
  </Head>

  <Navbar />
  <main style={{
      padding: '0px 20px'
  }}>
    {children}
  </main>
  </>
  )
};
