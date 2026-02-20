
import { PageHeader } from '../components/page-header'

// B.Ed. Program Page
export const BedProgramPage = () => {
    return `
    ${PageHeader(
        'Bachelor of Education (B.Ed.)',
        'Empowering future educators with knowledge, skills, and ethical values',
        '/static/images/hero2.png',
        'Programs'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Course Overview</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Master the Art of Teaching</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        The Bachelor of Education (B.Ed.) at Dr. SNS College of Education is a 2-year professional degree program designed to prepare students for a career in teaching at the secondary and senior secondary levels.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        Our curriculum is affiliated with Tamil Nadu Teachers Education University (TNTEU) and follows NCTE norms, ensuring high standards of academic excellence and practical teaching skills.
                    </p>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="bg-primary-50 p-4 rounded-xl">
                            <h4 class="font-bold text-primary">Duration</h4>
                            <p class="text-sm text-gray-600">2 Academic Years</p>
                        </div>
                        <div class="bg-primary-50 p-4 rounded-xl">
                            <h4 class="font-bold text-primary">Affiliation</h4>
                            <p class="text-sm text-gray-600">TNTEU, Chennai-5</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                     <div class="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <div class="relative bg-gray-200 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                        <img src="/static/images/SNS Academy Web/Colla Work.png" alt="B.Ed. Education" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Eligibility -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900">Admission Eligibility</h2>
                    <p class="text-gray-600 mt-4">Candidates must satisfy the following norms as per TNTEU guidelines:</p>
                </div>
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0 text-primary">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Academic Qualification</h3>
                                <p class="text-gray-600 text-sm">Candidates with at least 50% marks either in the Bachelor's Degree and/or in the Master's Degree in Sciences / Social Sciences / Humanities / Commerce.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0 text-primary">
                                <i class="fas fa-microchip"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Engineering & Technology</h3>
                                <p class="text-gray-600 text-sm">Bachelor's in Engineering or Technology with specialization in Science and Mathematics with 55% marks are also eligible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0 text-primary">
                                <i class="fas fa-user-check"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Reservation Norms</h3>
                                <p class="text-gray-600 text-sm">Reservation and relaxation of marks for SC/ST/OBC/PWD and other categories shall be as per the rules of the State Government.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0 text-primary">
                                <i class="fas fa-university"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Affiliation Norms</h3>
                                <p class="text-gray-600 text-sm">All admissions are subject to the approval of Tamil Nadu Teachers Education University, Chennai.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Subjects -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Pedagogy Subjects Offered</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">We offer 10 different pedagogy specializations for B.Ed. students.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
                ${['Tamil', 'English', 'Mathematics', 'Physical Science', 'Biological Science', 'History', 'Computer Science', 'Economics', 'Commerce', 'Social Science'].map(subject => `
                    <div class="bg-gray-50 p-6 rounded-2xl text-center hover:bg-primary-50 transition border border-gray-100 card-shadow-sm">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm font-bold">
                            ${subject.charAt(0)}
                        </div>
                        <h4 class="font-bold text-gray-800">${subject}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-primary text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Begin Your Teaching Journey</h2>
            <p class="text-xl mb-10 text-primary-50 font-light">
                Admissions for the upcoming academic year are now open. Secure your seat today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply Online
                </a>
                <a href="/contact" class="bg-primary-700 border border-primary-600 hover:bg-primary-600 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
    `;
};

// Pedagogy Subjects Page
export const SubjectsPage = () => {
    return `
    ${PageHeader(
        'Pedagogy Subjects',
        'Specialized training across various school subjects to enhance teaching effectiveness',
        '/static/images/hero.png',
        'Academics'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Choose Your Specialization</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Students can select their pedagogy subject based on their graduation or post-graduation degree.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center"><i class="fas fa-book text-primary mr-3"></i> Tamil</li>
                        <li class="flex items-center"><i class="fas fa-book text-primary mr-3"></i> English</li>
                    </ul>
                </div>
                
                <div class="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Science & Mathematics</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center"><i class="fas fa-calculator text-primary mr-3"></i> Mathematics</li>
                        <li class="flex items-center"><i class="fas fa-flask text-primary mr-3"></i> Physical Science</li>
                        <li class="flex items-center"><i class="fas fa-microscope text-primary mr-3"></i> Biological Science</li>
                        <li class="flex items-center"><i class="fas fa-laptop text-primary mr-3"></i> Computer Science</li>
                    </ul>
                </div>
                
                <div class="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Social & Commerce</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center"><i class="fas fa-history text-primary mr-3"></i> History</li>
                        <li class="fas fa-users-cog text-primary mr-3"></i> Social Science</li>
                        <li class="flex items-center"><i class="fas fa-chart-line text-primary mr-3"></i> Economics</li>
                        <li class="flex items-center"><i class="fas fa-briefcase text-primary mr-3"></i> Commerce</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gray-50 border-t border-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Need Guidance on Subject Selection?</h2>
            <p class="text-lg text-gray-600 mb-8">Our expert counselors are here to help you choose the best subject based on your academic background and career goals.</p>
            <a href="/contact" class="bg-primary text-white hover:bg-primary-700 px-10 py-4 rounded-xl font-bold text-lg transition inline-block">
                Speak with Counselor
            </a>
        </div>
    </section>
    `;
};
