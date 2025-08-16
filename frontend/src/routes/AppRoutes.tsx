import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { WeatherTime } from "../pages";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherTime/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </>
  );
}
