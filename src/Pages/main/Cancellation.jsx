export default function Cancellation() {
  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Cancellation & Refund Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">

          {/* INTRODUCTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              This Cancellation & Refund Policy explains the terms under which users
              may cancel bookings, inquiries, or transactions related to our real
              estate projects. By using our website or engaging with our services,
              you acknowledge and agree to the terms stated in this policy.
            </p>
          </section>

          {/* GENERAL POLICY */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. General Policy</h2>
            <p>
              Due to the nature of real estate transactions, cancellations and refunds
              are handled with specific guidelines. All cancellations must comply with
              the terms, conditions, and agreements executed between the buyer and the
              company for each project.
            </p>
          </section>

          {/* CANCELLATION TERMS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Cancellation Terms</h2>
            <p>The following rules apply to cancellations:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Cancellation requests must be submitted in writing through email or
                via an official communication method provided by the company.
              </li>
              <li>
                Cancellations made after booking confirmation may be subject to
                administrative or processing charges.
              </li>
              <li>
                Any cancellation during construction or after allotment will follow
                the project-specific agreement signed by the buyer.
              </li>
              <li>
                GST, taxes, and statutory charges paid are non-refundable as per
                government regulations.
              </li>
              <li>
                Special offers, discounts, or limited-period benefits are not
                refundable or transferable under any circumstances.
              </li>
            </ul>
          </section>

          {/* REFUND TERMS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Refund Policy</h2>
            <p>Refunds, if applicable, will follow these guidelines:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                All refund requests are processed only after written approval from the
                management.
              </li>
              <li>
                Refund amounts will be calculated after deducting applicable
                cancellation charges, taxes, and administrative fees.
              </li>
              <li>
                Refunds will be processed within 30–90 working days depending on the
                project and financial regulations.
              </li>
              <li>
                Refunds will be issued only to the original payment source or
                registered buyer.
              </li>
              <li>
                No interest will be paid on refundable amounts unless stated in the
                signed agreement.
              </li>
            </ul>
          </section>

          {/* NON-REFUNDABLE SCENARIOS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Non-Refundable Cases</h2>
            <p>Refunds are not applicable in the following situations:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                If construction or allocation has already progressed as per schedule.
              </li>
              <li>
                If the buyer fails to complete required documentation.
              </li>
              <li>
                If cancellation violates project-specific terms & conditions.
              </li>
              <li>
                If payment delays or EMI defaults occur.
              </li>
              <li>
                If government approvals, taxes, or legal charges have been levied.
              </li>
            </ul>
          </section>

          {/* COMPANY RIGHTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Company Rights</h2>
            <p>
              The company reserves the right to approve, reject, or modify refund
              requests based on project guidelines, legal requirements, and buyer
              agreements.
            </p>
          </section>

          {/* MODIFICATIONS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
            <p>
              We may update or revise this Cancellation & Refund Policy at any time.
              Any changes will be posted on this page with the updated effective date.
              Continued use of our services signifies acceptance of these revisions.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              For any questions or assistance regarding cancellations or refunds,
              you may contact us at:
            </p>

            <p className="font-medium mt-3">📧 Email: support@palgharindia.com</p>
            <p className="font-medium">📞 Phone: +91 88985 88985</p>
            <p className="font-medium">📍 Address: Shop No. B34 , Shanti Shopping center ,Mira Road East, Thane - 401107</p>
          </section>

        </div>
      </div>
    </div>
  );
}
