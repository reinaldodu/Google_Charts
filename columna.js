/*
GRAFICO DE COLUMNAS
Este tipo de gráfico muestra datos en columnas verticales y permite comparar valores
Mostrar las ventas globales y ventas en US por categoría
*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURI('SELECT I, SUM(R), SUM(P) GROUP BY I');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Columna);
}

function handleQueryResponse_Columna(response) {
    var data = response.getDataTable();
    console.log(data);
    var options = {
        title: 'Ventas Globales y Ventas en US por Categoría',
        titleTextStyle: {
            color: '#455A64', // Color del título
            fontSize: 20, // Tamaño del texto del título
            bold: true, // Negrita
        },
        vAxis: {
            title: 'Ventas',
            titleTextStyle: {
                color: '#37474F', // Color del texto del título del eje
                fontSize: 14,
                bold: true,
            },
            minValue: 0,
            gridlines: {color: 'transparent'}, // Quita las líneas del grid
            textStyle: {
                color: '#263238' // Color de los textos del eje
            }
        },
        hAxis: {
            title: 'Categoría',
            titleTextStyle: {
                color: '#37474F',
                fontSize: 14,
                bold: true,
            },
            textStyle: {
                color: '#263238'
            }
        },
        isStacked: true,
        legend: { position: 'top', maxLines: 3 },
        fontSize: 12,
        colors: ['#FF7043', '#26A69A'], // colores columnas
        chartArea: {
            width: '80%', 
            height: '70%' 
        },
        backgroundColor: {
            fill: '#ECEFF1', // Color de fondo del área del gráfico
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_columna'));
    chart.draw(data, options);
}
