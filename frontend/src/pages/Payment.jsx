import React from "react";

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressStreet: '',
            bNum: '',
            fNum: '',
            postalCode: '',
            city: '',
            cardNumber: '',
            valDate: '',
            cvc: '',
            formValid: false,
            paymentCompleted: false
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, this.validateForm);
    };

    validateForm = () => {
        const {
            addressStreet,
            bNum,
            fNum,
            postalCode,
            city,
            cardNumber,
            valDate,
            cvc
        } = this.state;

        const formValid =
            addressStreet.trim() !== '' &&
            bNum.trim() !== '' &&
            fNum.trim() !== '' &&
            postalCode.trim() !== '' &&
            city.trim() !== '' &&
            cardNumber.trim() !== '' &&
            valDate.trim() !== '' &&
            cvc.trim() !== '';

        this.setState({ formValid });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment submitted successfully!");
        this.props.clearCart();
        this.setState({ paymentCompleted: true });
    };

    render() {
        const { addressStreet, bNum, fNum, postalCode, city, cardNumber, valDate, cvc, formValid, paymentCompleted } = this.state;

        if (paymentCompleted) {
            return (
                <div className="h-screen bg-indigo-100 flex justify-center items-center">
                    <div className="lg:w-2/5 md:w-1/2 w-2/3">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Payment completed</h1>
                    </div>
                </div>
            );
        }

        return (
            <div className="h-screen bg-indigo-100 flex justify-center items-center">
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <form onSubmit={this.handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Address and payment</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="addressStreet">Street</label>
                            <input
                                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text"
                                name="addressStreet"
                                id="addressStreet"
                                placeholder="Street"
                                value={addressStreet}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="bNum">Building number</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="bNum"
                                    id="bNum"
                                    placeholder="Building number"
                                    value={bNum}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="fNum">Flat number</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="fNum"
                                    id="fNum"
                                    placeholder="Flat number"
                                    value={fNum}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="postalCode">Postal code</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    placeholder="Postal code"
                                    value={postalCode}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="city">City</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    value={city}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="cardNumber">Credit card number</label>
                            <input
                                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text"
                                name="cardNumber"
                                id="cardNumber"
                                placeholder="Credit card number"
                                value={cardNumber}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="valDate">Validity date</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="valDate"
                                    id="valDate"
                                    placeholder="Validity date"
                                    value={valDate}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="cvc">CVC</label>
                                <input
                                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans ${formValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                            disabled={!formValid}
                        >
                            Proceed with payment
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Payment;
