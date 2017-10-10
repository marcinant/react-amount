import React from 'react';
import PropTypes from 'prop-types';

function AmountInput(props) {
  const {lang, onChange} = props;
  return (
    <input
      lang={lang}
      onChange={event => onChange({amount: event.target.value})}
      type="number"
    />
  );
}

AmountInput.defaultProps = {
  lang: 'pl',
  onChange: () => {},
};

AmountInput.propTypes = {
  lang: PropTypes.string,
  onChange: PropTypes.func,
};

export default AmountInput;
