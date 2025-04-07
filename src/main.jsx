import { createRoot } from 'react-dom/client'
import '../src/assets/styles/index.css'
import App from './App.jsx'
import { saveState } from './localstorage.jsx';
import { Provider } from 'react-redux';
import { store } from "./ReduxManager/store";
store.subscribe(() => {
  saveState(store.getState())
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
