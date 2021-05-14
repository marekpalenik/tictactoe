import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import HomePageContainer from './pages/home/HomePageContainer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePageContainer />
      </div>
    </Provider>
  );
}

export default App;
