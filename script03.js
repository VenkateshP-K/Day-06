let traveled = 15;
class UberPrice{
    constructor(ratePerKM){
        this.ratePerKM = ratePerKM;
    }
    price00(distanceperKM){
        return distanceperKM * this.ratePerKM;
    }
}

let price = new UberPrice(10);//
let finalprice = price.price00(traveled);
console.log(finalprice);