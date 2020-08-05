import React from 'react'

function ResumeContent(props) {
    return (
        <section>
            <div className="container">
                <div id="primary" className="content-area">
                    <div className="page-title">
                        <h1>Resume</h1>
                        <div className="page-subtitle">
                            <h4> 5 Years of Experience</h4>
                        </div>
                    </div>
                    <div id="content" className="page-content site-content single-post" role="main">
                        <article id="post-171" className="post-171 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="fw-page-builder-content"><section className="fw-main-row  ">
                                    <div className="fw-container">
                                        <div className="row">
                                            {props.education_experiences
                                                .map((exp,index) =>
                                                    <div className=" col-xs-12 col-sm-6 " key={index}>
                                                        <div className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                                                            <div className="block-title">
                                                                <h2>{exp.title}</h2>
                                                            </div>
                                                            <div className="timeline clearfix">
                                                                {exp.details
                                                                    .map((detail,i) =>
                                                                        <div className="timeline-item clearfix" key={i}>
                                                                            <h5 className="item-period">{detail.period}</h5>
                                                                            <span className="item-company">{detail.company}</span>
                                                                            <h4 className="item-title">{detail.title}</h4>
                                                                            <p>{detail.description}</p>
                                                                        </div>
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                        <div className="row">
                                            <div className=" col-xs-12 col-sm-12 ">
                                                <div id="col_inner_id-5f23f81064f3b" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                                                    <div className="fw-divider-space" style={{ paddingTop: '40px' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {props.skills
                                                .map((skill,i) =>
                                                    <div className=" col-xs-12 col-sm-6 " key={i}>

                                                        <div id="col_inner_id-5f23f81065221" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                                                            <div className="block-title">
                                                                <h2>{skill.title}</h2>
                                                            </div>

                                                            {skill.details
                                                                .map((detail,index) =>

                                                                    <div className="skills-info skills-first-style" key={index}>
                                                                        <div className="clearfix">
                                                                            <h4>{detail.title}</h4>
                                                                            <div className="skill-value">{detail.percentage}</div>
                                                                        </div>
                                                                        <div data-value={detail.percentage} data-color="#007ced" className="skill-container">
                                                                            <div className="skill-percentage" style={{ width: `${detail.percentage}` }} />
                                                                        </div>

                                                                    </div>
                                                                )}
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </section>
                                </div>
                            </div>{/* .entry-content */}
                        </article>{/* #post-## */}
                    </div>{/* #content */}
                </div>
            </div>
        </section>
    )
}

export default ResumeContent