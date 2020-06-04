rm -rf pyenv || 1
virtualenv -p /usr/bin/python2.7 pyenv
pyenv/bin/pip install wheel
pyenv/bin/pip install -r requirements.txt
