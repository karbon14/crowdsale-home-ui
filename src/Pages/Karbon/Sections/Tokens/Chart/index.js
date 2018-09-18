import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import logo from './Assets/Chart-Logo.svg'
import style from './style.scss'

const Chart = ({ description, data = [], colors = [] }) => (
  <section>
    <h3>{description}</h3>

    <div className="graph">
      <div className="logo">
        <img src={logo} alt="Karbon14 Logo" />
      </div>

      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="data"
            fill="#8884d8"
            innerRadius="35%"
            labelLine={false}
            label={false}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="labels-container">
        {data.map((entry, index) => (
          <div key={index} className="label">
            <div
              className="label-color"
              style={{ borderColor: colors[index] }}
            />
            <span>
              <p>{`${data[index].data}%`}</p>
              <p>{`- ${data[index].name}`}</p>
            </span>
          </div>
        ))}
      </div>
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
