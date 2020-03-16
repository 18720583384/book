/*
* 使用mock.js 提供 mock 数据接口
* */
import Mock from 'mockjs'
import BookHot from './BookHot'
import BookCase from './BookCase'
import Classify from './Classify'
import Book from './Book'
import SwiperImg from './swiperImg'
import BookMall from './BookMall'
Mock.mock('/bookhot',BookHot)
Mock.mock('/bookcase',BookCase)
Mock.mock('/classify',Classify)
Mock.mock('/book',Book)
Mock.mock('/swiperimg',SwiperImg)
Mock.mock('/bookmall',BookMall)
