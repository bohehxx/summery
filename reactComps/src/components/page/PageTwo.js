import React,{Component} from 'react'
import "./page.less";
class PageTwo extends Component {
    constructor(props){
        super(props)

            // 设置当前页码，默认为第一页
            this.state = {
            pageCurr:1,
            groupCount:5,
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
        if(totalPage<=5){
            pages.push(<li onClick = { this.goPrev.bind(this)} className = { this.state.pageCurr === 1? "nomore":"" }  key={0}>上一页</li>)
            for(let i = 1;i <= totalPage; i++){
                pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? "active" : "" } key={i}>{i}</li>)
            }
            pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage? "nomore":"" } key={totalPage + 1}>下一页</li>)
        }else{
            pages.push(<li className = { this.state.pageCurr === 1? "nomore":"" } key={ 0 } onClick = { this.goPrev.bind(this) }>上一页</li>)
            for(let i = startPage;i < groupCount+startPage;i ++){
                if(i<=totalPage){
                    pages.push(<li className = { this.state.pageCurr === i? "active":""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
                }



            }
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

export default PageTwo;