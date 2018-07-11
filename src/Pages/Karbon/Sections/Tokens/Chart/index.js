import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import style from './style.scss'

const Chart = ({ description, data = [], colors = [] }) => {
  /* eslint-disable */
  const custonLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    /* eslint-enable */
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="#7ab9ff"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}% ${data[index].name}`}
      </text>
    )
  }

  return (
    <section>
      <h3>{description}</h3>

      <div className="graph">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="data"
              data={data}
              fill="#8884d8"
              label={custonLabel}
              innerRadius="20%"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <style jsx>{style}</style>
    </section>
  )
}

Chart.propTypes = {
  description: PropTypes.string,
  data: [],
  colors: []
}

export { Chart }
