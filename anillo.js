/*
GRAFICO DE ANILLO
Este tipo de gráfico muestra datos en un círculo, donde cada porción representa una parte del total
Mostrar la participación de ventas por región
*/
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURIComponent('SELECT A,P,Q,R,S ORDER BY R DESC');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Anillo);
}

function handleQueryResponse_Anillo(response) {
    var data = response.getDataTable();
    console.log(data);
    // Transformar datos para el gráfico de anillo
    var transformedData = google.visualization.arrayToDataTable([
        ['País', 'Ventas'],
        ['US', data.getValue(0, 1)], // Columna P = US Sales
        ['EU', data.getValue(0, 2)], // Columna Q = EU Sales
        ['Global', data.getValue(0, 3)], // Columna R = Global Sales
        ['Japan', data.getValue(0, 4)] // columna S = JP Sales
    ]);

    var options = {
        title: 'Participación de ventas por región',
        titleTextStyle: {
            color: 'black',
            fontSize: 18,
            bold: true
        },
        pieHole: 0.4,
        colors: ['#1e88e5', '#e53935', '#fb8c00', '#43a047'], // colores de las porciones
        backgroundColor: '#f1f1f1',
        legend: {
            position: 'right',
            textStyle: {
                color: 'black',
                fontSize: 12
            }
        },
        pieSliceTextStyle: {
            color: 'white',
        },
        chartArea: {
            width: '90%',
            height: '80%'
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_anillo'));
    chart.draw(transformedData, options);
}
