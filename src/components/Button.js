import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleCategoryClick = (evt) => {
    props.filterCategory(props.category);
  }

  return (
    <div>
      <aside>
      <button className='button' onClick={ handleCategoryClick } value={ props.category }>{ props.category }</button>
      </aside>
    </div>
  )
}

export default Button;
