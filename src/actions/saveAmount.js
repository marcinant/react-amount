export default (value) => {
  console.log('ACTION', value);
  return {
    type: 'SAVE_AMOUNT',
    value,
  };
};
