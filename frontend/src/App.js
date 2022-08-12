import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Double_button_grey from './components/double_button_grey/index';
import User_review from './components/user_review/index';
import ButtonOrangeSmall from './components/button_orange_small/index';
import ButtonOrangeLarge from './components/button_orange_large';
import InputFieldPost from './components/input_field_post/index';
import InputFieldFilter from './components/input_field_filter/index';
import Double_button_orange from './components/double_button_orange';
import DropDownMenu from './components/c01_drop_down_menu/index';
import Header from './components/header'
import Footer from './components/footer'
import Registration from './pages/registration';
import RegistrationLogin from './pages/registration_login';
import RegistrationValidation from './pages/registration_validation';
import NewRestaurant from './pages/new_restaurant';
import RestaurantComponent from './components/restaurant_component/index';
import UserComment from './components/user_comment/index';
import UserInfo from './components/c02_user_info/index';
import Homepage from './pages/homepage/index';
import Restaurants from './pages/search/p01_restaurants/index';
import Reviews from './pages/search/p02_reviews/index';
import Users from './pages/search/p03_users/index';
import RestaurantHeader from './components/restaurant-header';
import WriteNewReview from './pages/write_new_review';
import RestaurantPage from './pages/restaurant_page';
import UserProfile from './pages/profile/p04_user_profile/index';
import UserProfileComments from './pages/profile/p05_user_profile_comments/index';
import UserProfileRestaurants from './pages/profile/p07_user_profile_restaurants/index';
import UserProfileEdit from './pages/profile/p06_user_profile_edit/index';
import ReviewComponent from './components/c04_review_component/index';
import RatingComponent from './components/c05_rating_component/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*pages*/}
        <Route path="/" element={< Homepage />} />
        <Route path="/search/restaurants" element={< Restaurants />} />
        <Route path="/search/reviews" element={< Reviews />} />
        <Route path="/search/users" element={< Users />} />
        <Route path="/registration" element={< Registration />} />
        <Route path="/registration/login" element={< RegistrationLogin />} />
        <Route path="/registration/validation" element={< RegistrationValidation />} />
        <Route path="/search/restaurants/:id/new-review" element={< WriteNewReview />} />
        <Route path="/search/restaurants/:id" element={< RestaurantPage />} />
        <Route path="/user-profile/reviews" element={<UserProfile />} />    
        <Route path="/user-profile/comments" element={<UserProfileComments />} />    
        <Route path="/user-profile/restaurants" element={<UserProfileRestaurants />} />    
        <Route path="/user-profile/edit" element={<UserProfileEdit />} />    
        

      {/*components - temporary routes*/}
        <Route path="/double-button-grey" element={< Double_button_grey />} />
        <Route path='/double-button-orange' element={< Double_button_orange />} />
        <Route path='/drop-down-menu' element={< DropDownMenu />} />
        <Route path="/user-review" element={< User_review />} />
        <Route path="/button-orange-small" element={< ButtonOrangeSmall />} />
        <Route path="/button-orange-large" element={< ButtonOrangeLarge />} />
        <Route path="/button-orange-large" element={< ButtonOrangeLarge />} />
        <Route path="/input-field-post" element={< InputFieldPost />} />
        <Route path="/input-field-filter" element={< InputFieldFilter />} />
        <Route path='/header' element={< Header activeLabel='Search' />} />
        <Route path='/footer' element={< Footer />} />
        <Route path="/registration" element={< Registration />} />
        <Route path="/registration/login" element={< RegistrationLogin />} />
        <Route path="/registration/validation" element={< RegistrationValidation />} />
        <Route path="/restaurant-component" element={< RestaurantComponent />} />
        <Route path='/newrestaurant' element={< NewRestaurant />} />
        <Route path="/user-comment" element={< UserComment />} />
        <Route path="/user-info" element={< UserInfo />} />
        <Route path="/restaurant-header" element={< RestaurantHeader />} />
        <Route path='/review-component' element={ < ReviewComponent /> } />
        <Route path='/rating-component' element={ < RatingComponent /> } />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
