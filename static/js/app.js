// function createCharts(id) {
  d3.json("samples.json").then((data) => {

    console.log("data: ", data);

      // Create variables that will filter/map through our data set and pull the necessary info for our graphs
      var id_filter = data.samples.map(row => row.id);
      var sample_data = data.samples.filter(row => row.id == 940)
      var otu_ids = sample_data.map(row => row.otu_ids.slice(0,10))
      var otu_labels = sample_data.map(row => row.otu_labels.slice(0,10));
      var sample_values = sample_data.map(row => row.sample_values.slice(0,10));


      // Console log in order to view our variables 
      console.log("id_filter: ", id_filter);
      console.log("sample_data: ", sample_data);
      console.log("otu_ids: ", otu_ids);
      console.log("otu_labels: ", otu_labels);
      console.log("sample_values: ", sample_values);

      // Create a variable that will select the html tag for our menu
      var select_tag = d3.select("#selDataset");

      //create and append the dropdown menu allowing user to filter based on id 
      id_filter.map((id) =>{
      
        select_tag
        .append("option")
        .property("value", id)
        .text(id);
    
      });

      var x = [];
      var y = [];
    
      //  Create the Traces
      var trace1 = {
        x: sample_values[0].reverse(),
        y: otu_ids[0].reverse(),
        text: otu_labels[0].reverse(),
        type: "bar",
        orientation: 'h'
      };
    

      // Create the data array for the plot
      var chart_data = [trace1];
      console.log("trace1 :", chart_data)
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("bar", chart_data);
  
      
  });
  


  
  var dropdown = d3.select("#selDataset").on("change", optionChanged);
  
  function optionChanged() {
    console.log(this.value);
    var id = this.value
    
    d3.json("samples.json").then((data) => {

      console.log("data: ", data);
  
        // Create variables that will filter/map through our data set and pull the necessary info for our graphs
        var id_filter = data.samples.map(row => row.id);
        var sample_data = data.samples.filter(row => row.id == id)
        var otu_ids = sample_data.map(row => row.otu_ids.slice(0,10))
        var otu_labels = sample_data.map(row => row.otu_labels.slice(0,10));
        var sample_values = sample_data.map(row => row.sample_values.slice(0,10));
    // });
        // Initialize x and y arrays 
        var x = [];
        var y = [];
      
        //  Create the Traces
        var trace2 = {
          x: sample_values[0].reverse(),
          y: otu_ids[0].reverse(),
          text: otu_labels[0].reverse(),
          type: "bar",
          orientation: 'h'
        };
      
  
        // Create the data array for the plot
        var chart_data = [trace2];
        console.log("trace2 :", chart_data)
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("bar", chart_data);
      });
  };
  
  var demographics = d3.select("#sample-metadata").on("change", demographic_info);
  
  function demographic_info() {
    console.log(this.value);
    var demographics_id = this.value

    d3.json("samples.json").then((data) => {

    // var meta_data = data.metadata.map(row => row);
    // console.log("metadata :", meta_data[0])

    });
 };
  
  // var demographics = d3.select("#sample-metadata");
  // // var demographic_info = demographics.property("value");
  // var meta_data = data.metadata.map(row => row);
  // console.log("metadata :", meta_data[0])
  
  // meta_data.map((x) =>{
     
  //   demographics     
  //   Object.entries(meta_data[0])
  //   .forEach(([key,value]) => 
  //   ([key,value]))
  //   .append("h5")
  //   .text(`${key}: ${value}`);

  //   // .append("table")
  //   // .property("tr", x[0])
  //   // .text(x[0]);
    
  
  // // });
      //  Create the Traces
      // var trace1 = {
      //   x: sample_values[0].slice(0,10).reverse(),
      //   y: otu_ids[0].slice(0,10).reverse(),
      //   text: otu_labels[0].slice(0,10).reverse(),
      //   type: "bar",
      //   orientation: 'h'
      // };

      // var chart_data = [trace1];
      // console.log("trace1 :", chart_data)
      // // Plot the chart to a div tag with id "plot"
      // Plotly.newPlot("bar", chart_data);
  // }); 
  // console.log("trace1 :", chart_data )
  // init();