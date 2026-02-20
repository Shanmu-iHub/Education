
import { PageHeader } from '../components/page-header'

// Gallery Page
export const GalleryPage = () => {
    return `
    ${PageHeader(
        'Campus Gallery',
        'Explore our state-of-the-art infrastructure and the vibrant learning environment at Dr. SNSCE',
        '/static/images/hero5.png',
        'Gallery'
    )}

    <!-- Life at Dr. SNSCE -->
    <section class="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4 text-gray-900 border-b-2 border-primary w-fit mx-auto pb-2">Life at Dr. SNSCE</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Where professional training meets creative excellence.</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-3xl overflow-hidden shadow-xl group">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/hero2.png" alt="Convocation" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold mb-2">Academic Milestones</h3>
                        <p class="text-gray-600 text-sm">Celebrating the transition of student-teachers into the noble world of education.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-3xl overflow-hidden shadow-xl group">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/SNS Academy Web/Colla Work.png" alt="Collaborative Learning" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold mb-2">Group Pedagogy</h3>
                        <p class="text-gray-600 text-sm">Collaboration and peer learning form the core of our B.Ed. curriculum.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-3xl overflow-hidden shadow-xl group">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/Innovation.jpg" alt="Lab Work" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold mb-2">Experiential Mastery</h3>
                        <p class="text-gray-600 text-sm">Translating theory into practice through hands-on laboratory sessions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Campus Infrastructure -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">College Infrastructure</h2>
            
            <div class="grid md:grid-cols-4 gap-8 mb-16 text-center">
                 <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <div class="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-university text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Admin Block</h4>
                 </div>
                 <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <div class="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-book-open text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Academic Wing</h4>
                 </div>
                 <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <div class="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-flask text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Specialized Labs</h4>
                 </div>
                 <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                    <div class="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-users text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Conference Hall</h4>
                 </div>
            </div>
            
             <div class="grid md:grid-cols-2 gap-8">
                 <div class="rounded-3xl overflow-hidden shadow-sm h-80">
                    <img src="/static/images/Facility_lib.jpg" alt="Library" class="w-full h-full object-cover">
                 </div>
                 <div class="rounded-3xl overflow-hidden shadow-sm h-80">
                    <img src="/static/images/Facility_lab.jpg" alt="Lab" class="w-full h-full object-cover">
                 </div>
             </div>
        </div>
    </section>
    `;
};

// Sports & Clubs Page
export const SportsClubsPage = () => {
    return `
    ${PageHeader(
        'Wellness & Life Skills',
        'Fostering physical well-being and holistic character development',
        '/static/images/gym.jpg',
        'Sports & Clubs'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
                 <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-display uppercase tracking-tighter">Physical <span class="text-primary italic">Education</span></h2>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Dr. SNS College of Education provides extensive facilities for physical education, ensuring student-teachers develop a healthy mind in a healthy body. We encourage participation in various inter-collegiate tournaments and sports festivals.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center space-x-3 text-gray-700 font-bold"><i class="fas fa-check text-primary"></i> <span>Football & Cricket</span></div>
                        <div class="flex items-center space-x-3 text-gray-700 font-bold"><i class="fas fa-check text-primary"></i> <span>Volleyball & Kabaddi</span></div>
                        <div class="flex items-center space-x-3 text-gray-700 font-bold"><i class="fas fa-check text-primary"></i> <span>Indoor Table Tennis</span></div>
                        <div class="flex items-center space-x-3 text-gray-700 font-bold"><i class="fas fa-check text-primary"></i> <span>Chess & Athletics</span></div>
                    </div>
                 </div>
                 <div class="grid grid-cols-2 gap-4">
                    <div class="h-64 rounded-3xl overflow-hidden shadow-lg"><img src="/static/images/SNS Academy Web/Swim.png" class="w-full h-full object-cover"></div>
                    <div class="h-64 rounded-3xl overflow-hidden shadow-lg mt-8"><img src="/static/images/SNS Academy Web/Indoor.png" class="w-full h-full object-cover"></div>
                 </div>
            </div>
            
            <!-- Red Ribbon & NSS -->
            <div class="bg-gray-50 rounded-3xl p-12 text-center">
                 <h3 class="text-3xl font-bold mb-8">Social Responsibility Clubs</h3>
                 <div class="grid md:grid-cols-3 gap-12">
                    <div class="group">
                        <div class="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                             <i class="fas fa-ribbon text-4xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Red Ribbon Club</h4>
                        <p class="text-gray-500 text-sm">Promoting health awareness and community service among youth.</p>
                    </div>
                    <div class="group">
                        <div class="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                             <i class="fas fa-tree text-4xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Eco Club</h4>
                        <p class="text-gray-500 text-sm">Creating environmental awareness and sustainable campus practices.</p>
                    </div>
                     <div class="group">
                        <div class="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                             <i class="fas fa-hands-helping text-4xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2">Social Service</h4>
                        <p class="text-gray-500 text-sm">Engaging in community outreach and rural development programs.</p>
                    </div>
                 </div>
            </div>
        </div>
    </section>
    `;
};

// Brochure Page
export const BrochurePage = () => {
    return `
    ${PageHeader(
        'College Brochure',
        'Download our official prospectus and learn more about Dr. SNSCE',
        '/static/images/hero.png',
        'Brochure'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div class="relative inline-block mb-12">
                <div class="absolute inset-0 bg-primary blur-3xl opacity-20 transform scale-150"></div>
                <div class="bg-white p-12 rounded-3xl shadow-xl relative z-10 border border-gray-100">
                    <i class="far fa-file-pdf text-8xl text-primary mb-8 animate-bounce-slow"></i>
                    <h2 class="text-3xl font-bold mb-4">Official Prospectus 2026-27</h2>
                    <p class="text-gray-600 mb-10 text-lg">
                        Get comprehensive details about our B.Ed. curriculum, faculty profiles, infrastructure, and admission guidelines.
                    </p>
                    <a href="https://drsnsce.edu.in/wp-content/uploads/2021/11/SNSCE-BROCHURE.pdf" target="_blank" class="bg-primary text-white font-bold px-12 py-5 rounded-2xl hover:bg-primary-700 transition shadow-lg inline-block">
                        Download PDF Brochure
                    </a>
                </div>
             </div>
             <div>
                <p class="text-gray-400 font-medium">For physical copies, visit our campus administrative office.</p>
             </div>
        </div>
    </section>
    `;
};
