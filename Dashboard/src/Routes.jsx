import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;
