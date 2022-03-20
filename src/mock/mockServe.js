//先引入mockjs模块
import Mock from 'mockjs'
//webpack默认对外暴露：图片，json数据格式
import banners from './banners.json'
import floor from './floor.json'

//mock数据 第一个参数请求地址，第二个参数：请求数据
Mock.mock('/mock/banners',{code:200,data:banners})// 模拟首页轮播图的数据
Mock.mock('/mock/floor',{code:200,data:floor})

