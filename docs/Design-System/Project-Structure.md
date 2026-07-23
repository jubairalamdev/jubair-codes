# Frontend Project Structure

---

# Framework

Next.js

App Router

Server Components First

---

# Folder Structure

app/

components/

hooks/

lib/

services/

utils/

constants/

data/

public/

styles/

Design-System/

---

# Components

Organize by responsibility.

Example

components/

navbar/

hero/

about/

experience/

skills/

projects/

contact/

footer/

ui/

forms/

cards/

buttons/

icons/

skeletons/

---

# Data

Static content should live inside:

data/

Example

projects.js

skills.js

experience.js

testimonials.js

navigation.js

---

# Utilities

Shared helpers belong inside:

utils/

---

# Services

API functions belong inside:

services/

---

# Assets

Images

Icons

CV

Static files

Should remain inside:

public/

---

# Rules

Keep folders small.

Prefer reusable components.

Avoid deeply nested folders.

Keep naming consistent.

Server Components by default.

Use Client Components only when required.