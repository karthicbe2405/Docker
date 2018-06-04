sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install curl

sudo curl -sL https://deb.nodesource.com/setup_8.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh

sudo apt-get -y install python-pip nodejs redis-server
sudo npm install -g typescript @angular/cli@6.0.3 --allow-root
sudo pip install -U pip setuptools
sudo pip install -r requirements.txt

