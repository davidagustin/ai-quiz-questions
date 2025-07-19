# 🧠 MLI Learning Quiz App

A beautiful, interactive learning and mnemonic quiz application designed specifically for the MLI (Machine Learning Institute) precourse material. This Next.js app helps you master complex concepts through interactive quizzes and powerful memory aids.

## ✨ Features

### 🎯 Interactive Quizzes
- **5 Quiz Categories**: NumPy Fundamentals, Pandas Operations, Prompt Engineering, ML Fundamentals, and Spatial Data
- **Randomized Questions**: Questions are shuffled each time to ensure true learning
- **Progress Tracking**: Real-time progress bars and question navigation
- **Beautiful Results**: Animated results with performance insights

### 🧠 Smart Mnemonics
- **Memory Aids**: Each question includes helpful mnemonic devices
- **Category-Specific**: Mnemonics tailored to each learning area
- **Study Tips**: Comprehensive guidance on using mnemonics effectively
- **Dedicated Page**: Full mnemonics reference with explanations

### 📊 Progress Analytics
- **Performance Tracking**: Detailed quiz history and statistics
- **Visual Charts**: Interactive performance graphs over time
- **Insights**: Personalized study recommendations
- **Achievement System**: Performance badges and recognition

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and engaging interactions
- **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy
- **Accessibility**: Designed with accessibility in mind

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd ai-quiz-questions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Quiz Categories

### 1. NumPy Fundamentals 🧮
- **Topics**: Array operations, mathematical functions, indexing
- **Key Mnemonics**: 
  - SHAPE - Size, Helpful, Array, Properties, Elements
  - DOT - Data, Operations, Transformations
  - MEAN - Methods, Elements, Arrays, Numbers

### 2. Pandas Operations 📊
- **Topics**: Data manipulation, analysis, grouping
- **Key Mnemonics**:
  - CRUD - Create, Read, Update, Delete
  - GROUP - Get, Read, Organize, Process, Summarize

### 3. Prompt Engineering 💬
- **Topics**: LLM interaction, prompt design, few-shot learning
- **Key Mnemonics**:
  - CLEAR - Context, Language, Examples, Accuracy, Refinement
  - SMART - Specific, Measurable, Achievable, Relevant, Time-bound

### 4. ML Fundamentals 🤖
- **Topics**: Training vs inference, overfitting, cross-validation
- **Key Mnemonics**:
  - TRAIN - Test, Run, Analyze, Iterate, Normalize
  - MODEL - Machine, Output, Data, Evaluation, Learning

### 5. Spatial Data & Vectors 🌐
- **Topics**: Vector spaces, embeddings, similarity metrics
- **Key Mnemonics**:
  - SPACE - Spatial, Position, Analysis, Coordinates, Embeddings
  - DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings

## 🎯 How to Use

### Taking Quizzes
1. **Select a Category**: Choose from the 5 available quiz categories
2. **Read Questions**: Each question includes multiple choice options
3. **Use Mnemonics**: Click "Show Mnemonic Hint" for memory aids
4. **Navigate**: Use Previous/Next buttons or answer all questions
5. **Submit**: Review your answers and submit the quiz
6. **Review Results**: See your score and performance insights

### Using Mnemonics
1. **Visit Mnemonics Page**: Access the dedicated mnemonics section
2. **Study Categories**: Review mnemonics by topic area
3. **Practice Application**: Use mnemonics while taking quizzes
4. **Create Associations**: Link mnemonics to real examples
5. **Regular Review**: Practice recalling mnemonics daily

### Tracking Progress
1. **View Statistics**: Check your overall performance metrics
2. **Analyze Trends**: See your improvement over time
3. **Identify Weak Areas**: Focus on categories needing improvement
4. **Set Goals**: Use insights to set learning targets

## 🛠️ Technical Details

### Architecture
- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4 with custom gradients and animations
- **State Management**: React hooks with localStorage for persistence
- **Routing**: Next.js App Router with dynamic routes
- **TypeScript**: Full type safety throughout the application

### File Structure
```
app/
├── data/
│   └── quizData.ts          # Quiz questions and mnemonics
├── quiz/
│   └── [category]/
│       └── page.tsx         # Dynamic quiz interface
├── mnemonics/
│   └── page.tsx             # Mnemonics reference page
├── progress/
│   └── page.tsx             # Progress tracking page
├── globals.css              # Global styles
├── layout.tsx               # Root layout
└── page.tsx                 # Home page with categories
```

### Data Structure
```typescript
interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  mnemonic: string;
}

interface QuizCategory {
  title: string;
  description: string;
  mnemonics: Record<string, string>;
  questions: Question[];
}
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed)
   - No environment variables required for basic functionality
   - Progress is stored in browser localStorage

### Other Deployment Options

#### Netlify
```bash
npm run build
# Deploy the .next folder to Netlify
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Customization

### Adding New Quiz Categories
1. Add category data to `app/data/quizData.ts`
2. Include questions, options, correct answers, and mnemonics
3. Add appropriate icons and colors in components

### Modifying Mnemonics
1. Update mnemonic text in `quizData.ts`
2. Add explanations in the mnemonics page
3. Ensure consistency across quiz questions

### Styling Changes
1. Modify Tailwind CSS classes in components
2. Update custom CSS in `globals.css`
3. Adjust color schemes and animations

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Add new quiz questions or improve mnemonics**
4. **Test thoroughly**
5. **Submit a pull request**

## 📝 License

This project is part of the MLI precourse materials and follows the same licensing terms.

## 🙏 Acknowledgments

- **MLI Precourse Team**: For the comprehensive learning materials
- **Next.js Team**: For the excellent React framework
- **Tailwind CSS**: For the beautiful UI components
- **Vercel**: For seamless deployment platform

## 📞 Support

If you encounter any issues or have questions:
1. Check the documentation above
2. Review the quiz content for accuracy
3. Test with different browsers
4. Ensure all dependencies are installed correctly

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks
- **Deployment**: Vercel (recommended)

---

**Happy Learning! 🎓✨**

*Master your MLI precourse knowledge with interactive quizzes and powerful mnemonics.*
