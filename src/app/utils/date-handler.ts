export const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };