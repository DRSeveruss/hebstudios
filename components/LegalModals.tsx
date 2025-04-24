'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';
import LegalContent from './LegalContent';

// Privacy Policy and Terms of Service content
const PRIVACY_POLICY = `# HEB Studios Privacy Policy

**Last Updated: April 24, 2025**

## 1. Introduction

HEB Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, games, applications, and other services (collectively, the "Services").

Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.

## 2. Information We Collect

### 2.1 Personal Information

We may collect personal information that you voluntarily provide to us, including but not limited to:
- Name
- Email address
- Username
- Profile information
- Payment information (processed through secure third-party payment processors)
- Communication records when you contact our support team

### 2.2 Automatically Collected Information

When you access our Services, we may automatically collect certain information, including:
- Device information (type, operating system, browser type)
- IP address
- Usage data (pages visited, features used, time spent)
- Cookies and similar tracking technologies

### 2.3 Web3-Specific Information

When you interact with our Web3 features, we may collect:
- Public wallet addresses
- Transaction hashes
- Smart contract interactions
- Digital asset ownership information
- On-chain activity related to our Services

**Note:** We do not collect or store private keys, seed phrases, or other wallet credentials.

## 3. How We Use Your Information

We use the information we collect to:
- Provide, maintain, and improve our Services
- Process transactions and fulfill orders
- Communicate with you about updates, support, and promotional offers
- Personalize your experience and deliver content relevant to your interests
- Monitor and analyze usage patterns and trends
- Detect, prevent, and address technical issues, fraud, or illegal activities
- Comply with legal obligations

## 4. Web3 Data Practices

### 4.1 Blockchain Transactions

Blockchain transactions are publicly visible by design. When you interact with our Web3 features:
- Your public wallet address and transaction details are recorded on the blockchain
- This information is publicly accessible and cannot be deleted due to the immutable nature of blockchain technology
- We may collect and display this public on-chain data within our Services

### 4.2 Smart Contract Interactions

When you interact with our smart contracts:
- We process necessary information to facilitate these interactions
- We may store records of these interactions to provide and improve our Services
- We implement security measures to protect these interactions from unauthorized access

### 4.3 Digital Assets

For digital assets (NFTs, tokens) associated with our Services:
- We may collect and display ownership information
- We process transaction data necessary for trading, transferring, or using these assets
- We may store preferences related to your digital assets

## 5. Data Sharing and Disclosure

We may share your information with:
- Service providers who perform services on our behalf
- Business partners with whom we jointly offer products or services
- Legal authorities when required by law or to protect our rights
- Affiliated companies within our corporate family
- Third parties in connection with a business transaction (merger, acquisition, sale)

We do not sell your personal information to third parties.

## 6. Data Security

We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.

## 7. Your Rights and Choices

Depending on your location, you may have certain rights regarding your personal information, including:
- Access to your personal information
- Correction of inaccurate or incomplete information
- Deletion of your personal information where there is no compelling reason for continued processing
- Restriction or objection to certain processing activities
- Data portability

To exercise these rights, please contact us using the information provided in the "Contact Us" section.

## 8. Children's Privacy

Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.

## 10. Contact Us

If you have questions or concerns about this Privacy Policy, please contact us at:
- Email: privacy@hebstudios.com
- Address: HEB Studios, 123 Game Developer Lane, Digital City, DC 12345`;

const TERMS_OF_SERVICE = `# HEB Studios Terms of Service

**Last Updated: April 24, 2025**

## 1. Agreement to Terms

By accessing or using the services provided by HEB Studios ("we," "our," or "us"), including our website, games, applications, and Web3 products (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.

## 2. Eligibility

You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms.

## 3. User Accounts

### 3.1 Account Creation

To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.

### 3.2 Account Security

You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.

### 3.3 Web3 Wallets

For Services that integrate with Web3 technologies:
- You are solely responsible for securing your wallet, private keys, and passwords
- We never store your private keys, seed phrases, or wallet credentials
- You bear all risks associated with using blockchain technology and digital assets

## 4. Acceptable Use

You agree not to:
- Use our Services for any illegal purpose
- Violate any applicable laws or regulations
- Infringe upon the rights of others
- Interfere with or disrupt our Services
- Attempt to gain unauthorized access to our Services
- Use automated means to access or collect data from our Services
- Engage in any activity that could damage, disable, or impair our Services

## 5. Intellectual Property Rights

### 5.1 Our Intellectual Property

All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and code, are owned by HEB Studios or our licensors and are protected by copyright, trademark, and other intellectual property laws.

### 5.2 Limited License

We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for personal, non-commercial purposes in accordance with these Terms.

### 5.3 User Content

You retain ownership of any content you submit, post, or display on or through our Services ("User Content"). By providing User Content, you grant us a worldwide, royalty-free, non-exclusive, transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in connection with providing and promoting our Services.

### 5.4 Digital Assets

For digital assets (NFTs, tokens) associated with our Services:
- Ownership of a digital asset does not grant you ownership of the underlying intellectual property
- You receive a limited license to use, display, and transfer the digital asset
- We retain all rights to the underlying artwork, designs, and creative content

## 6. Web3 and Gaming Specific Terms

### 6.1 Digital Assets and Transactions

- Digital assets acquired through our Services are owned by you subject to these Terms
- Transactions on the blockchain are irreversible; we cannot recover lost assets
- Market values of digital assets may fluctuate; we make no guarantees regarding value
- We are not responsible for gas fees or other blockchain transaction costs

### 6.2 Game Rules and Virtual Items

- We reserve the right to modify game rules, mechanics, and economies
- Virtual items, currencies, and rewards have no real-world value unless explicitly stated
- We may modify, limit, or remove virtual items at our discretion
- Unauthorized real-money trading of virtual items is prohibited

## 7. Disclaimers and Limitations of Liability

### 7.1 Disclaimers

OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

### 7.2 Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HEB STUDIOS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICES.

OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICES SHALL NOT EXCEED THE GREATER OF $100 OR THE AMOUNT YOU PAID TO US FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.

## 8. Indemnification

You agree to indemnify, defend, and hold harmless HEB Studios and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of the Services, violation of these Terms, or infringement of any rights of another party.

## 9. Termination

We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.

## 10. Governing Law and Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association].

## 11. Changes to Terms

We may revise these Terms at any time by updating this page. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms.

## 12. Contact Us

If you have any questions about these Terms, please contact us at:
- Email: legal@hebstudios.com
- Address: HEB Studios, 123 Game Developer Lane, Digital City, DC 12345`;

export default function LegalModals() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);

  return (
    <>
      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
        title="Privacy Policy"
      >
        <LegalContent content={PRIVACY_POLICY} />
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOfServiceOpen}
        onClose={() => setIsTermsOfServiceOpen(false)}
        title="Terms of Service"
      >
        <LegalContent content={TERMS_OF_SERVICE} />
      </Modal>

      {/* Export the functions to open the modals using useEffect to avoid SSR issues */}
      {useEffect(() => {
        // Only run on client-side
        if (typeof window !== 'undefined') {
          (window as any).__legalModals = {
            openPrivacyPolicy: () => setIsPrivacyPolicyOpen(true),
            openTermsOfService: () => setIsTermsOfServiceOpen(true),
          };
        }
        
        // Cleanup on unmount
        return () => {
          if (typeof window !== 'undefined') {
            delete (window as any).__legalModals;
          }
        };
      }, [])}
    </>
  );
}