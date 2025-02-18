import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import React from 'react';

const Theme = () => {
   
    return (
        <Flowbite>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome to Dark Mode!</h1>
          <DarkThemeToggle />
        </div>
      </Flowbite>
    );
};

export default Theme;