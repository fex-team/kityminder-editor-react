import React, { Component } from 'react';
import { Icon } from 'antd';
import { Col } from 'antd';
import './DoGroup.css';
class DoGroup extends Component {
    render() {
        return (
            <Col span={1}>
                <div className="km-btn-item undo"
                    ng-disabled="editor.history.hasUndo() == false"
                    ng-click="editor.history.hasUndo() == false || editor.history.undo();"
                    title="撤销 (Ctrl + Z)" disabled="disabled">
                        <Icon type="left-circle" theme="twoTone" />
                </div>
                <div className="km-btn-item redo"
                    ng-disabled="editor.history.hasRedo() == false"
                    ng-click="editor.history.hasRedo() == false || editor.history.redo()"
                    title="重做 (Ctrl + Y)" disabled="disabled">
                        <Icon type="right-circle" theme="twoTone" />
                </div>
            </Col>
        );
    }
}
export default DoGroup;