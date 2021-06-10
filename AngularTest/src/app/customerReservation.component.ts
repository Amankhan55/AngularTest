export class customerReservation {
    hotelRoomCapacity = 30;
    customerCount = 10;

    reserveRoom(): boolean{
        let roomReserved = false;

        if(this.customerCount < this.hotelRoomCapacity) {
            this.customerCount++;
            roomReserved = true;
        }

        return roomReserved;
    }

    //Increase the counter by 1
    registerCustomer() {
        return ++this.customerCount;
    }

    //Decrease the counter by 1
    unRegisterCustomer() {
        return --this.customerCount
    }
}