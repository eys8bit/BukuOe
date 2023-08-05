var margin = { top: 20, right: 90, bottom: 30, left: 90 };
var width =
  document.querySelector("svg").clientWidth - margin.left - margin.right;
var height = 800 - margin.top - margin.bottom;

var svg = d3.select("svg");
var g = svg
  .select("g#tree")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tree = d3.tree().size([height, width]);

var root = d3.hierarchy(treeData);
tree(root);

var link = g
  .selectAll(".link")
  .data(root.descendants().slice(1))
  .enter()
  .append("path")
  .attr("class", "link")
  .attr("d", function (d) {
    return (
      "M" +
      d.y +
      "," +
      d.x +
      "C" +
      (d.y + d.parent.y) / 2 +
      "," +
      d.x +
      " " +
      (d.y + d.parent.y) / 2 +
      "," +
      d.parent.x +
      " " +
      d.parent.y +
      "," +
      d.parent.x
    );
  });

var node = g
  .selectAll(".node")
  .data(root.descendants())
  .enter()
  .append("g")
  .attr("class", function (d) {
    return "node" + (d.children ? " node--internal" : " node--leaf");
  })
  .attr("transform", function (d) {
    return "translate(" + d.y + "," + d.x + ")";
  })
  .on("click", function (d) {
    loadIframe(d.data.url);
  });

node
  .append("rect")
  .attr("width", function (d) {
    return getTextWidth(d.data.name) + 40;
  })
  .attr("height", 30)
  .attr("x", function (d) {
    return d.children
      ? -((getTextWidth(d.data.name) + 40) / 2)
      : -(getTextWidth(d.data.name) + 40);
  })
  .attr("y", -15);

node
  .append("text")
  .style("font-size", "12px")
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .attr("x", function (d) {
    return d.children ? 0 : -(getTextWidth(d.data.name) + 40) / 2;
  })
  .text(function (d) {
    return d.data.name;
  });

function loadIframe(url) {
  var iframe = document.getElementById("ambil");
  iframe.src = url;
}

function getTextWidth(text) {
  var svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  var textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElement.setAttribute("font-size", "12px");
  textElement.textContent = text;
  svgElement.appendChild(textElement);
  document.body.appendChild(svgElement);
  var width = textElement.getBBox().width;
  document.body.removeChild(svgElement);
  return width;
}
