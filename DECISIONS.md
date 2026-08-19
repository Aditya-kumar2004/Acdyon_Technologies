# Acdyon Technologies Frontend Challenge — Part 2 Decisions

**Track:** Part 2 — The Premium Home Page  
**Project Name:** FlowPilot (AI Workspace Landing Page)  
**Tech Stack:** React, Vite, Tailwind CSS, Lucide Icons  

---

### 1. Design & Technical Choices

* **Why React + Vite?**  
  We chose React with Vite because it is lightweight, fast to build, and loads instantly in the browser. It allowed us to focus completely on making a great user experience with zero lag.

* **Interactive Product Demo:**  
  Instead of just showing static images, we built an interactive dashboard demo. Users can click the **AI Auto-Balance** button to see how task workloads update live in front of them.

* **Honest Copy (No Fake Content):**  
  Following the challenge rules, we did not include fake user counts, fake customer reviews, or fake company logos. Everything shown is clean, honest, and focused on the actual product features.

---

### 2. Time Limit Trade-offs & Future Plans

* **Trade-off Made:**  
  Because of the time limit, we focused on building a fast, interactive frontend preview using simple React state rather than setting up a backend database server.

* **What we would build with a full week:**  
  1. Connect a real backend server and database for user accounts.
  2. Add real-time live cursor movement so multiple teammates can see each other work.
  3. Add a working `⌘K` command search popup to search projects instantly.

---

### 3. AI Tool Usage & Manual Changes

* **Where AI Tools Were Used:**  
  AI tools were used to quickly scaffold component layout templates and set up initial styles.

* **What Was Personally Checked & Changed:**  
  1. **Enforced Challenge Guidelines:** Removed fake testimonials and fake logos to strictly follow the "Signal over Noise" requirement.
  2. **Simplified All Code:** Rewrote complex component abstractions into standard, easy-to-read React code that any beginner can understand.
  3. **True Black Dark Mode:** Custom-tuned the dark theme background to a modern, true black (`#09090b`) color scheme.
  4. **Smart Scroll Header:** Built custom scroll listener logic so the navigation bar automatically hides when scrolling down and reappears when scrolling up.

---

### ✦ Bonus Easter Egg
Click the **Acme Product** logo 5 times inside the interactive dashboard demo to unlock the hidden FlowPilot AI Secret Mode!
