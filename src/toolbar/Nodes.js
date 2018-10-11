import React, { Component } from 'react';
import { Col } from 'antd';
import './Nodes.css';

class Nodes extends Component {
    insertNode(type){
        let minder = this.props.minder;
        if (minder) {
            switch (type) {
                case 'childNode': 
                minder.queryCommandState('AppendChildNode') === -1 || minder.execCommand('AppendChildNode');
                break;
                case 'parentNode':
                minder.queryCommandState('AppendParentNode') === -1 || minder.execCommand('AppendParentNode');
                break;
                case 'siblingNode':
                minder.queryCommandState('AppendSiblingNode') === -1 || minder.execCommand('AppendSiblingNode')
                break;
                default: break;
            }
        }
    }
    render() {
        return (
            <Col span={4}>
                <button className="km-node-command-menu insert-node" onClick={()=>{this.insertNode('childNode')}}>插入下级主题</button>
                <button className="km-node-command-menu insert-node" onClick={()=>{this.insertNode('parentNode')}}>插入上级主题</button>
                <button className="km-node-command-menu insert-node" onClick={()=>{this.insertNode('siblingNode')}}>插入同级主题</button>
            </Col>
        );
    }
}
export default Nodes;