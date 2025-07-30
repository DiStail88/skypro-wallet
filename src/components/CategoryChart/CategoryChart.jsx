import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import {
  CategoryChartH4,
  CategoryChartSpan1,
  CategoryChartSpan2,
} from "./CategoryChat.styled";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const CategoryChart = ({ transactions = [], selectedDate }) => {
  const formatAmount = (amount) => {
    return (
      new Intl.NumberFormat("ru-RU", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount) + " ₽"
    );
  };

  const categoryStyles = {
    food: { label: "Еда", color: "rgb(217, 182, 255)" },
    transport: { label: "Транспорт", color: "rgb(255, 181, 61)" },
    housing: { label: "Жильё", color: "rgb(110, 228, 254)" },
    joy: { label: "Развлечения", color: "rgb(176, 174, 255)" },
    education: { label: "Образование", color: "rgb(188, 236, 48)" },
    others: { label: "Другое", color: "rgb(255, 185, 184)" },
  };

  const initData = {
    labels: Object.values(categoryStyles).map((cat) => cat.label),
    datasets: [
      {
        data: Array(6).fill(0),
        backgroundColor: Object.values(categoryStyles).map((cat) => cat.color),
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  let data = { ...initData };
  let totalAmount = 0;
  let dateString = "";

  if (selectedDate) {
    const filteredTransactions = transactions.filter((tx) => {
      const txDate = new Date(tx.date).toLocaleDateString();
      const selectedDateStr = new Date(selectedDate).toLocaleDateString();
      return txDate === selectedDateStr;
    });

    const categories = Object.keys(categoryStyles).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});

    filteredTransactions.forEach((tx) => {
      if (Object.prototype.hasOwnProperty.call(categories, tx.category)) {
        categories[tx.category] += tx.sum || tx.amount;
      }
    });

    const values = Object.values(categories);

    data = {
      labels: Object.keys(categories).map((cat) => categoryStyles[cat].label),
      datasets: [
        {
          data: values,
          backgroundColor: Object.keys(categories).map(
            (cat) => categoryStyles[cat].color
          ),
          borderWidth: 0,
          borderRadius: 10,
        },
      ],
    };

    totalAmount = values.reduce((sum, amount) => sum + amount, 0);
    dateString = new Date(selectedDate).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `${context.label}: ${formatAmount(context.raw)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          color: "rgb(0, 0, 0)",
          font: {
            family: "Montserrat",
            size: 12,
            weight: 400,
            lineHeight: "15px",
          },
        },
        barThickness: 94,
        categoryPercentage: 1.0,
        barPercentage: 0.8,
      },
      y: {
        display: false,
        grid: { display: false, drawBorder: false },
        beginAtZero: true,
        min: 0,
        max: Math.max(...data.datasets[0].data) * 1.1 || 10,
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    animation: {
      onComplete: function () {
        const chart = this;
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];
        const values = dataset.data;
        const meta = chart.getDatasetMeta(0);

        ctx.font = "600 16px Montserrat";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        meta.data.forEach((bar, index) => {
          const value = values[index];
          // Если значение 0, рисуем текст чуть выше оси Y (chart.scales.y.bottom)
          const yPos = value === 0 ? chart.scales.y.bottom - 5 : bar.y - 5;
          ctx.fillText(formatAmount(value), bar.x, yPos);
        });
      },
    },
  };

  return (
    <div>
      <h3>{totalAmount ? formatAmount(totalAmount) : ""}</h3>
      <CategoryChartH4>
        {dateString && (
          <>
            <CategoryChartSpan1>Расходы за</CategoryChartSpan1>
            <CategoryChartSpan2>{dateString}</CategoryChartSpan2>
          </>
        )}
      </CategoryChartH4>
      <div
        style={{
          width: "725px",
          height: "387px",
          position: "relative",
          minHeight: "80px",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryChart;
