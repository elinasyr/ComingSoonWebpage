# ComingSoonWebpage 
1. git clone <link> 
2. cd Project -> Create environment: 
	- python3 -m venv env
	- Set-ExecutionPolicy Unrestricted -Scope Process
	- .\env\Scripts\activate.bat 
	- .\env\Scripts\activate
3. Inside the environment: 
pip install -r requirements.txt 
4. Choose database: 
	-MySQLlight (default database from Django) 
	Replace in settings.py: 
	DATABASES = {
    		'default': {
        	'ENGINE': 'django.db.backends.sqlite3',
        	'NAME': BASE_DIR / 'db.sqlite3',
    		}
	}
	- Or download MySQL and create database, then change the in the settings.py file appropriatly the UserName, Localhost, Password, Database Name etc
	- Of course other options are also provided, read the documentation of Django 
4. Commands to connect the db and create superuser 
	- python manage.py makemigrations main 
	- python manage.py migrate 
	- python manage.py createsuperuser (*save the credentials*) 
5. To run the above: 
	python manage.py runserver