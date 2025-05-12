import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Trajes from "./pages/Trajes.tsx";
import PreWedding from "./pages/pre-wedding/PreWedding.tsx";
import Presentes from "./pages/Presentes.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Home from './pages/Home.tsx'

import "./index.css";
import ConfirmacaoPresenca from "./pages/rspv.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <></>,
    children: [
      { path: "", element: <Home /> },
      { path: "trajes", element: <Trajes /> },
      { path: "pre-wedding", element: <PreWedding /> },
      { path: "presentes", element: <Presentes /> },
      { path: "confirmacao-presenca", element: <ConfirmacaoPresenca /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
