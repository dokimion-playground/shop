INSERT INTO tickets (customer_id, title, description, completed, tech)
VALUES
(1, 'Password Reset', 'Customer forgot their password and needs assistance resetting it.', false, 'Tech D'),
(1, 'Payment Declined', 'Payment was declined during checkout.', false, 'Tech A'),
(2, 'Refund Request', 'Customer requests a refund for a recent order.', true, 'Tech B'),
(2, 'Shipping Address Update', 'Customer wants to update the shipping address for an order.', false, 'Tech C'),
(3, 'Account Hacked', 'Customer suspects unauthorized access to their account.', false, 'Tech D'),
(3, 'Late Delivery', 'Order arrived later than the promised delivery date.', true, 'Tech A'),
(4, 'Feedback Issue', 'Customer is unable to submit feedback on the website.', false, 'Tech C'),
(4, 'New Account Creation', 'Customer is unable to create a new account.', false, 'Tech B'),
(5, 'Feature Feedback', 'Customer provided feedback on the newly added feature.', true, 'Tech E'),
(5, 'Performance Issue', 'Customer reports the app is running slowly.', false, 'Tech F');
