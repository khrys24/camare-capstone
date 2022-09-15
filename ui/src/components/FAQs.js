import React from "react";

const FAQs = () => {
  return (
    <div className="container" >
        
    <div className="accordion accordion-flush container" id="FAQs" style={{margin:"150px 0"}}>

    <h3 style={{margin:"100px 0"}}>Frequently Asked Questions</h3>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What services do you offer?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              We offer a comprehensive event planning service. We're able to
              find venues, organise catering, décor, accommodation, staffing,
              equipment and even hire speakers for corporate events. We offer a
              tailor made service to fit your requirements. Every event is
              unique and we have the capacity to fulfill your requirements from
              start to finish.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What are your fees?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              We will discuss all your event requirements before giving a
              quotation as obviously fees charged will depend on the scale and
              nature of the event, complexity of planning and our level of
              involvement. We'll keep in contact with you regarding our time,
              hours spent, and liaise with you on specific items, but we'll also
              work to your budget and plan accordingly. You'll never be charged
              more than we agree upon and there will be no hidden extras or
              surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Why do I need an event planning?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              An <strong>experienced event planner</strong> saves you time and
              money.We will supply reputable suppliers and vendors, negotiate
              the best rates, discounts, terms and conditions on your behalf and
              co-ordinate all aspects of your event. Using an event planner
              takes away stress and worry, and gives you peace of mind to enjoy
              your event.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            How do you keep budgets on track?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              We are meticulous about keeping track of everything we need to
              spend money on. This is done by constant monitoring and updating
              <strong>spreadsheets</strong>, knowing where to prioritise
              spending and keeping aside a budget to cater for emergency
              contingencies.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            What factors do you consider when selecting a venue?
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              We consider the size and capacity of venue needed for the number
              of guests, facilities provided, parking, technical needs and
              budget constraints. We
              <strong>visit venues to check on the quality</strong> of the
              facilities and liaise with clients, keeping them informed of
              decisions made.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            What factors do you consider when selecting a venue?
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#FAQs"
        >
          <div className="accordion-body text-start">
            <p>
              We consider the size and capacity of venue needed for the number
              of guests, facilities provided, parking, technical needs and
              budget constraints. We
              <strong>visit venues to check on the quality</strong> of the
              facilities and liaise with clients, keeping them informed of
              decisions made.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQs;
