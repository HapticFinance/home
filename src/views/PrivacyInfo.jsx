import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react'
import * as React from 'react'

export const PrivacyInfo = () => (
  <Center
    maxW="4xl"
    mx="auto"
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Box bg="bg-surface" py="4">
        <Stack>
            <Stack fontSize="sm">
                <Box>
                    <Text fontWeight="600" fontSize="xl" color="emphasized">
                    Privacy Policy
                    </Text>
                    <Text color="subtle">Updated on 2022-04-22</Text>
                </Box>
                <Text
                    color="muted"
                    sx={{
                    '-webkit-box-orient': 'vertical',
                    display: '-webkit-box',
                    }}
                >

                    <p><b>Introduction</b></p>
                        <p><b>Haptic Finance</b> (“us”, “we”, or “our”) operates <b>haptic.finance</b> (hereinafter referred to as <b>“Service”</b>).</p>
                        <p>Our Privacy Policy governs your visit to <b>haptic.finance</b>, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
                        <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                        <p>Our Terms and Conditions (<b>“Terms”</b>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<b>“agreement”</b>).</p><br/>
                    <p><b>Definitions</b></p>
                        <p><b>SERVICE</b> means the haptic.finance website operated by Haptic Finance.</p>
                        <p><b>PERSONAL DATA</b> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
                        <p><b>USAGE DATA</b> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
                        <p><b>COOKIES</b> are small files stored on your device (computer or mobile device).</p>
                        <p><b>DATA CONTROLLER</b> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
                        <p><b>DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p> <p><b>DATA SUBJECT</b> is any living individual who is the subject of Personal Data.</p>
                        <p><b>THE USER</b> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p><br/>

                    <p><b>Information Collection and Use</b></p>
                        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p><br/>

                    <p><b>Types of Data Collected:</b></p>
                        <p>- <b>Usage Data</b></p>
                        <p>We may collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (<b>“Usage Data”</b>).</p>
                        <p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                        <p>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p><br/>

                        <p>- <b>Tracking Cookies Data</b></p>
                        <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
                        <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
                        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p><br/>

                        <p><b>Use of Data</b></p>
                        <p>Haptic Finance uses the collected data for various purposes:</p>
                        <p>0.1. to provide and maintain our Service;</p>
                        <p>0.2. to notify you about changes to our Service;</p>
                        <p>0.3. to allow you to participate in interactive features of our Service when you choose to do so;</p>
                        <p>0.4. to provide customer support;</p>
                        <p>0.5. to gather analysis or valuable information so that we can improve our Service;</p>
                        <p>0.6. to monitor the usage of our Service;</p>
                        <p>0.7. to detect, prevent and address technical issues;</p>
                        <p>0.8. to fulfil any other purpose for which you provide it;</p>
                        <p>0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</p>
                        <p>0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</p>
                        <p>0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</p>
                        <p>0.12. in any other way we may describe when you provide the information;</p>
                        <p>0.13. for any other purpose with your consent.</p><br/>

                    <p><b>Retention of Data</b></p>
                        <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                        <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p><br/>

                    <p><b>Security of Data</b></p>
                        <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p><br/>

                    <p><b>Your Data Protection Rights Under General Data Protection Regulation (GDPR)
                    </b></p>
                        <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
                        <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                        <p> If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <b>info@haptic.finance</b>.</p><br/>

                    <p>In certain circumstances, you have the following data protection rights:</p>
                        <p>0.1. the right to access, update or to delete the information we have on you;</p>
                        <p>0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</p>
                        <p>0.3. the right to object. You have the right to object to our processing of your Personal Data;</p>
                        <p>0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;</p>
                        <p>0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</p>
                        <p>0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</p>
                        <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
                        <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p><br/>

                    <p><b>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</b></p>
                        <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p><br/>

                    <p>According to CalOPPA we agree to the following:</p>
                        <p>0.1. users can visit our site anonymously;</p>
                        <p>0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;</p>
                        <p>0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;</p>
                        <p>0.4. users are able to change their personal information by emailing us at <b>info@haptic.finance</b>.</p><br/>

                    <p>Our Policy on “Do Not Track” Signals:</p>
                        <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
                        <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p><br/>

                    <p><b>Service Providers</b></p>
                        <p>We may employ third party companies and individuals to facilitate our Service (<b>“Service Providers”</b>), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
                        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p><br/>

                    <p><b>Analytics</b></p>
                        <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p><br/>

                    <p><b>CI/CD tools</b></p>
                        <p>We may use third-party Service Providers to automate the development process of our Service.</p><br/><br/>

                    <p><b>Behavioral Remarketing</b></p>
                    <p>We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>
                    
                    <p><b>Payments</b></p>
                        <p>We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p><p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p><br/>

                    <p><b>Links to Other Sites</b></p>
                        <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p><br/>

                    <p><b>Changes to This Privacy Policy</b></p>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.</p>
                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p><br/>

                    <p><b>Contact Us</b></p>
                        <p>If you have any questions about this Privacy Policy, please contact us by email: <b>info@haptic.finance</b>.</p>

        </Text>
        </Stack>
      </Stack>
    </Box>
  </Center>
)

export default PrivacyInfo;