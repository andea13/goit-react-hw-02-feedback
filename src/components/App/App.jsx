import React from 'react';
import Options from '../Options/Options';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Options />
    </div>
  );
};
