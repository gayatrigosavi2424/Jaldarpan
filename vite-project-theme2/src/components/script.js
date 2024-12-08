// Dimensions and margins of the chart
const width = 928;
const height = 500;
const marginTop = 20;
const marginRight = 30;
const marginBottom = 30;
const marginLeft = 40;

// Load the data from CSV
d3.csv("data.csv", (d) => {
  return {
    Date: d3.timeParse("%Y-%m-%d")(d.Date), // Parse date
    Depth: +d.Depth, // Convert Depth to a number
  };
}).then((data) => {
  // Create scales
  const x = d3.scaleUtc(
    d3.extent(data, (d) => d.Date),
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(
    [0, d3.max(data, (d) => d.Depth)],
    [height - marginBottom, marginTop]
  );

  // Line generator
  const line = d3
    .line()
    .x((d) => x(d.Date))
    .y((d) => y(d.Depth));

  // Create SVG container
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr(
      "style",
      "max-width: 100%; height: auto; height: intrinsic; font: 10px sans-serif;"
    )
    .style("-webkit-tap-highlight-color", "transparent")
    .style("overflow", "visible");

  // X-axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  // Y-axis
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Depth (m)")
    );

  // Line path
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  // Tooltip setup
  const tooltip = svg.append("g");

  function formatDate(date) {
    return d3.timeFormat("%b %d, %Y")(date);
  }

  function formatValue(value) {
    return `${value} m`;
  }

  const bisect = d3.bisector((d) => d.Date).center;

  function pointermoved(event) {
    const i = bisect(data, x.invert(d3.pointer(event)[0]));
    tooltip.style("display", null);
    tooltip.attr(
      "transform",
      `translate(${x(data[i].Date)},${y(data[i].Depth)})`
    );

    const path = tooltip
      .selectAll("path")
      .data([,])
      .join("path")
      .attr("fill", "white")
      .attr("stroke", "black");

    const text = tooltip
      .selectAll("text")
      .data([,])
      .join("text")
      .call((text) =>
        text
          .selectAll("tspan")
          .data([formatDate(data[i].Date), formatValue(data[i].Depth)])
          .join("tspan")
          .attr("x", 0)
          .attr("y", (_, i) => `${i * 1.1}em`)
          .attr("font-weight", (_, i) => (i ? null : "bold"))
          .text((d) => d)
      );

    size(text, path);
  }

  function pointerleft() {
    tooltip.style("display", "none");
  }

  function size(text, path) {
    const { x, y, width: w, height: h } = text.node().getBBox();
    text.attr("transform", `translate(${-w / 2},${15 - y})`);
    path.attr(
      "d",
      `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
    );
  }

  svg
    .on("pointerenter pointermove", pointermoved)
    .on("pointerleave", pointerleft)
    .on("touchstart", (event) => event.preventDefault());
});
