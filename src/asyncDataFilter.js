const fetch = require('node-fetch');
const url = 'https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json';

export function getData(url) {
    return fetch(url)
        .then(response => response.json())
};

export function filterBy(key, value) {
    return getData(url)
        .then(data => data.filter(x => x[key] === value))
}

function filterByTypeAndSubject(typeValue, subjectValue) {
    return getData(url)
        .then(data => data.filter(x => x.type === typeValue && x.subject === subjectValue))
}

function getCountOfUniqueSubjects(subject) {
    return getData(url)
        .then(data => data.map(x => x.subject))
        .then(mappedData => mappedData.filter(function(e,i,a) {
            return i === a.indexOf(e);}))
        .then(x => x.length)
}

filterBy('type', 'value').then( (result) => {
    console.log(result);
})