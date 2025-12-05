import * as highchart from "highcharts";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      highchart: highchart,
    },
  };
});
