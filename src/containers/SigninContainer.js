import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Signin from '../components/auth/Signin';

export default withRouter(connect(null)(Signin));
