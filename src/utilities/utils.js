export const formatPrice = (fetchedItem) => {
  return `£${fetchedItem.price / 100}`;
};
