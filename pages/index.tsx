import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThemeProvider } from '@emotion/react';
// import { lawfulTheme } from '../theme/lawful';
import { Button } from '../components/atoms/Button';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={{color: 'red'}}>
      <Button>Test</Button>
    </ThemeProvider>
  )
}

export default Home
