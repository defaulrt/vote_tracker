(function() {

    var kittens = [];

    function chartKittens(kitten1Votes, kitten2Votes) {

        var data = [{
            value: kitten1Votes,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        }, {
            value: kitten2Votes,
            color: "blue",
            highlight: "#5AD3D1",
            label: "Blue"
        }, ];

        var ctx = document.getElementById("kittenChart").getContext("2d");
        var myDoughnutChart = new Chart(ctx).Doughnut(data);
    }

var generateKittenObjs = function() {

  $.ajax({
    url: 'https://api.imgur.com/3/album/DDoWy#0',
    headers: {
      Authorization: 'Client-ID 5896025502cb86f'
    },
    dataType: 'json',
    success: function (json) {
      var imgArray = json.data.images;

     for(var i=0; i < imgArray.length; i++) {
        var kitten = {
           imgUrl: imgArray[i].link,
           votes: 0,
           timesShown: 0
        };
        kittens.push(kitten);
      }

      randomImage(kittens);
    }
  });
}

    function randomImage(imgAr) {

        var $kittenDiv = $('#kittenContainer').empty();


        var num = Math.floor(Math.random() * imgAr.length);
        var num2 = Math.floor(Math.random() * imgAr.length);

        while (num === num2) {
            num2 = Math.floor(Math.random() * imgAr.length);
        }

        var kitten1 = imgAr[num];
        var img1 = $('<img>').attr({
            id: 'imgOne',
            src: kitten1.imgUrl
        });

        var kitten2 = imgAr[num2];
        var img2 = $('<img>').attr({
            id: 'imgTwo',
            src: kitten2.imgUrl
        });

        $kittenDiv.append(img1, img2);



        $('#imgOne').on('click', function() {
            $(this).css("border", "5px solid blue");

            kitten1.votes++;



            setTimeout(randomImage, 500, kittens);//Clears and starts a new vote

            chartKittens(kitten1.votes, kitten2.votes);


        });
        $('#imgTwo').on('click', function() {
            $(this).css("border", "5px solid blue");

            kitten2.votes++;


            setTimeout(randomImage, 500, kittens);//Clears and starts a new vote

            chartKittens(kitten1.votes, kitten2.votes);

        });
    };

    generateKittenObjs();

}());

