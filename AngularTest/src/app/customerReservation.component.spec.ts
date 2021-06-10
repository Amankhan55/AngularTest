//------------  Arrange, Act & Assert  ------------//
/* 
AAA is common standard for writing the test cases.

Arrange: It means arrange everything to setup the unit test cases like creating object, initializing/mocking data etc.

Act: Act on your unit test cases, meaning excute necessery functionality/method that need to be tested.

Assert: This part verifies the functionailty that we are unit testing is giving the result as per expectation.
*/


import { customerReservation } from './customerReservation.component';

describe('Customer Reservation', () => {
    let custService: customerReservation;

    //For initializing
    beforeEach(() => {
        custService = new customerReservation();
    });

    //For clearing
    afterEach(() => {
        //custService = null;
    });

    beforeAll(() => {

    });

    afterAll(() => {

    });
    
    it('Testing room is reserved or not', () => {
        // Arrange
            let customerReserve = new customerReservation();

        //Act
            let isReserved = customerReserve.reserveRoom();

        //Assert
            expect(isReserved).toBeTruthy();
    });

    it('should register customer / increase current customer count by 1', () => {

        let custcount = custService.registerCustomer();

        expect(custcount).toEqual(11);
    });

    it('should unregister customer / decrease current customer count by 1', () => {

        let custcount = custService.unRegisterCustomer();

        expect(custcount).toEqual(9);
    });

});