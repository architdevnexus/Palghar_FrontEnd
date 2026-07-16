export default function TermCondition() {
    return (
        <div className="w-full min-h-screen py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
            <div className="max-w-full mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Terms & Conditions
                </h1>

                <p className="text-gray-600 mb-8">
                    Effective Date: {new Date().toLocaleDateString()}
                </p>

                <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">

                    {/* INTRODUCTION */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                        <p>
                            These Terms & Conditions (“Terms”) govern your use of our website,
                            services, project information, and any interactions conducted through
                            this platform. By accessing or using our website, you agree to comply
                            with and be bound by these Terms.
                        </p>
                    </section>

                    {/* ACCEPTANCE */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">2. Acceptance of Terms</h2>
                        <p>
                            You must read and accept these Terms before using our website. If you do
                            not agree with any part of the Terms, you must discontinue the use of
                            the website immediately.
                        </p>
                    </section>

                    {/* ELIGIBILITY */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">3. Eligibility</h2>
                        <p>
                            By using this website, you represent that you are at least 18 years old
                            and legally capable of entering into binding agreements.
                        </p>
                    </section>

                    {/* WEBSITE USE */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">4. Use of Website</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Use the website for any unlawful purpose</li>
                            <li>Interfere with website security or functionality</li>
                            <li>Access restricted areas without authorization</li>
                            <li>Send harmful scripts, viruses, or malicious content</li>
                            <li>Misuse any content, images, or information on the website</li>
                        </ul>
                    </section>

                    {/* PROJECT INFORMATION */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">5. Project Information</h2>
                        <p>
                            All project-related content, including prices, layouts, images, and
                            specifications, is provided for general informational purposes. Actual
                            details may vary based on approvals, availability, and updates. We
                            reserve the right to modify any information without prior notice.
                        </p>
                    </section>

                    {/* INTELLECTUAL PROPERTY */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property Rights</h2>
                        <p>
                            All content on this website—including images, text, logos, graphics,
                            project details, and design assets—is the exclusive property of the
                            company. Unauthorized copying, reproduction, or redistribution is
                            strictly prohibited.
                        </p>
                    </section>

                    {/* BOOKING & PAYMENT */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">7. Booking, Payments & Transactions</h2>
                        <p>
                            Any booking made on the website is considered a request and not a
                            confirmed agreement until verified and approved by our team. All
                            payments made are subject to confirmation, verification, and applicable
                            terms specific to each project.
                        </p>
                    </section>

                    {/* THIRD PARTY LINKS */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">8. Third-Party Websites</h2>
                        <p>
                            Our website may include links to external third-party websites. We do
                            not control or endorse their content, policies, or reliability. Your
                            interactions with third-party websites are solely at your own risk.
                        </p>
                    </section>

                    {/* LIMITATION OF LIABILITY */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, we shall not be liable for any
                            direct, indirect, incidental, or consequential damages arising from your
                            access to or use of the website, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Data loss</li>
                            <li>Viruses or harmful software</li>
                            <li>Errors in content or project details</li>
                            <li>Website downtime or unavailability</li>
                        </ul>
                    </section>

                    {/* WARRANTIES */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">10. Disclaimer of Warranties</h2>
                        <p>
                            The website and all content are provided “as is” and “as available”
                            without warranties of any kind, whether express or implied. We do not
                            guarantee accuracy, reliability, or uninterrupted access.
                        </p>
                    </section>

                    {/* USER OBLIGATIONS */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">11. User Responsibilities</h2>
                        <p>You agree to:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Provide accurate information when submitting forms</li>
                            <li>Use the website responsibly and lawfully</li>
                            <li>Refrain from misrepresenting identity or making fraudulent inquiries</li>
                        </ul>
                    </section>

                    {/* TERMINATION */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">12. Termination of Access</h2>
                        <p>
                            We reserve the right to suspend or restrict access to the website at our
                            sole discretion, without any prior notice or liability, if we detect
                            misuse or violation of these Terms.
                        </p>
                    </section>

                    {/* GOVERNING LAW */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">13. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and interpreted in accordance with the
                            applicable laws of India. Any disputes shall fall under the exclusive
                            jurisdiction of the courts in your region or our principal place of
                            business.
                        </p>
                    </section>

                    {/* CHANGES */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">14. Changes to Terms</h2>
                        <p>
                            We may modify or update these Terms at any time. Updated versions will be
                            posted on this page. Continued use of the website constitutes acceptance
                            of the revised Terms.
                        </p>
                    </section>

                    {/* CONTACT */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">15. Contact Us</h2>
                        <p>
                            For any questions or concerns regarding these Terms & Conditions, you may
                            contact us at:
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
