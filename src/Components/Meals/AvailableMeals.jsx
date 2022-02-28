import { useState, useEffect } from "react";
import MealItem from './MealItem'
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://select-meals-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error ('Something Went Wrong')
            }
            const responseData = await response.json();
            const loadedData = [];
            
            for (const key in responseData) {
                loadedData.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedData)
        }
        fetchMeals()
    },[])

    const mealsList = meals.map((meal) => (
        <MealItem
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
        
    ))

    return (
        <section className={classes.meal}>
            <ul>
                {mealsList}
            </ul>

        </section>
    )
};

export default AvailableMeals;