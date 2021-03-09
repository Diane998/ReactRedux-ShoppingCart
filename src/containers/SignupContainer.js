import { connect } from 'react-redux';
import { signUpStart } from '../redux/actions/user/userActions';

import { Signup } from '../components/auth/Signup';

export default connect(null, { signUpStart })(Signup);
