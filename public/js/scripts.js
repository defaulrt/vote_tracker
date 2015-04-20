(function(){

  var kittens = ["kittens/kitten1.jpg", "kittens/kitten2.jpg", "kittens/kitten3.jpg",
                 "kittens/kitten4.jpg", "kittens/kitten5.jpg", "kittens/kitten6.jpg", "kittens/kitten7.jpg", "kittens/kitten8.jpg",
                 "kittens/kitten9.jpg", "kittens/kitten10.jpg", "kittens/kitten11.jpg", "kittens/kitten12.jpg", "kittens/kitten13.jpg",
                 "kittens/kitten14.jpg"];
  var votes = 0;

  var pieData = [
    {
      value: 20,
      color: "#878BB6"
    },
    {
      value : 80,
      color : "#4ACAB4"
    }
    ];

  randomImage(kittens);
  function randomImage(imgAr) {

    var num = Math.floor( Math.random() * imgAr.length );
    var num2 =Math.floor( Math.random() * imgAr.length );
    while (num === num2) {
      num2 = Math.floor( Math.random() * imgAr.length );
    }
    var img = document.createElement('img');
    img.setAttribute('id', 'imgOne' );
    var img2 = document.createElement('img');
    img2.setAttribute('id', 'imgTwo');
    img.src = imgAr[num];
    img2.src = imgAr[num2];

    document.getElementById('kittenOne').appendChild(img);
    document.getElementById('kittenTwo').appendChild(img2);
    };
    var kittenOne = document.getElementById('imgOne');
    var kittenTwo = document.getElementById('imgTwo');

    kittenOne.addEventListener('click', function() {
      kittenOne.style.border = "5px solid blue";

    });
    kittenTwo.addEventListener('click', function() {
      kittenTwo.style.border = "5px solid red";

    });
    var chartDom = document.getElementById("myChart").getContext("2d");


    var myNewChart = new Chart(chartDom).Doughnut(pieData);





}());
