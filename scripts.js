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

    var generateKittenObjs = function(numberKittens) {
        for (var i = 1; i <= numberKittens; i++) {
            var kitten = {
                imgUrl: 'kittens/kitten' + i + '.jpg',
                votes: 0,
                timesShown: 0
            };
            kittens.push(kitten);
        }
    }

    function randomImage(imgAr) {

        var kittenDiv = document.getElementById('kittenContainer');
        kittenDiv.innerHTML = "";

        var num = Math.floor(Math.random() * imgAr.length);
        var num2 = Math.floor(Math.random() * imgAr.length);

        while (num === num2) {
            num2 = Math.floor(Math.random() * imgAr.length);
        }

        var kitten1 = imgAr[num];
        var img1 = document.createElement('img');
        img1.setAttribute('id', 'imgOne');
        img1.src = kitten1.imgUrl;

        var kitten2 = imgAr[num2];
        var img2 = document.createElement('img');
        img2.setAttribute('id', 'imgTwo');
        img2.src = kitten2.imgUrl;


        kittenDiv.appendChild(img1);
        kittenDiv.appendChild(img2);

        var kittenOneImage = document.getElementById('imgOne');
        var kittenTwoimage = document.getElementById('imgTwo');

        kittenOneImage.addEventListener('click', function() {
            kittenOneImage.style.border = "5px solid blue";

            kitten1.votes++;



            setTimeout(randomImage, 500, kittens);//Clears and starts a new vote

            chartKittens(kitten1.votes, kitten2.votes);


        });
        kittenTwoimage.addEventListener('click', function() {
            kittenTwoimage.style.border = "5px solid red";

            kitten2.votes++;


            setTimeout(randomImage, 500, kittens);//Clears and starts a new vote

            chartKittens(kitten1.votes, kitten2.votes);

        });
    };

    generateKittenObjs(14); // generates the 14 kittens from selections

    randomImage(kittens); // begins the game

}());
