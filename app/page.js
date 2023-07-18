'use client'

import Header from './components/Header'
import Main from './components/Main'

const sections = [ "home", "about", "projects", "contact" ];

// Main component ==============================================================================================================================
export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}