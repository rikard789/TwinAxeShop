import React from "react";


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          adressStreet: '',
          bNum: '',
          fNum: '',
          postalCode: '',
          City: '',
          cardNumber: '',
          valDate: '',
          cvc: ''
        };
      }

    render() {
        return (
            <div class="h-screen bg-indigo-100 flex justify-center items-center">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Delivery and payment</h1>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="adress">Street adress</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="adress" id="adress" placeholder="Street adress" />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="buildNum">Building number</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="buildNum" id="buildNum" placeholder="Building number" />
                            </div>
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="flatNum">Flat number</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="flatNum" id="flatNum" placeholder="Flat number" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="postalCode">Postal code</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="postalCode" id="postalCode" placeholder="Postal code" />
                            </div>
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="city">City</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="city" id="city" placeholder="City" />
                            </div>
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="cardNumber">Credit card number</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="cardNumber" id="cardNumber" placeholder="Credit card number" />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="valDate">Validity date</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="valDate" id="valDate" placeholder="Validity date" />
                            </div>
                            <div>
                                <label class="text-gray-800 font-semibold block my-3 text-md" for="cvc">CVC</label>
                                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="cvc" id="cvc" placeholder="CVC" />
                            </div>
                        </div>
                        
                        <button type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Proceed with payment</button>
                    </form>
                </div>
            </div>
        )
      }
}

export default Payment;