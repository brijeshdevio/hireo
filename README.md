# **Hireo – Modern Job Posting Web App**

Hireo is a simple and intuitive job posting web application where employers can create job listings and job seekers can browse, search, and view detailed job information.
This project is built to demonstrate clean UI design, responsive functionality, and practical form validation for job management.

---

## 🚀 **Features**

### 🏠 **1. Job Postings Page (Home Page)**

Displays a list of available jobs in clean, organized job cards.

#### **Each Job Card Displays:**

- **Job Title**
- **Company Name**
- **Location**
- **Job Type** _(Full-time (On-site), Part-time (On-site), Full-time (Remote), Part-time (Remote))_
- **See Details** button — opens the detailed job view
- **Delete** button — removes the job instantly

#### **Additional Feature:**

- **🔍 Search Bar**

  - Allows users to search for jobs by **job title**

---

### 📄 **2. Job Details Page**

Clicking _See Details_ opens a dedicated page showing full information about the selected job.

#### **Information Displayed:**

- **Job Title**
- **Company Details**

  - Company Name
  - Location
  - Salary
  - Job Type

- **Job Description**
- **Qualifications** (rendered as an ordered list)

---

### 👨‍💼 **3. Post a Job (Employer Feature)**

Employers can create a new job posting through a structured form.

#### **Form Fields:**

- **Job Title** – String input
- **Company Name** – String input
- **Location** – String input
- **Salary** – Number input
- **Job Type** – Dropdown

  - Full-time (On-site)
  - Part-time (On-site)
  - Full-time (Remote)
  - Part-time (Remote)

- **Job Description** – String input
- **Required Qualifications** – String input

#### **Validation Rules:**

- All fields must be filled out before submission
- Appropriate placeholders guide the user
- Incorrect or incomplete fields should prevent submission

---

## 🛠️ **Tech Stack**

- React with Typescript
- CSS / Bootstrap
- NestJS
- Mongoose

---

## 📦 **Installation & Setup**

```bash
# Clone the repository
git clone https://github.com/brijeshdevio/hireo.git

# Navigate into the project
cd hireo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

---

## 🤝 Contributing

Pull requests are welcome!
If you’d like to contribute, feel free to fork the repo and submit a PR.

---

## 📄 License

This project is open-source and available under the **MIT License**.
