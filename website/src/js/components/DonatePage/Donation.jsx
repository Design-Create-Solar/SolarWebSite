import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import TopBar from "../MultiplePages/TopBar"
import { styled } from '@material-ui/styles';

import "./Donate.css"

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (
        <Container>
            <TopBar history={props.history} />
            <form className="donateForm" onSubmit={handleSubmit}>
                <CardElement />

                <button className="payButton" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </Container>
    );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const DonatePage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

const Container = styled('div')({
    backgroundColor: "black",
    height: "90vh"
});

export default DonatePage