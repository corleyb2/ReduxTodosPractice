import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibilityFilter } from "../actions";

// mapStateToProps & mapDispatchToProps
// mSTP (state, ownProps) --> {active: ownProps.filter === state.visibility.filter ? }
// mDTP (dispatch, ownProps) --> {boundSetVisibilityFiter: ()=> dispatches appropriate action creator}
// connect to Link component

const mapStateToProps = (state, ownProps) => {
  return { active: ownProps.filter === state.visibilityFilter };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundSetVisibilityFilter: () =>
      dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
