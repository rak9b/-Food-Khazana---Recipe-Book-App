import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import NotFound from "../components/Errorpage/NotFound";
import AllRecipes from "../components/FoodSection/AllRecipes";
import AddRecipes from "../components/FoodSection/AddRecipes";
import MyRecipes from "../components/FoodSection/MyRecipes";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ForgotPassword from "../components/Auth/ForgotPassword";
import PrivateRoute from "../components/Auth/PrivateRoute";
import PublicRoute from "../components/Auth/PublicRoute";
import FoodDetails from "../components/FoodSection/FoodDetails";
import UpdateRecipe from "../components/FoodSection/UpdateRecipe";
import HomeRecipes from "../components/Home/HomeRecipes";
import Hero from "../components/Home/Hero";
import HomeSlider from "../components/Home/HomeSlider";
import WhyUs from "../components/Home/WhyUs";
import ContactUs from "../components/others/ContactUs";
import Terms from "../components/others/Terms";
import Privacy from "../components/others/Privacy";
import AboutUs from "../components/others/AboutUs";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element:(
                    <>
                    <Hero></Hero>
                    <HomeSlider></HomeSlider>
                    <HomeRecipes></HomeRecipes>
                    <WhyUs></WhyUs>
                    </>
                ),
            },
            {
                path:"/all-recipes",
                element:<AllRecipes></AllRecipes>,
            },
            {
                path:"/recipe-details/:id",
                element: <PrivateRoute> <FoodDetails></FoodDetails> </PrivateRoute> ,
            },
            {
                path:"/update-recipe/:id",
                element: <PrivateRoute> <UpdateRecipe></UpdateRecipe> </PrivateRoute> ,
            },
            {
                path:"/my-recipes",
                element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>  ,
            },
            {
                path:"/add-recipes",
                element: <PrivateRoute> <AddRecipes></AddRecipes> </PrivateRoute>  ,
            },
            {
                path:"/login",
                element: <PublicRoute><Login></Login></PublicRoute>  ,
            },
            {
                path:"/register",
                element: <PublicRoute><Register></Register></PublicRoute>  ,
            },
            {
                path:"/forgot-password",
                element: <ForgotPassword></ForgotPassword> ,
            },
            
            {
                path:"/contact-us",
                element: <ContactUs></ContactUs> ,
            },
            {
                path:"/terms",
                element: <Terms></Terms> ,
            },
            
            {
                path:"/privacy-policy",
                element: <Privacy></Privacy> ,
            },
            
            {
                path:"/about-us",
                element: <AboutUs></AboutUs> ,
            },
            
        ]
    },
    {
        path:"/*",
        element: <NotFound></NotFound>,
    },
]
)
export default router;