//------------  Arrange, Act & Assert  ------------//
/* 
AAA is common standard for writing the test cases.

Arrange: It means arrange everything to setup the unit test cases like creating object, initializing/mocking data etc.

Act: Act on your unit test cases, meaning excute necessery functionality/method that need to be tested.

Assert: This part verifies the functionailty that we are unit testing is giving the result as per expectation.
*/


import { customerReservation } from './customerReservation.component';

describe('Room Reservation', () => {
    
    it('Testing room is reserved or not', () => {
        // Arrange
            let customerReserve = new customerReservation();

        //Act
            let isReserved = customerReserve.reserveRoom();

        //Assert
            expect(isReserved).toBeTruthy();
    });

});