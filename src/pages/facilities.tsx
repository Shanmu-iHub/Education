
import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'Campus Infrastructure',
        'State-of-the-art facilities designed to foster academic excellence and professional growth',
        '/static/images/hero5.png',
        'Facilities'
    )}

    <!-- Learning Resource Center -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Knowledge Hub</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Library & Information Center</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Our college library is a treasure house of knowledge, housing over 12,000 volumes of books, including a wide range of educational journals, encyclopedias, and reference materials.
                    </p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center text-gray-700">
                            <i class="fas fa-check-circle text-primary mr-3"></i> Extensive collection of Pedagogical books
                        </li>
                        <li class="flex items-center text-gray-700">
                            <i class="fas fa-check-circle text-primary mr-3"></i> Subscription to National & International Journals
                        </li>
                        <li class="flex items-center text-gray-700">
                            <i class="fas fa-check-circle text-primary mr-3"></i> Digital Library with E-Resource access (DELNET/N-LIST)
                        </li>
                    </ul>
                </div>
                <div class="rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/static/images/hero5.png" alt="SNSCE Library" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Specialized Laboratories -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-4">Specialized Learning Labs</h2>
                 <p class="text-xl text-gray-600">Hands-on training facilities for modern educators</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Psychology Lab -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                        <i class="fas fa-brain text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Psychology Laboratory</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Equipped with various psychological tests and apparatus to understand human behavior, intelligence, personality, and learning patters.
                    </p>
                </div>

                <!-- ICT Lab -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                        <i class="fas fa-laptop text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">ICT & Language Lab</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        State-of-the-art computer center with high-speed internet and language learning software to enhance digital literacy and communication skills.
                    </p>
                </div>

                <!-- Science Labs -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group">
                    <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                        <i class="fas fa-atom text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Physical & Bio Science Labs</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Well-equipped laboratories for Physical and Biological sciences to conduct practical experiments and demonstrate scientific concepts.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Campus Life & Shared Facilities -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">Campus Experience</h2>
            <div class="grid md:grid-cols-2 gap-12">
                <div class="flex gap-6">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <i class="fas fa-users text-primary"></i>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Multipurpose Hall</h4>
                        <p class="text-gray-600">A spacious, fully air-conditioned auditorium for seminars, cultural events, and workshops with 500+ seating capacity.</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <i class="fas fa-bus text-primary"></i>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Transport Facility</h4>
                        <p class="text-gray-600">Extensive fleet of buses covering all major parts of Coimbatore, Erode, and Tirupur districts for staff and students.</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <i class="fas fa-utensils text-primary"></i>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Cafeteria</h4>
                        <p class="text-gray-600">Hygienic canteen facilities providing nutritious multi-cuisine meals and refreshments in a modern setting.</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <i class="fas fa-running text-primary"></i>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Sports & Wellness</h4>
                        <p class="text-gray-600">Access to the world-class SNS SPINE activity center, playfields, and indoor sports facilities for holistic wellbeing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary text-white text-center">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-6">Explore our campus in virtual reality?</h2>
            <p class="text-xl opacity-90 mb-10">Experience the SNS infrastructure from the comfort of your home.</p>
            <a href="/contact" class="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition inline-block">Request a Tour</a>
        </div>
    </section>
    `;
};
