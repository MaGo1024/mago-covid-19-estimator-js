const covid19ImpactEstimator = (data) => {
  const impactEstimate = (rate) => {
    const currentlyInfected = Math.round(data.reportedCases * rate);
    const infectionsByRequestedTime = Math.round(currentlyInfected * 512);
    const severeCasesByRequestedTime = Math.round(infectionsByRequestedTime * 0.15);
    const availableBedsByRequestedTime = Math.round(data.totalHospitalBeds * 0.35);
    const hospitalBedsByRequestedTime = availableBedsByRequestedTime - severeCasesByRequestedTime;
    const casesForICUByRequestedTime = Math.round(currentlyInfected * 0.05);
    const casesForVentilatorsByRequestedTime = Math.round(currentlyInfected * 0.02);
    const dollarsRate = 0.65 * 1.5 * 30;
    const dollarsInFlight = (currentlyInfected * dollarsRate).toFixed(2);
    const estimateData = {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
    return estimateData;
  };
  const estimate = {
    impact: impactEstimate(10),
    severeImpact: impactEstimate(50)
  };

  return { data, estimate };
};
export default covid19ImpactEstimator;
