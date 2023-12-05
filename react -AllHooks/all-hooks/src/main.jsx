
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {ContextProvider} from "./AllStateHooks/ContextApi/ContextApi.jsx"
import {store} from "./AllStateHooks/Redux/store.js"
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <ContextProvider>
    <App />
  </ContextProvider>
  </Provider>
  </BrowserRouter>
 
)
