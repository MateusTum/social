# 😎 Social 😎
# ⚠️⚠️ ATENTION!!! INSTRUCTIONS ARE STILL UNDER CONSTRUCTION, THEY MAY NOT WORK PROPERLY!!!! ⚠️⚠️

## Table of Contents
- [Intro](#introduction-and-overview)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction and Overview
**Social** is a dynamic social media web application built with Python and Django. This project serves as a valuable platform for honing Python and Django skills, showcasing a conversion from a Flask-based project. Designed with user engagement in mind, YourSocialApp empowers users to create accounts, join communities, share posts, images, and videos, follow other users, follow communities of interest, post within communities, and personalize their algorithm to tailor content to their preferences.

## Key Features
- User Authentication: Enable users to create accounts and log in securely.
- Community Building: Form and join communities of shared interests.
- Content Sharing: Share posts, images, and videos with the community.
- Social Connectivity: Follow other users and stay updated on their activities.
- Community Engagement: Post within communities and foster discussions.
- Personalized Algorithm: Customize the algorithm to curate content based on individual preferences.
- ORM (Object-Relational Mapping): Leverage Django's ORM for seamless interaction with the database, allowing easy representation of data models in Python code.
- Migrations: Utilize Django's migration system for version control of the database schema, making updates and changes straightforward.
- QuerySet API: Leverage the powerful QuerySet API to construct complex database queries using Pythonic syntax.
- Data Integrity: Django ensures data integrity through its built-in model constraints, preventing inconsistencies in the database.
- Administration Panel: Take advantage of Django's admin panel for easy database management and content moderation.

## Prerequisites
Make sure you have the following prerequisites installed on your system:

- Python
- Node.js
- npm
- Django

## Installation Steps

### a. Django Backend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mateustum/social-django.git
   ```
2. **Navigate to the backend directory:**
   ```bash
   cd your-repo/social
   ```
3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Apply database migrations:**
   ```bash
   python manage.py migrate
   ```
   
### b. React Frontend
1. **Navigate to the frontend directory:**
   ```bash
   cd your-repo/frontend
   ```
2. **Install npm packages:**
   ```bash
   npm install
   ```
## Configuration
PLACEHOLDER

## Run the Application
### Run Django:
   ```bash
   cd your-repo/social
   python manage.py runserver
   ```
### Run React:
   ```bash
   cd your-repo/social
   npm start
   ```
## Troubleshooting
PLACEHOLDER If you encounter any issues, refer to this section for possible solutions.

## Dependencies
- Bootstrap_Flask==2.2.0
- Flask==2.2.5
- Flask_CKEditor==0.4.6
- Flask_Login==0.6.2
- Flask_WTF==1.1.1
- SQLAlchemy==2.0.19
- WTForms==3.0.1
- Werkzeug==2.2.3
- gunicorn==21.2.0
- flask_sqlalchemy==3.0.5
- Pillow~=10.1.0
- psycopg2-binary==2.9.9

## Contributing
If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a pull request.

## License

<p>This project is licensed under the MIT License.</p>
