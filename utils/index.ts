export const formatPrice = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatOnlyNumber = (value: string): number => {
  return Number(value.replace(/[^0-9]/g, ''));
};
