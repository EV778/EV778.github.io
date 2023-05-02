"use strict"
function createChart1() {
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Computer Science", "Psychology", "Business", "Political Science", "Art", "English", "Accounting", "Biology and Chemistry", "Other"],
      datasets: [
        {
          label: "Brooklyn College Seniors in Each Major ",
          backgroundColor: ["#F56256", "#F57F56","#F5B456","#F5E456","#81F556","#56F5E2","#569CF5","#B956F5","#F556B4"],
          data: [256,302,353,167,193,313,201,270,404]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Brooklyn College Seniors in Each Major'
      }
    }
});
}

function createChart2(){
    new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Computer Science", "Psychology", "Business", "Political Science", "Art", "English", "Accounting", "Biology and Chemistry", "Other"],
      datasets: [
        {
          label: "Brooklyn College Seniors in Each Major",
          backgroundColor: ["#F56256", "#F57F56","#F5B456","#F5E456","#81F556","#56F5E2","#569CF5","#B956F5","#F556B4"],
          data: [256,302,353,167,193,313,201,270,404]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Brooklyn College Seniors in Each Major'
      }
    }
});
}



document.addEventListener('DOMContentLoaded',createChart1);
document.addEventListener('DOMContentLoaded',createChart2);