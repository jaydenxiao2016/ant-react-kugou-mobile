import React, { Component } from 'react';
import CommList from '@/components/comm-list/comm-list'
import './rank.css'


class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    }
  }
  render() {
    let { data } = this.props;
    let list = data.map((item) => {
      return {
        commid: item.rankid,
        commname: item.rankname,
        imgurl: item.imgurl
      }
    })
    return (
      <div className="rank">
        <CommList list={list} />
      </div>
    )
  }
}

export default Rank;