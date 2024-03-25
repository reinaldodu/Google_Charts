
/*
GRAFICO ESCALONADO
Este tipo de gráfico muestra datos en áreas escalonadas y permite visualizar la evolución de los valores
Mostrar las 10 ventas globales y Critic_Rating más altas
*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURI('SELECT A,R,S ORDER BY R DESC limit 10');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Escalonado);
}

function handleQueryResponse_Escalonado(response) {
    var data = response.getDataTable();
    console.log(data);

    var options = {
        title: 'Ventas Globales y Critic Rating por Juego',
        titleTextStyle: {
            color: '#4a4a4a',
            fontSize: 20,
            bold: true
        },
        colors: ['#4285F4', '#DB4437', '#F4B400'], // Colores personalizados para las series
        vAxis: {
            title: 'Calificaciones',
            titleTextStyle: {
                color: '#1a237e',
                fontSize: 14,
                bold: true
            },
            gridlines: { color: 'transparent' }, // Elimina las líneas de cuadrícula verticales
            minValue: 0
        },
        hAxis: {
            title: 'Juego',
            titleTextStyle: {
                color: '#1a237e',
                fontSize: 14,
                bold: true
            },
            textStyle: {
                fontSize: 10
            }
        },
        isStacked: true, // Para visualizar datos apilados
        legend: {
            position: 'top',
            maxLines: 3,
            textStyle: {
                color: 'black',
                fontSize: 12
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        },
        fontSize: 12,
        tooltip: { textStyle: { fontSize: 12 } }, // Mejora la legibilidad de los tooltips
        areaOpacity: 0.8 // Ajusta la opacidad de las áreas coloreadas
    };
    var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_escalonado'));
    chart.draw(data, options);
}
