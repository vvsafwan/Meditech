// /app/terms-and-conditions/page.jsx

export const metadata = {
  title: "Terms & Conditions | Meditech Diagnostics Center",
  description: "Terms and Conditions for Meditech Diagnostics Center",
};

export default function TermsConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            Home &gt; Terms & Conditions
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto py-10 px-5">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

          {/* INTRODUCTION */}
          <Section title="1. Introduction">
            <p>
              Welcome to <strong className="text-[#163c71]">Meditech Diagnostics Center</strong>. 
              These Terms and Conditions (the “Terms”) govern your use of our laboratory services, 
              including any associated websites, software, and related materials (collectively, the “Services”). 
              By using our Services, you agree to comply with these Terms. If you do not agree, please do not use our Services.
            </p>
          </Section>

          {/* SERVICES */}
          <Section title="2. Services Provided">
            <p>
              <strong className="text-[#609129]">Meditech Diagnostics Center</strong> provides services including 
              diagnostic testing, research, and analysis. Our Services are designed to assist with health diagnostics 
              and support scientific research.
            </p>
          </Section>

          {/* ELIGIBILITY */}
          <Section title="3. Eligibility">
            <p>
              To use our Services, you must meet the age and qualification requirements specified. 
              By using our Services, you represent and warrant that you meet these eligibility requirements.
            </p>
          </Section>

          {/* APPOINTMENT & SCHEDULING */}
          <Section title="4. Appointment and Scheduling">
            <List items={[
              "Booking: Appointments must be booked in advance through our website or phone.",
              "Cancellation: Please provide at least 24 hours notice for cancellations or rescheduling to avoid fees.",
              "No-Shows: Failure to attend a scheduled appointment without prior notice may result in a fee."
            ]} />
          </Section>

          {/* PAYMENT TERMS */}
          <Section title="5. Payment Terms">
            <List items={[
              "Fees: Fees for our Services are outlined on our website and in our office.",
              "Billing: Payment is due upon completion of service or invoice receipt. Accepted methods include card, UPI, and cash.",
              "Refunds: Refunds are provided only under specific circumstances as outlined by our policy."
            ]} />
          </Section>

          {/* DATA PRIVACY */}
          <Section title="6. Data Privacy and Confidentiality">
            <List items={[
              "Personal Data: We collect and use personal data in accordance with our Privacy Policy.",
              "Confidentiality: We are committed to maintaining confidentiality, but may disclose information if required by law or with your consent."
            ]} />
          </Section>

          {/* RESULTS & ACCURACY */}
          <Section title="7. Results and Accuracy">
            <List items={[
              "Results: While we strive for accuracy, Meditech Diagnostics Center does not guarantee complete correctness of test results.",
              "Responsibility: You are responsible for interpreting results and taking appropriate actions. Consulting a qualified professional is recommended."
            ]} />
          </Section>

          {/* USER RESPONSIBILITIES */}
          <Section title="8. User Responsibilities">
            <List items={[
              "Compliance: You agree to comply with all applicable laws and regulations while using our Services.",
              "Prohibited Conduct: Using our Services for illegal or unauthorized purposes is strictly prohibited, including fraud, misrepresentation, or interfering with service operations."
            ]} />
          </Section>

          {/* LIABILITY & DISCLAIMERS */}
          <Section title="9. Liability and Disclaimers">
            <List items={[
              "Limitation of Liability: To the fullest extent permitted by law, Meditech Diagnostics Center is not liable for any indirect, incidental, special, or consequential damages.",
              "Disclaimers: Services are provided “as is” and “as available.” No warranties are made regarding quality or performance."
            ]} />
          </Section>

          {/* AMENDMENTS */}
          <Section title="10. Amendments">
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect upon posting on our website, 
              and continued use of Services constitutes acceptance of the modified Terms.
            </p>
          </Section>

          {/* TERMINATION */}
          <Section title="11. Termination">
            <p>
              We may terminate or suspend your access to Services at any time, with or without cause, for conduct that 
              violates these Terms or harms Services or other users.
            </p>
          </Section>

          {/* GOVERNING LAW */}
          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of [Your State/Country]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </Section>

          {/* CONTACT */}
          <Section title="13. Contact Information">
            <p>If you have questions regarding these Terms, please contact us:</p>

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

function List({ items }) {
  return (
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
