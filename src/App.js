import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoryPage from "./pages/CategoryPage";


const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));



function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products/:productId" element={<ProductPage/>}>
            </Route>
            <Route path="products/category/:categoryName" element={<CategoryPage/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
