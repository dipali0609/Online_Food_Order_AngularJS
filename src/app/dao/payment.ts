export class Payment {
    constructor(public  paymentid:number,
        public cartholdername:String,
        public cartno:number,
        public  carttype:String,
        public expmonthyear:String,
        public cvv:String,
        public amount:number){}
}
