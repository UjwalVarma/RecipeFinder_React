import React, { useState } from "react";
import MealItem from "./MealItem";
import DetailedView from "./DetailedView";
import "./style.css";

const Meal = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const searchMeal = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
    };

    const closeModal = () => {
        setSelectedMeal(null);
    };

    return (
        <div className="main">
        <div className="combine_both">
            <div className="heading">
                <h1>Search For Your Favroite Food Recipe</h1>
                <h4>Explore a world of flavor and culinary delights with our recipe finder. From savory classics to exotic creations, discover the perfect dish for any occasion. Let your taste buds guide you on a journey of culinary exploration.</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={(e) => e.key === "Enter" && searchMeal()} />
            </div>
        </div>
            <div className="container">
                {meals.map((meal, index) => (
                    <MealItem key={index} meal={meal} onClick={() => handleMealClick(meal)} />
                ))}
            </div>
            {selectedMeal && <DetailedView meal={selectedMeal} onClose={closeModal} />}
        </div>
    );
};

export default Meal 