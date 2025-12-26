import React, { ReactNode } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import Link from "next/link";
import { dmsans, inter } from "../font";

interface SectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface ListItemProps {
  children: ReactNode;
}

const Policy: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-transparent ${dmsans.className} py-12 px-4 sm:px-6 lg:px-8 mt-10`}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="space-y-6 text-white">
          <div className="max-w-2xl">
            <h1
              className={`${inter.className} text-4xl xs:text-5xl md:text-7xl font-bold tracking-tight leading-tight`}
            >
              GalaxyFi <span className="text-blue-500 block">PRIVACY</span>
              <span className="flex items-center gap-4">
                <TiArrowRightOutline className="text-blue-400" />
                POLICY
              </span>
            </h1>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            GalaxyFi (“GalaxyFi”, “we”, “our”, or “us”) is committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use,
            store, disclose, and protect your information when you use the
            GalaxyFi mobile application, website, and related services.
          </h2>
          <p className="text-sm text-gray-400 border-l-2 border-blue-500 pl-4">
            By using GalaxyFi, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </header>

        <div className="grid gap-12 text-white">
          <Section number="01" title="Information We Collect">
            <p className="text-gray-400 mb-6">
              We collect information to provide, improve, and secure our
              Services.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card title="1.1 Personal Information">
                <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-blue-500">
                  <li>Full name</li>
                  <li>Email Address</li>
                  <li>Phone number</li>
                  <li>Date of birth</li>
                  <li>Government-issued identification (KYC)</li>
                  <li>Selfie or biometric verification data</li>
                </ul>
              </Card>

              <Card title="1.2 Financial Information">
                <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-blue-500">
                  <li>Wallet addresses</li>
                  <li>Transaction history</li>
                  <li>Virtual account details</li>
                  <li>Payment and billing information</li>
                </ul>
              </Card>

              <Card
                title="1.3 Device & Technical Info"
                className="md:col-span-2"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-blue-500">
                    <li>Device type and operating system</li>
                    <li>IP address</li>
                  </ul>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-blue-500">
                    <li>App usage data</li>
                    <li>Log files and crash reports</li>
                  </ul>
                </div>
              </Card>
            </div>
          </Section>

          <Section number="02" title="How We Use Your Information">
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
              {[
                "Create and manage your GalaxyFi account",
                "Process transactions and provide financial services",
                "Complete identity verification (KYC)",
                "Prevent fraud, unauthorized access, and illegal activity",
                "Communicate with you about updates, alerts, and support",
                "Comply with legal and regulatory obligations",
                "Improve app performance and user experience",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="03" title="KYC and Identity Verification">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-300 leading-relaxed">
                GalaxyFi performs identity verification in compliance with
                applicable laws and regulations. KYC verification is designed to
                be completed within minutes, subject to successful document
                submission and validation.
              </p>
              <p className="mt-4 text-blue-200 font-medium">
                All identity data is securely stored and accessed only when
                legally required.
              </p>
            </div>
          </Section>

          <Section number="04" title="How We Share Your Information">
            <p className="text-gray-400 mb-4 font-semibold uppercase tracking-wide text-sm">
              We do not sell your personal data.
            </p>
            <p className="text-gray-300 mb-4">
              We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-3 text-gray-300">
              <ListItem>
                With trusted third-party service providers (e.g., KYC, payment
                processing, infrastructure services) strictly for service
                delivery.
              </ListItem>
              <ListItem>
                With regulatory authorities, law enforcement, or courts when
                required by law.
              </ListItem>
              <ListItem>
                To protect GalaxyFi’s legal rights, users, or systems.
              </ListItem>
            </ul>
          </Section>

          <Section number="05" title="Data Security">
            <p className="text-gray-300 mb-4">
              We implement industry-standard security measures to protect your
              data, including:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Encryption of sensitive info",
                "Secure servers & access controls",
                "Regular security reviews",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">
              While we take strong precautions, no system is completely secure.
              Users are encouraged to protect their login credentials.
            </p>
          </Section>

          <Section number="06" title="Data Retention">
            <p className="text-gray-300 mb-4">
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 marker:text-blue-500 mb-4">
              <li>Provide our Service</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-gray-300">
              When data is no longer required, it is securely deleted or
              anonymized.
            </p>
          </Section>

          <Section number="07" title="Your Rights">
            <p className="text-gray-300 mb-4">
              Depending on applicable laws, you may have the right to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Access your personal information",
                "Request correction of inaccurate data",
                "Request deletion of your data",
                "Withdraw consent where applicable",
              ].map((right, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-white/10 rounded-xl bg-white/5"
                >
                  <p className="text-gray-200">{right}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Requests can be made through our support channels.
            </p>
          </Section>

          <Section number="08" title="Additional Information">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Cookies and Tracking Technologies
                </h4>
                <p className="text-gray-300">
                  GalaxyFi may use cookies or similar technologies to improve
                  functionality and user experience. These do not collect
                  sensitive personal or financial data.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Third-Party Links
                </h4>
                <p className="text-gray-300">
                  Our Services may contain links to third-party websites or
                  services. GalaxyFi is not responsible for the privacy
                  practices of these third parties.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Children’s Privacy
                </h4>
                <p className="text-gray-300">
                  GalaxyFi does not knowingly collect information from
                  individuals under the age of 18. If such data is identified,
                  it will be deleted promptly.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Changes to This Privacy Policy
                </h4>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Any
                  changes will be communicated through the app or website.
                  Continued use of GalaxyFi after updates constitutes acceptance
                  of the revised policy.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            If you have questions or concerns about this Privacy Policy, please
            contact us immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="mailto:support@galaxyfi.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 transition-all rounded-xl border border-white/10 flex flex-col items-center"
            >
              <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Email Support
              </span>
              <span className="text-lg font-semibold text-blue-400">
                support@galaxyfi.com
              </span>
            </Link>

            <Link
              href="tel:02017003102"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 transition-all rounded-xl border border-white/10 flex flex-col items-center"
            >
              <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Phone Support
              </span>
              <span className="text-lg font-semibold text-white">
                0201 700 3102
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ number, title, children }: SectionProps) => (
  <section className="relative">
    <div className="flex items-end gap-4 mb-6 border-b border-white/10 pb-4">
      <span className="text-5xl font-bold text-white/5 select-none absolute -top-8 -left-4 md:-left-10 md:text-7xl">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-semibold text-white relative z-10 pl-2">
        {title}
      </h3>
    </div>
    <div className="pl-2 md:pl-4">{children}</div>
  </section>
);

const Card = ({ title, children, className = "" }: CardProps) => (
  <div
    className={`bg-white/5 border border-white/10 p-5 rounded-xl hover:border-white/20 transition-colors ${className}`}
  >
    <h4 className="text-lg font-medium text-blue-200 mb-3">{title}</h4>
    {children}
  </div>
);

const ListItem = ({ children }: ListItemProps) => (
  <li className="flex gap-3">
    <TiArrowRightOutline className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
    <span className="leading-relaxed">{children}</span>
  </li>
);

export default Policy;
