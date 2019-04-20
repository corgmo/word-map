// Load in the countries code
var countries_json = [{
        "language_code": "SQ",
        "latitude": 41.153332,
        "longitude": 20.168331,
        "name": "Albania"
    },
    {
        "language_code": "HY",
        "latitude": 40.069099,
        "longitude": 45.038189,
        "name": "Armenia"
    },
    {
        "language_code": "DE",
        "latitude": 47.516231,
        "longitude": 14.550072,
        "name": "Austria"
    },
    {
        "language_code": "BS",
        "latitude": 43.915886,
        "longitude": 17.679076,
        "name": "Bosnia and Herzegovina"
    },
    {
        "language_code": "NL",
        "latitude": 50.503887,
        "longitude": 4.469936,
        "name": "Belgium"
    },
    {
        "language_code": "BG",
        "latitude": 42.733883,
        "longitude": 25.48583,
        "name": "Bulgaria"
    },
    {
        "language_code": "BE",
        "latitude": 53.709807,
        "longitude": 27.953389,
        "name": "Belarus"
    },
    {
        "language_code": "DE",
        "latitude": 46.818188,
        "longitude": 8.227512,
        "name": "Switzerland"
    },
    {
        "language_code": "CS",
        "latitude": 49.817492,
        "longitude": 15.472962,
        "name": "Czech Republic"
    },
    {
        "language_code": "DE",
        "latitude": 51.165691,
        "longitude": 10.451526,
        "name": "Germany"
    },
    {
        "language_code": "DA",
        "latitude": 56.26392,
        "longitude": 9.501785,
        "name": "Denmark"
    },
    {
        "language_code": "ET",
        "latitude": 58.595272,
        "longitude": 25.013607,
        "name": "Estonia"
    },
    {
        "language_code": "ES",
        "latitude": 40.463667,
        "longitude": -3.74922,
        "name": "Spain"
    },
    {
        "language_code": "FI",
        "latitude": 61.92411,
        "longitude": 25.748151,
        "name": "Finland"
    },
    {
        "language_code": "FR",
        "latitude": 46.227638,
        "longitude": 2.213749,
        "name": "France"
    },
    {
        "language_code": "GD",
        "latitude": 56.378051,
        "longitude": -3.435973,
        "name": "Scotland"
    },
    {
        "language_code": "EN",
        "latitude": 53.378051,
        "longitude": -0.435973,
        "name": "England"
    },
    {
        "language_code": "CY",
        "latitude": 51.878051,
        "longitude": -3.435973,
        "name": "Wales"
    },
    {
        "language_code": "KA",
        "latitude": 42.315407,
        "longitude": 43.356892,
        "name": "Georgia"
    },
    {
        "language_code": "EL",
        "latitude": 39.074208,
        "longitude": 21.824312,
        "name": "Greece"
    },
    {
        "language_code": "HR",
        "latitude": 45.1,
        "longitude": 15.2,
        "name": "Croatia"
    },
    {
        "language_code": "HU",
        "latitude": 47.162494,
        "longitude": 19.503304,
        "name": "Hungary"
    },
    {
        "language_code": "GA",
        "latitude": 52.41291,
        "longitude": -8.24389,
        "name": "Ireland"
    },
    {
        "language_code": "IS",
        "latitude": 64.963051,
        "longitude": -19.020835,
        "name": "Iceland"
    },
    {
        "language_code": "IT",
        "latitude": 41.87194,
        "longitude": 12.56738,
        "name": "Italy"
    },
    {
        "language_code": "LT",
        "latitude": 55.169438,
        "longitude": 23.881275,
        "name": "Lithuania"
    },
    {
        "language_code": "LB",
        "latitude": 49.515273,
        "longitude": 6.129583,
        "name": "Luxembourg"
    },
    {
        "language_code": "LV",
        "latitude": 56.879635,
        "longitude": 24.603189,
        "name": "Latvia"
    },
    {
        "language_code": "MK",
        "latitude": 41.608635,
        "longitude": 21.745275,
        "name": "Macedonia"
    },
    {
        "language_code": "MT",
        "latitude": 35.937496,
        "longitude": 14.375416,
        "name": "Malta"
    },
    {
        "language_code": "NL",
        "latitude": 52.132633,
        "longitude": 5.291266,
        "name": "Netherlands"
    },
    {
        "language_code": "NO",
        "latitude": 60.472024,
        "longitude": 8.468946,
        "name": "Norway"
    },
    {
        "language_code": "PL",
        "latitude": 51.919438,
        "longitude": 19.145136,
        "name": "Poland"
    },
    {
        "language_code": "PT",
        "latitude": 39.399872,
        "longitude": -8.224454,
        "name": "Portugal"
    },
    {
        "language_code": "RO",
        "latitude": 45.943161,
        "longitude": 24.96676,
        "name": "Romania"
    },
    {
        "language_code": "SR",
        "latitude": 44.016521,
        "longitude": 21.005859,
        "name": "Serbia"
    },
    {
        "language_code": "RU",
        "latitude": 55.52401,
        "longitude": 35.318756,
        "name": "Russia"
    },
    {
        "language_code": "SV",
        "latitude": 60.128161,
        "longitude": 15.643501,
        "name": "Sweden"
    },
    {
        "language_code": "SL",
        "latitude": 46.151241,
        "longitude": 14.995463,
        "name": "Slovenia"
    },
    {
        "language_code": "SK",
        "latitude": 48.669026,
        "longitude": 19.699024,
        "name": "Slovakia"
    },
    {
        "language_code": "UK",
        "latitude": 48.379433,
        "longitude": 31.16558,
        "name": "Ukraine"
    },
    {
        "language_code": "TR",
        "latitude": 38.963745,
        "longitude": 35.243322,
        "name": "Turkey"
    },
    {
        "language_code": "AL",
        "latitude": 41.153332,
        "longitude": 20.168331,
        "name": "Albania"
    },
]