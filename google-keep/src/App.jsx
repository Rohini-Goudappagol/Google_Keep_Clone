
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Archive from "./views/Archive";
import Trash from "./views/Trash";
import NotesWrapper from "./views/components/layouts/NotesWrapper";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
           <NotesWrapper>
            <Home/>
           </NotesWrapper>
          }
        />
        <Route
          path="/archive"
          element={
            <NotesWrapper>
              <Archive/>
            </NotesWrapper>
          }
        />
        <Route
          path="/trash"
          element={
            <NotesWrapper>
              <Trash />
            </NotesWrapper>
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      
    </>
  );
};

export default App;

