import React, { Component } from 'react';
import { Icon } from 'antd';
import { Col } from 'antd';
class Nodes extends Component {
    render() {
        console.log(this.props.minder);
        return (
            <Col span={3}>
                <a>插入下级主题</a>
                <a>插入上级主题</a>
                <a>插入同级主题</a>
            </Col>
        );
    }
}
export default Nodes;