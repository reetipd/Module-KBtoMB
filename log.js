// var log = {
//     info : function (info) {
//         console.log('Info has been updated: ' +info);
//     }

// }

// module.exports = log;  //export log object 

var conv = {
    dataKb : function(dataKb){
        dataMb = ((1/1024)*dataKb);
        console.log('Data in MB is: ',dataMb)
    }
}

module.exports = conv;