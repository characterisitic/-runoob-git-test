# OS & Dependencies

- Install/Initial Linux OS on AWS: 

    ```Ubuntu 14.04.4 or 16.04.1 LTS version (64bit)```

- Install dependencies by issuing the following commands in the Terminal:

    ````sudo apt-get install git mysql-server python-dev python-pip nginx supervisor vim memcached````

# django
git clone ``git@github.com:bit-cool/12Golf_system.git``

cd 12Golf_system

pip install -r requirements.txt (建议在virtual_env下)

初始化数据库

python manage.py makemigrations

python manage.py migrate

# nginx

cd /etc/nginx/conf.d

vim nginx_12golf.conf

```
server {
    charset  utf-8;
    listen 80 ;
#   listen [::]:80 default_server ipv6only=on;

    root /usr/share/nginx/html;
    index index.html index.htm;

    # Make site accessible from http://localhost/
    server_name localhost;
    keepalive_timeout 60; 
    location / { 
 #       limit_req zone=ConnLimitZone burst=5 nodelay;
        add_header Cache-Control no-store;
        include uwsgi_params;
        #uwsgi_read_timeout 600;
        uwsgi_pass 127.0.0.1:9028;
    }
    location ~/static/ {
        root /home/12golf/12Golf_system/;
        index index.html index.htm;
    }

}
```
上述``uwsgi_pass 127.0.0.1:9028;``中的端口号需要和django工程下的uwsgi端口号一致

保存退出

重启nginx

sudo service nginx restart

# supervisor
sudo apt-get install supervisor

cd /etc/supervisor/conf.d

vim supervisor_golf.conf 

(输入以下内容，注意virtualenv_for_12golf请替换成本地的virtualenv路径，以下只是一个例子，里面的路径请自行替换)
```
[program:golf]
user=12golf
command=/home/12golf/virtualenv_for_12golf/bin/uwsgi --ini /home/12golf/12Golf_system/uwsgi.ini
stopsignal=QUIT
autostart=true
autorestart=true
stdout_logfile=/home/12golf/log/supervisor.log
redirect_stderr=true
```
保存退出。

cd /etc/supervisor

vim supervisord.conf

加入以下内容
```
[inet_http_server]
port=0.0.0.0:9001
username = 12golf
password = 123
```
保存退出

启动supervisor

supervisord -c supervisor.conf

此时可以在浏览器里打开9001端口看是否能够登录。
