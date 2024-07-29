const legend1 = "#ff6384";
const legend2 = "#36a2eb";
const legend3 = "#ffcd56";
const legend4 = "#5ae131";
document.documentElement.style.setProperty("--legend1", legend1);
document.documentElement.style.setProperty("--legend2", legend2);
document.documentElement.style.setProperty("--legend3", legend3);
document.documentElement.style.setProperty("--legend4", legend4);

const chartData = {
    labels: ["Text", "Images", "Documents", "Videos"],
    data: [32, 25, 22, 11],
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: "Files Report",
                data: chartData.data,
                backgroundColor: [legend1, legend2, legend3, legend4],
            },
        ],
    },
    options: {
        cutout: "70%",
        borderWidth: 5,
        borderColor: "#fff",
        hoverBorderWidth: 0,
        borderRadius: "50",
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const moreBtn = document.querySelector(".more-btn");
const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const headTitle = document.querySelector(".head-title");
const legendSize = document.querySelectorAll(".size");
moreBtn.addEventListener("click", () => {
    // for cardOne -----------------------
    cardOne.style.top = "5%";
    cardOne.style.zIndex = "0";
    headTitle.style.fontSize = "15px";
    moreBtn.style.fontSize = "12px";
    moreBtn.style.padding = "5px";
    cardOne.style.filter = "blur(1px)";
    cardOne.style.width = "430px";
    cardOne.style.padding = "1% 4% 0";
    cardOne.style.pointerEvents = "none";
    legendSize.forEach((element) => {
        element.style.fontSize = "10px";
    });

    // for cardTwo ------------------------
    cardTwo.style.top = "30%";
    document.documentElement.style.setProperty("--pseudo-width1", "40%");
    document.documentElement.style.setProperty("--pseudo-width2", "65%");
    document.documentElement.style.setProperty("--pseudo-width3", "20%");
    document.documentElement.style.setProperty("--pseudo-width4", "53%");
});

const reportCancel = document.querySelector(".report-cancel");
reportCancel.addEventListener("click", () => {
    // for cardOne -----------------------
    cardOne.style.top = "10%";
    cardOne.style.zIndex = "1";
    headTitle.style.fontSize = "20px";
    moreBtn.style.fontSize = "16px";
    moreBtn.style.padding = "10px";
    cardOne.style.filter = "blur(0)";
    cardOne.style.width = "500px";
    cardOne.style.padding = "3% 5% 1%";
    cardOne.style.pointerEvents = "auto";
    legendSize.forEach((element) => {
        element.style.fontSize = "16px";
    });

    // for cardTwo ------------------------
    cardTwo.style.top = "100%";
    document.documentElement.style.setProperty("--pseudo-width1", "0");
    document.documentElement.style.setProperty("--pseudo-width2", "0");
    document.documentElement.style.setProperty("--pseudo-width3", "0");
    document.documentElement.style.setProperty("--pseudo-width4", "0");
});
