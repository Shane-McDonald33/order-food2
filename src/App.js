import { useState } from 'react';
import AvailableMeals from './Components/Meals/AvailableMeals';
import Header from './Components/Layout/Header.jsx';

function App() {
  return (
    <main>
      <Header />
      <AvailableMeals/>
    </main>
  );
}

export default App;
