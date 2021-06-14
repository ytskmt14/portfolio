<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
  data: () => ({
    chartdata: {
      labels: ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★", "", ""],
      datasets: [
        {
          label: "自己評価と能力（ダニング・クルーガー効果）",
          radius: 0.1,
          data: [0, 100, 10, 25, 40, 70, 85],
          borderColor: "#CFD8DC",
          fill: false,
          type: "line",
          lineTension: 0.4,
        },
        {
          label: "Language",
          color: "red",
          pointStyle: "rectRounded",
          pointRadius: 4,
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          borderColor: "red",
          data: [null, null, 10, 25, 40, null, null],
          fill: false,
          type: "line",
          lineTension: 0.4,
          showLine: false,
        },
        {
          label: "Framework",
          color: "blue",
          pointStyle: "rectRounded",
          pointRadius: 6,
          pointBorderColor: "blue",
          pointBackgroundColor: "blue",
          borderColor: "blue",
          data: [null, null, null, 25, 40, null, null],
          fill: false,
          type: "line",
          lineTension: 0.4,
          showLine: false,
        },
        {
          label: "Others",
          color: "green",
          pointStyle: "rectRounded",
          pointRadius: 8,
          pointBorderColor: "green",
          pointBackgroundColor: "green",
          borderColor: "green",
          data: [null, null, 10, null, 40, null, null],
          fill: false,
          type: "line",
          lineTension: 0.4,
          showLine: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          title: function (tooltipItem) {
            switch(tooltipItem[0].label) {
              case "★☆☆☆☆":
                return "完全に理解した";
              case "★★☆☆☆":
                return "なんもわからん";
              case "★★★☆☆":
                return "できるかも";
              case "★★★★☆":
                return "できそう";
              case "★★★★★":
                return "チョットデキル";
            }
          },
          label: function (tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            if (label === "Language" ) {
              switch (tooltipItem.xLabel) {
                case "★★☆☆☆":
                  return "Ruby";
                case "★★★☆☆":
                    return "Python, Javascript, HTML, CSS";
                case "★★★★☆":
                  return "Java";
              }
            } else if (label === "Framework") {
              switch(tooltipItem.xLabel) {
                case "★★★☆☆":
                    return "Django, Ruby on Rails";
                case "★★★★☆":
                  return "Vue.js, Vuetify";
              }
            } else if (label === "Others") {
              switch(tooltipItem.xLabel) {
                case "★★☆☆☆":
                    return "Docker";
                case "★★★★☆":
                  return "Git, Github";
              }
            }

          },
        },
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "能力",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              suggestedMax: 100,
            },
            scaleLabel: {
              display: true,
              labelString: "自己評価",
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>