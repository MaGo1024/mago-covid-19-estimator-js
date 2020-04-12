data = {
  region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  const currentlyInfected = (rate) => (data.reportedCases * rate);
  const impact = {
    currentlyInfected: Math.round(currentlyInfected(10)),
    infectionsByRequestedTime: Math.round(currentlyInfected(10) * 512),
    severeCasesByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.15),
    hospitalBedsByRequestedTime: Math.round((data.totalHospitalBeds * 0.35) - (currentlyInfected(10) * 512 * 0.15)),
    casesForICUByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.05),
    casesForVentilatorsByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.02),
    dollarsInFlight: (currentlyInfected(10) * 512 * 0.65 * 1.5 * 30).toFixed(2)
  };

  const severeImpact = {
    currentlyInfected: Math.round(currentlyInfected(50)),
    infectionsByRequestedTime: Math.round(currentlyInfected(50) * 512),
    severeCasesByRequestedTime: Math.round(currentlyInfected(50) * 512 * 0.15),
    hospitalBedsByRequestedTime: Math.round((data.totalHospitalBeds * 0.35) - (currentlyInfected(50) * 512 * 0.15)),
    casesForICUByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.05),
    casesForVentilatorsByRequestedTime: Math.round(currentlyInfected(10) * 512 * 0.02),
    dollarsInFlight: (currentlyInfected(10) * 512 * 0.65 * 1.5 * 30).toFixed(2)
  };

  return {data, impact, severeImpact}

};

export default covid19ImpactEstimator;
