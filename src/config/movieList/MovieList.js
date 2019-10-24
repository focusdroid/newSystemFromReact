import React, { Fragment, Component } from 'react'
import { Spin, Alert } from 'antd';
import { Pagination } from 'antd';
import './movielist.less'
import '../../style/common.less'


class MovieList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: {},
      total: 0
    }
  }
  render() {
    return(<Fragment>
      <div>
        <div className='movie-title'>{this.props.data.title}</div>
        <div className='movie-list'>
          <ul className='movie-ul'>
            {JSON.stringify(this.state.list) != "{}" ?
            this.state.list.data.subjects.map((item) => {
              return <li key={item.id}>
                <div className='movie-box'>
                  <div className='list-top'>
                    <img src={item.images.large} alt=""/>
                  </div>
                  <div className='list-bottom'>
                    <div className='mb5'>
                      <div><span>{item.title}</span></div>
                    </div>
                    <div className='mb5'>
                      <div>上映时间: <span>{item.mainland_pubdate}</span></div>
                    </div>
                    <div className='mb5'>
                      <div>时长：<span>{item.durations}</span></div>
                    </div>
                    <div className='disflex mb5'>
                      <div className='casts'>导演:</div>
                      <div className='ml10 casts-name'>
                        {
                          item.directors.map((ele, i) => {
                            return <span key={i} className='ml5'>{ele.name}</span>
                          })
                        }
                      </div>
                    </div>
                    <div className='disflex mb5'>
                      <div className='casts'>主演:</div>
                      <div className='ml10 casts-name'>
                        {
                          item.casts.map((ele, i) => {
                            return <span key={i} className='ml5'>{ele.name}</span>
                          })
                        }
                      </div>
                    </div>
                    <div>
                      <div className='disflex mb5'>
                        <div className='casts'>简介:</div>
                        <div className='ml10 casts-name'>
                          {
                            item.genres.map((ele, i) => {
                              return <span key={i} className='ml5'>{ele}</span>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            }) : <Loading/>}
          </ul>
        </div>
      {/*  分页start*/}
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: 30}}>
          <div>{this.state.total}</div>
          <div style={{display: JSON.stringify(this.state.list) == "{}" ? 'none' : 'block'}}>
            <Pagination onChange={this.showTotal} size="small" total={this.state.total} showSizeChanger showQuickJumper />
          </div>
        </div>
      {/*  分页end*/}
      </div>
    </Fragment>);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props != nextProps) {
      this.setState(() => ({
        list: nextProps,
        total: nextProps.data.total
      }), () => {
        return true
      })
    } else {
      return true;
    }
  }
  showTotal = (total) => {
    console.log(total)
  }
}



function Loading () {
  return (<Fragment>
    <div id='loading'>
      <Spin tip="Loading..." className='loading'>
        <Alert
          message="电影列表"
          description="电影列表加载中..."
          type="info"
        />
      </Spin>
    </div>
  </Fragment>);
}

export default MovieList;
