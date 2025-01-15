export const convertToLakhs = (amount: number): string => {
    const lakhs = amount / 100000;
    return `${lakhs} LPA`;
  };
  