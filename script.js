const yAxis = [
    'Cічень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
];

const xAxis = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
];


function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

function getPointLink(point, links) {
    let day = point.series['xAxis'].categories[point['x']]
    let month = point.series['yAxis'].categories[point['y']]

    let dayIndex = day - 1;
    let monthIndex =  yAxis.findIndex( elem => elem === month);

    let link = links[`${dayIndex}.${monthIndex}`];
    return  typeof link !== 'undefined' ? link : '';
}

function initChart(id, year, data, links) {
    Highcharts.chart(id, {
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },
        title: {
            text: year
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            categories: yAxis,
            title: null,
            reversed: true
        },
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },
        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },
        tooltip: {
            style: {
                pointerEvents: 'auto'
            },
            formatter: function () {
                let link = getPointLink(this.point, links);

                return '<b>' + getPointCategoryName(this.point, 'y')
                    + ', ' + getPointCategoryName(this.point, 'x') + '</b> | '
                    + '<b>' + this.point.value + '</b>' + ' хвилин. '
                    + '<br><a href="' + link + '">' + link + '</a>';
            }
        },
        series: [{
            name: 'Тигидик',
            borderWidth: 1,
            data: data,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        }
    });
}

initChart('container-english', 'English', englishData, englishLinks);
initChart('container-math', 'Mathematic', mathData, mathLinks);
initChart('container-ml', 'Machine Learning', mlData, mlLinks);
initChart('container-python', 'Python', pythonData, pythonLinks);

