
import { PageHeader } from '../components/page-header'
import { ParentsTestimonialsCarousel } from '../components/testimonials'

export const SuccessStoriesPage = () => {
    return `
    ${PageHeader(
        'Success Stories',
        'Celebrating the professional breakthroughs and inspiring journeys of our student-teachers',
        '/static/images/SNS Academy Web/Success.webp',
        'Success Stories'
    )}

    <!-- Featured Story -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl overflow-hidden shadow-2xl">
                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="h-96 lg:h-auto relative overflow-hidden">
                        <img src="/static/images/hero2.png" alt="University Rank Holder" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-medal mr-2 text-yellow-400"></i>
                                <span class="text-sm font-semibold tracking-widest uppercase">TNTEU University Rank</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-8 lg:p-12 flex flex-col justify-center">
                        <div class="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                            <i class="fas fa-star mr-2"></i>
                            Featured Achievement
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Academic Brilliance in B.Ed.</h2>
                        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                            Our students consistently secure top ranks in the Tamil Nadu Teachers Education University (TNTEU) examinations. This year, we are proud to announce multiple university rank holders who have demonstrated exceptional pedagogical knowledge.
                        </p>
                        <div class="flex items-center text-sm text-gray-600 mb-6">
                            <span class="font-semibold mr-4">Dr. SNSCE</span>
                            <span class="mr-4">•</span>
                            <span>University Rank</span>
                            <span class="mr-4 ml-4">•</span>
                            <span>2024</span>
                        </div>
                        <a href="/contact" class="inline-flex items-center text-primary hover:text-primary-700 font-bold">
                            View Full List <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Success Stats -->
    <section class="py-16 bg-gray-50 border-y">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div class="text-4xl font-extrabold text-primary mb-2">100%</div>
                    <div class="text-xs font-bold text-gray-500 uppercase tracking-widest">Pass Rate</div>
                 </div>
                 <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div class="text-4xl font-extrabold text-primary mb-2">95%</div>
                    <div class="text-xs font-bold text-gray-500 uppercase tracking-widest">Placement</div>
                 </div>
                 <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div class="text-4xl font-extrabold text-primary mb-2">15+</div>
                    <div class="text-xs font-bold text-gray-500 uppercase tracking-widest">University Ranks</div>
                 </div>
                 <div class="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div class="text-4xl font-extrabold text-primary mb-2">500+</div>
                    <div class="text-xs font-bold text-gray-500 uppercase tracking-widest">Alumni Network</div>
                 </div>
            </div>
        </div>
    </section>

    <!-- Professional Journeys -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-4">Voices of Professional Pride</h2>
                 <p class="text-xl text-gray-600">Hear from our alumni who have successfully transitioned from student-teachers to classroom leaders.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                 <!-- Story 1 -->
                 <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group hover:bg-primary transition duration-500">
                    <div class="absolute top-8 right-8 text-primary group-hover:text-white/30 transition">
                         <i class="fas fa-quote-right text-4xl opacity-10"></i>
                    </div>
                    <p class="text-gray-600 mb-8 italic relative z-10 group-hover:text-white transition group-hover:opacity-90">
                        "The emphasis on ICT and innovative pedagogy at Dr. SNSCE gave me the confidence to handle digital classrooms effortlessly. Today, I am leading the technology integration at a reputed school."
                    </p>
                    <div class="flex items-center">
                         <div class="w-12 h-12 bg-primary-100 rounded-full mr-4 group-hover:bg-white/20 transition"></div>
                         <div>
                            <h4 class="font-bold text-gray-900 group-hover:text-white transition">Saranya Mohan</h4>
                            <p class="text-xs text-primary group-hover:text-white/70 transition">Alumni - Batch 2021</p>
                         </div>
                    </div>
                 </div>

                 <!-- Story 2 -->
                 <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group hover:bg-primary transition duration-500">
                    <div class="absolute top-8 right-8 text-primary group-hover:text-white/30 transition">
                         <i class="fas fa-quote-right text-4xl opacity-10"></i>
                    </div>
                    <p class="text-gray-600 mb-8 italic relative z-10 group-hover:text-white transition group-hover:opacity-90">
                        "The micro-teaching sessions and peer-group activities helped me refine my teaching skills. The faculty support was exceptional in preparing me for the university exams."
                    </p>
                    <div class="flex items-center">
                         <div class="w-12 h-12 bg-primary-100 rounded-full mr-4 group-hover:bg-white/20 transition"></div>
                         <div>
                            <h4 class="font-bold text-gray-900 group-hover:text-white transition">Vivek Anand</h4>
                            <p class="text-xs text-primary group-hover:text-white/70 transition">Alumni - Batch 2022</p>
                         </div>
                    </div>
                 </div>

                 <!-- Story 3 -->
                 <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group hover:bg-primary transition duration-500">
                    <div class="absolute top-8 right-8 text-primary group-hover:text-white/30 transition">
                         <i class="fas fa-quote-right text-4xl opacity-10"></i>
                    </div>
                    <p class="text-gray-600 mb-8 italic relative z-10 group-hover:text-white transition group-hover:opacity-90">
                        "Placement cell assisted me throughout the recruitment process. I am now working at a top-tier international school, thanks to the training I received at Dr. SNS College of Education."
                    </p>
                    <div class="flex items-center">
                         <div class="w-12 h-12 bg-primary-100 rounded-full mr-4 group-hover:bg-white/20 transition"></div>
                         <div>
                            <h4 class="font-bold text-gray-900 group-hover:text-white transition">Priyanka R.</h4>
                            <p class="text-xs text-primary group-hover:text-white/70 transition">Alumni - Batch 2023</p>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>

    ${ParentsTestimonialsCarousel()}

    <!-- CTA Section -->
    <section class="py-24 bg-white text-center">
        <div class="max-w-2xl mx-auto px-4">
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Own Path?</h3>
            <p class="text-gray-600 mb-10">Join our alumni network and make a difference in the world of education.</p>
             <a href="/admissions" class="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-primary-500/20 transition inline-block">Join B.Ed. Program</a>
        </div>
    </section>
    `;
};
