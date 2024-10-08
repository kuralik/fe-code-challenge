const formatMarketCap = (marketCap: number): string => {
  const thresholds = [
    { value: 1_000_000_000_000, suffix: 'T' },
    { value: 1_000_000_000, suffix: 'B' },
    { value: 1_000_000, suffix: 'M' }
  ];

  for (const { value, suffix } of thresholds) {
    if (marketCap >= value) {
      const formattedValue = (marketCap / value).toFixed(1);

      return formattedValue.endsWith('.0')
        ? `${formattedValue.slice(0, -2)}${suffix}`
        : `${formattedValue}${suffix}`;
    }
  }

  return `${marketCap}`;
};

export default formatMarketCap;
