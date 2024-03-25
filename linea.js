/*
GRAFICO DE LINEA MULTIPLE
Este tipo de gráfico muestra datos en líneas y permite comparar valores a lo largo de diferentes categorías
comparar "User_rating" y "Critic_Rating" a lo largo de diferentes categorías de apps
*/
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var queryString = encodeURI('SELECT A,T,U limit 10');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lypBK0JY7XjYf2HrbldkYpNBbbOQd1ma/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponse_Linea);
}

function handleQueryResponse_Linea(response) {
    var data = response.getDataTable();
    console.log(data);
    var options = {
        title: 'User Ratings vs. Critic Ratings by Category',
        curveType: 'function', // Esto hace que las líneas sean curvas
        series: {
        // Agrega dos series, una para cada tipo de rating
        0: {targetAxisIndex: 0, type: 'line'}, // User Rating
        1: {targetAxisIndex: 1, type: 'line'}  // Critic Rating
        },
        vAxes: {
        // Agrega dos ejes verticales diferentes, uno para cada tipo de rating
        0: {title: 'User Rating'},
        1: {title: 'Critic Rating'}
        },
        hAxis: {
        title: 'Category'
        },
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_linea'));
    chart.draw(data, options);
}