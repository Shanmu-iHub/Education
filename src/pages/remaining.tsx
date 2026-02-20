
import { PageHeader } from '../components/page-header'

// Innovation Hub Page
export const InnovationPage = () => {
    return `
    ${PageHeader(
        'Innovation & Learning Labs',
        'State-of-the-art specialized labs for practical teacher training and research',
        '/static/images/pillar_industry.jpg',
        'Campus'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                     <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Experimental Learning</span>
                    <h2 class="text-4xl font-bold mb-6">Innovative Teaching Spaces</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        At Dr. SNS College of Education, we believe in "learning by doing". Our specialized labs are designed to provide student-teachers with hands-on experience in various pedagogical and psychological experiments.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        From understanding the human mind in the Psychology Lab to mastering digital tools in the ICT center, our facilities empower educators to be future-ready.
                    </p>
                </div>
                <div class="bg-primary-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Specialized Research Labs</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start"><i class="fas fa-brain text-primary mr-3 mt-1"></i><span>Psychology Laboratory</span></li>
                        <li class="flex items-start"><i class="fas fa-laptop-code text-primary mr-3 mt-1"></i><span>ICT & Language Lab</span></li>
                        <li class="flex items-start"><i class="fas fa-atom text-primary mr-3 mt-1"></i><span>Physical Science Lab</span></li>
                        <li class="flex items-start"><i class="fas fa-leaf text-primary mr-3 mt-1"></i><span>Biological Science Lab</span></li>
                        <li class="flex items-start"><i class="fas fa-microchip text-primary mr-3 mt-1"></i><span>Educational Technology Lab</span></li>
                        <li class="flex items-start"><i class="fas fa-palette text-primary mr-3 mt-1"></i><span>Art & Craft Resource Center</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CT Camp -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 items-center grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">CT Camp (Cloud Thinkers)</h2>
                    <p class="text-lg text-gray-600 mb-6">
                        The CT Camp is a unique initiative by SNS Institutions to encourage digital literacy and innovative thinking among students. It serves as a creative hub where future teachers can brainstorm and develop digital teaching resources.
                    </p>
                    <ul class="space-y-3 text-gray-700">
                        <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-3"></i> Digital Content Creation</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-3"></i> Collaborative Learning</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-primary mr-3"></i> Educational App Development</li>
                    </ul>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/static/images/innovation.jpg" alt="CT Camp" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>
    `;
};

// About Page
export const AboutPage = () => {
    return `
    ${PageHeader(
        'About Dr. SNS College of Education',
        'Moulding Noble Teachers with High Thinking and Healthy Virtues',
        '/static/images/hero.png',
        'About Us'
    )}

    <!-- History -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <img src="/static/images/SNS Academy Web/Colla Work.png" alt="SNSCE Campus" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
                <div>
                     <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">History of the Institution</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS Charitable Trust, founded in 1997, embodies the vision of Sincerity, Nobility, and Service. Dr. SNS College of Education was established in 2005 with the noble cause of providing world-class teacher education.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Over the years, the institution has grown into a premier college of education in Coimbatore, known for its academic excellence, innovative pedagogy, and commitment to producing value-based educators.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-24 bg-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16">
                <div class="bg-primary-700 p-10 rounded-3xl border border-primary-600">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-eye text-3xl text-primary"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-6">Our Vision</h3>
                    <p class="text-lg leading-relaxed opacity-90">
                        SNS is to be an eminent institution of education, moulding noble teachers with high thinking and healthy virtues for the better society.
                    </p>
                </div>
                <div class="bg-primary-700 p-10 rounded-3xl border border-primary-600">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-bullseye text-3xl text-primary"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-6">Our Mission</h3>
                    <p class="text-lg leading-relaxed opacity-90">
                        To prepare noble teachers with a sense of dedication and to upgrade the standard of education in the rural areas through teacher community.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Management -->
    <section class="py-24 bg-white text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-gray-900 mb-16">Visionary Leadership</h2>
            <div class="grid md:grid-cols-3 gap-12">
                <div>
                    <img src="/static/images/chairman.png" alt="Dr. S.N. Subbramanian" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-100">
                    <h3 class="text-xl font-bold text-gray-900">Dr. S.N. Subbramanian</h3>
                    <p class="text-primary font-semibold">Founder Chairman</p>
                </div>
                <div>
                    <img src="/static/images/correspondent.png" alt="Dr. S. Rajalakshmi" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-100">
                    <h3 class="text-xl font-bold text-gray-900">Dr. S. Rajalakshmi</h3>
                    <p class="text-primary font-semibold">Correspondent</p>
                </div>
                <div>
                     <img src="/static/images/td.png" alt="Ar. Nalin SNS" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-100">
                    <h3 class="text-xl font-bold text-gray-900">Ar. Nalin SNS</h3>
                    <p class="text-primary font-semibold">Technical Director</p>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Admissions Page
export const AdmissionsPage = () => {
    return `
    ${PageHeader(
        'Admissions',
        'Join Dr. SNS College of Education and transform your career',
        '/static/images/secondary.png',
        'Admissions'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-primary-50 rounded-3xl p-10 border border-primary-100 mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Admission Process</h2>
                <div class="space-y-8">
                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center mr-4 shrink-0">1</div>
                        <div>
                            <h3 class="font-bold text-lg">Online/Offline Application</h3>
                            <p class="text-gray-600">Apply through our website portal or visit the campus office for a physical application form.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center mr-4 shrink-0">2</div>
                        <div>
                            <h3 class="font-bold text-lg">Document Verification</h3>
                            <p class="text-gray-600">Submit required educational certificates (X, XII, Degree, TC, Community Certificate) for verification.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center mr-4 shrink-0">3</div>
                        <div>
                            <h3 class="font-bold text-lg">Conseling & Seat Allotment</h3>
                            <p class="text-gray-600">Attend the college counseling session for seat allotment based on TNTEU guidelines.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                 <h3 class="text-2xl font-bold mb-6">Ready to apply?</h3>
                <a href="/contact" class="bg-primary text-white hover:bg-primary-700 px-10 py-4 rounded-xl font-bold text-lg transition inline-block">
                    Enquire Now
                </a>
            </div>
        </div>
    </section>
    `;
};

// Contact Page
export const ContactPage = () => {
    return `
    ${PageHeader(
        'Contact Us',
        'Reach out to us for any queries regarding admissions or programs',
        '/static/images/hero.png',
        'Contact Us'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-10">Campus Contact Information</h2>
                    <div class="space-y-8">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-6 text-primary">
                                <i class="fas fa-map-marker-alt text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg mb-2 text-gray-900">Our Address</h4>
                                <p class="text-gray-600 leading-relaxed">
                                    Dr. SNS College of Education,<br>
                                    Chinavedampatti (Post), Thudiyalur - Saravanampatti Road,<br>
                                    Coimbatore - 641049, Tamil Nadu.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-6 text-primary">
                                <i class="fas fa-phone-alt text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg mb-2 text-gray-900">Phone Numbers</h4>
                                <p class="text-gray-600">Cell: +91 75300 93729</p>
                                <p class="text-gray-600">Office: +91 75300 93728</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-6 text-primary">
                                <i class="fas fa-envelope text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg mb-2 text-gray-900">Email Address</h4>
                                <p class="text-gray-600 font-medium">drsnsce.cbe@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h3>
                    <form class="space-y-6">
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <input type="text" class="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Your Name">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                            <input type="tel" class="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="91-XXXXX XXXXX">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2">Email ID</label>
                            <input type="email" class="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="yourname@gmail.com">
                        </div>
                         <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2">Message/Inquiry</label>
                            <textarea class="w-full bg-white border border-gray-200 rounded-xl p-4 h-32 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Tell us what you're looking for..."></textarea>
                        </div>
                        <button class="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-lg">Submit Enquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
};
