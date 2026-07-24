# Hospital Dashboard

A comprehensive hospital management dashboard built with HTML, CSS, and JavaScript.

## Features

- **Dashboard Overview**: Real-time statistics for patients, doctors, appointments, and revenue
- **Patient Management**: View, add, and manage patient records
- **Doctor Management**: View doctor profiles and specialties
- **Appointment Scheduling**: Track and manage appointments
- **Department Overview**: View department statistics and patient distribution
- **Pharmacy Inventory**: Monitor medicine stock and expiry dates
- **Settings**: Configure hospital information

## File Structure

```
Hospital-Dashboard/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript functionality and data
└── README.md       # Documentation
```

## How to Use

1. Open `index.html` in a web browser
2. Navigate through different sections using the sidebar menu
3. View statistics and data in the dashboard
4. Add new patients using the "Add Patient" button
5. Interact with charts and data tables

## Sections

### Dashboard
- Overview statistics cards
- Patient trend chart (line chart)
- Department distribution (doughnut chart)
- Recent patients table
- Upcoming appointments list

### Patients
- Complete patient list
- Add new patient modal
- Patient status tracking (Active, Discharged, Critical)

### Doctors
- Doctor profiles with specialties
- Patient count per doctor
- Department assignments

### Appointments
- Appointment scheduling
- Status tracking (Confirmed, Pending)
- Date and time management

### Departments
- Department statistics
- Doctor and patient counts
- Visual department cards

### Pharmacy
- Medicine inventory
- Stock level monitoring
- Expiry date tracking
- Status indicators (In Stock, Low Stock, Critical)

### Settings
- Hospital configuration
- Contact information management

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Dynamic functionality
- **Chart.js**: Data visualization
- **Font Awesome**: Icon library

## Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers (1024px+)
- Tablets (768px - 1024px)
- Mobile devices (< 768px)

## Customization

You can customize the dashboard by modifying:
- **Sample Data**: Edit the arrays in `script.js` (patients, doctors, appointments, etc.)
- **Colors**: Modify CSS variables in `styles.css`
- **Layout**: Adjust grid layouts and flex containers
- **Charts**: Configure Chart.js options in `script.js`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- This is a frontend-only dashboard with sample data
- For production use, integrate with a backend API
- All data is currently stored in JavaScript arrays
- Charts use Chart.js CDN for visualization
