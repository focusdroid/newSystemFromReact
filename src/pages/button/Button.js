import React, { Component, Fragment } from 'react'
import { Button, Card } from 'antd'
export default class Buttons extends Component{
  render(){
    return (
      <Fragment>
        <Card title='按钮'>
          <Button>按钮</Button>
        </Card>
      </Fragment>
    );
  }
}
