基本URL前缀 /myadmin

1：base页面

    /  [GET]
    
    基本页面

2：myadmin登陆界面

    /login

    GET: 管理员登陆界面

    POST: 验证用户信息

3：myadmin首页

    /index  [GET]

    首页，展示主要信息

4：myadmin商品管理

    /products  [GET]

    查看商品列表，包括商品信息编辑

    /products/(?P<item_id>\d+)$  [GET]

    获取某一个商品的详细信息

    /products/update/(?P<item_id>\d+)$  [POST]

    更新某一件商品的信息

    /products/upload  [POST]

    上传单件商品信息

    /batch_upload_products  [POST]

    批量上传商品信息

    /products/put_off  [POST]

    下架商品

    /products/put_on  [POST]

    下架商品


5：myadmin订单管理

    /orders  [GET]

    查看订单列表，获取订单状态

6：myadmin优惠券管理

    /ouponCodes  [GET]

    查看优惠券信息&删除添加

7：myadmin用户管理

    /users  [GET]

    展示用户信息，包括用户的查看删除

    /users/add

    GET: 获取填写信息的页面

    POST: 添加用户信息

8：myadmin分类管理

    /classification  [GET]

    查看分类信息&新建分类

    /classifications/(?P<c_id>\d+)  [GET]

    获取分类详情

    classifications/update/(?P<c_id>\d+)  [POST]

    更新分类信息
    
    classification/add  [POST]

    添加分类