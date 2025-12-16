export const metadata = {
    title: "Privacy Policy | Meditech Diagnostics Center",
    description: "Privacy Policy for Meditech Diagnostics Center",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

            {/* HERO SECTION */}
            <section
                className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
                style={{
                    background: `linear-gradient(to right, #163c71 40%, rgba(22,60,113,0.5) 100%), url('/medherobg.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-sm sm:text-base text-gray-200">
                        Home &gt; Privacy Policy
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto py-10 px-5">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

                    {/* INTRODUCTION */}
                    <p className="text-gray-700 leading-relaxed">
                        <strong className="text-[#163c71]">Meditech Diagnostics Center</strong> ("we," "our," or "us")
                        is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when using our laboratory services or website.
                    </p>

                    {/* SECTION 1 */}
                    <Section title="1. Information We Collect">
                        <SubTitle>1.1 Personal Information</SubTitle>
                        <p>We may collect personal information you provide directly, including:</p>
                        <List items={[
                            "Name",
                            "Contact details (email, phone number, address)",
                            "Date of birth",
                            "Medical history or health-related information",
                            "Diagnostic test results"
                        ]} />

                        <SubTitle>1.2 Usage Data</SubTitle>
                        <p>We may collect technical information automatically, including:</p>
                        <List items={[
                            "IP address",
                            "Browser type and device information",
                            "Pages visited and time spent"
                        ]} />

                        <SubTitle>1.3 Cookies & Tracking</SubTitle>
                        <p>
                            We use cookies and similar technologies to improve user experience.
                            You may manage cookie preferences from your browser.
                        </p>
                    </Section>

                    {/* SECTION 2 */}
                    <Section title="2. How We Use Your Information">
                        <List items={[
                            "To provide, manage, and improve our diagnostic services",
                            "To process and deliver test results",
                            "To communicate regarding appointments, results, and service updates",
                            "For internal research and quality improvement",
                            "To comply with legal and regulatory requirements"
                        ]} />
                    </Section>

                    {/* SECTION 3 */}
                    <Section title="3. Sharing of Information">
                        <SubTitle>3.1 Third-Party Service Providers</SubTitle>
                        <p>We may share data with trusted partners such as:</p>
                        <List items={[
                            "IT and cloud storage providers",
                            "Billing and payment processors",
                            "Compliance and legal partners"
                        ]} />

                        <SubTitle>3.2 Legal Requirements</SubTitle>
                        <p>
                            We may disclose information if required by law, government authorities,
                            or court orders.
                        </p>

                        <SubTitle>3.3 Business Transfers</SubTitle>
                        <p>
                            If Meditech Diagnostics Center undergoes a merger or acquisition, your
                            information may be transferred accordingly.
                        </p>
                    </Section>

                    {/* SECTION 4 */}
                    <Section title="4. Data Security">
                        <p>
                            We use appropriate security measures to protect your personal information.
                            However, no electronic transmission is 100% secure, and we cannot guarantee
                            absolute protection.
                        </p>
                    </Section>

                    {/* SECTION 5 */}
                    <Section title="5. Data Retention">
                        <p>
                            Your information is retained only as long as necessary to meet legal,
                            regulatory, and operational requirements.
                        </p>
                    </Section>

                    {/* SECTION 6 */}
                    <Section title="6. Your Rights">
                        <List items={[
                            "Right to access your personal data",
                            "Right to request corrections",
                            "Right to request deletion (subject to legal limits)",
                            "Right to opt-out of marketing communications"
                        ]} />
                    </Section>

                    {/* SECTION 7 */}
                    <Section title="7. Children's Privacy">
                        <p>
                            Our services are not intended for children under the age of 16. If we learn
                            that we have collected data from a child, we will delete it promptly.
                        </p>
                    </Section>

                    {/* SECTION 8 */}
                    <Section title="8. Updates to This Privacy Policy">
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted
                            on our website, and the updated policy takes effect immediately upon posting.
                        </p>
                    </Section>

                    {/* SECTION 9 */}
                    <Section title="9. Contact Information">
                        <p>If you have questions about this Privacy Policy, please contact us:</p>

                        <div className="mt-4 bg-[#f6f9ff] p-5 rounded-lg border border-[#d9e5ff] leading-relaxed">
                            <p className="text-[#163c71] font-semibold">Meditech Diagnostics Center</p>
                            <p><span className="text-[#609129] font-semibold">Booking Number:</span> +91 9995 912 228</p>
                            <p><span className="text-[#609129] font-semibold">Lab@Home Number:</span> +91 999 5912 228</p>
                            <p>Email: <strong>meditechmuppathadam@gmail.com</strong></p>
                            <p>Email: <strong>meditechmuppathadam@gmail.com</strong></p>
                            <p>Email: <strong>result@meditechlabs.in</strong></p>
                        </div>
                    </Section>

                    <p className="mt-10 text-[#163c71] font-medium">
                        Thank you for trusting Meditech Diagnostics Center.
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ----------------------------------------- */
/* REUSABLE COMPONENTS */
/* ----------------------------------------- */

function Section({ title, children }) {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#163c71] mb-3">{title}</h2>
            <div className="text-gray-700 space-y-3 leading-relaxed">{children}</div>
        </div>
    );
}

function SubTitle({ children }) {
    return (
        <h3 className="text-xl font-semibold text-[#609129] mt-4">{children}</h3>
    );
}

function List({ items }) {
    return (
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}
