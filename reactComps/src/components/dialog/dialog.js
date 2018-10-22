import React from 'react';
import ReactDOM  from 'react-dom';
import './dialog.less'


const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');

    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}





export default class Parent extends React.Component {

    render() {
        return (

            <div>
                <Modal>
                   <div className="modal">
                       <div className="layer">


                    {/*对话框 header */}
                    {this.props.hasTitle &&
                    <div>

                        <h3>{this.props.title}</h3>
                        { this.props.hasSureBtn && <button type="button"
                                                            onClick={this.props.ok}> 确定</button>}
                        { this.props.hasCloseBtn && <button type="button"
                                           onClick={this.props.closeDialog}> 关闭</button>}
            </div> }
                           <div>
                               {this.props.children}
                           </div>
                       </div>
                   </div>
                </Modal>
            </div>


        );
    }
}

Parent.defaultProps={
    open: false,
    hasCloseBtn: true,
    hasSureBtn:true,
    title: '提示',
    hasTitle: true,
    hasOk: true,
    hasCancel: true,
}

