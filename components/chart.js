import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["data", "options"],
  watch: {
    data: {
      handler(value) {
        if (!this) {
          return;
        }
        this.renderChart(this.data, this.options);
      },
      deep: true
    }
  },
  mounted() {
    if (!this) {
      return;
    }
    this.renderChart(this.data, this.options);
  }
};
