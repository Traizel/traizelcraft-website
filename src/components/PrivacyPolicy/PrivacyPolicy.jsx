import { useHistory } from 'react-router-dom';

function PrivacyPolicy() {

    const history = useHistory();

    return (
        <div className='policy-section'>
            <div className='header'>
                <h1>Privacy Policy</h1>
                <div className='policy-page-image'>
                    <img src="./images/Wasteland1.JPG" />
                </div>
                <br />
                <br />
                <div>
                    <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
                    <h1 class="text-warning">Terms and Conditions:</h1>
                    <p>
                    Users making any purchase or download of any content on this site agree to the terms and conditions stated below.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 1- ONLINE PURCHASES AND DOWNLOADS
                    </h4>
                    <p>
                    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                    A breach or violation of any of the Terms will result in an immediate termination of you Services.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 2- GENERAL CONDITIONS
                    </h4>
                    <p>
                    We reserve the right to refuse service to anyone for any reason at any time.
                    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                    You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                    The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 3- ACCURACY OF BILLING AND ACCOUNT INFORMATION
                    </h4>
                    <p>
                    We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers or distributors.
                    You agree to provide current, complete and accurate purchase and account information for all purchase made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 4- ELIGIBILITY
                    </h4>
                    <p>
                    You must be 18 years or older to visit or use our Services in any manner. By visiting the Services or accepting the Terms, you represent and warrant to the Company that you are 18 years or older, and that you have the right, authority, and capacity to agree to and abide by these Terms. You also represent and warrant to the Company that you will use the Services in a manner consistent with any and all applicable laws and regulations.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 5- ERRORS, INACCURACIES AND OMISSIONS
                    </h4>
                    <p>
                    Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability.  We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
                    We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 6- DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                    </h4>
                    <p>
                    We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free
                    We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                    You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
                    You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is'  and 'as available'  for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quantity, fitness for a particular purpose, durability, title, and non-infringement.
                    In no case shall our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, weather bases in contract, tort (including negligence), strict liability otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTIONS 7- DISPUTE CLAUSE
                    </h4>
                    <p>
                    Any dispute relating to any activity on TraizelCraft Network stores or the purchase of any TraizelCraft Network products shall be submitted to confidential arbitration in North Dakota, United States, unless you have in some way threatened or violated TraizelCraft Network’s intellectual property rights, whereby TraizelCraft Network may seek an injunctive.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 8- COPYRIGHT
                    </h4>
                    <p>
                    The technology underlying, and the entire content included in, the Site, including but not limited to text, graphics or code is copyrighted as a collective work under the United States and other copyright laws, and is the property of TraizelCraft Network™ and is protected by copyright and other intellectual property or proprietary rights. The collective work includes works that are licensed to TraizelCraft Network™. Copyright 2012 TraizelCraft Network. All rights reserved. We do not investigate to determine if such works are accurate nor can we provide assurance that all such works are free of typographical errors. We cannot guarantee information displayed on this Site to be 100% accurate.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTION 9- TRADEMARKS
                    </h4>
                    <p>
                    All trademarks, service marks, and trade names of TraizelCraft Network™ on the Site are trademarks or registered trademarks of TraizelCraft Network™, or of their respective owners.
                    </p>
                    <br />
                    <h4 class="text-info">
                    SECTIONS 10- USER GENERATED CONTENT
                    </h4>
                    <p>
                    By sharing, submitting and uploading any of your data (including but not limited to photographs, images, video, music, art, or comments) to TraizelCraft Network's™ website, TraizelCraft Network's™ social media channels (including, without limitation, Twitter (including # and @ comments incorporating TraizelCraft Network™), Facebook and Instagram) and pages dedicated to TraizelCraft Network™ in discussion forums (e.g., Reddit), you grant TraizelCraft Network™ a worldwide, non-exclusive, royalty-free, sub-licensable and transferable license to use, reproduce, prepare derivative works of, display and perform your user data in any legal manner for the benefit of TraizelCraft Network™. You acknowledge and agree that you are solely responsible for all the user data that you make available through such means. Accordingly, you represent and warrant that: (1) you have all rights, licenses, consents and releases necessary to grant TraizelCraft Network™ the required rights to disseminate any user data, and (2) neither your data nor your posting, uploading, publication, submission or transmittal of this data or TraizelCraft Network's™ use of your uploaded data (or any portion thereof) on, through or by the means of TraizelCraft Network™ will infringe, misappropriate or violate a third party's patent, copyright, trademark, trade secret, moral rights or other intellectual property rights or rights of publicity or privacy or result in the violation of any applicable law or regulation.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;