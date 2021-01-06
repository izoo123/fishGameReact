import React, {Component} from 'react'
import AppDisplay from './AppDisplay'
import './App.css';
import FishContextProvider from './FishContext';

export default function App() 
{
    return (
      <div>
        <FishContextProvider>
          <AppDisplay />
        </FishContextProvider>
      </div>
    )
}


