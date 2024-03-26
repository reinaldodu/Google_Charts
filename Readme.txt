PROFESOR: DIEGO ALEJANDRO ROZO - VISUALIZACIÓN Y PRESENTACIÓN DE DATOS
ESTUDIANTE: FABIAN CABALLERO CORTÉS
ACTIVIDAD: GOOGLE CHARTS
VER PROYECTO EN: https://fabiancaballero.github.io/ProyectoFinal/

*********************************************
DATOS GENERADOS DE ACUERDO AL TIPO DE GRÁFICO
*********************************************

GRAFICO SANKEY:
---------------
 // Transformar datos para el gráfico Sankey
 // Se agregaron tres columnas para generar los nodos de origen, destino y valor en ventas
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

GRAFICO ANILLO:
---------------
// Transformar datos para el gráfico de anillo
// Se agregan las parejas de valores de ventas y regiones
    var transformedData = google.visualization.arrayToDataTable([
        ['Regiones', 'Ventas'],
        ['US', data.getValue(0, 0)], // Columna P = US Sales
        ['EU', data.getValue(0, 1)], // Columna Q = EU Sales
        ['Global', data.getValue(0, 2)], // Columna R = Global Sales
        ['Japan', data.getValue(0, 3)] // columna S = JP Sales
    )];

GRAFICO COLUMNAS:
-----------------
Se consultan las columnas de las categorías y para cada uno de estas, se realiza la suma de las ventas de las regiones (US, Global)
Teniendo en cuenta lo anterior no se hace transformación en los datos para su graficación.


GRAFICO ESCALONADO:
-------------------
Se consultan las columnas ventas globales y ventas de Japón, con los 10 juegos más valorados (rank).
Teniendo en cuenta lo anterior no se hace transformación en los datos para su graficación.


GRAFICO DE LINEA MULTIPLE:
--------------------------
Se consultan las columnas del user_rating y critic_rating, con los 10 juegos más valorados (rank).
Teniendo en cuenta lo anterior no se hace transformación en los datos para su graficación.


GRAFICO PIE 3D:
---------------
Se cuentan el total de juegos y se agrupan por categorías
Teniendo en cuenta que son 20 categorias en total, se toman las primeras 5 para visualizar en el gráfico.
//mostrar solo las 5 primeras categorias
    var transformedData = google.visualization.arrayToDataTable([
        ['Categoria', 'Juegos'],
        [data.getValue(2, 0), data.getValue(2, 1)],
        [data.getValue(3, 0), data.getValue(3, 1)],
        [data.getValue(4, 0), data.getValue(4, 1)],
        [data.getValue(5, 0), data.getValue(5, 1)],
        [data.getValue(6, 0), data.getValue(6, 1)]
    ]);
