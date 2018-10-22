import React,{Component} from 'react'
import "./page.less";
class Page extends Component {
    constructor(props){
        super(props)

            // 设置当前页码，默认为第一页
            this.state = {
            pageCurr:1,
            groupCount:7,
            startPage:1
        }


    }
    create(){
        const {
            totalPage,
        } = this.props.config;
        const {
            pageCurr,
            groupCount,
            startPage
        } = this.state;

        let pages = [];
        if(totalPage<=10){
            pages.push(<li onClick = { this.goPrev.bind(this)} className = { this.state.pageCurr === 1? "nomore":"" }  key={0}>上一页</li>)
            for(let i = 1;i <= totalPage; i++){
                pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? "active" : "" } key={i}>{i}</li>)
            }
            pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage? "nomore":"" } key={totalPage + 1}>下一页</li>)


        }else{
            pages.push(<li className = { this.state.pageCurr === 1? "nomore":"" } key={ 0 } onClick = { this.goPrev.bind(this) }>上一页</li>)
            for(let i = startPage;i < groupCount+startPage;i ++){
                if(i <= totalPage - 2){
                    pages.push(<li className = { this.state.pageCurr === i? "active":""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
                }

            }
            // 分页中间的省略符
            if(totalPage - startPage >= 9){
                pages.push(<li className ="ellipsis" key={ -1 }>···</li>)
            }
            // 倒数第一、第二页
            pages.push(<li className = { this.state.pageCurr === totalPage -1 ? "active":""} key={ totalPage - 1 } onClick = { this.go.bind(this,totalPage - 1) }>{ totalPage -1 }</li>)
            pages.push(<li className = { this.state.pageCurr === totalPage ? "active":""} key={ totalPage } onClick = { this.go.bind(this,totalPage) }>{ totalPage }</li>)
            // 下一页
            pages.push(<li className = { this.state.pageCurr === totalPage ? "nomore":"" } key={ totalPage + 1 } onClick = { this.goNext.bind(this) }>下一页</li>)


        }


        return pages;
    }
    // 更新 state
    go(pageCurr){
        const {
            groupCount,

        } = this.state;
        const {
            totalPage,
            paging
        } = this.props.config
        // 处理下一页的情况
        if(pageCurr % groupCount === 1){
            this.setState({
                startPage:pageCurr
            })
        }
        // 处理上一页的情况
        if(pageCurr % groupCount === 0){
            this.setState({
                startPage:pageCurr - groupCount + 1
            })
        }
        // 点击最后两页时重新计算 startPage
        if(totalPage - pageCurr < 2){
            this.setState({
                startPage:totalPage - groupCount,
            })
        }

        this.setState({
            pageCurr
        })
        setTimeout(()=>{
            paging({
                pageCurr
            })
        });
    }
// 页面向前
    goPrev(){
        let {
            pageCurr,
        } = this.state;
        if(--pageCurr === 0){
            return;
        }

        this.go(pageCurr)
    }
// 页面向后
    goNext(){

        let {
            pageCurr,
        } = this.state;
        const {
            totalPage,
        } = this.props.config;
        console.log(pageCurr,'00')
        if(++pageCurr >totalPage ){
            return;
        }
        this.go(pageCurr)
    }



    render(){
        const Pages = this.create.bind(this)();
        return(
            <div className="main">
                <ul className="page">
                    {Pages}
                </ul>


        </div>
        )

    }
}

export default Page;