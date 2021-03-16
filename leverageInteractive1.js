{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

"title": {
    "text": "Leverage and returns",
    "subtitle":null,
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "description": "Coronavirus cases",

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/teaching/main/leverageInteractive.csv",
   "format": {"type": "csv"}
  },

  "height": 125,
  "width": 150,

  "mark": {"type": "bar", "point": false},

  "selection": {
    "houseValue": {
      "type": "single",
      "fields": ["House Value"],
      "init": {"House Value": "300000"},
      "bind": {
        "input": "select",
        "options": ["200000", "250000","300000","350000", "400000"],
        "name": "House value"
      }
    }
  },

  "transform": [
    {"filter": {"selection": "houseValue"}}],


  "encoding": {
    "x": {
      "field": "Entry2",
      "type": "ordinal",
      "title": null,
      "axis": {"grid": false}
    },

    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": null,
      "axis": {"grid": false}
    },

     "facet": {
      "field": "LevRatio",
      "type": "ordinal",
      "columns": 2,
      "title": null
     },
     

    "color": {
      "field": "Type",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": null,
      "legend": {"orient": "top"}
    }
         
  }
}