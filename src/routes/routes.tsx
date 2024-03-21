import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AllSupplies from "../pages/supplies/AllSupplies";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import SupplyView from "../pages/supplies/SupplyView";
import SupplyList from "../pages/dashboard/supply/SupplyList";
import CreateSupply from "../pages/dashboard/supply/CreateSupply";
import DonatePage from "../pages/supplies/DonatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "supplies/:id",
        element: <SupplyView />,
      },
      {
        path: "/donate",
        element: <ProtectedRoute>
          <DonatePage />
        </ProtectedRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <SupplyList />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
