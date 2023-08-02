/* JavaScript Part */
const treeData = {
  name: "GO",
  children: [
    {
      name: " Node 1 ",
      children: [
        { name: "Leaf 1.2", href: "https://example.com/leaf1.2" },
        { name: "Leaf 1.2", href: "https://example.com/leaf1.2" },
      ],
    },
    {
      name: "Node 2 pembuatasn align",
      children: [
        { name: "Leaf 2.1", href: "https://example.com/leaf2.1" },
        { name: "Leaf 2.2", href: "#" },
      ],
    },
    {
      name: "    Node ",
      children: [
        {
          name: "Leaf 1.1",
          href: "https://example.com/leaf1.1",
          children: [
            {
              name: "> Leaf 2.1",
              href: "https://example.com/leaf2.1",
              children: [
                {
                  name: "Leaf 2.1",
                  href: "https://example.com/leaf2.1",
                  children: [
                    {
                      name: "Leaf 2.1",
                      href: "https://example.com/leaf2.1",
                    },
                    {
                      name: "Leaf 2.2",
                      href: "https://example.com/leaf2.2",
                    },
                  ],
                },
              ],
            },
            { name: "Leaf 2.2", href: "https://example.com/leaf2.2" },
          ],
        },
        { name: "Leaf 1.2", href: "https://example.com/leaf1.2" },
      ],
    },
  ],
};

const svg = d3.select("#tree-svg");
const margin = { top: 20, right: 90, bottom: 30, left: 90 };
const width = +svg.attr("width") - margin.left - margin.right;
const height = +svg.attr("height") - margin.top - margin.bottom;
const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const tree = d3.tree().size([height, width]);

const root = d3.hierarchy(treeData, (d) => d.children);
const treeDataNodes = tree(root).descendants();

const link = g
  .selectAll(".link")
  .data(tree(root).links())
  .enter()
  .append("path")
  .attr("class", "link")
  .attr("d", (d) => `M${d.source.y},${d.source.x}V${d.target.x}H${d.target.y}`)
  .attr("fill", "none")
  .attr("stroke", "#004D40")
  .attr("stroke-width", 2);

const node = g
  .selectAll(".node")
  .data(treeDataNodes)
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("transform", (d) => `translate(${d.y},${d.x})`);

const paddingX = 10; // Padding horizontal
const paddingY = 5; // Padding vertical

node
  .append("rect")
  .attr(
    "x",
    (d) => -(d.data.name.length * 4 + paddingX)
  ) /* Lebar kotak sesuai dengan panjang teks + padding */
  .attr("y", -12.5 - paddingY) /* Tambahkan padding atas dan bawah */
  .attr(
    "width",
    (d) => d.data.name.length * 8 + 2 * paddingX
  ) /* Lebar kotak sesuai dengan panjang teks + padding */
  .attr("height", 25 + 2 * paddingY) /* Tinggi kotak + padding */
  .attr("rx", 10)
  .attr("ry", 10)
  .attr("fill", "#6954c3");

node
  .append("text")
  .attr("dy", "0.35em")
  .style("text-anchor", "middle")
  .text((d) => d.data.name)
  .attr("fill", "white");

node.on("click", (d) => {
  if (d.data.href) {
    window.open(d.data.href, "_blank");
  }
});
