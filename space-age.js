/** @format */

const EARTH_YEAR_SECONDS = 31557600;

const ORIBTAL_PERIOD_RATES = {
	earth: 1,
	mercury: 0.2408467,
	venus: 0.61519726,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
};
// https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b
// https:media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-1-4842-3988-9_1/MediaObjects/465726_1_En_1_Fig1_HTML.jpg

// 			age(earth, 1111)
export const age = (planet, seconds) => {
	const periodRateSeconds = ORIBTAL_PERIOD_RATES[planet] * EARTH_YEAR_SECONDS;

	return parseFloat((seconds / periodRateSeconds).toFixed(2));
};
