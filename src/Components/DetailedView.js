import React from "react";
import "./style.css";

const DetailedView = ({ meal, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="detailed-card">
                <button className="close-btn" onClick={onClose}>Close</button>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="recipe">
                    <h3>Recipe:</h3>
                    <p>{meal.strInstructions}</p>
                    <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch video</a>
                </div>
            </div>
        </div>
    );
};

export default DetailedView; 