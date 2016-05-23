/**
 * Created by hjzheng on 16/5/23.
 */

function getStorageData(key) {
	return JSON.parse(window.sessionStorage[key] ? window.sessionStorage[key] : null);
}
function setStorageData(key, value) {
	window.sessionStorage[key] = JSON.stringify(value);
}

var sessionstorage = {
	get: getStorageData,
	set: setStorageData
};

export default sessionstorage;
