# MapMyTeam - Map you team's potential

**MapMyTeam** is a full-stack web application that helps organizations manage their engineering teams, track availability, assign projects, and optimize capacity. Designed with a modern UI and powered by AI-assisted development tools.

---

## 🚀 Features

- 🔐 **Role-Based Access Control**: Admin, Manager, Engineer
- 👷 **Engineer Management**: Skill sets, availability, bench status
- 📁 **Project Management**: CRUD operations with timelines & technologies
- 📌 **Assignment Module**: Assign engineers to projects and track hours
- 📊 **Dashboards**: Visual KPIs and utilization charts
- 🗓️ **Timeline/Calendar View**: See who's working on what and when

---

## 🧱 Tech Stack

| Layer       | Tech                                   |
|-------------|----------------------------------------|
| Frontend    | React, Tailwind CSS, Recharts, Axios   |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB + Mongoose                     |
| Auth        | JWT with Role-Based Middleware         |
| Hosting     | Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas |
| AI Tools    | GitHub Copilot, ChatGPT                |

---

## 🌐 Live Demo

🔗 [Live App](https://mapmyteam.vercel.app)  
🔗 [API Server](https://mapmyteam-api.onrender.com)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mapmyteam.git
cd mapmyteam
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd ../server
npm install
cp .env.example .env
npm run dev
```

### 4. Environment Variables

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
---

## 🙌 Acknowledgements

- [GitHub Copilot](https://github.com/features/copilot)
- [OpenAI ChatGPT](https://openai.com/chatgpt)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel](https://vercel.com)



