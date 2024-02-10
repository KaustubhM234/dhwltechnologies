
import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    { question: 'How can i place order?', answer: 'Open the app -> browse shops -> select your desired products -> add items ->add items to your cart ->proceed to checkout ->choose payment method and delivery address -> confirm your order ' },
    { question: 'What payment methods are acepted?', answer: 'We accept various payment methods,including credit/debit cards and mobile wallets. you can check the available payment options during the checkout process' },
    { question: 'How long does it take to delivery', answer: 'Delivery time may vary depending on your location and store.On average,deliveries are typically made within10 minutes .You can track your order in real time through the app' },
    { question: 'Can I cancel my Order', answer: 'Yes,you can cancel your order before it is being dispached by store,Once the store dispatches your order,cancellation may not be possible' },
    { question: 'What do I do if there is an issue with my order?', answer: 'If you encounter ny issue with your order ,such as missing items or incorrect orders,please contact our support team immediately,we will assist you in resolving the issue' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mt-4 mx-auto">
     <h2 className='text-center	text-8xl	mb-3'>FAQ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="custom-faq-item" // Replace with your own custom class
            onClick={() => handleToggle(index)}
          >
            <div>{item.question}</div>
            <div className={`custom-rotate ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 custom-svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {activeIndex === index && 
            <div className="custom-answer">
              <p>{item.answer}</p>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default FAQ;