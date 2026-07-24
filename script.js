// Sample Data
const patients = [
    { id: 'P001', name: 'John Smith', age: 45, gender: 'Male', condition: 'Diabetes', status: 'Active' },
    { id: 'P002', name: 'Emily Johnson', age: 32, gender: 'Female', condition: 'Hypertension', status: 'Active' },
    { id: 'P003', name: 'Michael Brown', age: 58, gender: 'Male', condition: 'Heart Disease', status: 'Critical' },
    { id: 'P004', name: 'Sarah Davis', age: 28, gender: 'Female', condition: 'Fracture', status: 'Discharged' },
    { id: 'P005', name: 'Robert Wilson', age: 67, gender: 'Male', condition: 'Arthritis', status: 'Active' },
    { id: 'P006', name: 'Lisa Anderson', age: 41, gender: 'Female', condition: 'Migraine', status: 'Active' },
    { id: 'P007', name: 'David Taylor', age: 55, gender: 'Male', condition: 'COPD', status: 'Critical' },
    { id: 'P008', name: 'Jennifer Martinez', age: 38, gender: 'Female', condition: 'Asthma', status: 'Active' }
];

const doctors = [
    { id: 'D001', name: 'Dr. Amanda White', specialty: 'Cardiology', patients: 45, photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face' },
    { id: 'D002', name: 'Dr. James Thompson', specialty: 'Neurology', patients: 32, photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face' },
    { id: 'D003', name: 'Dr. Elizabeth Garcia', specialty: 'Orthopedics', patients: 28, photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face' },
    { id: 'D004', name: 'Dr. William Martinez', specialty: 'Pediatrics', patients: 55, photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face' },
    { id: 'D005', name: 'Dr. Sophia Chen', specialty: 'Dermatology', patients: 22, photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=150&h=150&fit=crop&crop=face' },
    { id: 'D006', name: 'Dr. Christopher Lee', specialty: 'Oncology', patients: 18, photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop&crop=face' }
];

const appointments = [
    { id: 'A001', patient: 'John Smith', doctor: 'Dr. Amanda White', date: '2024-07-25', time: '09:00 AM', status: 'Confirmed' },
    { id: 'A002', patient: 'Emily Johnson', doctor: 'Dr. James Thompson', date: '2024-07-25', time: '10:30 AM', status: 'Pending' },
    { id: 'A003', patient: 'Michael Brown', doctor: 'Dr. Elizabeth Garcia', date: '2024-07-25', time: '11:00 AM', status: 'Confirmed' },
    { id: 'A004', patient: 'Sarah Davis', doctor: 'Dr. William Martinez', date: '2024-07-26', time: '02:00 PM', status: 'Pending' },
    { id: 'A005', patient: 'Robert Wilson', doctor: 'Dr. Sophia Chen', date: '2024-07-26', time: '03:30 PM', status: 'Confirmed' }
];

const departments = [
    { name: 'Cardiology', icon: 'fa-heartbeat', doctors: 8, patients: 120 },
    { name: 'Neurology', icon: 'fa-brain', doctors: 6, patients: 85 },
    { name: 'Orthopedics', icon: 'fa-bone', doctors: 7, patients: 95 },
    { name: 'Pediatrics', icon: 'fa-baby', doctors: 10, patients: 150 },
    { name: 'Dermatology', icon: 'fa-hand-sparkles', doctors: 5, patients: 70 },
    { name: 'Oncology', icon: 'fa-ribbon', doctors: 4, patients: 45 }
];

const pharmacy = [
    { medicine: 'Paracetamol', stock: 500, price: '$5.99', expiry: '2025-12-01', status: 'In Stock' },
    { medicine: 'Amoxicillin', stock: 200, price: '$12.50', expiry: '2025-06-15', status: 'In Stock' },
    { medicine: 'Ibuprofen', stock: 350, price: '$8.99', expiry: '2025-08-20', status: 'In Stock' },
    { medicine: 'Omeprazole', stock: 150, price: '$15.00', expiry: '2025-04-10', status: 'Low Stock' },
    { medicine: 'Metformin', stock: 20, price: '$18.50', expiry: '2025-03-25', status: 'Critical' }
];

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    renderRecentPatients();
    renderAllPatients();
    renderDoctors();
    renderAppointments();
    renderAllAppointments();
    renderDepartments();
    renderPharmacy();
    initCharts();
    initNavigation();
    initForms();
});

// Update Current Date
function updateDate() {
    const dateElement = document.getElementById('currentDate');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    dateElement.textContent = today;
}

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');

            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// Render Recent Patients
function renderRecentPatients() {
    const tableBody = document.getElementById('recentPatientsTable');
    const recentPatients = patients.slice(0, 5);

    tableBody.innerHTML = recentPatients.map(patient => `
        <tr>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 35px; height: 35px; background: #e8f4fd; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #3498db; font-size: 14px;">
                        ${patient.name.charAt(0)}
                    </div>
                    <span>${patient.name}</span>
                </div>
            </td>
            <td>${patient.condition}</td>
            <td><span class="status ${patient.status.toLowerCase()}">${patient.status}</span></td>
        </tr>
    `).join('');
}

// Render All Patients
function renderAllPatients() {
    const tableBody = document.getElementById('allPatientsTable');

    tableBody.innerHTML = patients.map(patient => `
        <tr>
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.condition}</td>
            <td><span class="status ${patient.status.toLowerCase()}">${patient.status}</span></td>
            <td>
                <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Render Doctors
function renderDoctors() {
    const doctorsGrid = document.getElementById('doctorsGrid');

    doctorsGrid.innerHTML = doctors.map(doctor => `
        <div class="doctor-card">
            <img src="${doctor.photo}" alt="${doctor.name}">
            <h4>${doctor.name}</h4>
            <p>${doctor.specialty}</p>
            <span class="specialty">${doctor.patients} Patients</span>
        </div>
    `).join('');
}

// Render Appointments
function renderAppointments() {
    const appointmentList = document.getElementById('appointmentList');
    const upcomingAppointments = appointments.slice(0, 4);

    appointmentList.innerHTML = upcomingAppointments.map(apt => `
        <div class="appointment-item">
            <div class="appointment-icon">
                <i class="fas fa-calendar-check"></i>
            </div>
            <div class="appointment-info">
                <h4>${apt.patient}</h4>
                <p>${apt.doctor}</p>
            </div>
            <div class="appointment-time">
                <span>${apt.time}</span>
                <small>${apt.date}</small>
            </div>
        </div>
    `).join('');
}

// Render All Appointments
function renderAllAppointments() {
    const tableBody = document.getElementById('allAppointmentsTable');

    tableBody.innerHTML = appointments.map(apt => `
        <tr>
            <td>${apt.id}</td>
            <td>${apt.patient}</td>
            <td>${apt.doctor}</td>
            <td>${apt.date}</td>
            <td>${apt.time}</td>
            <td><span class="status ${apt.status.toLowerCase()}">${apt.status}</span></td>
            <td>
                <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Render Departments
function renderDepartments() {
    const departmentsGrid = document.getElementById('departmentsGrid');

    departmentsGrid.innerHTML = departments.map(dept => `
        <div class="department-card">
            <i class="fas ${dept.icon}"></i>
            <h4>${dept.name}</h4>
            <p>Specialized care department</p>
            <div class="stats">
                <div class="stat">
                    <span>${dept.doctors}</span>
                    <small>Doctors</small>
                </div>
                <div class="stat">
                    <span>${dept.patients}</span>
                    <small>Patients</small>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Pharmacy
function renderPharmacy() {
    const tableBody = document.getElementById('pharmacyTable');

    tableBody.innerHTML = pharmacy.map(item => `
        <tr>
            <td>${item.medicine}</td>
            <td>${item.stock}</td>
            <td>${item.price}</td>
            <td>${item.expiry}</td>
            <td><span class="status ${item.status === 'In Stock' ? 'active' : item.status === 'Low Stock' ? 'critical' : 'cancelled'}">${item.status}</span></td>
        </tr>
    `).join('');
}

// Initialize Charts
function initCharts() {
    // Patient Overview Chart
    const patientCtx = document.getElementById('patientChart').getContext('2d');
    new Chart(patientCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'New Patients',
                data: [12, 19, 15, 25, 22, 18, 20],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Discharged',
                data: [8, 12, 10, 15, 14, 11, 13],
                borderColor: '#764ba2',
                backgroundColor: 'rgba(118, 75, 162, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Department Statistics Chart
    const deptCtx = document.getElementById('departmentChart').getContext('2d');
    new Chart(deptCtx, {
        type: 'doughnut',
        data: {
            labels: departments.map(d => d.name),
            datasets: [{
                data: departments.map(d => d.patients),
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f39c12',
                    '#27ae60',
                    '#3498db',
                    '#e74c3c'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });
}

// Modal Functions
function openModal(modalName) {
    const modal = document.getElementById(`${modalName}Modal`);
    modal.classList.add('active');
}

function closeModal(modalName) {
    const modal = document.getElementById(`${modalName}Modal`);
    modal.classList.remove('active');
}

// Initialize Forms
function initForms() {
    const addPatientForm = document.getElementById('addPatientForm');
    
    addPatientForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const newPatient = {
            id: `P${String(patients.length + 1).padStart(3, '0')}`,
            name: formData.get('name'),
            age: formData.get('age'),
            gender: formData.get('gender'),
            condition: formData.get('condition'),
            status: formData.get('status')
        };

        patients.push(newPatient);
        renderAllPatients();
        renderRecentPatients();
        
        // Update total patients count
        document.getElementById('totalPatients').textContent = patients.length.toLocaleString();
        
        closeModal('addPatient');
        this.reset();
        
        // Show success message
        alert('Patient added successfully!');
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Animate stats on load
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = stat.textContent.includes('$') ? 
                    '$' + target.toLocaleString() : 
                    target.toLocaleString();
                clearInterval(timer);
            } else {
                stat.textContent = stat.textContent.includes('$') ? 
                    '$' + Math.floor(current).toLocaleString() : 
                    Math.floor(current).toLocaleString();
            }
        }, 30);
    });
}

// Call animation on load
animateStats();
