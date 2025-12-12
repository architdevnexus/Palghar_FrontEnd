export default function Privacy() {
  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">

          {/* INTRODUCTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how we collect, use, disclose, and safeguard
              your information when you visit our website or engage with our services,
              including booking inquiries, project details, or communication related to
              real estate and construction activities. By accessing our website, you
              agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          {/* INFORMATION WE COLLECT */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>

            <p className="font-medium mb-2">We may collect the following categories of personal information:</p>

            <ul className="list-disc pl-6">
              <li>Personal Identification Information (Name, Email, Phone Number)</li>
              <li>Property or Project Inquiry Details</li>
              <li>Communication Records (emails, chats, form submissions)</li>
              <li>Technical Data (IP address, browser type, device information)</li>
              <li>Usage Data (pages visited, time spent, referring websites)</li>
              <li>Location information when allowed by your device/browser</li>
            </ul>
          </section>

          {/* HOW WE USE YOUR INFORMATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>

            <p>We use collected data for purposes including but not limited to:</p>

            <ul className="list-disc pl-6 mt-2">
              <li>Providing and maintaining our services</li>
              <li>Responding to inquiries or requests regarding our projects</li>
              <li>Sending confirmations, project updates, and notifications</li>
              <li>Improving user experience and website functionality</li>
              <li>Conducting analytics and performance tracking</li>
              <li>Ensuring website security and fraud prevention</li>
              <li>Marketing and promotional communication (only with your consent)</li>
            </ul>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, tags, and similar tracking technologies to
              enhance your browsing experience and collect usage data. You may disable
              cookies through your browser settings; however, doing so may affect
              certain functionality of the website.
            </p>
          </section>

          {/* SHARING INFORMATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Disclosure of Your Information
            </h2>
            <p>We may share your information with:</p>

            <ul className="list-disc pl-6 mt-2">
              <li>Service providers assisting in website operations</li>
              <li>Payment gateways (if applicable)</li>
              <li>Email or SMS communication providers</li>
              <li>Analytics partners such as Google Analytics</li>
              <li>Legal authorities when required by law or regulation</li>
            </ul>

            <p className="mt-3">
              We do not sell or trade your personal data to third parties for commercial
              gain.
            </p>
          </section>

          {/* DATA RETENTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <p>
              Your information will be retained only for as long as necessary to fulfill
              the purposes outlined in this policy, comply with legal obligations, or
              resolve disputes.
            </p>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Security</h2>
            <p>
              We implement commercially reasonable administrative, technical, and
              physical security measures to protect your data from unauthorized access,
              misuse, alteration, or destruction. However, no method of transmission
              over the Internet is fully secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Your Rights</h2>
            <p>You may exercise the following rights based on local data protection laws:</p>

            <ul className="list-disc pl-6 mt-2">
              <li>Right to access your personal information</li>
              <li>Right to request correction of inaccurate information</li>
              <li>Right to request deletion of your data (subject to legal exemptions)</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to opt out of marketing communications</li>
            </ul>
          </section>

          {/* THIRD-PARTY LINKS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, privacy practices, or security of these
              external sites. Users are encouraged to review the privacy policies of
              such third-party services.
            </p>
          </section>

          {/* CHILDREN POLICY */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do
              not knowingly collect personal information from minors.
            </p>
          </section>

          {/* POLICY UPDATES */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time.
              Any changes will be posted on this page with the updated effective date.
              Continued use of our website after modifications constitutes acceptance of
              the revised policy.
            </p>
          </section>

          {/* CONTACT US */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
            <p>
              For questions, concerns, or requests related to this Privacy Policy, you
              may contact us using the information below:
            </p>

            <p className="font-medium mt-3">📧 Email: support@yourbuilderwebsite.com</p>
            <p className="font-medium">📞 Phone: +91 98765 43210</p>
            <p className="font-medium">📍 Address: Your Builder Office Address, City, India</p>
          </section>

        </div>
      </div>
    </div>
  );
}
