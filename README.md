# Resume Gover - Government Resume Assistance Website

A clean, professional MVP website for a government and public-sector resume and application assistance service.

## Project Structure

```
resume_gover/
├── index.html          # Homepage (marketing page)
├── services.html       # Services & Pricing page
├── terms.html          # Terms & Disclaimer page
├── privacy.html        # Privacy Policy page
├── thank-you.html      # Thank You / Upload & Intake page (post-payment)
├── styles.css          # Main stylesheet
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Features

- **Clean, Minimal Design**: Professional and trustworthy appearance
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)

## Pages

1. **Homepage (index.html)**: Marketing page with service overview
2. **Services & Pricing (services.html)**: Detailed service descriptions and pricing information
3. **Terms & Disclaimer (terms.html)**: Legal terms and disclaimers
4. **Privacy Policy (privacy.html)**: Privacy policy and data handling information
5. **Thank You / Upload & Intake (thank-you.html)**: Post-payment intake form for document upload

## Getting Started

1. Open `index.html` in a web browser to view the website
2. All pages are linked through the navigation menu
3. No build process or server required - works as static files

## Customization

### Colors
Edit CSS variables in `styles.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary accent color
- `--accent-color`: Highlight color

### Content
- Update text content directly in HTML files
- Modify service descriptions in `services.html`
- Update legal content in `terms.html` and `privacy.html`

### Form Integration
The intake form in `thank-you.html` currently shows a success message on submit. To integrate with a backend:
1. Update the form submission handler in `script.js`
2. Add your API endpoint
3. Handle file uploads on your server

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The website is designed to be stress-reducing and trustworthy
- All disclaimers are clearly stated
- No hiring guarantees or false promises
- Ethical approach - works with actual client experience
