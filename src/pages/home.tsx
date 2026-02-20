
import { ParentsTestimonialsCarousel } from '../components/testimonials'

export const HomePage = () => {
    return `
    <!-- Hero Section -->
    <section class="relative text-white py-24 lg:py-32 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/static/images/hero.png" alt="Dr. SNS College of Education Campus" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                        <i class="fas fa-award text-yellow-400 mr-2"></i>
                        <span class="text-sm font-semibold tracking-wide uppercase">Accredited with 'A' Grade by NAAC</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
                        Moulding<br/>
                        <span class="text-primary">Noble Teachers</span>
                    </h1>
                    
                    <div class="h-1 w-24 bg-primary mb-8 rounded-full"></div>

                    <p class="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                        Dr. SNS College of Education is dedicated to producing value-based educators with <strong class="text-white">High Thinking and Healthy Virtues</strong>.
                    </p>

                    <p class="text-sm lg:text-base mb-8 text-gray-200 leading-relaxed max-w-xl">
                        Affiliated with Tamil Nadu Teachers Education University (TNTEU) and recognized by NCTE, we provide excellence in B.Ed. education since 2005.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="/admissions" class="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                            Admission Enquiry
                            <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                        <a href="/about" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                            <i class="fas fa-info-circle mr-2 text-sm"></i>
                            Our Story
                        </a>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 text-xs text-gray-200">
                        <div class="inline-flex items-center">
                            <i class="fas fa-university text-primary-400 mr-2"></i>
                            TNTEU Affiliated
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-check-double text-primary-400 mr-2"></i>
                            NCTE Recognized
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-calendar-alt text-primary-400 mr-2"></i>
                            Established 2005
                        </div>
                    </div>
                </div>
                
                <div class="hidden lg:block relative">
                    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white/10 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white">A</div>
                                <div class="text-xs text-gray-200 mt-1 uppercase tracking-widest font-bold">NAAC Grade</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white">100%</div>
                                <div class="text-xs text-gray-200 mt-1 uppercase tracking-widest font-bold">Pass Rate</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white">12K+</div>
                                <div class="text-xs text-gray-200 mt-1 uppercase tracking-widest font-bold">Library Books</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white">ICT</div>
                                <div class="text-xs text-gray-200 mt-1 uppercase tracking-widest font-bold">Enabled Labs</div>
                            </div>
                        </div>
                        <div class="mt-6 text-center">
                            <p class="text-white font-bold text-sm tracking-widest uppercase mb-1">SNS CORE VALUE</p>
                            <div class="flex justify-center space-x-3 text-[10px] text-gray-300 uppercase tracking-tighter">
                                <span>Sincerity</span>
                                <span>•</span>
                                <span>Nobility</span>
                                <span>•</span>
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="py-12 bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap justify-around items-center gap-8 opacity-60">
                 <img src="/static/images/hero2.png" alt="TNTEU logo placeholder" class="h-12 w-auto grayscale">
                 <img src="/static/images/Facility_lab.jpg" alt="NAAC logo placeholder" class="h-12 w-auto grayscale">
                 <span class="text-2xl font-bold text-gray-400">NCTE Recognized</span>
                 <span class="text-2xl font-bold text-gray-400">ISO Certified</span>
            </div>
        </div>
    </section>

    <!-- Why Choose Dr. SNSCE -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">Professional Excellence in <span class="text-primary">Teacher Education</span></h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We provide a transformative learning environment that bridge the gap between academic theory and classroom practice.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition">
                        <i class="fas fa-graduation-cap text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Quality Academics</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Curriculum focused on modern pedagogy, child psychology, and educational technology, ensuring our students are ready for the evolving educational landscape.
                    </p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition">
                        <i class="fas fa-laptop-code text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">ICT Implementation</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Extensive exposure to smart classrooms, digital teaching aids, and ICT resources to make the student-teachers proficient in technology-based teaching.
                    </p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition">
                        <i class="fas fa-flask text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Practical Experience</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Structured internship programs in leading schools, micro-teaching sessions, and workshop-based learning to build real-world teaching proficiency.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Program Spotlight -->
    <section class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-16 items-center">
                 <div class="lg:w-1/2">
                    <img src="/static/images/SNS Academy Web/Colla Work.png" alt="Students in Classroom" class="rounded-3xl shadow-2xl">
                 </div>
                 <div class="lg:w-1/2">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Bachelor of Education <span class="text-primary">(B.Ed.)</span></h2>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Our flagship 2-year program is designed to create reflective practitioners who can critically engage with the educational challenges of the 21st century.
                    </p>
                    <div class="space-y-4 mb-10">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-check-circle text-primary"></i>
                            <span class="font-semibold text-gray-700">10 Pedagogy Subjects Offered</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-check-circle text-primary"></i>
                            <span class="font-semibold text-gray-700">NAAC Accredited Quality Standards</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-check-circle text-primary"></i>
                            <span class="font-semibold text-gray-700">Dedicated Placement Support</span>
                        </div>
                    </div>
                    <a href="/academics/bed" class="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-700 transition">View Program Details</a>
                 </div>
            </div>
        </div>
    </section>

    ${ParentsTestimonialsCarousel()}

    <!-- CTA Section -->
    <section class="py-24 bg-primary text-white relative overflow-hidden">
         <div class="absolute inset-0 opacity-10">
            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" stroke-width="0.5"/>
            </svg>
         </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Transform Your Passion for Teaching into a Profession</h2>
            <p class="text-xl opacity-90 mb-10">
                Admissions are open for the upcoming academic year. Limited seats available for B.Ed. degree program.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                    Apply Online
                </a>
                <a href="/contact" class="bg-primary-700 border border-primary-600 hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition">
                    Locate Us
                </a>
            </div>
        </div>
    </section>
    `;
};
