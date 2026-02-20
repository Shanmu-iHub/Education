
import { PageHeader } from '../components/page-header'

// Transport Page
export const TransportPage = () => {
    return `
    ${PageHeader(
        'Transport Services',
        'Extensive bus network ensuring safe and timely commute for staff and student-teachers',
        '/static/images/SNS_BUS.jpg',
        'Transport'
    )}

    <!-- Key Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">Unmatched Connectivity</h2>
                <p class="text-xl text-gray-600">A fleet of 50+ modern buses serving Dr. SNS College of Education and SNS Group of Institutions</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 group hover:bg-primary transition duration-500 shadow-sm">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition">
                        <i class="fas fa-bus text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-white transition">Extensive Fleet</h3>
                    <p class="text-gray-600 group-hover:text-white/80 transition">Covering a radius of 60+ km including major towns and rural areas.</p>
                </div>
                
                <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 group hover:bg-primary transition duration-500 shadow-sm">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition">
                        <i class="fas fa-shield-alt text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-white transition">Safety First</h3>
                    <p class="text-gray-600 group-hover:text-white/80 transition">GPS tracked vehicles with speed governors and experienced drivers.</p>
                </div>
                
                <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 group hover:bg-primary transition duration-500 shadow-sm">
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition">
                        <i class="fas fa-map-marked-alt text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-white transition">Smart Tracking</h3>
                    <p class="text-gray-600 group-hover:text-white/80 transition">Real-time alerts and location updates for peace of mind.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Coverage Map -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-8">Service Coverage Areas</h2>
                        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our transport network connects Dr. SNS College of Education with every corner of Western Tamil Nadu. We operate routes through:
                        </p>
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-3 h-3 bg-primary rounded-full"></div>
                                <span class="text-xl font-bold text-gray-800">Coimbatore District</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-3 h-3 bg-primary rounded-full"></div>
                                <span class="text-xl font-bold text-gray-800">Tirupur District</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-3 h-3 bg-primary rounded-full"></div>
                                <span class="text-xl font-bold text-gray-800">Erode District</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-primary-50 rounded-3xl p-8">
                         <h4 class="font-bold text-lg mb-6 text-primary">Key Pick-up Points</h4>
                         <div class="grid grid-cols-2 gap-x-8 gap-y-3">
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Gandhipuram</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Peelamedu</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Avinashi</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Palladam</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Annur</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Mettupalayam</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Pollachi</div>
                            <div class="flex items-center text-sm text-gray-600"><i class="fas fa-dot-circle mr-2 text-primary opacity-30"></i> Sulur</div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Guidelines -->
    <section class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Transport Guidelines</h2>
            <div class="grid md:grid-cols-2 gap-12">
                <div class="p-8 bg-gray-50 rounded-3xl">
                    <h4 class="font-bold text-xl mb-4">Boarding Rules</h4>
                    <ul class="space-y-3 text-sm text-gray-600">
                        <li>• Students must be at pick-up points 5 minutes before scheduled time.</li>
                        <li>• Staff and students must carry their Transport ID at all times.</li>
                        <li>• Disciplined behavior is expected inside the bus.</li>
                        <li>• Use of official pick-up points only.</li>
                    </ul>
                </div>
                 <div class="p-8 bg-gray-50 rounded-3xl">
                    <h4 class="font-bold text-xl mb-4">Admission & Fee</h4>
                    <ul class="space-y-3 text-sm text-gray-600">
                        <li>• Transport facility is optional and subject to availability.</li>
                        <li>• Annual transport fee is payable at the start of the academic year.</li>
                        <li>• Transport ID will be issued after fee clearance.</li>
                        <li>• Fees once paid are non-refundable.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Transport Contact -->
    <section class="py-20 bg-primary text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Inquiry?</h2>
            <p class="text-xl opacity-80 mb-10">Check route availability for your area today.</p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919629937861" class="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl inline-block">Call: +91 96299 37861</a>
                 <a href="/contact" class="bg-primary-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-600 transition shadow-xl inline-block">Contact Office</a>
            </div>
        </div>
    </section>
    `;
};
