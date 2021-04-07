d3.json("././samples.json").then((data) => {

    var sample_values = data.samples.map(row => row.sample_values);
    var id_filter = data.samples.map(row => row.id);
    var otu_ids = data.samples.map(row => row.otu_ids);
    var otu_labels = data.samples.map(row => row.otu_labels);
  
    // console.log(sample_values);
    console.log(id_filter);
    console.log(otu_ids);
    // console.log(otu_labels);
  
    var ids = data.samples.filter(row => row.id);
    console.log(ids);
  
    var top_10_otu_ids = otu_ids.slice(0,11);
    console.log(top_10_otu_ids);
  
  
    // var otu_ids = ids.map((row) => row.otu_ids);
    // console.log(otu_ids);
  
    // var sorted_otu_ids = otu_ids.sort((a,b) => b-a);
    // console.log(sorted_otu_ids);
  
  
    console.log(data);
  
  d3.select("#selDataset").on("change", updatePlotly);
  
  function updatePlotly() {
  
    var dropdownMenu = d3.select("#selDataset");
  
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    //  Create the Traces
    var trace1 = {
      x: sample_values,
      y: otu_ids,
      text: otu_labels,
      type: "bar",
      orientation: 'h'
    };
  
    // Create the data array for the plot
    var chart_data = [trace1];
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", chart_data);
  };
  
  });
  
  // init();