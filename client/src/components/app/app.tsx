import React from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("../../pages/home/home"));
const Dashboard = React.lazy(() => import("../../pages/dashboard/dashboard"));
const Form = React.lazy(() => import("../../pages/profile/profile"));

export default function App() {
  return (
    <React.Suspense fallback={<>Loading....</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </React.Suspense>
  );
}
