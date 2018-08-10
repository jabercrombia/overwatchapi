$( document ).ready(function() {


const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.overwatchleague.com/stats/players', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data.data);
  if (request.status >= 200 && request.status < 400) {
     var elims = [];
     var names =[];
     var bg_colors = [];
      var border_colors = [];
     var x = 0;
    data.data.forEach(player_info => {
var r = Math.floor((Math.random() * 255) + 1);
var g = Math.floor((Math.random() * 255) + 1);
var b = Math.floor((Math.random() * 255) + 1);


 elims.push(player_info.eliminations_avg_per_10m);
  names.push(player_info.name);
  bg_colors.push('rgba('+r+','+g+','+b+',1)');
  border_colors.push('rgba('+r+','+g+','+b+',0.2)');
    });
    // console.log(elims);


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: elims,
            backgroundColor: bg_colors,
            borderColor: border_colors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();


function total_elims(elims){
  y =  elims;
  //console.log(y);
  return elims;
}

var book = total_elims(elims);
console.log( book);

function aber(){
  return 6;
}
var test = aber();
console.log(test);


});
