import { plot, line, geo } from "@observablehq/plot";
import * as d3 from "d3";
import { feature } from "topojson-client";

export async function chart() {
  const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json");
  const states = feature(us, us.objects.states);

  return plot({
    projection: "albers-usa",
    width: 800,
    height: 500,
    marks: [
      geo(states, { fill: "#f3f3f3", stroke: "#aaa" }),
      line(migrationData, {
        x1: d => d.origin_lon,
        y1: d => d.origin_lat,
        x2: d => d.dest_lon,
        y2: d => d.dest_lat,
        stroke: "steelblue",
        strokeOpacity: 0.6,
        strokeWidth: d => Math.sqrt(d.migrants) / 12
      })
    ]
  });
}

