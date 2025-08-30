# CV Web Portfolio

A web-based portfolio built with modern technologies, featuring a dynamic visitor counter and a secure contact form.

---

![Website Screenshot](src/assets/images/Website-Showcase.png)

---

## 🚀 Live

[👉 View the site here](https://www.cv-web.me/)

---

## 🚀 Features

- **Functional Visitor Counter Backend**
  - Dynamic visitor counter powered by Supabase PostgreSQL.
  - Vercel Serverless Function at `/api/counter` handles backend logic and database communication.
  - Unique visitor detection using browser localStorage: only first-time visitors increment the count.

- **Live Visitor Count on Frontend**
  - Hero section displays the current visitor count live from the backend API.

- **Secure Configuration**
  - All secrets (Supabase keys, Formspree endpoint) are stored in `.env` for best security practices.
  - Contact form uses the `VITE_FORMSPREE_ENDPOINT` environment variable, not a hardcoded URL.

- **Contact Form Integration**
  - Formspree is used for secure contact form submission.

- **Correct Project Structure**
  - `api` folder is positioned in the project root for accurate Vercel deployment of serverless functions.

- **Improved Local Development**
  - Use `vercel dev` to run the project locally, testing serverless functions as they will work in production.

---

## 🛠 Tech Stack

- **React** – Frontend UI
- **Vite** – Development/build tool
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Supabase PostgreSQL** – Cloud database for visitor counter
- **Vercel Serverless Functions** – Serverless backend/API
- **Formspree** – Contact form backend integration
- **JavaScript** – Primary programming language
- **CSS/HTML** – Styling and markup

---

## 📦 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/AhmedQw1/CV-Web-Portfolio.git
    cd CV-Web-Portfolio
    npm install
    ```
2. **Configure Environment Variables**
    - Copy `.env.local.example` to `.env.local` and add your Supabase + Formspree credentials.

3. **Run the Project Locally**
    ```bash
    vercel dev
    ```
    > Use `vercel dev` to test frontend and backend together.

4. **Build for Production**
    ```bash
    npm run build
    ```

---

## 🖼️ Screenshots

![Website Screenshot](src/assets/images/Website-Showcase.png)
<!-- Add more screenshots here if needed -->

---

## 📬 Contact

- [LinkedIn](https://www.linkedin.com/in/ahmed-salmen-26119a370/)
- [GitHub](https://github.com/AhmedQw1)
- Email: Ahmedsalmen00@gmail.com

---

> Made with ❤️ by AhmedQw1
