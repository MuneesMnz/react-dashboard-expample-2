import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

const FeaturedInfo = () => {
  return (
    <div>
      <div>
        <span>Revenue</span>
        <div>
            <span>$2,415</span>
            <span>-11.4 <ArrowDownward /></span>
        </div>
        <span>Compared to last Month</span>
      </div>
      <div>
        <span>Sales</span>
        <div>
            <span>$5,115</span>
            <span>-1.4 <ArrowDownward /></span>
        </div>
        <span>Compared to last Month</span>
      </div>
      <div>
        <span>Cost</span>
        <div>
            <span>$2,215</span>
            <span>10.4 <ArrowUpward /></span>
        </div>
        <span>Compared to last Month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
