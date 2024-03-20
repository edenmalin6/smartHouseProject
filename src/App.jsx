import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import AddRoomPage from "./pages/AddRoomPage";
import RoomPage from "./pages/RoomPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ContextProvider } from "./context/ContextProvider";
function App() {

  return (
    <main>
      <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-room" element={<AddRoomPage />} />
        <Route path="/room/:roomName" element={<RoomPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </ContextProvider>
    </main>
  );
}

export default App;
