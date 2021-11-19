const asteroids = [
    {
        links: {
            self: 'http://www.neowsapp.com/rest/v1/neo/2002340?api_key=4XX4X'
        },
        id: '54221660',
        neo_reference_id: '54221660',
        name: '(2021 VV26)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54221660',
        absolute_magnitude_h: 23.53,
        estimated_diameter: {
            kilometers: {
                estimated_diameter_min: 0.2424124811,
                estimated_diameter_max: 0.5420507863
            },
            meters: {
                estimated_diameter_min: 242.4124811008,
                estimated_diameter_max: 542.0507863358
            },
            miles: {
                estimated_diameter_min: 0.1506280858,
                estimated_diameter_max: 0.3368146392
            },
            feet: {
                estimated_diameter_min: 795.3165644948,
                estimated_diameter_max: 1778.3819018419
            },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
            {
                close_approach_date: '2021-11-01',
                close_approach_date_full: '2021-Nov-01 01:59',
                epoch_date_close_approach: 1635731940000,
                relative_velocity: {
                    kilometers_per_second: 10.0064324679,
                    kilometers_per_hour: '36023.156884463',
                    miles_per_hour: '22383.3887874598',
                },
                miss_distance: {
                    astronomical: '0.160621847',
                    lunar: '62.481898483',
                    kilometers: '24028686.18666589',
                    miles: '14930733.249093682',
                },
                orbiting_body: 'Earth'
            }],
        is_sentry_object: false
    },
    {
        links: {
            self: 'http://www.neowsapp.com/rest/v1/neo/2002340?api_key=4XX4X'
        },
        id: '54221660',
        neo_reference_id: '54221660',
        name: '(2022 XX11)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54221660',
        absolute_magnitude_h: 23.53,
        estimated_diameter: {
            kilometers: {
                estimated_diameter_min: 0.2424124811,
                estimated_diameter_max: 0.5420507863
            },
            meters: {
                estimated_diameter_min: 300.4124811008,
                estimated_diameter_max: 500.0507863358
            },
            miles: {
                estimated_diameter_min: 0.1506280858,
                estimated_diameter_max: 0.3368146392
            },
            feet: {
                estimated_diameter_min: 795.3165644948,
                estimated_diameter_max: 1778.3819018419
            },
        },
        is_potentially_hazardous_asteroid: true,
        close_approach_data: [
            {
                close_approach_date: '2021-11-01',
                close_approach_date_full: '2021-Nov-01 01:59',
                epoch_date_close_approach: 1635731940000,
                relative_velocity: {
                    kilometers_per_second: 10.0064324679,
                    kilometers_per_hour: '9876.123',
                    miles_per_hour: '22383.3887874598',
                },
                miss_distance: {
                    astronomical: '0.160621847',
                    lunar: '62.481898483',
                    kilometers: '99999999.985743',
                    miles: '14930733.249093682',
                },
                orbiting_body: 'Earth'
            }],
        is_sentry_object: false
    },
];

module.exports = asteroids;
