// Import our data from the samples.json file
  d3.json("samples.json").then((data) => {

    console.log("data: ", data);

      // Create variables that will filter/map through our data set and pull the necessary info for our graphs
      var id_filter = data.samples.map(row => row.id);

      // Console log in order to view our variables 
      console.log("id_filter: ", id_filter);

      // Create a variable that will select the html tag for our menu
      var select_tag = d3.select("#selDataset");

      //create and append the dropdown menu allowing user to filter based on id 
      id_filter.map((id) =>{
        select_tag
        .append("option")
        .property("value", id)
        .text(id);
      });

  // Call on our function upon initializing the page
  optionChanged(id_filter[0])
  });

  var dropdown = d3.select("#selDataset").on("change", optionChanged);

  // This will allow us to initialize the page our demographics info and plots 
  function optionChanged(id_filter) {
    if (id_filter == 940) {
      var id_selected = 940
    }
    else{
    console.log(this.value);
    var id_selected = this.value
    }

    // Import our data from the samples.json file
    d3.json("samples.json").then((data) => {

      console.log("data: ", data);

        // Select the html element where we will append our demographics info
        var demographics = d3.select("#sample-metadata")
        
        // Clear/reset our demographics info after clicking on id
        demographics.html("");

        // Create a variable for demographics info by filtering through samples.json
        var meta_data = data.metadata.filter(row => row.id == id_selected);
        console.log("metadata :", meta_data)
      
        // Will will append the key value pairs for the demographics info
        Object.entries(meta_data[0]).forEach(([key, value]) => {
          demographics.append("h5").text(`${key}: ${value}`)});
  
        // Create variables that will filter/map through our data set and pull the necessary info for our graphs
        var id_filter = data.samples.map(row => row.id);
        var sample_data = data.samples.filter(row => row.id == id_selected)
        var otu_ids = sample_data.map(row => row.otu_ids)
        var otu_labels = sample_data.map(row => row.otu_labels);
        var sample_values = sample_data.map(row => row.sample_values);
    
        //  Create the Traces for our horizontal bar graph
        var trace3 = {
          x: sample_values[0].slice(0,10).reverse(),
          y: otu_ids[0].slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
          text: otu_labels[0].slice(0,10).reverse(),
          type: "bar",
          orientation: 'h',
        };

        // Create the Traces for bubble chart
        var trace4 = { 
          y: sample_values[0],
          x: otu_ids[0],
          text: otu_labels[0],
          mode: 'markers',
          marker: {
            color: otu_ids[0],
            colorscale: "Earth",
            size: sample_values[0] 
          }
        };
      
        // Create data variables for our charts
        var bar_chart = [trace3];
        var bubble_chart = [trace4];
        console.log("trace3 :", bar_chart)
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("bar", bar_chart);

        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot('bubble', bubble_chart);
      });
      
  };