import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Autn from "./components/auth/Autn";
import Content from "./components/content/Content";
import store from "./store";
// console.log(store);

function AppContent() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Autn />} />
        <Route path="/todo" element={<Content />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      
    </div>
  );
}
export const App=()=>{
    return<Provider store={store}>
      <AppContent/>
    </Provider>
 
}


export default App;
