import React, { Component } from 'react';
import './App.css';
import 'kity';
import 'kityminder-core';
import {Tabs, Row} from 'antd';
import 'antd/dist/antd.css';
import DoGroup from './toolbar/DoGroup';
import Nodes from './toolbar/Nodes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minder: null
    };
    setTimeout(()=>{
      if (this.minder) {
        this.setState({
          minder: this.minder
        });
      } else {
        setTimeout(arguments.callee, 10);
      }
    }, 10);
  }
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div className="kityminder-editor-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="思路" key="1">
            <Row>
              <DoGroup></DoGroup>
              <Nodes minder={this.state.minder}></Nodes>
            </Row>
          </TabPane>
          <TabPane tab="外观" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="视图" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
        <div className="kityminder-core-container" 
          ref={(input) => {
            if (!this.minder) {
              this.minder = new window.kityminder.Minder({
                renderTo: input
              });
              this.minder.importJson({
                "root": {
                    "data": {
                        "text": "百度产品",
                        "image": "https://www.baidu.com/img/bd_logo1.png?where=super",
                        "imageSize": { "width": 270, "height": 129 }
                    },
                    "children": [
                        { "data": { "text": "新闻" } },
                        { "data": { "text": "网页", "priority": 1 } },
                        { "data": { "text": "贴吧", "priority": 2 } },
                        { "data": { "text": "知道", "priority": 2 } },
                        { "data": { "text": "音乐", "priority": 3 } },
                        { "data": { "text": "图片", "priority": 3 } },
                        { "data": { "text": "视频", "priority": 3 } },
                        { "data": { "text": "地图", "priority": 3 } },
                        { "data": { "text": "百科", "priority": 3 } },
                        { "data": { "text": "更多", "hyperlink": "http://www.baidu.com/more" } }
                    ]
                }
              });
            }
          }}>
        </div>
      </div>
    );
  }
}

export default App;
