import React from 'react';
import Trip from '../src/components/Trip';
import Expense from '../src/components/Expenses';
import Title from '../src/components/Title';

export default function Home() {
  return (
    <>
      <div>
        <Title/>
      </div>   
      <div className="content-container">  
          <Trip />
          <Expense />
      </div>
    </>
  );
}
