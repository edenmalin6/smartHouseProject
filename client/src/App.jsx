import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AddRoomPage from "./pages/AddRoomPage";
import RoomPage from "./pages/RoomPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./context/AuthProvider";


function App() {

  return (
    <main>
      <AuthProvider>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/forgotPassword" element={<ForgotPassword />}/>
        <Route path="/add-room" element={<AddRoomPage />} />
        <Route path="/room/:roomName" element={<RoomPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
