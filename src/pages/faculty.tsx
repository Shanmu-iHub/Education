
import { PageHeader } from '../components/page-header'

export const FacultyPage = () => {
    const facultyList = [
        { name: "Dr. P. Tamil Selvi", qualification: "M.Sc., M.A., M.Ed., M.Phil., Ph.D.", designation: "Principal", image: "/static/images/principalsnsce.png" },
        { name: "Mrs. G. Sasikala", qualification: "M.Sc., M.A., M.Ed., M.Phil., SET", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Sasikala.jpg" },
        { name: "Mrs. M. Kavitha", qualification: "M.A., M.Ed., M.Phil.", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Kavitha.jpg" },
        { name: "Mr. A. Balamurugan", qualification: "M.A., M.Ed., M.Phil.", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Balamurugan.jpg" },
        { name: "Mr. M. Mahendran", qualification: "M.Sc., M.Ed., M.Phil.", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Mahendran.jpg" },
        { name: "Mrs. K. Priya", qualification: "M.Sc., M.Ed., M.Phil.", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Priya.jpg" },
        { name: "Mr. R. Rajesh", qualification: "M.A., M.Ed., NET", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Rajesh.jpg" },
        { name: "Mrs. S. Suganya", qualification: "M.Sc., M.Ed.", designation: "Assistant Professor", image: "https://drsnsce.edu.in/wp-content/uploads/2021/11/Suganya.jpg" }
    ];

    return `
    ${PageHeader(
        'Faculty Profile',
        'Meet our dedicated team of experienced educators and researchers',
        '/static/images/hero2.png',
        'Staff Profile'
    )}

    <!-- Principal Message -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-primary-50 rounded-3xl p-10 lg:p-16 border border-primary-100 flex flex-col md:flex-row gap-12 items-center">
                <div class="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden shrink-0 shadow-lg border-4 border-white">
                    <img src="${facultyList[0].image}" alt="Principal SNSCE" class="w-full h-full object-cover">
                </div>
                <div>
                     <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Principal's Message</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Moulding Future Educators</h2>
                    <blockquote class="text-xl text-gray-600 italic leading-relaxed mb-8">
                        "Education is the most powerful weapon which you can use to change the world. At Dr. SNS College of Education, we are committed to shaping noble teachers who will inspire generations."
                    </blockquote>
                    <h4 class="font-bold text-lg text-gray-900">${facultyList[0].name}</h4>
                    <p class="text-primary">${facultyList[0].qualification}</p>
                    <p class="text-gray-500 text-sm">Principal, Dr. SNS College of Education</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Faculty Grid -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Teaching Faculty</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Experienced professors dedicated to academic and professional development.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${facultyList.slice(1).map(faculty => `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
                        <div class="h-64 bg-gray-100 relative overflow-hidden">
                            <img src="${faculty.image}" alt="${faculty.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        </div>
                        <div class="p-6 text-center">
                            <h4 class="font-bold text-lg text-gray-900">${faculty.name}</h4>
                            <p class="text-primary font-medium text-sm mb-1">${faculty.designation}</p>
                            <p class="text-gray-500 text-xs">${faculty.qualification}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Support Staff -->
    <section class="py-24 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-10">Supporting Educators & Staff</h3>
            <div class="flex flex-wrap justify-center gap-4">
                ${['Librarian', 'Physical Director', 'Art & Craft Instructor', 'Psychologist', 'Office Manager', 'Technical Assistant'].map(role => `
                    <span class="bg-gray-100 px-6 py-2 rounded-full text-gray-700 font-medium">${role}</span>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};
