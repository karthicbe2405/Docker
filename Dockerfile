FROM python:2

WORKDIR /usr/src/app

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install redis-server

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD [ "python", "Backend/manage.py", "runserver", "0.0.0.0:8000" ]
