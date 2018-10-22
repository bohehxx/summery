import React, { Component } from 'react';
import SelectArea from './components/selectArea/SelectArea'
import Page from './components/page/Page'
import PageTwo from './components/page/PageTwo'
import LimitWord from './components/limitWord/LimitWord'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'111'
        }
}
    handGetAreaData(ops){
        console.log('aaa',ops);
        this.setState({
            prov:ops.prov,
            city:ops.city,
            area:ops.area,

        });
    }
    /**
     * 更新名字
     */
    handleTitleChange(data) {
        this.setState({
            name: data._name
        });
    }
    render() {
        var limitWordConfig = {
            size: 40,
            show: true,
            isInput: true,
            isByte: true,
            placeholder: '请输入标题',
            watermarkStyle: 'watermark',
            vocStyle: 'voc-style',
            numStyle: 'num-style'
        };
        return (
            <div>
                <SelectArea
                    prov={false}
                    city={false}
                    area={false}
                    num={2}
                    areaData={this.handGetAreaData.bind(this)}
                //     selectStyle={'profileSelect'}
                >

                </SelectArea>
                <SelectArea
                    prov={50}
                    city={165}
                    area={1308}
                    areaData={this.handGetAreaData.bind(this)}
                    // selectStyle={'addressSelect'}
                >
                </SelectArea>
                <Page config = {{
                    pageCurr:1,
                    totalPage:21,
                    paging(obj){
                        console.log(obj)
                    }
                }}>

                </Page>
                <PageTwo config = {{
                    pageCurr:1,
                    totalPage:20,
                    paging(obj){
                        console.log(obj)
                    }
                }}>

                </PageTwo>
                <LimitWord  defaultValue={this.state.name} config={limitWordConfig} onProtectData={this.handleTitleChange.bind(this)} />
            </div>
        );
    }
}

export default Dashboard;
