import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import FileManager from "./Pages/FileManager";
import Analytics from "./Pages/Analytics";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Router>
      <Sidebar>
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
        </Sidebar>
    </Router>
    
    
    </>
  );
}

export default App;
