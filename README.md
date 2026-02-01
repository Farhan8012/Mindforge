# MindForge - Adaptive AI Learning Companion

An EdTech platform for Indian students preparing for JEE, NEET, and Board exams with AI-powered personalized tutoring from legendary minds.

![MindForge](https://img.shields.io/badge/MindForge-AI%20Learning-8b5cf6)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- **🧠 Legendary AI Tutors** - Learn from Einstein, Ramanujan, Kalam, Curie, Darwin, and Feynman
- **📚 Comprehensive Syllabus** - NCERT, JEE Main, JEE Advanced, NEET chapter coverage
- **🗺️ Dynamic Mind Maps** - Visualize concepts with React Flow
- **🎯 Adaptive Learning** - AI adapts to your level and learning style
- **🔊 Voice Support** - Text-to-speech with Web Speech API
- **🌐 Multilingual** - English, Hindi, Telugu support
- **📱 Responsive Design** - Works on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Google Gemini API key ([Get one free](https://aistudio.google.com/app/apikey))

### Installation

```bash
# Clone or navigate to the project
cd mindforge

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your Gemini API key to .env
# VITE_GEMINI_API_KEY=your_key_here

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_ELEVENLABS_API_KEY=optional_for_premium_voice
```

## 📱 Usage

1. **Landing Page** - Click "Start Learning Free"
2. **Select Level** - Choose Class 11/12, JEE, or NEET
3. **Pick Chapters** - Select subject and chapters to study
4. **Set Preferences** - Choose learning style and language
5. **Choose Tutor** - Select a legendary mind or create custom
6. **Start Learning** - Chat with your AI tutor, view mind maps

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Routing**: React Router v6
- **State**: React Context
- **Animations**: Framer Motion
- **Mind Maps**: React Flow (@xyflow/react)
- **AI**: Google Gemini 2.0 Flash
- **Voice**: Web Speech API

## 📁 Project Structure

```
mindforge/
├── src/
│   ├── components/
│   │   ├── landing/      # Landing page components
│   │   ├── onboarding/   # Onboarding flow
│   │   └── session/      # Learning session
│   ├── context/          # React Context
│   ├── data/             # Syllabus data
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Design

- Dark purple/blue theme
- Glassmorphism effects
- Glowing accents (cyan & purple)
- Spacious, modern layouts
- Animated backgrounds

## 📦 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for educational purposes!

---

Built with ❤️ for Indian students | Powered by Google Gemini
