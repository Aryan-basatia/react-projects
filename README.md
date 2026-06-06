# 📚 React Projects

A collection of React applications showcasing modern web development practices with React 19, Vite, and responsive design patterns.

## 🎯 What's Inside

This repository contains practical React projects built with the latest tools and best practices. Currently featuring:

### **Student Directory** - A Class Roster Management App

A sleek React application for managing a student list with real-time search, filtering, and enrollment toggling capabilities.

## ✨ Features

### Student Directory
- 🔍 **Real-time Search** - Search students by name with instant results
- 🏷️ **Smart Filtering** - Toggle between "Show All", "Enrolled", and "Dropped" students
- ✅ **Enrollment Toggle** - Click to update a student's enrollment status
- 📊 **Live Statistics** - See the current number of enrolled students
- 📱 **Responsive Design** - Beautiful card-based UI that works on all devices
- 🎨 **Modern Styling** - Clean interface with smooth transitions and hover effects

## 🛠 Tech Stack

- **React** 19.2.6 - UI library for building interactive components
- **Vite** 8.0.12 - Lightning-fast build tool and development server
- **CSS3** - Custom styling with flexbox and CSS Grid
- **JavaScript (ES6+)** - Modern JavaScript with hooks and arrow functions
- **ESLint** - Code quality and style consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aryan-basatia/react-projects.git
   cd react-projects
   ```

2. **Navigate to the Student Directory project**
   ```bash
   cd student-directory
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🎮 Usage

### Development Server
Start the development server with hot module replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Build
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Test the production build locally:
```bash
npm run preview
```

### Code Quality
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
student-directory/
├── src/
│   ├── App.jsx                 # Main app component with filtering logic
│   ├── component/
│   │   └── StudentCard.jsx     # Reusable student card component
│   ├── index.css               # Global styling
│   └── main.jsx                # React entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 🧑‍💻 How It Works

### Student Data
The application includes 10 sample students with the following information:
- **ID** - Unique identifier
- **Name** - Student's full name
- **Course** - Enrolled course (Mathematics, Computer Science, Physics, Chemistry)
- **Grade** - Current grade (A, B, C, or F)
- **Enrollment Status** - Enrolled or Dropped

### Key Components

**App.jsx** - Handles:
- Student state management with React hooks
- Real-time search filtering
- Status-based filtering (All, Enrolled, Dropped)
- Enrollment toggle logic
- Live statistics calculation

**StudentCard.jsx** - Displays:
- Student name and course
- Current grade
- Enrollment status badge (green/red)
- Toggle button to change enrollment status

**index.css** - Features:
- Modern card-based design
- Responsive grid layout
- Smooth transitions and hover effects
- Mobile-first approach
- Accessible color contrast

## 🎨 Styling Highlights

- **Primary Color**: Blue (#2563eb)
- **Card Design**: Clean white cards with subtle shadows
- **Responsive Grid**: Auto-fit columns that adapt to screen size
- **Status Badges**: Green for enrolled, red for dropped
- **Mobile Support**: Single-column layout on screens under 640px

## 💡 Future Enhancements

Consider adding:
- ✏️ Edit student information
- 🔀 Sort by name, grade, or status
- 💾 Local storage persistence
- 📤 Export student data to CSV
- 🔐 Student authentication and login
- 🎓 Grade distribution analytics
- 📝 Add/remove students dynamically

## 📝 Notes

- Student data is currently hardcoded in `src/App.jsx`
- The project uses React's `useState` hook for state management
- Styling is done with plain CSS (no CSS frameworks)
- ESLint is configured for code consistency

## 📄 License

This project is open source and available under the **MIT License**. Feel free to use it for learning, personal projects, or as a reference.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📧 Questions or Feedback?

Feel free to open an issue or reach out through GitHub. Happy coding! 🚀
