
import { PageHeader } from '../components/page-header'

export const MandatoryDisclosurePage = () => {
    return `
    ${PageHeader(
        'Mandatory Disclosure',
        'Official institutional information and statutory disclosures as per NCTE and TNTEU norms',
        '/static/images/hero.png',
        'Mandatory Disclosure'
    )}

    <!-- A: General Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">General Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-primary-50 text-primary">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">NAME OF THE INSTITUTION</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold">DR. SNS COLLEGE OF EDUCATION</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">AFFILIATING UNIVERSITY</td>
                            <td class="border border-gray-300 px-4 py-3">Tamil Nadu Teachers Education University, Chennai</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">RECOGNITION BODY</td>
                            <td class="border border-gray-300 px-4 py-3">National Council for Teacher Education (NCTE)</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">NAAC ACCREDITATION</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="bg-primary text-white px-2 py-0.5 rounded text-xs font-bold mr-1">A GRADE</span> CGPA 3.32 (First Cycle)</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">COMPLETE ADDRESS</td>
                            <td class="border border-gray-300 px-4 py-3">Chinavedampatti (Post), Thudiyalur-Saravanampatti Road, Coimbatore - 641049, Tamil Nadu</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">PRINCIPAL NAME</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold">Dr. P. Tamil Selvi</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">PRINCIPAL QUALIFICATION</td>
                            <td class="border border-gray-300 px-4 py-3">M.Sc., M.A., M.Ed., M.Phil., Ph.D.</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">COLLEGE EMAIL ID</td>
                            <td class="border border-gray-300 px-4 py-3 font-medium"><a href="mailto:drsnsce.cbe@gmail.com" class="text-primary hover:underline">drsnsce.cbe@gmail.com</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">9</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold text-gray-700">PHONE NUMBERS</td>
                            <td class="border border-gray-300 px-4 py-3 text-gray-600">+91 75300 93729 / 75300 93728</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- B: Statutory Documents -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">Statutory Documents</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${[
            { title: "NCTE Recognition Order", link: "https://drsnsce.edu.in/ncte-recognition-order/" },
            { title: "TNTEU Affiliation Order", link: "https://drsnsce.edu.in/affiliation/" },
            { title: "NAAC Certificate", link: "#" },
            { title: "Trust Deed", link: "#" },
            { title: "Building Safety Certificate", link: "#" },
            { title: "Fire Safety Certificate", link: "#" },
            { title: "Sanitary Certificate", link: "#" },
            { title: "Land Documents", link: "https://drsnsce.edu.in/land-documents/" },
            { title: "Balance Sheet (Audited Statement)", link: "https://drsnsce.edu.in/audited-statements/" }
        ].map(doc => `
                    <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-between group border border-gray-100">
                        <div class="flex items-center">
                            <i class="far fa-file-pdf text-primary text-2xl mr-4 group-hover:scale-110 transition"></i>
                            <span class="font-bold text-gray-800 text-sm">${doc.title}</span>
                        </div>
                        <a href="${doc.link}" class="text-primary hover:bg-primary-50 p-2 rounded-lg" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- C: Infrastructure & Staff Details -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 class="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">Infrastructure & Staff</h2>
            
             <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-primary-600 rounded-3xl p-8 text-white">
                    <h3 class="text-2xl font-bold mb-6">Staff Details</h3>
                    <ul class="space-y-4">
                        <li class="flex justify-between border-b border-primary-500 pb-2">
                            <span>Principal</span>
                            <span class="font-bold">01</span>
                        </li>
                        <li class="flex justify-between border-b border-primary-500 pb-2">
                            <span>Regular Teaching Faculty</span>
                            <span class="font-bold">15</span>
                        </li>
                        <li class="flex justify-between border-b border-primary-500 pb-2">
                            <span>Non-Teaching Staff</span>
                            <span class="font-bold">08</span>
                        </li>
                         <li class="flex justify-between border-b border-primary-500 pb-2">
                            <span>Student-Teacher Ratio</span>
                            <span class="font-bold">1:15</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-gray-800 rounded-3xl p-8 text-white">
                    <h3 class="text-2xl font-bold mb-6">Campus Infrastructure</h3>
                    <ul class="space-y-4">
                        <li class="flex justify-between border-b border-gray-700 pb-2">
                            <span>Total Land Area</span>
                            <span class="font-bold">2500 sq.m.</span>
                        </li>
                        <li class="flex justify-between border-b border-gray-700 pb-2">
                            <span>Built-up Area</span>
                            <span class="font-bold">2450 sq.m.</span>
                        </li>
                        <li class="flex justify-between border-b border-gray-700 pb-2">
                            <span>Library Books</span>
                            <span class="font-bold">12,000+</span>
                        </li>
                        <li class="flex justify-between border-b border-gray-700 pb-2">
                            <span>ICT Center</span>
                            <span class="font-bold">Fully Equipped</span>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
    </section>

    <!-- F: Annual Quality Assurance Report (AQAR) -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">AQAR Reports</h2>
            <div class="bg-white rounded-3xl p-8 shadow-sm">
                 <div class="flex flex-col md:flex-row gap-8">
                    <a href="https://drsnsce.edu.in/aqar-2022-2023/" class="flex-1 bg-gray-50 hover:bg-primary text-gray-800 hover:text-white p-6 rounded-2xl text-center font-bold transition">AQAR 2022-2023</a>
                    <a href="https://drsnsce.edu.in/aqar-2021-2022/" class="flex-1 bg-gray-50 hover:bg-primary text-gray-800 hover:text-white p-6 rounded-2xl text-center font-bold transition">AQAR 2021-2022</a>
                    <a href="https://drsnsce.edu.in/aqar-2020-2021/" class="flex-1 bg-gray-50 hover:bg-primary text-gray-800 hover:text-white p-6 rounded-2xl text-center font-bold transition">AQAR 2020-2021</a>
                 </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-2xl mx-auto text-center px-4">
            <h3 class="text-2xl font-bold mb-6">Need more information?</h3>
            <p class="text-gray-600 mb-8">For any specific documentation or statutory query, please reach out to our administrative office.</p>
             <a href="mailto:drsnsce.cbe@gmail.com" class="text-primary font-bold hover:underline mb-2 block">drsnsce.cbe@gmail.com</a>
             <p class="text-sm text-gray-500 font-medium">Admission Helpline: +91 75300 93729</p>
        </div>
    </section>
    `;
};
