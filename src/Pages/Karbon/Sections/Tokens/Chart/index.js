import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import style from './style.scss'

const Chart = ({ description, data = [], colors = [] }) => (
  <section>
    <h3>{description}</h3>

    <div className="graph">
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="data"
            fill="#8884d8"
            innerRadius="20%"
            labelLine={false}
            label={false}
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

Chart.propTypes = {
  description: PropTypes.string,
  data: PropTypes.array,
  colors: PropTypes.array
}

export { Chart }
