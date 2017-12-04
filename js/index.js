function startup() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Temperatura por cidades'
        },
        subtitle: {
            text: 'Informações extraídas do site www.google.com.br'
        },
        xAxis: {
            allowDecimals: false,
            type: 'datetime',
            dateTimeLabelFormats : {
                hour: '%I:00',
                minute: '%I:%M'
            }
        },
        yAxis: {
            title: {
                text: 'Temperatura - ˚C'
            },
            labels: {
                formatter: function () {
                    return this.value + '˚C';
                }
            }
        },
        tooltip: {
            formatter: function() {
                return this.y + '˚C às ' + Highcharts.dateFormat('%I:%M', this.x);
            }
        },
        plotOptions: {
            area: {
                pointStart: 15,
                pointInterval: 3,
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Fortaleza',
            data: [
                [Date.UTC(2017, 12, 3, 18, 0), 30],
                [Date.UTC(2017, 12, 3, 20, 0), 28],
                [Date.UTC(2017, 12, 3, 23, 0), 28],
                [Date.UTC(2017, 12, 4, 2, 0), 27],
                [Date.UTC(2017, 12, 4, 5, 0), 27],
                [Date.UTC(2017, 12, 4, 8, 0), 26],
                [Date.UTC(2017, 12, 4, 11, 0), 28],
                [Date.UTC(2017, 12, 4, 14, 0), 31]
            ],
            color: '#75A8FF',
            zIndex: 1
        },{
            name: 'Quixadá',
            data: [
                [Date.UTC(2017, 12, 3, 18, 0), 31],
                [Date.UTC(2017, 12, 3, 20, 0), 29],
                [Date.UTC(2017, 12, 3, 23, 0), 24],
                [Date.UTC(2017, 12, 4, 2, 0), 22],
                [Date.UTC(2017, 12, 4, 5, 0), 21],
                [Date.UTC(2017, 12, 4, 8, 0), 21],
                [Date.UTC(2017, 12, 4, 11, 0), 24],
                [Date.UTC(2017, 12, 4, 14, 0), 30]
            ],
            color: '#FF3C38',
            zIndex: 2
        }]
    });

}

window.onload = startup;