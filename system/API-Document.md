# API DOCUMENT

Welcome to the 12Golf_system wiki!

## ip address ``123.56.77.193``, 2.0版本在``123.56.77.193:8000``

### PS:若API返回数据格式有问题，请在所有的URL后面加上参数``?format=json``

### 请在获得access_token之后，访问api的时候一直带上这个参数``?access_token=``


# 1.User

## 1.1 sendMail

接口简介：用于邮箱注册用户获取验证码

接口url:``~/api/v1/send_mail/``

请求类型：POST

接口参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|string||是|邮箱

返回值：

status_code|说明
----|----
200|成功
403|失败

## 1.2 checkCode

接口简介：用于用户注册，验证验证码

接口url: ``~/api/v1/check_code/``

请求类型: POST

接口参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|string||是|邮箱
code|string||是|验证码

返回值：

status_code|说明
----|----
200|成功
404|失败，验证码错误


## 1.2.1 Check Email

接口简介：用于验证邮箱是否已经被注册

接口url: ``~/api/v1/check_email/``

请求类型: POST

接口参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|string||是|邮箱

返回值：

status_code|说明
----|----
200|未注册
403|已经被注册


## 1.3 register

接口简介：用于用户注册

接口url:``~/api/v1/register/``

请求类型：POST

接口参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
username|string||是|用户名
password|string||是|密码

返回值：

status_code|说明
----|----
201|成功
403|失败，用户已存在

## 1.4 login

接口简介：用于用户登录

接口url:``~/api/v1/login/``

请求类型：POST

接口参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
username|string||是|用户名
password|string||是|密码

返回值：

status_code|说明
----|----
200|成功，返回access_token
401|失败，用户名或密码错误

## 1.5 logout

接口简介：用于用户登出

URL:``~/api/v1/logout/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|string||是|token

返回参数：

status_code|说明
----|----
400|登出失败
200|登出成功

## 1.6 user_info

接口简介：用于查看用户自身信息

URL:``~/api/v1/user_info/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 1.6.1 user_info

接口简介：用于修改用户自身信息

URL:``~/api/v1/user_info/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
age|||否|年龄
birthday|||否|生日
nickname|||否|昵称
email|||否|邮箱
location|||否|位置
phone|||否|手机
portrait|||否|头像
handicap|||否|差点
gender|||否|性别

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 1.6.2 user_detail

接口简介：用于查看其他用户信息

URL:``~/api/v1/user_detail/?user_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
user_id|

返回参数：

status_code|说明
----|----
200|成功
404|没有该用户

## 1.7 order_list

接口简介：用于查看用户自身订单

URL:``~/api/v1/order_list/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
last|int|0|否|上一个返回数据的最后一个order_id
count|int|10000|否|返回多少条数据

返回参数：

status_code|说明
----|----
order_list|订单列表
200|成功
401|未登录

## 1.8 coupon_code_list

接口简介：用于查看用户自身优惠券

URL:``~/api/v1/coupon_code_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|

返回参数：

status_code|说明
----|----
coupon_code|订单列表
200|成功
401|未登录

## 1.9 change_password

接口简介：用于修改密码

URL:``~/api/v1/change_password/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|||是|邮箱
password|||是|新密码
old_password|||否|原密码，如果没有原密码，就是forget password

返回参数：

status_code|说明
----|----
200|成功
404|没有此邮箱
401|密码错误

## 1.10 user_info

接口简介：用于修改用户自身信息

URL:``~/api/v1/user_info/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
nickname|||否|
phone|||否|
gender|||否|
age|||否|
location|||否|

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 1.11 wish_list

接口简介：用于查看用户wishlist

URL:``~/api/v1/wish_list/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
last|int|0|否|传上一页最后一个对应的item_id
count|int|10000|否|返回的记录数

返回参数：

status_code|说明
----|----
200|成功
401|未登录
wish_list|

## 1.12 address_list

接口简介：用于查看用户address_list

URL:``~/api/v1/address_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录
address_list|地址列表


## 1.12.1 default_address

接口简介：用于查看用户默认地址

URL:``~/api/v1/default_address/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录
address_list|地址

## 1.13 cart_list

接口简介：用于查看用户购物车列表，cart_list

URL:``~/api/v1/cart_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 1.14 third_party_login

接口简介：第三方登录接口

URL:``~/api/v1/third_login/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
uid|char||是|e.g."asddddd"
type|char||是|e.g."facebook"
gender|int||是|e.g."1",0：男，1：女，2：未知
icon|char,url||是|e.g."www.baidu.com/fdsaf/",头像的url
nickname|char||否|e.g.昵称


返回参数：

status_code|说明
----|----
200|成功
401|未登录
access_token|


## 1.15 friend_list

接口简介：用户好友列表

URL:``~/api/v1/friend_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----

返回参数：

status_code|说明
----|----
200|成功
401|未登录
friend_list|好友列表

## 1.15.1 user_search

接口简介：搜索用户

URL:``~/api/v1/user_search/?name=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
name|char|None|是|可以是nickname，也可以是email

返回参数：

status_code|说明
----|----
200|成功
user_list|用户列表

## 1.15.2 user_friend_search

接口简介：搜索该用户的好友

URL:``~/api/v1/friend_search/?name=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
name|char|None|是|nickname

返回参数：

status_code|说明
----|----
200|成功
friend_list|用户列表

## 1.16 forget_password

接口简介：忘记密码，输入注册邮箱，发送重置后的密码到邮箱

URL:``~/api/v1/forget_password/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|char||是|邮箱

返回参数：

status_code|说明
----|----
200|成功
401|未登录
404|未输入邮箱
403|该邮箱不是注册邮箱


## 1.17 NeighborUser

接口简介：附近的用户

URL:``~/api/v1/neighbor_user/?access_token=&lat=&lon=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
lat|float||是|纬度
lon|float||是|经度
返回参数：

status_code|说明
----|----
200|成功,count


## 1.18 mypost

接口简介：我发表的状态

URL:``~/api/v1/my_post/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一条状态的post_id
count|int|10000|否|一次返回多少条数据

返回参数：

status_code|说明
----|----
200|成功,post_list

## 1.18.1 userpost

接口简介：查看某人发表的状态

URL:``~/api/v1/user_post/?access_token=&last=&count=&user_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一条状态的post_id
count|int|10000|否|一次返回多少条数据
user_id|int|0|是|查看的这个用户的id

返回参数：

status_code|说明
----|----
200|成功,post_list


## 1.19 friend_post

接口简介：我的好友发表的状态

URL:``~/api/v1/friend_post/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一条状态的post_id
count|int|10000|否|一次返回多少条数据

返回参数：

status_code|说明
----|----
200|成功,post_list

## 1.19.1 all_post

接口简介：所有人的post

URL:``~/api/v1/all_post/?last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
last|int|0|否|最后一条状态的post_id
count|int|10000|否|一次返回多少条数据

返回参数：

status_code|说明
----|----
200|成功,post_list

## 1.20 ball_friend_list

接口简介：我的球友列表

URL:``~/api/v1/ball_friend_list/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个球友的id
count|int|10000|否|一次返回多少条数据

返回参数：

status_code|说明
----|----
200|成功,friend_list

## 1.21 ball_friend_detail

接口简介：查看球友信息

URL:``~/api/v1/ball_friend_detail/?access_token=&user_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
user_id|int|0|是|球友id

返回参数：

status_code|说明
----|----
200|成功,friend_info

## 1.21.1 ball_friend_detail

接口简介：修改球友信息

URL:``~/api/v1/ball_friend_detail/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
user_id|int|0|是|球友id
name|||否|姓名
gender|||否|性别
phone|||否|手机号码
handicap|||否|差点

返回参数：

status_code|说明
----|----
200|成功

## 1.22 ball_friend_add

接口简介：添加球友

URL:``~/api/v1/ball_friend_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
name||||姓名
gender||||性别
phone||||手机号码
handicap||||差点

返回参数：

status_code|说明
----|----
201|成功

## 1.23 ball_friend_delete

接口简介：删除球友

URL:``~/api/v1/ball_friend_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
user_id|int|0|是|球友id

返回参数：

status_code|说明
----|----
200|成功


## 1.24 my_event

接口简介：我发出的邀请

URL:``~/api/v1/my_event/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个event_id
count|int|10000|否|每次显示的记录数

返回参数：

status_code|说明
----|----
200|成功

## 1.25 event_detail

接口简介：邀请详情

URL:``~/api/v1/event_detail/?access_token=&event_id``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|

返回参数：

status_code|说明
----|----
200|成功, event_detail

## 1.26 event_add

接口简介：发起邀请

URL:``~/api/v1/event_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
title|||是|标题
content|||是|内容
start_time|||是|开始时间，datetime,"2011-11-11 11:11:11"
end_time|||是|结束时间时间，datetime,"2011-11-12 11:11:11"
golf_course|||是|球场id
number_limit|||是|人数限制

返回参数：

status_code|说明
----|----
200|成功
403|失败，数据错误

## 1.26.1 event_modify

接口简介：修改邀请

URL:``~/api/v1/event_modify/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|||是|邀请的ID
title|||否|标题
content|||否|内容
start_time|||否|开始时间，datetime,"2011-11-11 11:11:11"
end_time|||是|结束时间时间，datetime,"2011-11-12 11:11:11"
golf_course|||否|球场id
number_limit|||否|人数限制

返回参数：

status_code|说明
----|----
200|成功
403|失败，数据错误

## 1.27 event_delete

接口简介：删除邀请

URL:``~/api/v1/event_delete/?access_token=&event_id=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|char||是|可以传多个id，比如"1,2,3"，逗号隔开

返回参数：

status_code|说明
----|----
200|成功

## 1.28 event_join

接口简介：加入邀请

URL:``~/api/v1/event_join/?access_token=&event_id=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|

返回参数：

status_code|说明
----|----
200|成功
403|失败，满人了

## 1.28.1 event_quit

接口简介：退出邀请

URL:``~/api/v1/event_quit/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|

返回参数：

status_code|说明
----|----
200|成功
404|没有该邀请

## 1.28.2 event_reject

接口简介：拒绝邀请

URL:``~/api/v1/event_reject/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
event_id|

返回参数：

status_code|说明
----|----
200|成功
404|没有该邀请

## 1.29 my_invite_event

接口简介：我收到的邀请

URL:``~/api/v1/my_invite_event/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个event_id
count|int|10000|否|每次显示的记录数

返回参数：

status_code|说明
----|----
200|成功,event_list

## 1.30 my_join_event

接口简介：我加入的邀请

URL:``~/api/v1/my_join_event/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个event_id
count|int|10000|否|每次显示的记录数

返回参数：

status_code|说明
----|----
200|成功,event_list

## 1.31 upload_portrait

接口简介：上传头像

URL:``~/api/v1/upload_portrait/

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
file|文件||是|上传的文件

返回参数：

status_code|说明
----|----
200|成功,path


## my_score

接口简介：我的计分

URL:``~/api/v1/my_score/?access_token=&last=&count=&status=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个score_id
count|int|10000|否|每次显示的记录数
status|char||否|start,end,分别表示进行中和已结束

返回参数：

status_code|说明
----|----
200|成功,score_list


## score_detail

接口简介：计分详情

URL:``~/api/v1/score_detail/?access_token=&score_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
score_id||

返回参数：

status_code|说明
----|----
200|成功,score_info

## score_add

接口简介：添加计分

URL:``~/api/v1/score_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
date|date|无|是|打球日期,"2011-11-11"
time|time|无|是|打球时间，"11:11:11"
total_hole|int|0|是|总洞数
status|char||是|start,end表示进行中和结束
finished_hole|int|0|否|已完成洞数
location|char||是|打球地点
par_info|dict|默认标准杠|否|默认72杆，4个3杆，10个4杆，4个5杆，如果传入，请使用``{"1":3,"2":3,...,"18":5}``，这样的格式，表示洞1标准杆3，洞18标准杆5
scores_info|dict|每洞的杆数和推杆|是|传入方式和cart_modify类似，如``scores_info:{"1":[3,2],"2":[4,2],....}``,其中key表示第几个洞，字符串表示，value是一个list,有两个值，第一个值表示这个洞我打的杆数，第二个值表示其中的推杆数。

返回参数：

status_code|说明
----|----
200|成功

## score_delete

接口简介：删除计分

URL:``~/api/v1/score_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
score_id|char||是|可以传入多个id，比如'1,2,3'，逗号隔开

返回参数：

status_code|说明
----|----
200|成功


## score_modify

接口简介：修改计分

URL:``~/api/v1/score_modify/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
score_id|int|0|是|计分的id
date|date|无|否|打球日期,"2011-11-11"
time|time|无|否|打球时间，"11:11:11"
total_hole|int|0|否|总洞数
status|char||否|start,end表示进行中和结束
finished_hole|int|0|否|已完成洞数
location|char||否|打球地点
par_info|dict|默认标准杠|否|默认72杆，4个3杆，10个4杆，4个5杆，如果传入，请使用``{"1":3,"2":3,...,"18":5}``，这样的格式，表示洞1标准杆3，洞18标准杆5
scores_info|dict|每洞的杆数和推杆|否|传入方式和cart_modify类似，如``scores_info:{"1":[3,2],"2":[4,2],....}``,其中key表示第几个洞，字符串表示，value是一个list,有两个值，第一个值表示这个洞我打的杆数，第二个值表示其中的推杆数。

返回参数：

status_code|说明
----|----
200|成功

## coach_apply_list

接口简介：教练申请列表

URL:``~/api/v1/coach_apply_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|

返回参数：

status_code|说明
----|----
200|成功,apply_list

## coach_apply_info

接口简介：最近一次教练申请详细信息

URL:``~/api/v1/coach_apply_info/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|

返回参数：

status_code|说明
----|----
200|成功,apply_info

# 2.Item

## 2.1 item_info

接口简介：用于查看该item_id的商品的信息

URL:``~/api/v1/item_info/?item_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
item_id|int|0|是|

返回参数：

status_code|说明
----|----
200|成功
404|该商品不存在

## item_comment_list

接口简介：用于查看该item_id的评价

URL:``~/api/v1/item_comment_list/?item_id=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
item_id|int|0|是|
last|int|0|否|最后一个评论的id
count|int|10000|否|返回的记录数

返回参数：

status_code|说明
----|----
200|成功
404|该商品不存在


## 2.2 item_list

接口简介：用于查看所有商品的列表

URL:``~/api/v1/item_list/?last=&count=&class=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
last|int|0||上一个item的id值,默认为0,即从头开始刷新
count|int|10||每次返回多少个item,默认为10个
class|int|0||类别id

返回参数：

status_code|说明
----|----
200|成功
item_list|

## 2.3 brandList

接口简介：用于查看所有商品的品牌

URL:``~/api/v1/brand_list/?class=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
class|int|0|是|分类id

返回参数：

status_code|说明
----|----
200|成功
brand_list|

## 2.4 classification_list

接口简介：用于查看所有分类

URL:``~/api/v1/classification_list/``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
classification_id|int|0|否|当前分类的classification_id,返回该分类的下一级分类
level|int|1|否|第几层分类

返回参数：

status_code|说明
----|----
200|成功,classification_list


## 2.5 editor_choice_list

接口简介：用于查看所有推荐商品的列表

URL:``~/api/v1/editor_choice_list/``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----


返回参数：

status_code|说明
----|----
200|成功
404|没有找到该item
editor_choice|推荐商品


## 2.6 order_info

接口简介：用于查看单个order

URL:``~/api/v1/order_info/?access_token=&order_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
order_id|int||是|

返回参数：

status_code|说明
----|----
200|成功
404|没有找到该order
order|order详细信息

## 2.7 TopN

接口简介：查看首页的topn物品

URL:``~/api/v1/topn_item/``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----

返回参数：

status_code|说明
----|----
200|成功
topn|每个classification有一个item_list，里面是topnitem

## 2.8 YouLike

接口简介：猜你喜欢的物品

URL:``~/api/v1/you_like/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----

返回参数：

status_code|说明
----|----
200|成功
item_list|

## 2.9 Promotion

接口简介：促销的物品

URL:``~/api/v1/promotion/?class=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
class|int|None|否|促销的物品分类，默认为空

返回参数：

status_code|说明
----|----
200|成功
item_list|

## 2.10 HotSale

接口简介：热卖的物品

URL:``~/api/v1/hot_sale/?class=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
class|int|None|否|热卖的物品分类，默认为空

返回参数：

status_code|说明
----|----
200|成功
item_list|


## 2.11 Banner

接口简介：轮播

URL:``~/api/v1/banner/?type=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
type|int|0|是|0表示首页的轮播，1表示商城的轮播

返回参数：

status_code|说明
----|----
200|成功，banner_list


## 2.12 Surplus

接口简介：获取商品余量

URL:``~/api/v1/surplus/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
item_id|int|0|是|item_id
property|dict|None|是|"property":{"hand":"left","color":"red",...}，注意，对于一个item,需要传入他所有的属性才能查到对应的剩余量

返回参数：

status_code|说明
----|----
200|成功，surplus

# 3.ACTION

## 3.1 post_comment_add

接口简介：用于发表post评论

URL:``~/api/v1/post_comment_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
post|int|0|是|post_id
comment_content|text||是|
reply_id|int|0|否|如果传入replyid，则这是一条回复，否则不传该参数


返回参数：

status_code|说明
----|----
200|成功
404|找不到该post

## 3.2 post_comment_delete

接口简介：用于删除评论

URL:``~/api/v1/post_comment_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
comment_id|int|0||可以是多个，比如'1,2,3'

返回参数：

status_code|说明
----|----
200|成功

##  3.2.1 post_like

接口简介：用于点赞post

URL:``~/api/v1/post_like/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
post_id|int|0||
返回参数：

status_code|说明
----|----
200|成功

##  3.2.2 post_comment_list

接口简介：用于查看评论

URL:``~/api/v1/post_comment_list/?last=&count=&post_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
last|int|0|否|最后一条comment的id
post_id|int|0||是|
count|int|10000|否|

返回参数：

status_code|说明
----|----
200|成功,comment_list


##  3.2.3 post_detail

接口简介：用于查看post的详细信息

URL:``~/api/v1/post_detail/?post_id=`

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
post_id|int|0||是|


返回参数：

status_code|说明
----|----
200|成功,post_info


## 3.3 coupon_code_add

接口简介：用于添加优惠码

URL:``~/api/v1/coupon_code_add/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
coupon_number|int|0||优惠券上的数字

返回参数：

status_code|说明
----|----
200|成功
404|找不到该coupon_code
401|未登录

## 3.4 wish_add

接口简介：用于添加愿望

URL:``~/api/v1/wish_add/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
item_id|char|0||物品id,可以传入list,比如'1,2,3,4'，逗号隔开
access_token||||
返回参数：

status_code|说明
----|----
200|成功
404|找不到该item
401|未登录

## 3.4 wish_delete

接口简介：用于删除愿望

URL:``~/api/v1/wish_delete/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
item_id|char|0||物品id,可以传入list,比如'1,2,3,4'
access_token||||
返回参数：

status_code|说明
----|----
200|成功
404|找不到该item
401|未登录

## 3.5 shipping_address_add

接口简介：用于添加地址

URL:``~/api/v1/address_add/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
name|char||是|
mobile_number|char||是|手机号
country|char||是|国家
state|char||是|州/省
city|char||是|市
county|char||是|县、区
street|char||街道、街区
postal_code|char||是|邮编
is_default|bool|false|否|是否为默认地址,0/1，0表示不是默认地址，1表示是默认地址

返回参数：

status_code|说明
----|----
200|成功
403|参数错误
401|未登录

## 3.6 shipping_address_delete

接口简介：用于删除地址

URL:``~/api/v1/address_delete/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
address_id|char||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 3.7 shipping_address_modify

接口简介：用于修改地址

URL:``~/api/v1/address_modify/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
address_id|int|||
name|char||是|
mobile_number|char||是|手机号
country|char||是|国家
state|char||是|州/省
city|char||是|市
county|char||是|县、区
street|char||街道、街区
postal_code|char||是|邮编
is_default|bool|false|否|是否为默认地址,0/1，0表示不是默认地址，1表示是默认地址

返回参数：

status_code|说明
----|----
200|成功
403|参数错误
404|没有该地址
401|未登录

## 3.7.1 address_info

接口简介：用于查看一个地址

URL:``~/api/v1/address_info/?access_token=&address_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
address_id|int|||

返回参数：

status_code|说明
----|----
200|成功, 返回address
404|没有该地址
401|未登录


## 3.7.2 deliver_method

接口简介：用于查看快递方式

URL:``~/api/v1/deliver_method/``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----


返回参数：

status_code|说明
----|----
200|成功, 返回deliver_method


## 3.8 order_add

接口简介：用于添加订单

URL:``~/api/v1/order_add/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
order_status|int|1|否|订单状态
seller|int|1|是|卖家id，~~预留字段，暂时不用传,~~现在需要传入seller的id，每个item有对应的seller字段，可以取到seller_id
payment_method|char|adyen|否|付款方式
receiver|char||是|收货人
shipping_address|char||是|收货地址
country|char||是|收货国家
postal_code|char||是|邮编
receiver_phone|char||是|收货手机号
subtotal|float||是|每个物品的小结,e.g."11,22,33.1"
shipping_handling|float|0|是|运费
gift_card|float|0|否|礼品卡
points|int|0|否|使用多少积分
discount|float|1|否|折扣
total|float||是|总价
item_list|char||是|e.g. "1,2,3"
item_number|char||是|每个物品购买的数量,e.g."2,3,4"，和item_list, subtotal一一对应
coupon_code|int|0|否|如果没有用优惠码，传0或者不传，否则传入coupon_code的id
property|char||是|对应的属性,eg."property":[{u'shaft': u'undefine', u'loft': u'undefine', u'flex': u'undefine', u'hand': u'undefine'}]
deliver_method|char|express|是|快递方式

返回参数：

status_code|说明
----|----
200|成功
403|参数错误
401|未登录
400|数量超过库存，具体信息获取，"error_msg":[]

订单状态说明：

order_status|status_string|说明
------|----|----
1|waiting payment|waiting payment
2|paid|已付款
3|shipping|配送中
4|delivered|订单完成
5|cancel|取消订单
6|returning|退货中
7|returned|退货完成

## 3.9 order_delete

接口简介：用于删除订单

URL:``~/api/v1/order_delete/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
order_id||||

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 3.10 filter

接口简介：用于搜索

URL:``~/api/v1/filter/?order=&brand=&class=&price_1=&price_2=&name=&count=&last=&seller=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
name|str|None|否|物品名称，品牌,描述中包含该name的
order|int|0|否|排序方式，0表示不排序，-1表示按价格降序，1表示按价格升序,2表示按照销量排序,3表示返回新品
brand|char|0|否|品牌
class|int|0|否|分类
price_1|float|0|否|价格的下界
price_2|float|111111111|否|价格的上界
count|int|20|否|表示每次返回的个数
last|int|0|否|表示上一次访问最后一个item的id
seller|int|0|否|卖家的id

返回参数：

status_code|说明
----|----
200|成功
401|未登录
item_list|

## 3.11 cart_add

接口简介：用于添加购物车物品(可以多个)

URL:``~/api/v1/cart_add/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
cart_list|char|||对应的item_id,e.g."1,2,3"，**注意，不是list,是一个已逗号分割的字符串"1,2,3,4"**
cart_number|char|||对应的个数，e.g."100,200,300"
subtotal|char|||对应的小结，e.g."111,222,333"
property|char|||对应的属性,eg."property":[{u'shaft': u'undefine', u'loft': u'undefine', u'flex': u'undefine', u'hand': u'undefine'}]

返回参数：

status_code|说明
----|----
200|成功
401|未登录
403|失败
400|数量超过库存，具体信息获取，"error_msg":[]

## 3.12 cart_delete

接口简介：用于删除购物车的物品(多个)

URL:``~/api/v1/cart_delete/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
item_id||||物品的id的list,以逗号隔开"item_id":"1,2,3,4"
property||||物品的属性，"property":[{"shaft":"undefine","loft":"undefine","flex":"undefine","hand":"undefine"},{...},{...},{...}],和item_id的长度保持一致。

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 3.13 cart_modify

接口简介：用于修改购物车

URL:``~/api/v1/cart_modify/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token||||
cart_list|char|||对应的item_id,e.g."1,2,3",仅输入修改的物品id,下面的输入与这里对齐
cart_number|char|||对应的个数，e.g."100,200,300"
subtotal|char|||对应的小结，e.g."111,222,333"
property|char|||对应的属性,eg."property":[{u'shaft': u'undefine', u'loft': u'undefine', u'flex': u'undefine', u'hand': u'undefine'}]

返回参数：

status_code|说明
----|----
200|成功
401|未登录
403|失败
400|数量超过库存，具体信息获取，"error_msg":[]

## 3.14 order_modify

接口简介：用于修改订单

URL:``~/api/v1/order_modify/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
order_id|||是|
order_status|int||否|订单状态
payment_method|char||否|支付方式
receiver|char||否|
country|char||否|
shipping_address|char||否|
postal_code|char||否|
points|int|0|否|使用多少积分
receiver_phone|char||否|**可以传递这里的任意个参数**


返回参数：

status_code|说明
----|----
200|成功
401|未登录
403|失败

## 3.15 cart_clean

接口简介：用于清空购物车

URL:``~/api/v1/cart_clean/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录
404|失败

## 3.16 pay

接口简介：用于支付测试

URL:``~/api/v1/pay/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
data|||是|该data是客户端加密后传过来的，具体请参考adyen官方文档，或者询问IOS和Android端的小伙伴,请注意value这个值，需要在原来的数字上乘以100，比如原价是$100,那么传过来必须的值必须是``value=10000``，因为adyen默认你传过来的数值都是乘以100的，也就是没有小数点的。
order_id|||是|对应的订单id,如果是多个订单，用英文逗号连接，例如64,65,66,67
order_type|int||是|0表示order,1表示golf_course_order

返回参数：

status_code|说明
----|----
200|成功
401|未登录
403|失败
400|失败，points not enough,积分不足

## 3.17 friend_add

接口简介：用于添加好友

URL:``~/api/v1/friend_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
user_id|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录

## 3.18 friend_delete

接口简介：用于删除好友

URL:``~/api/v1/friend_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
user_id|||是|


返回参数：

status_code|说明
----|----
200|成功
401|未登录

## post_add

接口简介：用于发布朋友圈信息

URL:``~/api/v1/post_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
location|Char|null|是|地址
content|Textfield||是|朋友圈的文字信息
picture|Textfield||是|图片的url，多张以空格隔开，“www.baidu.com,www.baidu.com,www.baidu.com”类似



返回参数：

status_code|说明
----|----
200|成功
401|未登录

## post_delete

接口简介：用于删除朋友圈信息

URL:``~/api/v1/post_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
post_id|||是|可以删除多个，比如'1,2,3',逗号隔开

返回参数：

status_code|说明
----|----
200|成功
401|未登录


## upload

接口简介：用于上传朋友圈图片

URL:``~/api/v1/upload/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
file|||是|可以传多张图片

返回参数：

status_code|说明
----|----
200|成功


## item_comment_add

接口简介：用于发布商品评价

URL:``~/api/v1/item_comment_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
item_id|int|0|是|
comment_content|Textfield||是|评论内容
order|int|0|是|订单的id，必须有订单才能对该item进行评论

## item_comment_delete

接口简介：用于删除商品评价

URL:``~/api/v1/item_comment_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
comment_id|int|0|是|可以是多个，比如'1,2,3'


返回参数：

status_code|说明
----|----
200|成功
401|未登录

## user_recommend

接口简介：给用户推荐感兴趣的用户

URL:``~/api/v1/user_recommend/?access_token=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
last|int|0|否|最后一个用户的id
count|int|10000|否|返回的记录数


返回参数：

status_code|说明
----|----
200|成功，user_list
401|未登录


## get_points

接口简介：获得积分

URL:``~/api/v1/get_points/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
total|float|0|是|总价格

返回参数：

status_code|说明
----|----
200|成功，points
401|未登录

## return_product

接口简介：添加退货申请

URL:``~/api/v1/return_product/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
order_id|int||是|订单id
item_id|int||是|物品id，必须是这张订单里面的
type|int||是|退货类型，1退货，2换货
reason|text||是|退货原因

返回参数：

status_code|说明
----|----
200|成功
401|未登录

## feedback_add

接口简介：添加反馈

URL:``~/api/v1/feedback_add/

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
email|string||是|联系方式
content|text||是|反馈内容

返回参数：

status_code|说明
----|----
200|成功
403|数据错误


# 4.GolfCourse

## 4.1 golf_course_info

接口简介：用于获取球场信息

URL:``~/api/v1/golf_course_info/?golf_course_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
golf_course_id|||是|


返回参数：

status_code|说明
----|----
200|成功，返回golf_info
404|该球场不存在

## 4.2 golf_course_filter

接口简介：用于筛选球场

URL:``~/api/v1/golf_course_filter/?lon=&lat=&price_1=&price_2=&city=&order=&name=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
lon|float|0|否|经度
lat|float|0|否|纬度
price_1|float|0|否|价格的下限
price_2|float|11111111|否|价格上限
city|char|None|否|城市
order|int|0|否|1表示按照时间顺序排序，2表示按照价格从大到小，3表示价格从小到大，4表示按照距离排序,5表示按热门排序
name|char|None|否|球场名字
last|int|0|否|最后一个球场的id
count|int|10000|否|返回的记录数

返回参数：

status_code|说明
----|----
200|成功，返回golf_info

## 4.3 golf_course_order_info

接口简介：用于获取球场订单详细信息

URL:``~/api/v1/course_order_info/?order_id=&access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
order_id|||是|
access_token|||是|

返回参数：

status_code|说明
----|----
200|成功，返回order_info
404|order不存在


## 4.4 golf_course_order_list

接口简介：用于获取球场订单详细信息

URL:``~/api/v1/course_order_list/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|

返回参数：

status_code|说明
----|----
200|成功，返回order_list


## 4.5 golf_course_order_add

接口简介：用于添加球场订单

URL:``~/api/v1/course_order_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
golf_course|||是|球场id
package_id|||是|套餐id
start_time|datetime||是|开始时间"start_time":"2011-01-01 12:00:00"
price|float|0|是|价格
order_status||1|否|订单状态，默认为1，表示未支付
payment_method|char||否|支付手段，如adyen，PayPal，默认adyen，可以后面用course_order_modify修改
gift_card|float||否|礼品卡价格
coupon_code|int||否|优惠码的id
participant|char|''|否|打球人的id，格式为逗号分隔的字符串，如"1,2,3"，默认为空
receiver_phone|int||是|打球人手机号

返回参数：

status_code|说明
----|----
200|成功，返回order_id, uuid
403|失败

## 4.6 golf_course_order_delete

接口简介：用于删除球场订单

URL:``~/api/v1/course_order_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
order_id|||是|订单id

返回参数：

status_code|说明
----|----
200|成功
404|找不到该订单


## 4.7 golf_course_order_modify

接口简介：用于修改球场订单

URL:``~/api/v1/course_order_modify/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|||是|
order_id|||是|订单id
golf_course|||否|球场id
start_time|datetime||否|开始时间"start_time":"2011-01-01 12:00:00"
price|float|0|否|价格
order_status||1|否|订单状态，默认为1，表示未支付
payment_method|char||否|支付手段
gift_card|float||否|礼品卡价格
discount|float||否|折扣
coupon_code|int||否|优惠码的id

返回参数：

status_code|说明
----|----
200|成功，返回order_id, uuid
403|失败

## 4.8 course_schedule

接口简介：获得球场每天的可预定套餐

URL:``~/api/v1/course_schedule_filter/?access_token=&date=&course_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
date|日期|None|否|如果传入date，那么就是查询某一天的可预订套餐,如果不传入日期，那就是查询所有天数的最低价格
course_id|int|0|是|球场id

status_code|说明
----|----
200|package_list
404|球场id不存在

## 4.9 course_package_detail

接口简介：获得球场套餐的详细信息

URL:``~/api/v1/course_package_detail/?package_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
package_id||||套餐id

status_code|说明
----|----
200|package_info
404|package不存在

#5 Coach

## 5.1 coach_info

接口简介：用于获取教练信息

URL:``~/api/v1/coach_info/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|

status_code|说明
----|----
200|coach_info
404|该用户不是教练

## 5.2 coach_info

接口简介：用于修改教练信息

URL:``~/api/v1/coach_info/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
name|真实姓名
age|年龄
gender|性别
portrait|头像
personal_info|个人简介
achievement|成就
teaching_achievement|教学成就
teaching_location|教学地点
teaching_golf_course|教学球场
longitude|球场经度
latitude|球场纬度

status_code|说明
----|----
200|coach_info
404|该用户不是教练
403|数据错误

## 5.3 coach_schedule

接口简介：获取教练的训练套餐

URL:``~/api/v1/coach_schedule_filter/?access_token=&date=&coach_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
date|日期
coach_id|教练id

status_code|说明
----|----
200|package_list
404|该用户不是教练

## 5.4 coach_list

接口简介：获取教练的列表

URL:``~/api/v1/coach_list/``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----


status_code|说明
----|----
200|coach_list

## 5.5 coach_detail

接口简介：用于获取教练信息

URL:``~/api/v1/coach_detail/?coach_id=&lat=&lon=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
coach_id|
lat|float|0|否|
lon|float|0|否|

status_code|说明
----|----
200|coach_info
404|找不到该教练


## 5.6 coach_search

接口简介：用于查找教练

URL:``~/api/v1/coach_search/?name=&order=&lat=&lon=&free_day``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
name|char||是|教练名字
order|int|0|是|1:distance, 2:level, 3:teaching_number
lat|float|0|
lon|float|0|
free_day|char|||2016-11-11

status_code|说明
----|----
200|coach_list


## 5.7 coach_comment

接口简介：用于查找某个教练的评价

URL:``~/api/v1/coach_comment/?coach_id=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
coach_id|int||是|教练id
last|int|0|否|最后一条comment的id
count|int|10000|否|一次返回多少条数据

status_code|说明
----|----
200|coach_list

## 5.7 coach_free_day

接口简介：用于修改教练的空闲日期

URL:``~/api/v1/coach_free_day/?access_token``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
free_day|char|None|是|空闲的时间，比如"2011-11-11,2011-11-12"，用逗号分隔，请传所有数据，比如已经有日期"2011-11-10"，又加入"2011-11-11,2011-11-12", 那么传给API需要"2011-11-10,2011-11-11,2011-11-12"

status_code|说明
----|----
200|

## 5.8 coach_order_add

接口简介：用于添加教练预约

URL:``~/api/v1/coach_order_add/?access_token``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
coach|int||是|coach_id
date|||是|日期，"2011-11-11"
time|||是|时间，"11:11:11"
end_time|||是|结束时间,"01:30:00"
location|||是|地点
price|||是|价格
currency|char|SGD|否|币种
receiver_phone|||是|手机号

status_code|说明
----|----
200|
403|数据错误

## 5.9 coach_order_modify

接口简介：用于修改教练预约

URL:``~/api/v1/coach_order_modify/?access_token``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
order_id|||是|student_id
date|||否|日期，"2011-11-11"
time|||否|时间，"11:11:11"
duration|||否|持续时间,"01:30:00"
location|||否|地点
price|||否|价格
currency|||否|币种
receiver_phone|||否|手机号
tag|bool||否|是否被标记，只有教练可以修改，如果传入该参数，默认这个用户是教练，true/false，当修改tag时，请只传入这个参数
coach_confirm|int||否|确认，默认0(对教练表示未接受，对学生表示待接受)，1（对教练表示已接受，对学生表示已被接受）， 2（对教练表示已拒绝，对学生表示已被拒绝），3（对教练表示已授课，对学生表示学习完成），4（对学生表示取消订单).当修改coach_confirm状态时，请只传入这个参数。

status_code|说明
----|----
200|
403|数据错误

## 5.10 coach_order_delete

接口简介：用于删除教练预约

URL:``~/api/v1/coach_order_delete/?access_token``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
order_id||||订单id

status_code|说明
----|----
200|
404|不存在

## 5.11 coach_order_list

接口简介：用于查看我的教练预约列表

URL:``~/api/v1/coach_order_list/?access_token&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
last|int|0|否|最后一个订单id
count|int|10000|否|显示的记录数

status_code|说明
----|----
200|order_list

## 5.12 coach_order_detail

接口简介：用于查看我的教练预约详情

URL:``~/api/v1/coach_order_detail/?access_token&order_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
order_id||||订单id

status_code|说明
----|----
200|order_detail

## 5.13 my student

接口简介：用于查看我的学生(预约订单)

URL:``~/api/v1/my_student/?access_token=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|

status_code|说明
----|----
200|student_list

## 5.14 coach_apply_add

接口简介：用于添加申请教练的请求

URL:``~/api/v1/coach_apply_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
portrait|string|无|否|头像路径
name|string|无|是|姓名
gender|int|2|是|
age|int|无|是|年龄
teaching_age|string|无|是|教龄
personal_info|string|无|是|个人信息
achievement|string|无|是|所获成就
price|float|||教学价格
currency|string|||价格单位
teaching_location|string|||教学地点
teaching_golf_course|string|||教学球场
longitude|DecimalField|||教学球场经度
latitude|DecimalField|||教学球场纬度
teaching_achievement|string|无|是|教学成就

status_code|说明
----|----
200|申请已提交apply_info
403|数据格式有问题


## 5.15 coach_comment_add

接口简介：用于评价教练

URL:``~/api/v1/coach_comment_add/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
student|int|0|是|student_id
comment_content|char||是|评论内容
coach|int|0|是|教练的id

status_code|说明
----|----
200|成功
403|数据格式有问题

## 5.16 coach_comment_delete

接口简介：用于删除教练评价

URL:``~/api/v1/coach_comment_delete/?access_token=``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
access_token|
comment_id|||是|可以传入多个，'1,2,3',逗号隔开

status_code|说明
----|----
200|成功

## 5.17 coach_tag_student

接口简介：用于删除教练评价

URL:``~/api/v1/coach_tag_student/?coach_id=&last=&count=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
coach_id|
last|int|0|否|最后一条记录的id
count||||返回的记录数

status_code|说明
----|----
200|成功

# 6 Other API

## 6.1 Country Search

接口简介：用于查找国家

URL:``~/api/v1/country_search``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----

status_code|说明
----|----
200|country_list

## 6.2 State Search

接口简介：用于查找州/省

URL:``~/api/v1/state_search/?country_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
country_id|int|0|是|国家id

status_code|说明
----|----
200|state_list
404|没有该国家

## 6.3 City Search

接口简介：用于查找市

URL:``~/api/v1/city_search/?state_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
state_id|int|0|是|州/省id

status_code|说明
----|----
200|city_list
404|没有该州/省

## 6.4 County Search

接口简介：用于查找县/区

URL:``~/api/v1/county_search/?city_id=``

请求类型：GET

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
city_id|int|0|是|市id

status_code|说明
----|----
200|county_list
404|没有该市

## get token

接口简介：用于支付时获取token

URL:``~/api/v1/get_token/``

请求类型：POST

请求参数：

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
token|char||是|一个验证的字符串，由后台提供

status_code|说明
----|----
200|county_list
404|没有该市

# help page

类型|URL
----|---------------
aboutUs|/aboutUs
privatePolicy|/privatePolicy
conditions|/conditions
help|/help

## get app version

接口简介：用于获取App的最新版本号

URL:``~/api/v1/app_version/``

请求类型：POST

参数|类型|默认值|是否必传|说明
----|---|------|-------|----
type|string||是|获取的类型，Android或者IOS

返回值：

status_code|说明
----|---------------
200|返回最新版本信息
403|参数错误