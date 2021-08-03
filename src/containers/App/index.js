/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchData } from 'src/actions/recipes';

// fonction qui permet de relier les props du composant stateless
// avec les propriétés du state, elle retourne un objet
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(fetchData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
