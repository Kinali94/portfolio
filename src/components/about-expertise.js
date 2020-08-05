import React from 'react'

function Expertise() {
    return (
        <section tabIndex={2} className="resumeBackgroundColor">
            <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay=".1" className="aos-init aos-animate">
                <h3>My Expertise</h3>
            </div>
            {/* ^ title of section ^ */}
            {/* top half of section */}
            <ul className="skillsSectionWhole">
                <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay=".1" className="aos-init aos-animate">
                    <li><h4>Coding Skills</h4></li>
                </div>
                <div className="skillsCard aos-init aos-animate" data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay=".1">
                    <li>
                        HTML5
                        <i className="fa fa-html5" aria-hidden="true"></i>
                    </li>
                    <li>
                        CSS3
                        <i className="fa fa-css3" aria-hidden="true"></i>
                    </li>
                    <li>
                        Boostrap 4
                        <i className="fa fa-bold" aria-hidden="true"></i>
                    </li>
                    <li>
                        JavaScript
                        <img src="img/JS.png" alt=""  width="100" height="100"/> 
                    <i className="fa fa-js" aria-hidden="true" />
                    </li>
                    <li>
                        jQuery
                        <i className="fa fa-usd" aria-hidden="true"></i>

                    </li>
                    <li>
                        .NET
                        <img src="img/dotnet.png" alt=""  width="100" height="100"/> 

                        <i className="fas fa-code-branch" aria-hidden="true" />
                    </li>
                    <li>
                        API
                        <i className="fa fa-cogs" aria-hidden="true" />
                    </li>
                    <li>
                        React
                        <img src="img/react.png" alt="" width="100" height="100"/> 
                        <i className="fa fa-react" aria-hidden="true" />
                    </li>
                    <li>
                        Angular
                        <img src="img/angular.png" alt="" width="100" height="100"/> 
                        <i className="fa fa-angular" aria-hidden="true" />
                    </li>
                </div>
            </ul>
        </section>

    )
}

export default Expertise