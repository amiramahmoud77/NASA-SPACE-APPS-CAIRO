# NASA Space Apps Challenge Cairo 2025 - Team Twinkle Tales

[![NASA Space Apps](https://img.shields.io/badge/NASA-Space%20Apps-brightgreen)](https://2025.spaceappschallenge.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Backend: Laravel](https://img.shields.io/badge/Backend-Laravel-red)](https://laravel.com)
[![Frontend: HTML/CSS/JS](https://img.shields.io/badge/Frontend-HTML/CSS/JS-blue)](https://developer.mozilla.org/en-US/docs/Web)

## Project Overview
**Twinkle Tales** is an innovative web application developed for the NASA Space Apps Challenge Cairo 2025. It focuses on [briefly describe the project's theme, e.g., "interactive storytelling for space exploration education, allowing users to create and share tales inspired by NASA data"]. 

The project combines a robust backend for user management, quizzes, and progress tracking with a simple frontend for engaging user interactions. All team assets (designs, docs, videos) are organized and linked for easy access.

### Key Features
- **User Authentication & Roles**: Guest and registered users with role-based access (e.g., admin, user).
- **Quizzes & Progress Tracking**: Interactive quizzes on space topics, with progress saved per user.
- **Responsive Frontend**: Multi-page landing with HTML/CSS/JS for seamless user experience.
- **API-Driven**: RESTful APIs for frontend-backend communication.

## Tech Stack
| Component     | Technology                  | Purpose                  |
|---------------|-----------------------------|--------------------------|
| **Backend**   | Laravel 11 (PHP)            | API, Database, Auth      |
| **Frontend**  | HTML5, CSS3, Vanilla JS     | UI/UX, Interactive Pages |
| **Database**  | MySQL (via Laravel)         | Users, Quizzes, Progress 

## Setup & Installation

### Backend (Laravel)
1. Clone the repo: `git clone https://github.com/amiramahmoud77/NASA-SPACE-APPS-CAIRO.git`
2. Navigate to backend: `cd team-twinkle-tales/backend`
3. Install dependencies: `composer install`
4. Copy env: `cp .env.example .env`
5. Generate key: `php artisan key:generate`
6. Setup database: Update `.env` with DB details, then `php artisan migrate --seed`
7. Run server: `php artisan serve` (default: http://localhost:8000)

### Frontend
1. Open `team-twinkle-tales/frontend/landing.html` in your browser.
2. All pages are static; connect to backend API via JS (update URLs in `script.js`).

### Environment
- PHP 8.2+, Composer
- Node.js (optional for Vite builds)
- MySQL 8.0+

## API Endpoints
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/login`          | User authentication          |
| GET    | `/api/quizzes`        | Fetch quizzes                |
| POST   | `/api/progress`       | Save user progress           |
| GET    | `/api/roles`          | Get user roles               |

Full docs: Check `team-twinkle-tales/docs/` for detailed guides.

## Assets & Resources
- **Designs**: [Google Drive Folder](https://drive.google.com/drive/folders/1eU9m9YEt8J0x7ytpZ1tPr10cCNNvlYRp?usp=sharing) – UI/UX prototypes and images.
- **Documentation**: 
  - [Main Project Doc](https://docs.google.com/document/d/1wXhyp6OOCFh7k0PQQ4TuKRWGuNsEqYtyhPHOfLwPkwI/edit?usp=drivesdk)
  - [Additional Notes](https://docs.google.com/document/d/1TsHg60SBbuBSDz2-S4MncOJ7XYjJd_Gudz8wbpo1IFc/edit?usp=sharing)
- **Videos**: [Google Drive Videos](https://drive.google.com/drive/folders/10FP4wz5jXBlhkk9k2iQjsvMuQNMX_rCM?usp=drive_link) – Demos and recordings.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- NASA Space Apps Challenge
- Laravel Framework
- Open-source contributors

---


| **Tools**     | Composer, Vite, Artisan     | Build & Deployment       |

## Project Structure
