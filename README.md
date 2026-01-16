# Sakhile Siyabonga Ntombela - Portfolio

A sophisticated, AI-powered personal portfolio website built with modern web technologies. Features scroll-based animations, a custom AI chatbot, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark theme
- **Scroll Animations**: Smooth animations triggered by scroll position using Framer Motion

- **Responsive Layout**: Optimized for all device sizes
- **Interactive Navigation**: Floating side navigation with active section tracking
- **Contact Form**: Functional contact form with email integration via Resend
- **Project Showcase**: Detailed project cards with links and technologies
- **Certificate Display**: Professional certificate showcase
- **Skills Matrix**: Organized skill categories with visual indicators

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: ShadCN UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Email Service**: Resend
- **Hosting**: Firebase App Hosting

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Resend API key (for contact form)

## 🏃‍♂️ Running Locally

### 1. Download and Setup

1. Download the project and unzip it
2. Open the folder in your preferred code editor
3. Install dependencies:

```bash
npm install
```

### 2. Environment Configuration

1. Copy the environment template:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your API keys:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Add Assets

Add the following files to the `public` directory:

- `sakhile.png` - Profile picture
- `Sakhile_Ntombela_Resume.pdf` - Resume document
- `Sakhile_qualification.pdf` - Qualification document
- Project images: `project-plant.jpg`, `project-sentiment.jpg`, `project-resume.jpg`
- Certificate images: `cert-ml.jpg`, `cert-ai-essentials.jpg`, `cert-genai.jpg`

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deploying to Firebase App Hosting

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Use a custom project ID like `sakhile-ntombela` for a personalized URL
4. Complete the project setup

### 2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 3. Login to Firebase

```bash
firebase login
```

### 4. Initialize App Hosting

```bash
firebase init apphosting
```

- Select your Firebase project
- Choose your GitHub repository (if applicable)
- Configure build settings (Next.js should be detected automatically)

### 5. Update Configuration

Update `.firebaserc` with your project ID:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

Update `firebase.json`:

```json
{
  "apphosting": {
    "source": {
      "projectId": "your-firebase-project-id",
      "location": "us-central1"
    }
  }
}
```

### 6. Deploy

```bash
firebase deploy --only apphosting
```

Your portfolio will be available at: `https://your-project-id.web.app`

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/route.ts       # Contact form API
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main page
├── components/
│   ├── ui/                        # ShadCN UI components
│   ├── sections/                  # Page sections
│   ├── AnimatedSection.tsx        # Scroll animation wrapper
│   └── FloatingNav.tsx           # Navigation component
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
└── README.md
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in each section component
2. **Projects**: Update the projects array in `ProjectsSection.tsx`
3. **Skills**: Modify the skill categories in `SkillsSection.tsx`
4. **Certificates**: Update the certificates array in `CertificatesSection.tsx`

### Styling

- Colors and themes are configured in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes



## 🔧 API Keys Setup

### Resend API Key

1. Sign up at [Resend](https://resend.com/)
2. Create an API key
3. Add it to your `.env.local` file



## 📱 Features Overview

### Sections

1. **Hero**: Animated greeting with cycling languages
2. **About**: Personal introduction with stats
3. **Projects**: Showcase of key projects with links
4. **Certificates**: Professional certifications display
5. **Skills**: Organized technical skills by category
6. **Documents**: Downloadable documents (resume, qualifications)
7. **Contact**: Functional contact form with validation

### Interactive Elements

- **Floating Navigation**: Tracks scroll position and highlights active section
- **Scroll Animations**: Sections animate into view as user scrolls
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Update the content with your own information
3. Replace images and documents
4. Deploy to your own Firebase project

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.

## 📞 Support

If you encounter any issues or have questions about the setup process, please check the documentation for each service:

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
- [Resend Documentation](https://resend.com/docs)

---

Built with ❤️ by Sakhile Siyabonga Ntombela