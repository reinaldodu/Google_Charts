/*
GRAFICO CIRCULAR 3D
Este tipo de gráfico muestra datos en un círculo y permite visualizar la proporción de cada valor
Mostrar la cantidad de juegos por categoría (las 5 primeras)
*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURI('SELECT I, COUNT(A) GROUP BY I');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Pie);
}

function handleQueryResponse_Pie(response) {
    var data = response.getDataTable();
    console.log(data);
    //mostrar solo las 5 primeras categorias
    var transformedData = google.visualization.arrayToDataTable([
        ['Categoria', 'Juegos'],
        [data.getValue(2, 0), data.getValue(2, 1)],
        [data.getValue(3, 0), data.getValue(3, 1)],
        [data.getValue(4, 0), data.getValue(4, 1)],
        [data.getValue(5, 0), data.getValue(5, 1)],
        [data.getValue(6, 0), data.getValue(6, 1)]
    ]);

    var options = {
        title: 'Cantidad de juegos por categoría (Las 5 primeras)',
        titleTextStyle: {
            color: 'black',
            fontSize: 18,
            bold: true
        },
        is3D: true,
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

    var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
    chart.draw(transformedData, options);

}