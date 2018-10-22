import React, { Component } from 'react';
import areaList from './area.json'
import './area.less'


class SelectArea extends Component {
    constructor(props){
        super(props)
        this.state={
            cityIndex:false,
            areaIndex:false,
            showArea:true
        }
    }
    componentDidMount(){
        let provArr = areaList.data[this.refs.province.selectedIndex];
        let cityId = this.refs.city ? this.refs.city.selectedIndex : 0;
        let areaId = this.refs.area ? this.refs.area.selectedIndex : 0;
        console.log('provArr',provArr);
        let areaData = {
            prov:provArr ? provArr.id : null,
            city:provArr.children[cityId] ? provArr.children[cityId].id : null,
            provName:provArr ? provArr.name : null,
            cityname:provArr.children[cityId] ? provArr.children[cityId].name : null,
            area:provArr.children[cityId].children[areaId] ? provArr.children[cityId].children[areaId].id : null,
            areaname:provArr.children[cityId].children[areaId] ? provArr.children[cityId].children[areaId].name : null

        };
        let provType = true;
        if(provArr.id === 70 || provArr.id === 71){
            provType = false;
        }
        this.setState({
            showArea:provType
        });
        this.props.areaData(areaData);
    }
    /**
     *选择省 市县自动变换
     */
    handProvinceSelect(){
        this.setState({
            cityIndex:this.refs.province.selectedIndex,
            areaIndex:0
        });
        let provArr = areaList.data[this.refs.province.selectedIndex];
        let areaData = {
            prov:provArr ? provArr.id : null,
            city:provArr.children[0] ? provArr.children[0].id : null,
            provName:provArr ? provArr.name : null,
            cityname:provArr.children[0] ? provArr.children[0].name : null,
            area:provArr.children[0].children[0] ? provArr.children[0].children[0].id : null,
            areaname:provArr.children[0].children[0] ? provArr.children[0].children[0].name : null

        };
        let provType = true;
        if(provArr.id === 70 || provArr.id === 71){
            provType = false;
        }
        this.setState({
            showArea:provType
        });
        this.props.areaData(areaData);
    }
    /**
     *选择市 县自动变换
     */
    handCitySelect(){
        this.setState({
            areaIndex:this.refs.city.selectedIndex
        });
        let provArr = areaList.data[this.refs.province.selectedIndex];
        let areaData = {
            prov:provArr ? provArr.id : null,
            city:provArr.children[this.refs.city.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].id : null,
            provName:provArr ? provArr.name :null,
            cityname: provArr.children[this.refs.city.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].name : null,
            area:provArr.children[this.refs.city.selectedIndex].children[0] ? provArr.children[this.refs.city.selectedIndex].children[0].id : null,
            areaname:provArr.children[this.refs.city.selectedIndex].children[0] ? provArr.children[this.refs.city.selectedIndex].children[0].name : null
        };
        let provType = true;
        if(provArr.id === 70 || provArr.id ===71){
            provType = false;
        }
        this.setState({
            showArea:provType
        });
        this.props.areaData(areaData);
    }

    /**
     *选择县级菜单
     */
    handAreaSelect(){
        let provArr = areaList.data[this.refs.province.selectedIndex];
        let areaData = {
            prov:provArr ? provArr.id : null ,
            city:provArr.children[this.refs.city.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].id : null,
            provName:provArr ? provArr.name : null,
            cityname:provArr.children[this.refs.city.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].name : null,
            area:provArr.children[this.refs.city.selectedIndex].children[this.refs.area.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].children[this.refs.area.selectedIndex].id : null,
            areaname:provArr.children[this.refs.city.selectedIndex].children[this.refs.area.selectedIndex] ? provArr.children[this.refs.city.selectedIndex].children[this.refs.area.selectedIndex].name : null
        };
        let provType = true;
        if(provArr.id === 70 || provArr.id === 71){
            provType = false;
        }
        this.setState({
            showArea:provType
        });
        this.props.areaData(areaData);

    }
    /**
     *数据遍历，获取省级数据index，显示市级
     */
    handGetPrvinceIndex(){

        if(this.props.city){
            var i;
            for(i=0; i< areaList.data.length; i++){
                if(areaList.data[i].id === this.props.prov){
                    return i
                }
            }
        }else{
            return null
        }
    }

    /**
     *数据遍历，获取市级数据index，显示区级
     */
    handGetCityIndex(){
        if(this.props.area){
            var j;
            for(j=0; j< areaList.data[this.handGetPrvinceIndex()].children.length; j++){
                if(areaList.data[this.handGetPrvinceIndex()].children[j].id === this.props.city){
                    return j
                }
            }
        }else{
            return null
        }
    }

    render() {
        let province = this.props.prov ? this.props.prov : 0;
        let city = this.props.city ? this.props.city : 0;
        let area = this.props.area ? this.props.area : 0;
        let cityIndex = this.handGetPrvinceIndex() !== 'null' && this.state.cityIndex ===false ? this.handGetPrvinceIndex() || 0 : this.state.cityIndex;
        let areaIndex = this.handGetCityIndex()  !== 'null' && this.state.areaIndex === false ? this.handGetCityIndex() || 0 : this.state.areaIndex;
        return (
            <div className="selectArea">
                <select  className="prov dateSelect" name="province" ref="province" onChange={this.handProvinceSelect.bind(this)} defaultValue={province} >
                    {
                        areaList.data.map((list,index) => {
                            return <option key={index}  value={list.id}   >{list.name}</option>
                        })
                    }
                </select>
                {this.state.showArea ? <select className="dateSelect" ref="city" onChange={this.handCitySelect.bind(this)} defaultValue={city}>
                    {
                        areaList.data[cityIndex].children.map((list,index) => {
                            return (
                                <option key={index}  value={list.id} label={list.name} >{list.name}</option>
                            )
                        })
                    }
                </select> : null}
                {this.state.showArea && areaList.data[cityIndex].children[areaIndex].children.length > 0 ?
                    <select className="dateSelect" ref="area"  defaultValue={area} onChange={this.handAreaSelect.bind(this)}>
                        {
                            areaList.data[cityIndex].children[areaIndex].children.map((list,index) => {
                                return (
                                    <option key={index}  value={list.id} label={list.name} >{list.name}</option>
                                )
                            })
                        }
                    </select> : null}
            </div>
        );
    }
}

export default SelectArea;