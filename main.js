'use strict';
$(window).load(function() {
	let json = api.boa.run('critical-dev.boa');
	$('#loading').hide();
	$('#content').show();
	let count = 0;
	let labels = [];
	let dataset = [];
	let mapData = {};

	for(let key in json.out){
		for(let name in json.out[key]){
			mapData[key] = mapData[key] || [];
			mapData[key].push(json.out[key][name]);
		}
	}

	for(let index in mapData) {
		count++;
		let label =
			$('#table-output-body').append(`<tr><td> ${count} </td> <td> ${index} </td> <td> ${mapData[index].length} </td> </tr>`)
			labels.push(index);
		dataset.push(mapData[index].length);
	}
	let chartData = {
			labels: labels,
			datasets: [{
				fillColor: '#ff8080',
				strokeColor: '#bf6060',
				data: dataset
			}]
	}

	let canvas = document.createElement('canvas');
	canvas.setAttribute('width', '400px');
	canvas.setAttribute('height', '300px');
	canvas.id = "chart-output";
	$('#content').prepend(canvas);

	let ctx = canvas.getContext('2d');
	new Chart(ctx).Bar(chartData, { 'responsive': true, });
});
