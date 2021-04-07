d3.json("././samples.json").then((data) => {

    var sample_values = data.samples.map(row => row.sample_values);
    var id_filter = data.samples.map(row => row.id);
    var otu_ids = data.samples.map(row => row.otu_ids);
    var otu_labels = data.samples.map(row => row.otu_labels);
  
    // // Console log in order to view our variables 
    // console.log("sample_values: ", sample_values);
    // console.log("id_filter: ", id_filter);
    // console.log("otu_ids: ", otu_ids);
    // console.log("out_labels: ", otu_labels);
    console.log("data: ", data);
  
    var select_tag = d3.select("#selDataset");
    
    
    //create and append the dropdown menu allowing user to filter based on id 
    id_filter.map((id) =>{
     
      select_tag
      .append("option")
      .property("value", id)
      .text(id);
  
    });
  // });
  
  // --------------------------------------------
  
  // var top_10_sample_values =sample_values[0].slice(0,10);
  // console.log("top_10_sample_values: ", top_10_sample_values);
  
  // var top_10_otu_ids = otu_ids[0].slice(0,10);
  // console.log("top_10_otu_ids: ", top_10_otu_ids);
  
  // var top_10_otu_labels= otu_labels[0].slice(0,10);
  // console.log("top_10_otu_labels: ", top_10_otu_labels);
  
    // var otu_ids = ids.map((row) => row.otu_ids);
    // console.log(otu_ids);
  
    // var sorted_otu_ids = otu_ids.sort((a,b) => b-a);
    // console.log(sorted_otu_ids);
  // --------------------------------------------
  
  
  // d3.select("#selDataset").on("change", optionChanged);
  // --------------------------------------------
  
  // var cat = data.samples.filter(row => row.id === "940")
  // console.log("cat: ", cat);
  
  // var dog = cat.map(row => row.otu_ids)
  // console.log("dog: ", dog);
  // --------------------------------------------
  
  var dropdown = d3.select("#selDataset").on("change", optionChanged);
  
  // var dataset = dropdown.property("value");
  // console.log("dataset: ", dataset);
  
  function optionChanged() {
  
    var dropdown = d3.select("#selDataset").on("change", optionChanged);
  
    var dataset = dropdown.property("value");
    console.log("dataset: ", dataset);
  
    // Initialize x and y arrays 
    var x = [];
    var y = [];
  
    //  Create the Traces
    var trace1 = {
      x: sample_values[0].slice(0,10),
      y: otu_ids[0].slice(0,10),
      text: otu_labels[0].slice(0,10),
      type: "bar",
      orientation: 'h'
    };
  
  
    // Create the data array for the plot
    var chart_data = [trace1];
    console.log("trace1 :", chart_data)
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", chart_data);
  };
  
  // var demographics = d3.select("#sample-metadata").on("change", optionChanged);
  // var demographic_info = demographics.property("value");
  
  var demographics = d3.select("#sample-metadata");
  // var demographic_info = demographics.property("value");
  var meta_data = data.metadata.map(row => row);
  console.log("metadata :", meta_data[0])
  
  meta_data.map((x) =>{
     
    demographics
    .append("table")
    .property("tr", x[0])
    // .text(x[0]);
    
  
  });
  
  }); 
  // console.log("trace1 :", chart_data )
  // init();