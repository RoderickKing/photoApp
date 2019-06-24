import { connect } from 'react-redux';
import ButtonsList from '../components/ButtonsList';


const mapStateToProps = (state) => {
let bigString = [];
for (const photo of state.photos) {
   for (let index = 0; index < photo.category.length; index++) {
     bigString = bigString + photo.category[index]
   } 
  }
  const filteredCats = Array.from(new Set(bigString));
  return {
    categories: filteredCats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCategory: (category) => {
      dispatch({
        type: 'FILTER_CATEGORY',
        category
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsList);
