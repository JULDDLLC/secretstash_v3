# 🔐 SecretStash - Developer Secrets Vault

**A beautiful, secure, and privacy-first web application for managing your sensitive developer data like API keys, passwords, certificates, and more.**

![SecretStash Banner](https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

---

## 🌟 What is SecretStash?

SecretStash is a modern Next.js web application designed specifically for developers who need a secure and organized way to store sensitive information. Whether you're managing API keys, database passwords, SSL certificates, or authentication tokens, SecretStash provides a beautiful and intuitive interface to keep everything organized and easily accessible.

**🔒 Privacy First**: All your data stays in your browser's local storage - no servers, no tracking, complete privacy guaranteed.

---

## ✨ Key Features

- **🔒 100% Local Storage** - Your secrets remain exclusively in your browser
- **🎨 Beautiful Dark/Light Theme** - Sleek cosmic design with smooth transitions
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🔍 Smart Search & Filter** - Find your secrets instantly
- **📂 Organized Categories** - API Keys, Passwords, Domains, Databases, Certificates, Tokens
- **📄 Export to PDF** - Generate professional reports of your secrets
- **👁️ Show/Hide Values** - Toggle visibility for sensitive data
- **📋 One-Click Copy** - Copy secrets to clipboard with visual feedback
- **🏷️ Tag System** - Organize secrets with custom tags
- **⚡ Lightning Fast** - Instant loading and smooth performance
- **🎭 Custom Cursor** - Cosmic-themed cursor with glow effects
- **✨ Animations** - Smooth Framer Motion animations throughout
- **🌌 Cosmic Background** - Beautiful floating particles and gradient effects
- **💰 Finance Matrix** - Track income streams, expenses, and accounts
- **💻 Code Snippets** - Store and organize code snippets and AI prompts

---

## 🚀 Quick Start Guide (For Beginners)

### Step 1: Prerequisites

Before you begin, make sure you have **Node.js** installed on your computer:

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (recommended for most users)
3. Install it by following the installer instructions
4. Open your terminal/command prompt and verify installation:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

### Step 2: Get the Code

1. **Download or clone this project** to your computer
2. **Open your terminal/command prompt**
3. **Navigate to the project folder**:
   ```bash
   cd path/to/secretstash
   ```

### Step 3: Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

This will download all the necessary files (may take a few minutes).

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- ready in 2.3s
```

### Step 5: Open in Your Browser

1. Open your web browser
2. Go to: `http://localhost:3000`
3. You should see the SecretStash homepage!

### Step 6: Start Using SecretStash

1. **Navigate to the Dashboard** by clicking "Try Free Demo" or "Vault" in the navigation
2. **Explore the sample data** - The app comes with demo secrets to show you how it works
3. **Add your first secret** by clicking the "Add Secret" button
4. **Try different features** like search, filtering, and PDF export

---

## 📖 How to Use SecretStash

### Main Navigation

- **🏠 Home**: Beautiful landing page with feature overview
- **🔒 Vault**: Main secrets management interface (Dashboard)
- **💰 Finance**: Personal finance tracking with income/expense management
- **💻 Snippets**: Code snippets and AI prompts storage
- **💲 Pricing**: Subscription plans and features
- **📄 Terms**: Terms and conditions

### Managing Your Secrets

#### Adding a New Secret

1. Go to the **Dashboard** (Vault)
2. Click the **"Add Secret"** button
3. Fill out the form:
   - **Secret Name**: Give it a descriptive name (e.g., "Stripe API Key")
   - **Category**: Choose from 6 categories (API Keys, Passwords, etc.)
   - **Secret Value**: Paste your actual secret/password
   - **Description**: Optional context about what this is for
   - **Tags**: Add comma-separated tags for organization (e.g., "production, stripe, payments")
4. Click **"Add Secret"** to save

#### Viewing and Managing Secrets

- **👁️ View Secret**: Click the eye icon to show/hide secret values
- **📋 Copy Secret**: Click the copy icon to copy to clipboard
- **✏️ Edit Secret**: Click the edit icon to modify
- **🗑️ Delete Secret**: Click the trash icon to remove

#### Search and Filter

- **Search Bar**: Type to find secrets by name, description, or tags
- **Category Filter**: Use dropdown to filter by specific categories
- **Real-time Results**: Results update as you type

#### Export to PDF

Click the **"Export PDF"** button to download a professional report of your secrets. Values are truncated for security.

### Using the Finance Matrix

1. **Navigate to Finance** from the main menu
2. **Add Income Streams**: Track your salary, freelance work, investments
3. **Add Expense Flows**: Monitor subscriptions, bills, and recurring costs
4. **Add Accounts**: Keep track of bank accounts, credit cards, investments
5. **View Summary**: See your financial overview and net worth
6. **Export Data**: Download CSV reports of your financial data

### Managing Code Snippets

1. **Go to Snippets** from the navigation
2. **Add Snippet**: Store code snippets, templates, or AI prompts
3. **Organize by Language**: JavaScript, Python, CSS, AI Prompts, etc.
4. **Use Tags**: Organize with custom tags
5. **Mark Favorites**: Star your most-used snippets
6. **Export**: Download your snippet library as JSON

---

## 🎨 Customization

### Theme Switching
- Use the **Light/Dark toggle** in the top navigation
- Your preference is saved automatically

### Visual Effects
- **Custom Cursor**: Glowing cosmic cursor with pulse animation
- **Floating Particles**: Animated background particles
- **Gradient Text**: Animated color-changing headings
- **Glass Morphism**: Beautiful frosted glass UI elements

---

## 🔒 Privacy & Security

### Your Data is 100% Safe

- **Local Storage Only**: All data stored in your browser's localStorage
- **No Server Communication**: Zero external data transmission
- **No Account Required**: No sign-up, login, or personal information needed
- **Browser-Based Security**: Data is tied to your specific browser/device

### Security Best Practices

1. **Replace Demo Data**: The app comes with sample data - replace it with your real secrets
2. **Regular Backups**: Export to PDF regularly for backup
3. **Device Security**: Keep your computer/device secure and updated
4. **Browser Updates**: Use an updated browser for best security

### Demo Data Notice

The application comes pre-loaded with sample secrets, financial data, and code snippets for demonstration. These are **dummy examples** and should be replaced with your actual data.

---

## 🛠️ Technical Details

### Built With
- **Framework**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **PDF Export**: jsPDF
- **Storage**: Browser localStorage API
- **Deployment**: Static export compatible

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Secrets vault page
│   ├── finance/           # Finance matrix page
│   ├── snippets/          # Code snippets page
│   ├── pricing/           # Pricing page
│   ├── terms/             # Terms & conditions
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components
│   ├── finance/          # Finance-specific components
│   └── ...               # Other components
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
├── hooks/                # Custom React hooks
└── contexts/             # React contexts
```

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 🚀 Deployment

This Next.js application can be deployed to various platforms:

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and deploy

### Other Static Hosts
1. Run `npm run build`
2. Upload the contents of the `out` folder to your hosting provider

---

## 🆘 Troubleshooting

### Common Issues

**"Module not found" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

**Data not saving**
- Ensure localStorage is enabled in your browser
- Check if you're in private/incognito mode (localStorage may not persist)

**PDF export not working**
- Allow downloads in your browser settings
- Disable popup blockers for localhost

**Custom cursor not showing**
- Ensure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

---

## 🎉 Easter Eggs & Fun Features

- **🔍 Console Message**: Open browser developer tools and check the console for a special message
- **🎭 Custom Cursor**: Cosmic-themed cursor with pulse animation
- **✨ Floating Particles**: Subtle background animation effects
- **🌈 Gradient Text**: Animated color-changing headings
- **🌌 Cosmic Background**: Beautiful space-themed visual effects

---

## 📄 Legal & Privacy

### Demo Data Disclaimer
Sample secrets, financial data, and code snippets are for demonstration only. Replace with real data for actual use.

### Privacy Policy
- No data collection or tracking
- No external API calls for user data
- Complete local storage privacy
- View full privacy details at `/terms` in the application

### Terms & Conditions
Complete terms available at `/terms` in the application.

---

## 🤝 Contributing

This is a demonstration project built by **JULDD LLC**. For questions or support:

- **Website**: [juldd.me](https://juldd.me)
- **Twitter**: [@JULDDLLC](https://x.com/JULDDLLC)
- **GitHub**: [JULDDLLC](https://github.com/JULDDLLC)

---

## 📈 Version History

### v1.0.0 (Current)
- ✅ Complete secrets vault with local storage
- ✅ Finance Matrix for personal finance tracking
- ✅ Code snippets and AI prompts manager
- ✅ Beautiful cosmic UI with dark/light themes
- ✅ Responsive design for all devices
- ✅ PDF/CSV export functionality
- ✅ Privacy-first architecture
- ✅ Demo data for easy testing

---

## 🎯 What's Next?

Future enhancements could include:
- 🔐 Optional encryption for extra security
- 📱 Progressive Web App (PWA) support
- 🔄 Import/export in multiple formats
- 🎨 More theme options
- 📊 Advanced financial analytics
- 🤖 AI-powered snippet suggestions

---

**Made with ❤️ for developers by JULDD LLC**

*SecretStash - Keep your digital life organized, secure, and beautiful.*

---

## 🚀 Ready to Get Started?

1. **Install Node.js** from [nodejs.org](https://nodejs.org/)
2. **Run `npm install`** in the project directory
3. **Run `npm run dev`** to start the development server
4. **Open `http://localhost:3000`** in your browser
5. **Start organizing your digital life!**

*Welcome to the SecretStash multiverse! 🌌*