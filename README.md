# Cloth Court

Cloth Court is a web application designed for users to browse, buy, and manage clothing items with a seamless experience. The project utilizes Django for the backend, React for the frontend, and JWT for secure authentication. Axios is used for making API requests.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT
- Secure API interactions using Axios
- Responsive UI built with React
- Browse and filter clothing items
- User profile management
- Order history tracking
- Admin dashboard for inventory management

## Technologies

- **Frontend:**

  - React
  - Axios
  - Bootstrap (or any CSS framework you prefer)

- **Backend:**
  - Django
  - Django REST Framework
  - PostgreSQL (or your preferred database)
  - JWT (JSON Web Tokens) for authentication

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/cloth-court.git
   cd cloth-court

   ```

2. **cd backend**

3. **python3 -m venv env**
   **source env/bin/activate**

4. **pip install -r requirements.txt**

5. **python manage.py migrate**

6. **python manage.py createsuperuser**

7. **python manage.py runserver**

8. **cd frontend**

9. **npm install**

10. **npm start**

**Usage**

    Visit http://127.0.0.1:8000/ for the backend API.
    Visit http://localhost:3000/ for the React frontend.
    Use the provided credentials to log in as an admin or a regular user.

_Author:_
**Adebayo Abiodun Omobolaji (Jayson)**
Email: jaysontechsolutions@gmail.com

License

**This project is licensed under the MIT License - see the LICENSE file for details.**
