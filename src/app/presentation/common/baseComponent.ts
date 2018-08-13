/*
 * 组件基类
 */
import wepy from 'wepy';
import BaseMixin from '../mixins/base';

export default class BaseComponent extends wepy.component {
  mixins = [BaseMixin];
}
