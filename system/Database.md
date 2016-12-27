### 0、状态信息

order和golf_course_order里，数据库里用数字记录，表示下列状态

``1:waiting payment，2:paid，3：shipping,4:delivered，5:cancel，6:returning，7:returned``

### 1、用户表（AppUser）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
user|对应django User用户,用于权限管理|||外键，一对一|
gender	|性别	|整形		|Check(0,1，2)	|0:男 1:女 2：未知
age	|年龄	|整形		|	|
birthday	|生日	|日期|			
nickname	|昵称	|字符串	|30	|非空|	
username	|用户名	|字符串	|30	|非空，唯一	|
portrait	|头像	|字符串	|300	|	|图片路径|
email	|电子邮箱	|字符串	|30	|非空，唯一	
last_login	|上次登录时间	|日期时间||		非空	
registered_date	|注册日期	|日期时间||		非空	
phone	|手机号	|字符串	|20	|唯一	|
location	|所在地	|字符串	|200	|	
is_private	|是否私密|bool	|	|	是否供陌生人查看，default=0	
handicap	|差点	|int	|	|有特定计算公式，描述高尔夫水平	|[handicap wiki](https://en.wikipedia.org/wiki/Handicap_(golf))
longitude|经度	|float	|0|	经纬度用于计算附近的人
latitude|纬度	|float	|0
points|积分|Int|0
gpa|打球平均成绩|float|0
highest_score|最佳成绩|float|0
play_times|开球次数|Int|0
		

### 2、好友表（FriendList）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
friend_list_id	|主键				
appuser	|外键		|	one2one Field	
friend_list|	好友列表|	TextField			

### 3、第三方登录用户表（ThirdPartyUser）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
third_party_user_id	|主键				
uid	|社交登陆唯一标识码	|char	|150	|非空，唯一	
type	|表示哪种社交登录方式	|int	|	|非空	
appuser	|对应的appuser		|	one2one Field	|

### 4、卖家表（Seller）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
seller_id	|主键				
appuser	|对应的appuser			|one2one Field	
level	|店铺等级	|int			
name	|店铺名称	|char	|50		
description	|店铺描述	|TextField			

### 5、教练表（Coach）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
coach_id	|主键				
appuser	|对应的appuser			|one2one Field	
name|真实姓名|string|20
age|年龄|int
gender|性别|int
portrait|头像url|string|300
level|教练等级|int
teaching_age|教龄|float|||按年计算？
personal_info|个人简介|TextField|500
achievement|所获成就|TextFild|500
teaching_achievement|教学成果|TextField|500
teaching_location|教学地点|CharField|200
teaching_golf_course|教学的球场|CharField|200|教学球场名称
longitude|经度|DecimalField
latitude|纬度|DecimalField
free_day|空闲时间|TextField|500

### 6、学生表（Student）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
student_id	|主键				
coach	|对应的教练			|外键，一对多	
date            |教学时间date     | date    |          |          |
time            |教学时间time     | time    |          |          |
end_time	|结束时间	 |time			
location        |教学地点         |charfiled | 200 ||
price           |教学价格         |float
currency        |价格单位         |charfiled | 20
currency_mark   |价格符号         |charfield | 20
order_time      |订单时间         |datetime
receiver_phone  |接受手机         |charfield | 20		
appuser	|appuser id|			外键，一对多
is_comment |是否已评价|bool|||
coach_confirm |当前订单确认标志|int|||默认0(对教练表示未接受，对学生表示待接受)，1（对教练表示已接受，对学生表示已被接受）， 2（对教练表示已拒绝，对学生表示已被拒绝），3（对教练表示已授课，对学生表示学习完成），4（对学生表示取消订单）


### 7、高尔夫球场表（GolfCourse）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
golf_course_id	|主键			
thumbnail	|球场缩略图|URLField	
type|场地类型|char|50
country	|国家	|char	|20		
state	|州/省	|char	|20		
city	|城市	|char	|20
county  |县、区  |char	|20	
street	|街道	|char	|50	|	详细地址
name	|球场名	|char	|50		
price	|球场价格|int	|			
discount_price|折扣价格|int
longitude|经度	|float	|	|	经纬度用于计算附近的球场
latitude|纬度	|float	|		
description|球场描述|	TextField|500			
hole	|洞	|int			
yard	|码	|int
feature |球场特色 | TextField|500
length  |球场长度 |int
area    |球场面积 |float|||平方千米
build_up_time|建立时间|Datetime
green_grass |果岭草种|字符串|200
fairway_grass |球道草种|字符串|200
phone|球场电话|字符串|20
use_points_pay|该球场订单是否可以使用积分支付|Bool|||False不可以，True可以
			

### 8、高尔夫球场预定表（GolfCourseOrder）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
golf_course_order_id	|主键				
appuser	|外键appuser用户|	|	|		对应用户|一对多
participant|参与人员ID  | TextFeild||逗号隔离
golf_course	|外键球场	|	||		对应球场|一对多
package_id      |套餐ID         | Integer
start_time	|开始时间	|datetime					
price|价格|int
order_time|订单生成时间|datetime
order_status|订单状态，同order
payment_method|支付方式|char
gift_card|礼品卡
discount|折扣
coupon_code|优惠码|
psp_reference|adyen返回的标志码|char
hidden|是否隐藏|bool

### 9、（发起）事件表（Event）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
event_id|	主键				
appuser	|发起人|	||外键，一对多			
user_list	|参与的玩家	|TextField	|500		
start_time	|开始时间	|datetime|			
end_time|结束时间	|datetime
golf_course	|球场|				||外键，一对多
number_limit|人数限制|int|
participants_number|已报名人数|int|
friend_only|是否仅好友可参加|bool|
title|标题|char|50|
content|描述|textfield|500

### 10、物品表（Item）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
item_id	|主键，物品id	|长整型	||	主键	|自增长
supplier|供货商		|	||外键，一对多	
name	|物品名称	|字符串	|30		
classification_id	|物品分类	||	|	外键，一对多
price	|价格	|浮点数			
brand	|品牌	|字符串	|30		
original_price	|原价	|浮点数		
currency        |价格单位|字符串  |20   ||	
currency_mark   |价格币种|字符串  |20
discount	|折扣	|浮点数			
description	|描述	|TextField| 500			
thumbnail	|缩略图|	字符串	|300		|图片路径
surplus	|剩余量	|整型||		非空	
status	|状态	|字符串		||非空	|有货、无货
sales   | 销量  |整形            ||默认值0 |
property | 属性 |TextField 
shipping_handling | 运费  |浮点数          ||默认值0  |

### 11、订单表（Orders）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
order_id|	订单编号|	uuid		||主键|	自增长
appuser	|买家||			|外键appuser|一对多	
seller	|卖家|			||外键seller|一对多
order_time	|订单时间	|日期时间||		非空	
order_status	|订单状态	|int	|	|非空	|1:waiting payment，2:paid，3：shipping,4:delivered，5:cancel，6:returning，7:returned
payment_method	|付款方式	|字符串	|200	|非空	|可选
receiver	|收货人	        |字符串	|100	|非空	
receiver_address|收货地址	|字符串	|500|	非空	
receiver_phone	|收货电话	|字符串	|20|	非空	
shipping_handling|	运费	|浮点数	|	非空	
gift_card	|代金券	        |浮点数		|非空	
discount	|折扣	        |浮点数|		非空	
Total	|总计	                |浮点数		|非空	
item_list|	商品列表	        |textField|500	|非空|	对应Item表
subtotal	|小计	        |TextField|500 	|非空
item_number|物品购买数量|	TextField|500
name|物品名称|TextField|500
color|物品颜色|TextField|500
type|物品型号|TextField|500
note|备注|CharField|200
commented|是否已评价标识|Int||0代表未评价，1代表已评价
reason|退货原因|text|500|
points|订单获取的积分|int
deliver_method|配送方式|string|50||


### 12、优惠码表（CouponCode）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
code_id	|优惠码ID	     |长整型    |          |主键、非空	
expired_time	|有效期	     |日期时间  |          |		非空	
code_status	|优惠码状态   |字符串|10|		非空	|可选
code_number	|优惠码数字，供用户输入	|字符串|30|		非空,唯一	
code_range	|表示优惠码可用商品范围|	TextField|500|		非空|	default0
code_type	|优惠码类型	|整数		||非空|	0:普通 1:满减 2:折扣
code_value	|优惠码面值	|浮点数		||非空|	折扣时代表折扣值，否则代表面值
code_floor	|使用底线	|浮点数		||非空|	折扣和普通代金券为0，满减对应最低的使用范围

### 13、用户优惠码表（CouponCodeList）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
code_list_id	|主键				
appuser	|对应的用户|			one2one Field	
code_list	|code id 列表	|TextField|500	

### 14、收货地址表（ShippingAddress）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
address_id      |	地址ID	|长整型|		|主键	自增长
appuser	        |买家        |||外键appuser，一对多
name	        |收货人姓名   |charfiled	|20|	非空	
mobile_number	|收货人电话   |charfiled	|20	|非空	
country	|国家	|charfiled|20
state|州、省|char|20
city|市|char|20
county|县、区|char|20
street	|	具体地址	|字符串	|200|	非空	
postal_code	|邮政编码|	字符串	|20|	非空	
is_default|是否是默认地址|bool||非空，默认为false

### 15、购物车表（Cart）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
cart_id|	购物车ID|	长整型|		|非空|	主键
appuser	|买家|			one2one appuser||一对一	
item_list|	物品列表	|textField|500		|初始为空	
subtotal|	小计	|TextField|500		|
item_number|物品数量|TextField|500

### 16、信用卡表（CreditCard）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
credit_card_id	|			主键	|||自增长
appuser	|买家			|外键||一对多	
expiry_date	|过期时间|	时间类型			
security_code		|字符串|	100		
name		|字符串	|30		

### 17、编辑选择表（EditorChoice）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
editor_choice_id|	ID	|整形		||自增长	
item	|对应的商品	|外键		||一对一	
position|	推荐位置	|整形			||default 0

### 18、我发表的状态表（Post）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
post_id|主键
appuser|外键，一对多
content|内容|textfield|500

### 19、评论表（Comments）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
comments_id	|评论ID	|长整型		|主键	自增长
post	|物品id|	长整型|		外键	|post， 一对多
appuser	|用户id|	长整型|		外键	|AppUser， 一对多
reply_id|回复用户id|int||如果是是回复，则是appuser_id，否则是0
comment_content	|评论内容|	字符串	|500	|非空	
comment_time	|评论时间|	日期时间||		非空	

### 20、分类表（Classification）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
classification_id|	类别id	|整型||		主键	|自增长
name	|类别名称|	字符串|	200		
classification_level	|分类级别|	长整型||			非空,1,2,……
father_classification	|父亲分类|	长整型||			非空,0,1,……
topn|前n个热门产品|TextField|500
position|分类的排序位置|int|
icon|图标的url|textfield|500

### 21、国家表（Country）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
country_id|主键
name|全名|char|20
short_name|缩写名称|char|10
code|国家编码|char|10

### 22、州表（State）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
state_id|主键
name|州名|CharField|20
country|国家外键|||国家，一对多

### 23、市表（City）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
city_id|主键
name|城市名|CharField|50
state|州外键|||州，一对多

### 24、县表（County）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
county_id|主键
name|县名|CharField|50
city|市，外键|||市，一对多

### 25、供货商（Supplier）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
supplier_id|主键
appuser|外键|one2one
name|供货商名称|CharField|50

### 26、卖家物品（SellerItem）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
seller_item_id|主键
seller|外键seller
item|外键item
sales|销量|int
surplus|余量|int


### 27、教练可预约信息表（CoachingPackage)
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
coaching_package_id|主键
coach_id         |外键coach
surplus          |剩余可预约名额| IntegerField
date             |可预约日期  |Date
time             |可预约时间  |time|      |           |表示可预约开始时间点
duration         |可预约时长  |Time|      |           |按小时计算
price            |价格        |FloatField |      |           |
currency         |价格单位     |charField  | 20 
currency_mark   |价格币种|字符串  |20
information       |具体信息     |TextField  |  500    |           |包含具体的其他信息

###28、球场可预约信息表(GolfCoursePackage)
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
golf_course_package_id|主键
golf_course      |外键到GolfCourse
surplus          |剩余可预约名额|IntegerField
date             |可预约日期|Date
time             |可预约时间   |Time
price            |预约价格     |FloatFiled
hole             |洞数         |Integer|||默认为0
currency         |价格单位     |charField  | 20
currency_mark   |价格币种|字符串  |20 
information       |具体信息     |TextField  | 500     |           |包含具体的其他信息     


### 29、商品评论表（ItemComments）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
item_comments_id |评论ID	     |长整型    |主键	自增长
item             |物品id      |	长整型  |    外键   |
appuser	         |用户id      |长整型   |    外键   |
comment_content	|评论内容|	字符串	|500	|非空	
comment_time	|评论时间|	日期时间||	非空	

### 30、教练评论表（CoachComments）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
coach_comments_id |评论ID	     |长整型    |主键	自增长
coach             |教练id      |	长整型  |    外键   |
student	         |学生id      |长整型   |    外键   |
comment_content	|评论内容|	字符串	|500	|非空	
comment_time	|评论时间|	日期时间||	非空	

### 31、计分表(Score)
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
score_id | 主键
appuser |外键到用户
status|打球状态 |CharField | 200 | | start开始(进行中), end（完成)
date|打球日期|Date|
time|打球时间|Time
total_hole|总洞数|Int
finished_hole|已完成数目|Int
location|位置|CharField|200
scores_info|每一洞的具体情况|TextField|500||杆数：推杆, 杆数：推杆, 杆数：推杆, 杆数：推杆…
scores_sum|统计信息|TextField|500||老鹰球，小鸟球，标准球，拍忌，双拍忌
total|总杆数|int|
type|积分类型|charfield|20||AB或者BA

### 30、Banner表（Banner）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------| --------|--------- | ---------|----
banner_id |ID	     |长整型    |主键	自增长
classification  | int | | |0代表首页轮播，1代表商城轮播
url             |图片地址      |	TextField  | 500     |
type	         |类型标志      |int  |       |1，2,3,4分别表示物品，物品分类，教练，球场
target_id	|内容对应的ID|	int|	|针对不同的type对应不同的目标ID，type为1的时候这个target_id指的就是商品的ID，type为2的时候这个代表分类的ID，为3的时候代表教练的ID，为4的时候代表球场的ID


### 30、教练申请表（CoachApply）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------|---------|--------- | ---------|----
coach_apply_id   |ID	     |长整型    |主键	  |自增长
appuser          |用户       | 外键     |          |
portrait         |头像       |CharField |200      |
name	         |用户名     |CharField |20       |
gender	         |性别       |int       |         |
age              |年龄	     |int       |
teaching_age     |教龄       | float
personal_info    |个人信息       | TextField|500
achievement      |个人成就      | TextField|500
price            |教学价格    | float
currency         |价格单位    |char field  |20
currency_mark   |价格币种|字符串  |20
teaching_achievement|教学成就      | TextField|500
teaching_location   |教学地点      |CharField|200
teaching_golf_course|教学场地      |CharField|200
longitude        |教学球场经度   |DecimalField
latitude         |教学球场纬度   | DecimalField
apply_status     |申请状态       | int |||0:未申请，1:已申请，2:申请成功 3:申请失败
reply_text       |返回消息       | TextField|500||申请成功或失败返回的信息

### 31、退换货表（Returns）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------|---------|--------- | ---------|----
return_id        |主键       
type             |申请类型    |int      |          |          | 1:退货  2:换货
order            |对应的Order |外键
appuser          |对应的用户  |外键
item             |对应的sellerItem|外键
number           |购买数量    | int
price            |购买价格    |float
property         |属性        |text|500
reason           |退换货原因　 |text|500
status           |状态        |int    |           |          |6:退货中，7:已退货
time             |时间        |datetime

### 32 反馈表（Feedback）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------|---------|--------- | ---------|----
email            |联系方式    |string   | 50       
content          |反馈内容    |text     | 500         |          | 
time             |反馈时间    |datetime


### 33 App版本号（AppVersion）
字段名            | 描述      | 字段类型 | 字段长度 | 约束      | 备注
-----------------|-----------|---------|--------- | ---------|----
version_hint     | 提示更新版本号|string   | 20
version_force    |强制更新版本号  |string     | 20         |          | 
version_content  |更新内容    |text|500
type             |App 类型   |string    | 20     |       | Android／IOS