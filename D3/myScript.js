
function runProgramme() {
	var container = d3.select("#container");
	var data=[20, 50, 100, 200, 300, 400, 800, 1000]
	var yScale = d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range([0, 200]).clamp(true);
	var xScale = d3.scaleBand().domain(data).range([0, 300]).padding(.1).round(true);

	for(var i =0; i<data.length; i++) {

	var bar = container.append("div");
		bar.classed("bar", true)
			.style("width", xScale.bandwidth()+"px")
			.style("height", yScale(data[i])+"px")
			.style("margin-left", xScale(data[i])+"px");						
		}

	}

