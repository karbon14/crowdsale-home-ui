import React from 'react'
import { Karbon } from '../../../../styles/core'
import { TabView } from '@react-core/tabview'
import style from './style.scss'
import { Title } from '../../../../Components/Title'
import { TitleDescription } from './TitleDescription'

const Faq = () => (
  <div className="faq">
    <Title
      section="FAQS"
      title="Frequently Asked Questions"
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    />

    <div className="tabs">
      <TabView
        theme={Karbon}
        options={[
          {
            name: 'GENERAL',
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>
              </div>
            )
          },
          {
            name: 'PRE-ICO & ICO',
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>
              </div>
            )
          },
          {
            name: 'TOKENS',
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>
              </div>
            )
          },
          {
            name: 'CLIENT',
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>
              </div>
            )
          },
          {
            name: 'LEGAL',
            content: (
              <div className="contents">
                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>

                <div className="content-section">
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                  <TitleDescription
                    title="At vero eos et accusamus et iusto odio"
                    description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est"
                  />
                </div>
              </div>
            )
          }
        ]}
      />
    </div>

    <style jsx>{style}</style>
  </div>
)

export { Faq }
