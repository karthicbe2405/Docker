FROM python:2

WORKDIR /usr/src/app

RUN sudo apt-get -y install redis-server

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD [ "python", "Backend/manage.py", "runserver" ]
