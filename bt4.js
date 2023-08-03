class CongTac {
    constructor() {
        this.status = true;
    }
    batTat = (bongden) => {
        if (this.status == true) {
            bongden.status = true;
            this.status = false;
            console.log(bongden.status);
        } else {
            bongden.status = false;
            this.status = true;
            console.log(bongden.status);
        }
    }
}
class BongDen {
    constructor() {
        this.status = true;
    }
}
let congTac = new CongTac();
let bongDen = new BongDen();
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);
congTac.batTat(bongDen);