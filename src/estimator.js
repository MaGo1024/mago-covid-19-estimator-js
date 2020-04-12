const covid19ImpactEstimator = (data) => {
  const currentlyInfected = (rate) => (data.reportedCases * rate);
  const impact = {
    currentlyInfected: Math.round(currentlyInfected(10)),
    infectionsByRequestedTime: Math.round(currentlyInfected(10) * 512),
    severeCasesByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.15),
    hospitalBedsByRequestedTime: Math.round((data.totalHospitalBeds * 0.35) - (currentlyInfected(10) * 512 * 0.15)),
    casesForICUByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.05),
    casesForVentilatorsByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.02),
    dollarsInFlight: currentlyInfected(10) * 512 * 0.65 * 1.5 * 30
  };
  const severeImpact = {
    currentlyInfected: Math.round(currentlyInfected(50)),
    infectionsByRequestedTime: Math.round(currentlyInfected(50) * 512),
    severeCasesByRequestedTime: Math.round(currentlyInfected(50) * 512 * 0.15),
    hospitalBedsByRequestedTime: Math.round((data.totalHospitalBeds * 0.35) - (currentlyInfected(50) * 512 * 0.15)),
    casesForICUByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.05),
    casesForVentilatorsByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.02),
    dollarsInFlight: currentlyInfected(50) * 512 * 0.65 * 1.5 * 30
  };
  const estimate = { impact, severeImpact };
  return { data, estimate };
};
export default covid19ImpactEstimator;
