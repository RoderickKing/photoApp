import { connect } from 'react-redux';
import ButtonsList from '../components/ButtonsList';


const mapStateToProps = (state) => {
let bigString = [];

for (const photo of state.photos) {
  var loop;
  for (loop = 0; loop < photo.category.length; loop++) {
     bigString.push(photo.category[loop]);
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
