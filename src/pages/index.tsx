import { styled } from '@/lib/stitches.config';
import { NavigateButton } from '@/components/button'

import * as React from 'react';
import Head from 'next/head'

const Splash = styled('div', {
  height: '100vh',
  background: '$primaryGradient',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '32px'
});

const Title = styled('h1', {
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '15px'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash>
        <Title>Todo</Title>
        <NavigateButton href="/todos">Go to List</NavigateButton>
      </Splash>
    </>
  )
}
