
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { k as App2 } from './App.tsx';
import { Provider } from 'react-redux';
import store from './Components/STORE/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  
    <>
    <App></App>
   <App2></App2>
    </>
  
  </Provider>
)
