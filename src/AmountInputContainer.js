import {compose} from 'redux';
import {connect} from 'react-redux';
import AmountInput from './AmountInput';
import saveAmount from './actions';

const mapStateToProps = ({amount}) => ({
  amount,
});

const mapDispatchToProps = dispatch => ({
  onChange: compose(dispatch, saveAmount),
});

export default connect(mapStateToProps, mapDispatchToProps)(AmountInput);
