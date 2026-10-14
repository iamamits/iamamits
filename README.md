<div align="center">

<img src="assets/boot.svg" width="100%" alt="Amit Singh - Full-Stack Developer and Founder" />

<a href="https://github.com/Iamamits">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&duration=3200&pause=900&color=3FB950&center=true&vCenter=true&width=780&height=45&lines=Building+EduSaarthi+%E2%80%94+a+School+ERP+SaaS;Founder+%40+Alethron+Solutions;Next.js+%E2%80%A2+TypeScript+%E2%80%A2+PostgreSQL;Strong+fundamentals+%3E+shortcuts;Discipline+over+motivation" alt="Typing SVG" />
</a>

<br/><br/>

![Profile Views](https://komarev.com/ghpvc/?username=Iamamits&style=flat-square&color=238636)
<img src="https://img.shields.io/github/followers/Iamamits?style=for-the-badge&logo=github&color=181717" alt="followers" />
<img src="https://img.shields.io/badge/Open%20to-Internships-238636?style=for-the-badge" alt="open to internships" />

<br/><br/>

<a href="https://linkedin.com/in/harrybuilds"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://buildwithamit.me"><img src="https://img.shields.io/badge/Portfolio-0F172A?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
<a href="mailto:amitedge69@gmail.com?subject=sudo%20hire%20amit"><img src="https://img.shields.io/badge/sudo-hire%20amit-238636?style=for-the-badge&logo=gnubash&logoColor=white" alt="sudo hire amit" /></a>

</div>

<img src="assets/line.svg" width="100%" alt="" />

## 🟢 Live in Production

Not screenshots. A GitHub Action pings my live products every 30 minutes and renders this card.

<div align="center">
<a href="https://edusaarthi.app">
  <img src="assets/edusaarthi.png" width="100%" alt="Live production status of EduSaarthi and Dhanwala" />
</a>
</div>

<img src="assets/line.svg" width="100%" alt="" />

## 🚀 Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🏫 EduSaarthi — School Management ERP</h3>
      <p>Enterprise-grade SaaS for schools, built and shipped solo under Alethron Solutions. Modular monolith with a deliberately lean six-role access model and Postgres row-level security.</p>
      <p>
        <img src="https://img.shields.io/badge/Next.js_15-000?style=flat-square&logo=nextdotjs" />
        <img src="https://img.shields.io/badge/Fastify-000?style=flat-square&logo=fastify" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/Redis_+_BullMQ-DC382D?style=flat-square&logo=redis&logoColor=white" />
        <img src="https://img.shields.io/badge/Cloudflare_R2-F38020?style=flat-square&logo=cloudflare&logoColor=white" />
      </p>
      <a href="https://edusaarthi.app"><b>🔗 edusaarthi.app</b></a>
    </td>
    <td width="50%" valign="top">
      <h3>📈 Dhanwala — Investor Management Platform</h3>
      <p>Investor management platform built for Nivestra Capital, handling investor data and operations in one place.</p>
      <p>
        <!-- TODO: add the real stack badges -->
        <img src="https://img.shields.io/badge/Status-Live-238636?style=flat-square" />
      </p>
      <a href="https://dhanwala.in"><b>🔗 dhanwala.in</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🤖 Job Hunt Agent</h3>
      <p>Autonomous agent that scores resume-to-job fit, ranks postings and drafts tailored cover letters. Submitted to the <i>Agents for Humans</i> hackathon on Devpost.</p>
      <p>
        <img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs" />
        <img src="https://img.shields.io/badge/OpenRouter-6366F1?style=flat-square" />
        <img src="https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel" />
      </p>
      <!-- TODO: add repo / demo link -->
    </td>
    <td width="50%" valign="top">
      <h3>🛡️ Security & Fundamentals</h3>
      <p>Completed an 8-week <b>Ethical Hacking virtual internship</b> (EduSkills Academy, 2026). Currently grinding DSA and networking fundamentals.</p>
      <p>
        <img src="https://img.shields.io/badge/Ethical_Hacking-Internship-0F172A?style=flat-square" />
        <img src="https://img.shields.io/badge/DSA-In_Progress-D29922?style=flat-square" />
      </p>
    </td>
  </tr>
</table>

<img src="assets/line.svg" width="100%" alt="" />

## 🧠 How EduSaarthi Is Built

```mermaid
flowchart LR
    U([Browser]) --> N[Next.js 15]
    N --> F[Fastify API<br/>TypeScript + Zod]
    F --> P[(PostgreSQL<br/>row-level security)]
    F --> R[(Redis)]
    R --> Q[BullMQ workers]
    F --> S[(Cloudflare R2<br/>file storage)]
    D{{Doppler<br/>secrets}} -.-> F
    classDef edge fill:#0d1117,stroke:#3fb950,color:#c9d1d9
    classDef data fill:#0d1117,stroke:#58a6ff,color:#c9d1d9
    class N,F,Q edge
    class P,R,S data
```

**Design choices:** modular monolith over premature microservices, tenant isolation enforced in the database with row-level security, background jobs on a queue instead of the request path, and a six-role access model instead of a bloated 17-role design.

<img src="assets/line.svg" width="100%" alt="" />

## 🛠️ Tech Stack

<div align="center">

**Languages**<br/>
<img src="https://skillicons.dev/icons?i=cpp,c,js,ts,php,html,css&theme=dark" /><br/><br/>

**Frontend & Backend**<br/>
<img src="https://skillicons.dev/icons?i=react,nextjs,nodejs,express,fastify&theme=dark" /><br/><br/>

**Databases**<br/>
<img src="https://skillicons.dev/icons?i=postgres,mysql,mongodb,sqlite,redis&theme=dark" /><br/><br/>

**Cloud & DevOps**<br/>
<img src="https://skillicons.dev/icons?i=aws,cloudflare,vercel,digitalocean,nginx,git,github&theme=dark" />

</div>

<img src="assets/line.svg" width="100%" alt="" />

## 📊 GitHub Analytics

<div align="center">

<img height="180" src="https://github-readme-stats.shion.dev/api?username=Iamamits&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=false" />
<img height="180" src="https://github-readme-stats.shion.dev/api/top-langs/?username=Iamamits&layout=compact&theme=github_dark&hide_border=true&langs_count=8" />

<br/>

<img src="https://streak-stats.demolab.com/?user=Iamamits&theme=github-dark-blue&hide_border=true" />

</div>

<img src="assets/line.svg" width="100%" alt="" />

## 🎯 Currently

- 🔭 Scaling **EduSaarthi** with real schools
- 🧩 Practising **DSA** daily
- 🔐 Going deeper into **cybersecurity** and **applied AI engineering**
- 🌱 Targeting a **software development internship** this year

**Open to:** internships · open-source contributions · beginner-friendly collaborations

<div align="center">

<a href="mailto:amitedge69@gmail.com?subject=Let%27s%20build%20something">
  <img src="assets/outro.svg" width="100%" alt="Thanks for visiting - let's build something great" />
</a>

</div>
