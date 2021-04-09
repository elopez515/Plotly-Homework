// function createCharts(id) {
  d3.json("samples.json").then((data) => {

    console.log("data: ", data);

      // Create variables that will filter/map through our data set and pull the necessary info for our graphs
      var id_filter = data.samples.map(row => row.id);
      var sample_data = data.samples.filter(row => row.id == 940)
      var otu_ids = sample_data.map(row => row.otu_ids)
      var otu_labels = sample_data.map(row => row.otu_labels);
      var sample_values = sample_data.map(row => row.sample_values);

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

      //  Create the Traces for horizontal bar graph
      var trace1 = {
        x: sample_values[0].slice(0,10).reverse(),
        y: otu_ids[0].slice(0,10).reverse(),
        text: otu_labels[0].slice(0,10).reverse(),
        type: "bar",
        orientation: 'h',
        marker:{
          width: 1
        }
      };  

      // Create the Traces for bubble chart
      var trace2 = { 
        y: sample_values[0],
        x: otu_ids[0],
        text: otu_labels[0],
        mode: 'markers',
        marker: {
          color: otu_ids[0],
          size: sample_values[0]
        }
      };
 
    

      // Create the data array for the plot
      var chart_data = [trace1];
      console.log("trace1 :", chart_data)
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("bar", chart_data);

      var bubble_chart = [trace2];
      Plotly.newPlot('bubble', bubble_chart);

      var demographics = d3.select("#sample-metadata");

      var meta_data = data.metadata.filter(row => row.id == 940);
      console.log("metadata :", meta_data)
      
      Object.entries(meta_data[0]).forEach(([key, value]) => {
        demographics.append("h5").text(`${key}: ${value}`)});

  });
  


  
  var dropdown = d3.select("#selDataset").on("change", optionChanged, demographic_info);
  // var id_selected = this.value

  function optionChanged() {
    
    console.log(this.value);
    var id_selected = this.value
    
    d3.json("samples.json").then((data) => {

      console.log("data: ", data);
  
        // Create variables that will filter/map through our data set and pull the necessary info for our graphs
        var id_filter = data.samples.map(row => row.id);
        var sample_data = data.samples.filter(row => row.id == id_selected)
        var otu_ids = sample_data.map(row => row.otu_ids)
        var otu_labels = sample_data.map(row => row.otu_labels);
        var sample_values = sample_data.map(row => row.sample_values);
    
        // Initialize x and y arrays 
        var x = [];
        var y = [];
      
        //  Create the Traces
        var trace3 = {
          x: sample_values[0].slice(0,10).reverse(),
          y: otu_ids[0].slice(0,10).reverse(),
          text: otu_labels[0].slice(0,10).reverse(),
          type: "bar",
          orientation: 'h',
          marker:{
            width: 2
          }
        };

        // Create the Traces for bubble chart
        var trace4 = { 
          y: sample_values[0],
          x: otu_ids[0],
          text: otu_labels[0],
          mode: 'markers',
          marker: {
            color: otu_ids[0],
            size: sample_values[0]
          }
        };
      
        // Create the data array for the plot
        var chart_data = [trace3];
        console.log("trace3 :", chart_data)
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("bar", chart_data);

        var bubble_chart = [trace4];
        Plotly.newPlot('bubble', bubble_chart);
      });
      
      // function demographic_info() {
      //   console.log(this.value);
      //   var demographics_id = this.value
    
      //   // console.log(demographics_id);
      //   var demographics = d3.select("#sample-metadata");

      //   var meta_data = data.metadata.filter(row => row.id == demographics_id);
      //   console.log("metadata :", meta_data)
        
      //   Object.entries(meta_data[0]).forEach(([key, value]) => {
      //     demographics.append("h5").text(`${key}: ${value}`)});

      //   d3.json("samples.json").then((data) => {
    
        // var meta_data = data.metadata.map(row => row);
        // console.log("metadata :", meta_data[0])
    
        // });
    //  };
  };
  
  // var dropdown = d3.select("#selDataset").on("change", optionChanged);

  // var demographics = d3.select("#selDataset").on("change", demographic_info);
  
  // --------------------- demographics info ---------------------
 
//   function demographic_info() {
    
//     var dropdown = d3.select("#selDataset").on("change")
//     console.log(this.value);
//     var demographics_id = this.value

//     d3.json("samples.json").then((data) => {

//         // console.log(demographics_id);
//         var demographics = d3.select("#sample-metadata");

//         var meta_data = data.metadata.filter(row => row.id == 943);
//         console.log("metadata :", meta_data)
        
//         Object.entries(meta_data[0]).forEach(([key, value]) => {
//           demographics.append("h5").text(`${key}: ${value}`)});

//     });
//  };
 
 // --------------------- demographics info ---------------------
  
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