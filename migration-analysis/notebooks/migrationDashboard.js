import { plot, line, geo } from "@observablehq/plot";
import * as d3 from "d3";
import { feature } from "topojson-client";
import us from "@observablehq/us-atlas/us-10m.json" assert { type: "json" };

const states = feature(us, us.objects.states);

export function chart() {
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
        strokeWidth: d => Math.sqrt(d.migrants) / 14
      })
    ]
  });
}
