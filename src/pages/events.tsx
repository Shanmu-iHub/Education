
import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Achievements',
        'Celebrating academic excellence, professional development, and cultural vibrancy at Dr. SNSCE',
        '/static/images/SNS Academy Web/Events.webp',
        'Events'
    )}

    <!-- Event Categories -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                 <button class="px-6 py-2 rounded-full bg-primary text-white font-bold">All Events</button>
                 <button class="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary transition font-bold">Workshops</button>
                 <button class="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary transition font-bold">Cultural</button>
                 <button class="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary transition font-bold">Academic</button>
            </div>

            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Event 1: Graduation Day -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/hero2.png" alt="Graduation Day" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Academic</span>
                        <h3 class="text-white font-bold text-2xl mb-2">15th Graduation Day</h3>
                        <p class="text-white/70 text-sm line-clamp-2">Celebrating the success of our student-teachers as they transition into professional educators.</p>
                    </div>
                </div>

                <!-- Event 2: Teachers Day -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/hero.png" alt="Teachers Day" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-primary-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Cultural</span>
                        <h3 class="text-white font-bold text-2xl mb-2">Teachers Day Celebration</h3>
                        <p class="text-white/70 text-sm line-clamp-2">Honoring the dedication and hard work of our faculty members with vibrant cultural performances.</p>
                    </div>
                </div>

                <!-- Event 3: Workshop -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/Innovation.jpg" alt="Pedagogy Workshop" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Professional</span>
                        <h3 class="text-white font-bold text-2xl mb-2">Pedagogy Workshop</h3>
                        <p class="text-white/70 text-sm line-clamp-2">External experts sharing insights on 21st-century teaching-learning strategies.</p>
                    </div>
                </div>

                <!-- Event 4: Yoga Day -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/Campus.jpg" alt="International Yoga Day" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Wellness</span>
                        <h3 class="text-white font-bold text-2xl mb-2">International Yoga Day</h3>
                        <p class="text-white/70 text-sm line-clamp-2">Promoting mental and physical well-being among future teachers through specialized yoga sessions.</p>
                    </div>
                </div>
                
                 <!-- Event 5: Heritage Tour -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/Facility_lab.jpg" alt="Educational Tour" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Experiential</span>
                        <h3 class="text-white font-bold text-2xl mb-2">Educational Tour</h3>
                        <p class="text-white/70 text-sm line-clamp-2">Mid-year excursion to historical and educational sites to promote cultural awareness.</p>
                    </div>
                </div>

                <!-- Event 6: Investiture -->
                <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-gray-200">
                    <img src="/static/images/Facility_lib.jpg" alt="Investiture Ceremony" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">Leadership</span>
                        <h3 class="text-white font-bold text-2xl mb-2">Student Council Investiture</h3>
                        <p class="text-white/70 text-sm line-clamp-2">Electing and empowering student-leaders for the academic year.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Results Section -->
    <section class="py-24 bg-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/3">
                    <h2 class="text-4xl font-bold mb-6">Academic Achievements</h2>
                    <p class="text-lg opacity-80 leading-relaxed mb-8">
                        Our students consistently perform at the highest levels in the Tamil Nadu Teachers Education University examinations.
                    </p>
                    <div class="bg-primary-700 p-6 rounded-2xl border border-primary-600">
                        <div class="text-4xl font-extrabold mb-2">100%</div>
                        <p class="text-sm font-bold uppercase tracking-widest">University Result 2023-24</p>
                    </div>
                </div>
                <div class="lg:w-2/3 grid grid-cols-2 gap-8">
                     <div class="bg-white/10 p-8 rounded-3xl border border-white/20">
                        <h4 class="text-xl font-bold mb-2">Distinctions</h4>
                        <p class="text-5xl font-extrabold text-white mb-4">42+</p>
                        <p class="text-sm opacity-60">Students secured distinction in last academic year</p>
                     </div>
                     <div class="bg-white/10 p-8 rounded-3xl border border-white/20">
                        <h4 class="text-xl font-bold mb-2">Placement Success</h4>
                        <p class="text-5xl font-extrabold text-white mb-4">95%</p>
                        <p class="text-sm opacity-60">Graduates placed in reputed educational institutions</p>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <!-- News Feed (Static Mock) -->
    <section class="py-24 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Latest News & Announcements</h2>
            <div class="space-y-8">
                <div class="border-b border-gray-100 pb-8 flex gap-6">
                    <div class="text-center bg-gray-50 px-4 py-3 rounded-2xl shrink-0">
                        <span class="block text-2xl font-bold text-primary">20</span>
                        <span class="text-xs font-bold uppercase tracking-widest text-gray-400">May</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Applications invited for B.Ed. Admission 2026-27</h4>
                        <p class="text-gray-600 text-sm">Online and offline application forms are now available at the college office.</p>
                    </div>
                </div>
                <div class="border-b border-gray-100 pb-8 flex gap-6">
                    <div class="text-center bg-gray-50 px-4 py-3 rounded-2xl shrink-0">
                        <span class="block text-2xl font-bold text-primary">15</span>
                        <span class="text-xs font-bold uppercase tracking-widest text-gray-400">May</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Guest Lecture on "Digital Pedagogy"</h4>
                        <p class="text-gray-600 text-sm">Keynote by Dr. Ramesh, Educational Consultant, on modern teaching tools.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};
