import React from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/shop/shopActions';

// const Home = () => {
//   return <div>Home</div>;
// };

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    console.log(this.props.collections);
    return <div>Home</div>;
  }
}

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, { fetchCollectionsStart })(Home);
