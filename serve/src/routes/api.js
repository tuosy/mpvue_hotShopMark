const express = require('express');
const md5 = require('md5');
const router = express.Router();
const mysql = require('mysql');
const pool = require('../util/sql')
// 查询附近的商家列表
router.get('/shopList', (req, res) => {

    // let open_id = req.body.open_id;
    // let userInfo = req.body
    const sql = 'select * from t_shop'
    pool.getConnection((error, connection) => {
        if (error) throw error
        console.log("数据库连接成功！")
        connection.query(sql, (err, result) => {
            if (!err) {
                if (result.length) {
                    res.json({
                        code: 0,
                        msg: '附近商家信息查询成功！',
                        data: result
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: "附近没有商家注册信息！"
                    })
                }
            } else {
                console.log(err)
            }
            connection.release()
        })
    })
})
//搜索附近的商家
router.post('/searchNearShop', (req, res) => {
    const keywords = req.body.keywords
    // console.log(keywords)

    const sql = `select * from t_shop where shop_name LIKE "%${keywords}%"`
    pool.getConnection((error, connection) => {
        if (error) throw error
        connection.query(sql, (err, result) => {
            if (!err) {
                if (result.length) {
                    res.json({
                        code: 0,
                        msg: "搜索查询成功！",
                        data: result
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: "抱歉！没有找到您要的任何相关记录"
                    })
                }
            } else {
                console.log(err)
            }
            connection.release()
        })
    })
})
//登录请求
router.post('/login', (req, res) => {

    let phone = req.body.phone
    let pwd = md5(req.body.pwd)
    console.log("请求数据：", req.body)
    //数据库查询用户
    //创建数据库查询对象
    const sql = `select * from t_user where phone=${phone}`
    const addSql = `insert into t_user (phone,pwd) values ('${phone}','${pwd}')`
    //建立数据库链接
    pool.getConnection((error, connection) => {
        if (error) throw error
        console.log("数据库连接成功！")
        connection.query(sql, (err, result) => {
            if (!err) {//查询数据库是否有该用户
                if (result.length) {
                    if (pwd === result[0].pwd) {
                        res.json({
                            code: 0,
                            msg: "登录成功！",
                            data: result[0]
                        })
                    } else {
                        res.json({
                            code: 1,
                            msg: "密码错误！"
                        })
                    }
                } else {
                    //将该用户添加到数据库
                    connection.query(addSql, (err, addRes) => {
                        if (!err) {
                            res.json({
                                code: 1,
                                msg: "注册成功！，请重新登录",
                                data: addRes
                            })
                            // console.log(addRes)
                        } else {
                            console.log(err)
                        }
                    })
                }

            } else {
                console.log(err)
            }
            //释放连接
            connection.release()
        })
    })

})
//打卡请求
router.post('/doMark', (req, res) => {
    //传入参数：用户id和商家id；type:int
    const { shopId, userId } = req.body
    //创建数据库插入信息
    const addSql = `insert into t_shop_user (t_shop_fk,t_user_fk) values (${shopId},${userId})`
    pool.getConnection((error, connection) => {
        if (error) throw error
        connection.query(addSql, (err, result) => {
            if (!err) {
                res.json({
                    code: 0,
                    msg: '打卡成功！',
                    data: result
                })
            } else {
                console.log(err)
            }
            connection.release()
        })
    })
})
//获取打卡列表
router.get('/markedList', (req, res) => {
    const userId = req.body.userId
    //传入参数：用户id; type:int
    const sql = `select * from t_shop_user join t_shop on t_shop_user.t_shop_fk=t_shop.t_shop_pk where t_shop_user.t_user_fk='${userId}'`
    pool.getConnection((error, connection) => {
        if (error) throw error
        connection.query(sql, (err, result) => {
            if (!err) {
                if (result.length) {
                    res.json({
                        code: 0,
                        msg: '打卡数据查询成功！',
                        data: result
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: "您目前没用打卡记录哟，请开始打卡吧！"
                    })
                }
            } else {
                console.log(err)
            }
            connection.release()
        })
    })

})
//打卡记录搜素请求
router.post('/markedSearch', (req, res) => {
    const { keywords, userId } = req.body
    //关键词模糊查询
    const sql = `select * from t_shop_user join t_shop on t_shop_user.t_shop_fk=t_shop.t_shop_pk where t_shop_user.t_user_fk='${userId}' and t_shop.shop_name like "%${keywords}%"`
    pool.getConnection((error, connection) => {
        if (error) throw error
        connection.query(sql, (err, result) => {
            if (!err) {
                if (result.length) {
                    res.json({
                        code: 0,
                        msg: "搜索查询成功！",
                        data: result
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: "抱歉！没有找到您要的任何相关记录"
                    })
                }
            } else {
                console.log(err)
            }
            connection.release()
        })
    })

})

// 导出路由

module.exports = router;
