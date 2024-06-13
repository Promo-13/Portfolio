import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Unlocking Efficiency and Flexibility</div>
					<p>In today's fast-paced digital landscape, businesses are constantly
						seeking ways to streamline operations and enhance productivity.
						One solution that has revolutionized the way organizations operate is
						cloud computing.By leveraging remote servers hosted on the internet to store, manage, and process data,
						cloud computing offers a myriad of benefits that propel businesses towards success.
						The benefits of cloud computing are undeniable.
						From cost-efficiency and scalability to enhanced security and agility,
						cloud services offer a transformative solution for businesses seeking to
						optimize their operations and drive growth in an increasingly digital world.
						By embracing cloud technology, organizations can unlock new opportunities,
						streamline processes, and stay ahead in today's dynamic business landscape.
					</p>

				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
		}
		`,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Revolutionizing Healthcare</div>
					<p>In recent years, artificial intelligence (AI) has emerged as a
						transformative force in various industries, and healthcare is no exception.
						With its ability to analyze vast amounts of data, identify patterns, and make
						predictions, AI is revolutionizing the way healthcare providers deliver
						services, diagnose diseases, and improve patient outcomes.The integration of
						artificial intelligence into healthcare holds immense promise for improving
						patient outcomes, enhancing the efficiency of healthcare delivery,
						and advancing medical research. As AI continues to evolve and mature,
						its impact on healthcare is poised to grow, ushering in a new era of
						personalized, data-driven medicine that benefits patients, healthcare providers,
						and society as a whole.
					</p>

				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
