/*
 * 页面基类
 */
import wepy from 'wepy';
import BaseMixin from '../mixins/base';

export default class BasePage extends wepy.page {
  mixins = [BaseMixin];
}
