/*
GRAFICO SANKEY
Este tipo de gráfico muestra flujos proporcionales entre nodos	ej: ventas de un país a otro
Mostrar las ventas de US, EU, Global y JP
*/

google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURIComponent('SELECT A,P,Q,R,S ORDER BY A limit 10');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Sankey);
}

function handleQueryResponse_Sankey(response) {
    var data = response.getDataTable();
    console.log(data);
    
    // Transformar datos para el gráfico Sankey
    var transformedData = new google.visualization.DataTable();
    transformedData.addColumn('string', 'From');
    transformedData.addColumn('string', 'To');
    transformedData.addColumn('number', 'Sales');

    // Agregar filas al nuevo DataTable para cada combinación de ventas
    for (var i = 0; i < data.getNumberOfRows(); i++) {
        if (data.getValue(i, 1) > 0) {
            transformedData.addRow(['US', 'EU', data.getValue(i, 1)]);
        }
        if (data.getValue(i, 2) > 0) {
            transformedData.addRow(['EU', 'Global', data.getValue(i, 2)]);
        }
        if (data.getValue(i, 3) > 0) {
            transformedData.addRow(['Global', 'Japan', data.getValue(i, 3)]);
        }
    }

    var options = {
        width: 'auto',
        height: 'auto',
        sankey: {
            node: {
                colors: ['#1e88e5', '#e53935', '#fb8c00', '#43a047']
            },
            link: {
                colorMode: 'gradient',
                colors: ['#1e88e5', '#e53935', '#fb8c00', '#43a047']
            }
        }
    };
    var chart = new google.visualization.Sankey(document.getElementById('chart_sankey'));
    chart.draw(transformedData, options);
}