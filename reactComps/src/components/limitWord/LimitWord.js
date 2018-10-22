import React from 'react'
import Style from './limitWord.less'
class LimitWord extends React.Component {
    constructor(props){
      super(props)
        this.state={
          text:'',
          curLen:0
      }
      this.focusText = this.focusText.bind(this);
      this.calculateLength = this.calculateLength.bind(this);
      this.handleByteChange = this.handleByteChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.initCountStr(nextProps);
    }

    componentWillMount () {
        this.initCountStr(this.props);
    }

    initCountStr(props) {
        let curLen = 0;
        let defaultValue = props.defaultValue;
        //是否需要字节计数
        if(props.config.isByte){
            //更新curLen的value
            curLen = defaultValue ? this.calculateLength(defaultValue).curLen : 0 ;
        }else{
            curLen = defaultValue ? defaultValue.length : 0 ;
        }
        this.setState({
            text: defaultValue || '',
            curLen: curLen
        });
    }
    focusText(event) {
        event.target.nextElementSibling.focus();
    }
    /**
     * @param val 要计算中文还是英文
     * */
    calculateLength(val){
        let maxLength = this.props.config.size;
        //字节长度
        let byteLen = 0;
        let currentLength;
        //输入文本字符长度
        let len = val.length;
        //字节长度达到上限后的最后索引值(作文本截取用)
        let endIndex;
        for (let i = 0; i < len; i++) {

            //编辑书壳页面去掉开头空格
            if(this.props.blank){
                if(!/(^\s*)|(\s*$)/.test(val)){
                    return false;
                }
            }
            if (val.charAt(i).match(/[\u0391-\uFFE5]/)) {
                byteLen += 2;
            } else {
                byteLen += 1;
            }
            if (byteLen <= maxLength * 2) {
                //字节长度已超过最大限制,保留当前索引值
                endIndex = i;
            }
        }



        //计算当前文本长度(字节长度为奇数时+1)
        currentLength = Math.ceil(byteLen / 2);
        //返回值
        return {
            byteLen: byteLen,
            endIndex: endIndex,
            curLen: currentLength
        };
    }
    /**
     * 更新txt的state
     * @param event dom event
     */
    handleChange(event) {
        let _value = event.target.value;
        this.setState({
            text: _value,
            curLen: _value.length
        });
        this.props.onProtectData({_name: _value});
    }
    /**
     * 计算内容字节长度
     * 中文算2个字节,英文算1个字节
     **/
    handleByteChange(event) {
        let maxLength = this.props.config.size;
        let val = event.target.value;
        let calLenObj = this.calculateLength(val);
        this.setState({
            curLen: calLenObj.curLen
        });
        if (calLenObj.curLen < maxLength) {
            //更新输入框的maxLength
            event.target.maxLength = maxLength * 2;
            this.setState({text: val});
            this.props.onProtectData({_name: val});
        } else {
            //判断条件: 字节长度不为偶数 && 字节长度小于最大字节长度
            if (Math.ceil(calLenObj.byteLen / 2) > Math.floor(calLenObj.byteLen / 2) && calLenObj.byteLen < maxLength * 2) {
                //允许输入最后1个字节
                event.target.maxLength = val.length + 1;
                this.setState({text: val});
                this.props.onProtectData({_name: val});
            } else {
                //截取超出长度的部分
                this.setState({text: val.substr(0, calLenObj.endIndex + 1)});
                this.props.onProtectData({_name: val.substr(0, calLenObj.endIndex + 1)});
            }
        }
    }
render(){
    var limit = [],
        { config } = this.props
    if (config.isInput) {
        limit.push(<input maxLength={config.size} className={Style[config.vocStyle]} key={1}
                          type="text"
                          name={this.props.name}
                          value={this.state.text}
                          onChange={config.isByte ? this.handleByteChange : this.handleChange}/>
        )
    } else {
        limit.push(<textarea maxLength={config.size} className={Style[config.vocStyle]} key={2}
                             value={this.state.text}
                             name={this.props.name}
                             onChange={config.isByte ? this.handleByteChange : this.handleChange}>
                        </textarea>);
    }
    //要显示字符限制区域
    if (config.show) {
        limit.push(
            <span className={Style[config.numStyle]} key={3}>
                <b className={this.state.curLen > 0 ? Style['entered'] : null}>{this.state.curLen}</b>/{config.size}字
            </span>
        )
    }
        return(
            <div style={{position:"relative"}}>
                <div className={this.state.curLen?Style['hide']: Style[config.watermarkStyle]}
                     onClick={this.focusText} >

                    {this.state.curLen > 0 ? this.state.text : config.placeholder}
                </div>
                {limit}
            </div>
        )
}












}
export default LimitWord
// reactjs 网站建设中常用的组件,基本涵盖了项目日常所需
// griddle-react
//
// react-bootstrap
//
// react-cropper
//
// core-js
//
// Material UI
//
// superagent
//
// restful-error-es6
//
// browserify
//
// react-select-popover 标签选择
//
// react-infinite-scroll 无限滚动
//
// semantic-ui
//
// react-date-range日期选择
//
// react-scroll 快速定位滚动
//
// react-timer-mixin suer timer
//
// react-autosuggest auto input
//
// react-native-swiper轮播
//
// react-split-container分割线拖拽 ,源码已下架?
//
//     reactjs-iscroll下拉上拉刷新
//
//     react-hammerjs触屏事件库
//
// react-emoji-react emoji表情库
//
// react-ace在线编辑器
//
// react-highcharts highchart
//
// react-dropzone 上传
//
// react-fileupload-progress文件上传带processor
//
// react-fontawesome 字体icon库
//
// react-pdf pdf文档操作
//
// react-desktop桌面UI
//
// react-intl Internationalize React apps
//
// react-image-gallery图片轮播
//
// react-s-alert alert
//
// react-event-calendar事件日历
//
// react-color-picker 颜色选择器
//
// react-lazyload 延迟加载
//
// react-tag-input tag input
//
// revalidator格式验证
//
// react-bootstrap-daterangepicker时间范围
//
// react-transitive-number增减数
//
// react-css-transition-replace动画
//
// react-images image list
//
// react-clockwall 时间画布
//
// react-autobind fun auto bind
//
// react-simple-markdown-editor markdown编辑
//
// react-remarkable markdown 显示
//
// random-gem 随机数
//
// react-masonry-component 瀑布流
//
// react-alap 高德地图
//
// react-baidu-map 百度地图
//
// react-swipeable-views views滑动
//
// react-swipnable-tabs 可横向滚动的tab
//
// react-motion 动画
//
// react-image-fallback 图片lazy加载
//
// react-mobile-datepicker 滚动选择时间
//
// react-images 幻灯片灯箱
//
// react-image-magnify 图片细节放大
//
// urlencode node encode编码
//
// react-mobile-datepicker 滚动选择时间 年月日
//
// react-mobile-datetimepicker滚动选择时间 年月日时分
//
// react-fastclick消除touch click 300ms延迟
//
// react-sortable react-anything-sortable 拖动排序
//
// react-autosuggest 自动提示
//
// react-image-crop 图片裁剪