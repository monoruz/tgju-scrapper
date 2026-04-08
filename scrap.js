var dateTime = require('node-datetime');



givePrices()



function givePrices(){
    var dt = dateTime.create();
    var data_revision = dt.format('YmdH');
    var t = dt.format('YmdHMS');
    var url = "https://call2.tgju.org/ajax.json?" + data_revision + "-" + t + "-" + make_random_str(20);
    fetch(url)
        .then(function(res){ return res.text(); })
        .then(function(body){
            console.log(JSON.stringify(JSON.parse(body),null,2));
        })
        .catch(function(err){
            console.error("Error fetching data:", err.message);
            process.exit(1);
        });
}

function make_random_str(rand_limit) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < rand_limit; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}