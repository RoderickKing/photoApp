import { connect } from 'react-redux';
import ButtonsList from '../components/ButtonsList';


const mapStateToProps = (state) => {
  const categories = state.photos.map(banana => {
    return banana.category;
  })
  const filteredCats = Array.from(new Set(categories));
  return {
    categories: filteredCats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCategory: (category,description) => {
      dispatch({
        type: 'FILTER_CATEGORY',
        category,
        description
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsList);
