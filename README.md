# Appointment System

An appointment system is where the user can add/edit or view his upcoming appointment. Application written in Laravel 8 with Vue & CSS Scaffolding.

## Server Requirements
The Laravel framework has a few system requirements. You should ensure that your web server has the following minimum PHP version and extensions:
- PHP >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

## Installation Guide
- Extract the archive and put it in the folder you want
- Run `cp .env.example .env` file to copy example file to `.env`
- Then edit your `.env` file with DB credentials and other settings.
- Run `composer install` command
- Run `php artisan migrate --seed` command this will create 5 static user.
- Notice: seed is important, because it will create users for you.
- Run `php artisan key:generate` command.
- Run `npm install`
- Run `npm run dev`
- For file/photo fields, run `php artisan storage:link` command.
- Done run `php artisan serve`

## Default credentials
Systems will seed 5 users and 1 admin with common password which is `abc@12345` Here is the list
- User 1: `han.solo@lorem.com`
- User 2: `obiwan.kenobi@lorem.com`
- User 3: `darth.vedar@lorem.com`
- User 4: `kylo.ren@lorem.com`
- User 5: `padme@lorem.com`
- Common Password for all users: `abc@12345`

## Third Party resources
- Theme: Material UI by Creative Tim: https://demos.creative-tim.com/vue-material-dashboard/#/dashboard
- Spatie User Authentication
- Calendar Plugin http://fullcalendar.io/

## Screenshots
### Login 
![image](https://user-images.githubusercontent.com/4415797/139575294-6f0a7a8b-ade1-41d7-ad52-e14acda27379.png)

### Appointments in next 2 hours:
![image](https://user-images.githubusercontent.com/4415797/139575152-f03aa01e-e823-471c-8a81-15e7cef76aef.png)

### Calendar View
![image](https://user-images.githubusercontent.com/4415797/139575166-42ac3feb-2e4d-44c8-8f1d-dbf6b6c6b3b3.png)

### Add new appointment by clicking on calendar date
![image](https://user-images.githubusercontent.com/4415797/139575219-15c01584-fcb2-4f6e-9fcf-8a6781b51880.png)

### View Appointment by clicking on Appointment under calendar view
![image](https://user-images.githubusercontent.com/4415797/139575277-ef50bf58-992b-4ba9-b97c-1d23f491d21d.png)
