import React from 'react';
import PropTypes from 'prop-types';

function AmountInput(props) {
  console.log('props', props.amount);
  const {amount, lang, onChange} = props;
  return (
    <input
      lang={lang}
      onChange={event => onChange({amount: event.target.value})}
      type="number"
      // value={amount}
    />
  );
}

AmountInput.defaultProps = {
  amount: 0,
  lang: 'pl',
  onChange: () => {},
};

AmountInput.propTypes = {
  amount: PropTypes.number,
  lang: PropTypes.string,
  onChange: PropTypes.func,
};

export default AmountInput;
