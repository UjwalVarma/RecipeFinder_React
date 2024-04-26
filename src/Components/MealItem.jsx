import React from "react";
import './style.css';

const MealItem = ({ meal, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {meal && meal.strMealThumb && (
                <img src={meal.strMealThumb} alt="meal" />
            )}
            <div className="info">
                {meal && (
                    <>
                        <h2>{meal.strMeal}</h2>
                        <p>{meal.strArea} food</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default MealItem