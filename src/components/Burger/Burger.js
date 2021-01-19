import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients) //['salad', 'bacon', 'cheese', 'meat'];
    .map(igKey => {
      // salad
      console.log('outer map: ', igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //returns an empty array of the object's value number of elements
        console.log('inner map: ', _, i);
        return <BurgerIngredient key={igKey + i} type={igKey} />; // for the number of empty elements of the object's keys array return that many BurgerIngredient components with the prop type of the object's key.
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

// export default withRouter(burger);
export default burger;
