import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserProfile from "./Profile";
import ServicePage from "./ServicePage";
import AdminCategoryPage from "./AdminCategoryPage";
import CreateCategory from "./CreateCategoryPage";
import AdminEditCategory from "./AdminEditCategory";
import AdminEditService from "./AdminEditService";
import AdminService from "./AdminServicePage";
import CreateService from "./CreateServicePage";
import NotFoundPage from "./NotFoundPage";
import AllStepCheckOutForm from "./AllStepCheckOutForm";
import OrderHistory from "./OrderHistory";
import AdminOrder from "./AdminOrderPage";
import AdminOrderDetailPage from "./AdminOrderDetailPage";

function AuthenticatedApp() {
  const loginRole = localStorage.getItem("role");
  return (
    <div className="App">
      {loginRole === "admin" ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/category-dashboard" element={<AdminCategoryPage />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route
            path="/category/edit/:categoryId"
            element={<AdminEditCategory />}
          />
          <Route path="/service-dashboard" element={<AdminService />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route
            path="/service/edit/:serviceId"
            element={<AdminEditService />}
          />
          <Route path="/order-dashboard" element={<AdminOrder />} />
          <Route
            path="/order/detail/:orderHistoryId"
            element={<AdminOrderDetailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/checkout/:serviceId"
            element={<AllStepCheckOutForm />}
          />
          <Route path="/order-history/:userId" element={<OrderHistory />} />
        </Routes>
      )}
    </div>
  );
}

export default AuthenticatedApp;
