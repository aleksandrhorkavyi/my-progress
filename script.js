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
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
];


function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

function initChart(id, year, data) {
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
            formatter: function () {
                return '<b>' + getPointCategoryName(this.point, 'y')
                    + ', ' + getPointCategoryName(this.point, 'x') + '</b> | '
                    + '<b>' + this.point.value + '</b>' + ' хвилин.';
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

initChart('container-english', 'English', englishData);
initChart('container-math', 'Mathematic', mathData);
initChart('container-ml', 'Machine Learning', mlData);
initChart('container-python', 'Python', pythonData);

