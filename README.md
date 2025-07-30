# Zakat Calculator

A comprehensive web application that helps Muslims calculate their zakat easily and accurately according to Islamic law. Built with modern web technologies and designed for global accessibility.

## 🌟 Key Features

### **Complete Zakat Calculator**
- **Gold Zakat**: Calculate zakat on gold with nisab of 85 grams
- **Silver Zakat**: Calculate zakat on silver with nisab of 595 grams  
- **Wealth Zakat**: Calculate zakat on cash, savings, deposits, and investments
- **Income Zakat**: Calculate zakat on monthly salary and income

### **Islamic Evidence Integration**
- Display relevant Quranic verses and authentic hadiths for each zakat type
- Arabic text with English translations
- Proper source citations (Quran chapters/verses, Hadith collections)

### **Modern User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Calculations**: Instant results with detailed breakdowns
- **Privacy-First**: All calculations performed locally in browser
- **Accessibility**: WCAG compliant design with proper contrast and navigation

### **Developer-Friendly**
- **Open Source**: MIT licensed with full source code available
- **Modular Architecture**: Clean separation of concerns
- **JSON-Based Configuration**: Easy to modify zakat data and rules
- **TypeScript Support**: Type-safe development experience

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or newer)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/zakat-calculator.git
   cd zakat-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   ```
   http://localhost:4321
   ```

### Build Commands

- **Development server:**
  ```bash
  npm run dev
  ```

- **Production build:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

## 🛠️ Technology Stack

### **Frontend Framework**
- **[Astro](https://astro.build/)** - Modern web framework for building fast, content-focused websites
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **Development Tools**
- **HTML5 & CSS3** - Modern web standards
- **ESLint & Prettier** - Code quality and formatting
- **Vite** - Fast build tool and development server

### **Deployment**
- **Static Site Generation** - Pre-built for optimal performance
- **CDN Ready** - Can be deployed to any static hosting service

## 📊 Supported Zakat Types

### 1. **Gold Zakat (Zakat Emas)**
- **Nisab**: 85 grams
- **Rate**: 2.5%
- **Condition**: Owned for 1 full year (haul)
- **Formula**: `(Gold Weight × Gold Price) × 2.5%`

### 2. **Silver Zakat (Zakat Perak)**
- **Nisab**: 595 grams  
- **Rate**: 2.5%
- **Condition**: Owned for 1 full year (haul)
- **Formula**: `(Silver Weight × Silver Price) × 2.5%`

### 3. **Wealth Zakat (Zakat Mal)**
- **Nisab**: Equivalent to 85 grams of gold
- **Rate**: 2.5%
- **Includes**: Cash, savings, deposits, investments
- **Condition**: Owned for 1 full year (haul)
- **Formula**: `Total Wealth × 2.5%`

### 4. **Income Zakat (Zakat Penghasilan)**
- **Nisab**: Equivalent to 85 grams of gold per month
- **Rate**: 2.5%
- **Includes**: Salary, bonuses, allowances, other halal income
- **Condition**: Paid monthly when receiving income
- **Formula**: `Monthly Income × 2.5%`

## 📁 Project Structure

```
zakat-calculator/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ZakatEmasCard.astro      # Gold zakat calculator
│   │   ├── ZakatPerakCard.astro     # Silver zakat calculator
│   │   ├── ZakatMalCard.astro       # Wealth zakat calculator
│   │   ├── ZakatPenghasilanCard.astro # Income zakat calculator
│   │   ├── DalilEmasCard.astro      # Gold zakat evidence
│   │   ├── DalilPerakCard.astro     # Silver zakat evidence
│   │   ├── DalilMalCard.astro       # Wealth zakat evidence
│   │   ├── DalilPenghasilanCard.astro # Income zakat evidence
│   │   └── FAQ.astro                # Frequently asked questions
│   ├── content/              # Data and content files
│   │   ├── zakat/           # Zakat configuration data
│   │   │   ├── gold.json    # Gold zakat rules and form inputs
│   │   │   ├── silver.json  # Silver zakat rules and form inputs
│   │   │   ├── wealth.json  # Wealth zakat rules and form inputs
│   │   │   └── income.json  # Income zakat rules and form inputs
│   │   └── dalil/           # Islamic evidence data
│   │       ├── dalil-emas-1.json    # Gold zakat Quran evidence
│   │       ├── dalil-emas-2.json    # Gold zakat Hadith evidence
│   │       ├── dalil-perak-1.json   # Silver zakat evidence
│   │       ├── dalil-mal-1.json     # Wealth zakat Quran evidence
│   │       ├── dalil-mal-2.json     # Wealth zakat Hadith evidence
│   │       ├── dalil-penghasilan-1.json # Income zakat Quran evidence
│   │       └── dalil-penghasilan-2.json # Income zakat Hadith evidence
│   ├── layouts/             # Page layout templates
│   │   ├── Layout.astro     # Main layout template
│   │   └── PrivacyLayout.astro # Privacy/legal pages layout
│   ├── pages/               # Application pages
│   │   ├── index.astro      # Homepage with calculators
│   │   ├── about.astro      # About page
│   │   ├── contact.astro    # Contact page
│   │   ├── privacy-policy.astro # Privacy policy
│   │   └── terms-of-service.astro # Terms of service
│   └── styles/              # CSS and styling
│       ├── global.css       # Global styles and imports
│       └── zakat.css        # Zakat-specific component styles
├── public/                  # Static assets
│   └── favicon.svg          # Site favicon
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## ⚙️ Configuration & Customization

### **Zakat Data Configuration**

All zakat rules and calculations are stored in JSON files located in `src/content/zakat/`. Each file contains:

#### **File Structure Example** (`gold.json`):
```json
{
  "title": "Gold Zakat",
  "nisab": 85,
  "nisabUnit": "grams",
  "kadarZakat": 2.5,
  "kadarZakatUnit": "percent",
  "description": "Gold zakat is obligatory when...",
  "calculation": "Zakat = (Gold Weight × Gold Price) × 2.5%",
  "conditions": [
    "Gold reaches the minimum nisab of 85 grams",
    "Has been owned for one full year (haul)",
    "It is stored gold, not jewelry worn daily"
  ],
  "formInputs": [
    {
      "id": "goldWeight",
      "label": "Gold Weight (grams)",
      "type": "number",
      "placeholder": "Enter gold weight in grams",
      "required": true
    }
  ],
  "dalilIds": ["gold-evidence-1", "gold-evidence-2"]
}
```

#### **Key Configuration Fields:**
- **`title`**: Display name for the zakat type
- **`nisab`**: Minimum threshold value
- **`nisabUnit`**: Unit of measurement for nisab
- **`kadarZakat`**: Zakat rate (typically 2.5%)
- **`description`**: Explanatory text about this zakat type
- **`calculation`**: Formula used for calculation
- **`conditions`**: Array of requirements for zakat obligation
- **`formInputs`**: Form field definitions for the calculator
- **`dalilIds`**: References to Islamic evidence files

### **Islamic Evidence Configuration**

Evidence files are stored in `src/content/dalil/` with this structure:

```json
{
  "id": "gold-evidence-1",
  "type": "quran",
  "text": "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ...",
  "source": "QS. At-Taubah: 34",
  "translation": "And those who hoard gold and silver..."
}
```

#### **Evidence Fields:**
- **`id`**: Unique identifier for the evidence
- **`type`**: Either "quran" or "hadith"
- **`text`**: Original Arabic text
- **`source`**: Citation (Quran chapter:verse or Hadith collection)
- **`translation`**: English translation

### **Customizing Zakat Rules**

To modify zakat calculations or add new types:

1. **Edit existing zakat files** in `src/content/zakat/`
2. **Update nisab values** by changing the `nisab` field
3. **Modify calculation formulas** in the `calculation` field
4. **Add new form inputs** to the `formInputs` array
5. **Update conditions** in the `conditions` array

#### **Example: Updating Gold Nisab**
```json
{
  "nisab": 87.48,  // Updated from 85
  "nisabUnit": "grams",
  "calculation": "Zakat = (Gold Weight × Gold Price) × 2.5%"
}
```

### **Adding New Zakat Types**

1. **Create new JSON file** in `src/content/zakat/`
2. **Create corresponding component** in `src/components/`
3. **Add evidence files** in `src/content/dalil/`
4. **Update main page** to include the new calculator

### **Styling Customization**

The application uses Tailwind CSS with custom Islamic-themed colors:

```javascript
// tailwind.config.mjs
colors: {
  islamic: {
    green: '#2e7d32',
    'green-light': '#4caf50',
    'green-dark': '#1b5e20',
    gold: '#ffc107',
    cream: '#f5f5dc',
    brown: '#8d6e63'
  }
}
```

## 🌍 Internationalization

### **Current Language Support**
- **English**: Primary language
- **Arabic**: Islamic evidence text

### **Adding New Languages**

1. **Create language-specific JSON files** for zakat data
2. **Add translation files** for UI text
3. **Update components** to support multiple languages
4. **Configure language switching** in the layout

### **Translation Guidelines**
- Maintain accuracy of Islamic terminology
- Consult with Islamic scholars for religious content
- Use consistent terminology across all translations
- Test calculations with native speakers

## 🔒 Privacy & Security

### **Data Privacy**
- **No server-side storage**: All calculations performed in browser
- **No tracking**: No analytics or user tracking
- **No cookies**: No persistent data storage
- **Open source**: Full transparency of code and data handling

### **Security Features**
- **Input validation**: All user inputs are validated
- **XSS protection**: Proper sanitization of user data
- **HTTPS ready**: Secure transmission when deployed
- **No external dependencies**: Minimal attack surface

## 🤝 Contributing

We welcome contributions from developers, Islamic scholars, and community members!

### **Types of Contributions**

#### **🐛 Bug Reports & Fixes**
- Report calculation errors
- Fix UI/UX issues
- Improve performance
- Enhance accessibility

#### **✨ Feature Enhancements**
- Add new zakat types
- Improve calculator functionality
- Enhance user interface
- Add new languages

#### **📝 Documentation**
- Improve README and guides
- Add code comments
- Create tutorials
- Write API documentation

#### **🌐 Translations**
- Translate to local languages
- Review existing translations
- Add regional variations
- Improve Islamic terminology

#### **🔍 Islamic Law Review**
- Validate zakat calculations
- Review Islamic evidence
- Suggest improvements to religious content
- Consult on new features

### **Development Workflow**

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/zakat-calculator.git
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

5. **Commit and push**
   ```bash
   git commit -m "Add: new feature description"
   git push origin feature/new-feature-name
   ```

6. **Create Pull Request**
   - Describe your changes
   - Reference any related issues
   - Request review from maintainers

### **Code Style Guidelines**

- **TypeScript**: Use proper typing
- **Components**: Keep components focused and reusable
- **Naming**: Use descriptive names for variables and functions
- **Comments**: Add comments for complex logic
- **Formatting**: Use Prettier for consistent formatting

### **Islamic Content Guidelines**

- **Accuracy**: Ensure all Islamic content is accurate
- **Sources**: Provide proper citations for all evidence
- **Consultation**: Consult with qualified scholars
- **Respect**: Maintain respectful tone and proper terminology

## 📚 Islamic References

### **Primary Sources**
- **Al-Quran**: Direct verses related to zakat obligations
- **Authentic Hadiths**: Sahih Bukhari, Sahih Muslim, and other collections
- **Classical Fiqh**: Works of recognized Islamic scholars
- **Contemporary Fatwas**: Modern scholarly opinions

### **Calculation Methodology**
- **Nisab Values**: Based on traditional Islamic measurements
- **Haul Requirement**: One lunar year ownership period
- **Rate Calculation**: 2.5% (1/40th) as prescribed in Islamic law
- **Modern Applications**: Adapted for contemporary financial instruments

### **Scholarly Consultation**
This application's calculations have been developed with reference to:
- Classical Islamic jurisprudence texts
- Modern Islamic finance principles
- Contemporary scholarly consensus
- Regional Islamic authorities

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❗ License and copyright notice required
- ❗ No warranty provided

## 📞 Contact & Support

### **General Contact**
- **Email**: info@zakatcalculator.com
- **Support**: support@zakatcalculator.com

### **Development**
- **GitHub**: [https://github.com/username/zakat-calculator](https://github.com/username/zakat-calculator)
- **Issues**: Report bugs and request features
- **Discussions**: Community discussions and questions

### **Islamic Consultation**
- **Scholarly Review**: For Islamic law questions
- **Content Validation**: For religious content accuracy
- **Regional Adaptations**: For local Islamic practices

### **Community**
- **Contributors**: See [CONTRIBUTORS.md](CONTRIBUTORS.md)
- **Acknowledgments**: Thanks to all who have helped
- **Feedback**: We value your input and suggestions

## 🙏 Acknowledgments

### **Islamic Scholars**
- Thanks to all scholars who provided guidance on zakat calculations
- Appreciation for those who reviewed the Islamic content
- Gratitude for ongoing consultation and support

### **Open Source Community**
- Thanks to all contributors who have improved this application
- Appreciation for bug reports and feature suggestions
- Gratitude for translations and documentation improvements

### **Technology Partners**
- **Astro Team**: For the excellent web framework
- **Tailwind CSS**: For the utility-first CSS framework
- **TypeScript Team**: For type-safe development tools

---

**Made with ❤️ for Muslims worldwide**

*"And establish prayer and give zakat and bow with those who bow [in worship and obedience]."* - **Quran 2:43**

---

## 🔄 Version History

- **v1.0.0** - Initial release with basic zakat calculators
- **v1.1.0** - Added Islamic evidence integration
- **v1.2.0** - Enhanced UI/UX and mobile responsiveness
- **v1.3.0** - Added comprehensive documentation
- **Current** - Ongoing improvements and community contributions

## 🚀 Roadmap

### **Upcoming Features**
- [ ] Multi-language support (Arabic, Urdu, Malay, etc.)
- [ ] Advanced zakat types (business, agriculture, livestock)
- [ ] Zakat payment tracking and reminders
- [ ] Integration with Islamic calendar
- [ ] Offline PWA functionality
- [ ] Print-friendly calculation reports

### **Long-term Goals**
- [ ] Mobile applications (iOS/Android)
- [ ] Integration with Islamic banking systems
- [ ] Educational content and tutorials
- [ ] Community features and discussions
- [ ] Regional customizations and variations

---

*For the latest updates and announcements, please watch our GitHub repository and follow our development progress.*