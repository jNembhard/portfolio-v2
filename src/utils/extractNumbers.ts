const extractNumbers = (portfolioID: string) => {
  const lastTwoDigits = portfolioID.slice(-2);
  return /^\d{2}$/.test(lastTwoDigits)
    ? Number(lastTwoDigits)
    : Number(portfolioID.slice(-1));
};

export default extractNumbers;
