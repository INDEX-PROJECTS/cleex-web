export const priceFormatter = (price: string | number) => {
  const formatter = Intl.NumberFormat("ru");

  return `${formatter.format(Number(price))} ₽`;
};
