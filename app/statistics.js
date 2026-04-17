let chartelement =[];
// 0~99 

document.getElementById('stairs_button').addEventListener('click', stairsnum);
document.getElementById('errors_button').addEventListener('click', errorlinenum);
document.getElementById('random_button').addEventListener('click', randnum);

function stairsnum(){
    chartelement[0] = 1;
    for(let i=1; i<100; i++){
        chartelement[i] = chartelement[i-1] + Math.floor(Math.random()*3);
    }
// 1+0~2, xが増えると、常に0～2上昇 
}

function errorlinenum(){
    for(let i=0; i<100; i++){
        chartelement[i] = i + 1 + Math.floor(Math.random()*7) - 3;
    }
// x±0~3、期待値的には上昇だが誤差強め 
}

function randnum(){
    for(let i=0; i<100; i++){
        chartelement[i] = Math.floor(Math.random()*100) + 1;
    }
// 1~100 xに対し、完全なランダムの数 
}

stairsnum();

let canvasdomains = document.getElementById("graph");
let chartdraw = new Chart(canvasdomains,{
    type:'line',
    data:{
        labels: Array.from({ length: 100 }, (_, i) => String(i + 1)),
        datasets: [
        {
          data: chartelement,
          borderColor: "rgba(0, 0, 255, 1)",
          backgroundColor: "rgba(0,0,0,0)"
        },
      ],
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        elements: {
            line: {
                tension: 0,
            },
        point: {
            radius: 0         // ここでまとめて点を消すことも可能
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                stepSize: 10
            }
        }]
    }
}

});

const aryMax = function (a, b) {return Math.max(a, b);}
const aryMin = function (a, b) {return Math.min(a, b);}
let max = chartelement.reduce(aryMax);
let min = chartelement.reduce(aryMin);
