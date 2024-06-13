import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./pda.jpeg"
								alt="pda"
								className="work-image"
							/>
							<div className="work-title">Personality Development Association</div>
							<div className="work-subtitle">
								Jnr. Web Developer
							</div>
							<div className="work-duration">Nov 2021 - Aug 2022</div>
						</div>

						<div className="work">
							<img
								src="./ITA_logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Information Technology Association</div>
							<div className="work-subtitle">
								Web Designer
							</div>
							<div className="work-duration">Aug 2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
