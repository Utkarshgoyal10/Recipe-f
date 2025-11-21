import {Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SearchByNamePage from './components/SearchByRecipeName/SearchByNamePage';
import './App.css';
import SearchByIngredientsPage from './components/SearchByIngredients/SearchByIngredientsPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import SearchByCuisinePage from './components/SearchByCuisine/SearchByCuisinePage';
import SearchByNutritionPage from './components/SearchByNutrition/SearchByNutritionPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import Discuss from './components/discussion/discuss';
import Trending from './components/trending/Trending';
import Searched from './components/trending/pages/Searched';
import NavBar from './components/HomePage/NavBar';
import Cuisines from './components/trending/pages/Cuisines';
import Recipe from './components/trending/pages/Recipe';
import NgoRegistration from './components/food waste/ngo'
import FoodDonation from './components/food waste/donatefood';
// import { BrowserRouter } from "react-router-dom";

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path='/about' exact element={<AboutUsPage />} />
              <Route
                path="/search-by-name"
                element={<ProtectedRoute element={<SearchByNamePage />} />}
              />
              <Route
                path="/search-by-ingredients"
                element={<ProtectedRoute element={<SearchByIngredientsPage />} />}
              />
              <Route
                path="/search-by-cuisine"
                element={<ProtectedRoute element={<SearchByCuisinePage />} />}
              />
              <Route
                path="/search-by-nutrition"
                element={<ProtectedRoute element={<SearchByNutritionPage />} />}
              />
              <Route
                path="/register-ngo"
                element={<ProtectedRoute element={<NgoRegistration />} />}
              />
              <Route
                path="/donate-food"
                element={<ProtectedRoute element={<FoodDonation />} />}
              />
              <Route
                path="/trending/*"
                element={<ProtectedRoute element={<Trending/>} />}
              />
              <Route
                path="/discussion"
                element={<ProtectedRoute element={<Discuss/>} />}
              />
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/cuisines/:type" element={<Cuisines />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              {/* <Route
              path="/searched/:param"
              render={(props) => <Searched param={props.match.params.param} />}
  /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
