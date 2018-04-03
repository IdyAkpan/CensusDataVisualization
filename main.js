
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1-qOZrzbu4qUoAn4p7XkE787icXuD0PwJ1a54tdYzU8U/edit?usp=sharing';
var dataArray = [];
dataArray[0] = ['occupation', /*'medianWeeklyEarningsMen',*/ 'Earnings_per_male_dollar'];

function init() {
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo,
		simpleSheet: true } )
}

function showInfo(data, tabletop) {
	data.forEach(function(row, index){
		var occ = row.occupation;
	   		//var men = row.medianWeeklyEarningsMen;
	   		var women = row.medianWeeklyEarningsWomen;
	   		
	   		var newArray = [];
	   		newArray.push(occ);
	   		//newArray.push(men);
	   		newArray.push(women);
	   		

	   		dataArray.push(newArray);
	   	});
	drawTitleSubtitle();
};

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
	   	// var data = google.visualization.arrayToDataTable([
	   	// 	['City', '2010 Population', '2000 Population'],
	   	// 	['New York City, NY', 8175000, 8008000],
	   	// 	['Los Angeles, CA', 3792000, 3694000],
	   	// 	['Chicago, IL', 2695000, 2896000],
	   	// 	['Houston, TX', 2099000, 1953000],
	   	// 	['Philadelphia, PA', 1526000, 1517000]
	   	// 	]);

	   	var data = google.visualization.arrayToDataTable(dataArray);

	   	var materialOptions = {
	   		chart: {
	   			title: "2017 Women's Median Weekly Earnings per Male Dollar by Occupation",
	   			subtitle: 'Based on most recent census data'
	   		},
	   		hAxis: {
	   			title: 'Median',
	   			minValue: 0,
	   		},
	   		vAxis: {
	   			title: 'Occupation'
	   		},
	   		
	   		bars: 'horizontal',

	   	};
	   	var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
	   	materialChart.draw(data, materialOptions);
	   }


	   window.addEventListener('DOMContentLoaded', init);
