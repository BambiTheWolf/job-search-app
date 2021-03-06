import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore, persistor } from "./store";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";

import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/:companyName" element={<CompanySearchResults />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
